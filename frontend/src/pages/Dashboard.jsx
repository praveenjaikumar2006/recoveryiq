import { Typography, Grid, Button } from "@mui/material";
import { useEffect, useState } from "react";
import DashboardLayout from "../layout/DashboardLayout";
import MetricCard from "../components/MetricCard";
import CaseChart from "../components/CaseChart";
import CreateCaseModal from "../components/CreateCaseModal";
import { api } from "../api";

export default function Dashboard({ toggleTheme }) {
  const [cases, setCases] = useState([]);
  const [open, setOpen] = useState(false);

  const loadCases = async () => {
    const res = await api.get("/cases");
    setCases(res.data);
  };

  useEffect(() => {
    loadCases();
  }, []);

  const metrics = [
    { title: "Total Cases", value: cases.length },
    { title: "High Priority", value: cases.filter(c => c.priorityScore > 70).length },
    { title: "Recovered", value: "₹1.2M" },
    { title: "Escalations", value: cases.filter(c => c.escalated).length }
  ];

  return (
    <DashboardLayout>
      <Button onClick={toggleTheme} sx={{ mb: 2 }}>
        Toggle Theme
      </Button>

      <Button variant="contained" sx={{ mb: 3, ml: 2 }} onClick={() => setOpen(true)}>
        + Create Case
      </Button>

      <CreateCaseModal open={open} onClose={() => setOpen(false)} onCreated={loadCases} />

      <Typography variant="h4" fontWeight="bold" mb={4}>
        Recovery Dashboard
      </Typography>

      <Grid container spacing={3}>
        {metrics.map((m, i) => (
          <Grid item xs={12} sm={6} md={3} key={m.title}>
            <MetricCard {...m} delay={i * 0.1} />
          </Grid>
        ))}
      </Grid>

      <CaseChart />
    </DashboardLayout>
  );
}
