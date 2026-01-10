import {
  Table, TableBody, TableCell, TableHead,
  TableRow, Chip, Paper
} from "@mui/material";

export default function CaseTable({ cases }: any) {
  return (
    <Paper sx={{ mt: 4, borderRadius: 4 }}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Customer</TableCell>
            <TableCell>Amount</TableCell>
            <TableCell>Priority</TableCell>
            <TableCell>Status</TableCell>
          </TableRow>
        </TableHead>

        <TableBody>
          {cases.map((c: any) => (
            <TableRow key={c.id}>
              <TableCell>{c.customerName}</TableCell>
              <TableCell>₹{c.outstandingAmount}</TableCell>
              <TableCell>
                <Chip
                  label={c.priority}
                  color={c.priority > 70 ? "error" : "warning"}
                />
              </TableCell>
              <TableCell>{c.status}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Paper>
  );
}
