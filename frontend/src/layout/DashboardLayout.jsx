import { Box } from "@mui/material";
import Sidebar from "./Sidebar";

export default function DashboardLayout({ children }) {
  return (
    <Box sx={{ display: "flex", minHeight: "100vh", bgcolor: "#f8fafc" }}>
      <Sidebar />
      <Box sx={{ flexGrow: 1, ml: "240px", p: 4 }}>
        {children}
      </Box>
    </Box>
  );
}
