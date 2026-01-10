import DashboardLayout from "../layout/DashboardLayout";
import { Typography, Paper } from "@mui/material";

export default function DcaPortal() {
  return (
    <DashboardLayout>
      <Typography variant="h4" fontWeight="bold">
        DCA Portal
      </Typography>
      <Paper sx={{ mt: 3, p: 3 }}>
        Assigned cases will appear here.
      </Paper>
    </DashboardLayout>
  );
}
