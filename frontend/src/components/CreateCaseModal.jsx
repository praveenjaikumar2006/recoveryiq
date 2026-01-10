import {
  Dialog, DialogTitle, DialogContent,
  TextField, Button, Stack
} from "@mui/material";
import { useState } from "react";
import { api } from "../api";

export default function CreateCaseModal({ open, onClose, onCreated }) {
  const [customerName, setCustomerName] = useState("");
  const [amount, setAmount] = useState("");

  const submit = async () => {
    await api.post("/cases", {
      customerName,
      outstandingAmount: Number(amount)
    });
    onCreated();
    onClose();
  };

  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>Create Case</DialogTitle>
      <DialogContent>
        <Stack spacing={2} mt={1}>
          <TextField label="Customer Name" onChange={e => setCustomerName(e.target.value)} />
          <TextField label="Outstanding Amount" type="number" onChange={e => setAmount(e.target.value)} />
          <Button variant="contained" onClick={submit}>
            Create
          </Button>
        </Stack>
      </DialogContent>
    </Dialog>
  );
}
