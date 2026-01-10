import { Box } from "@mui/material";
import Sidebar from "./Sidebar";

export default function DashboardLayout({ children }: any) {
  return (
    <Box sx={{ display: "flex" }}>
      <Sidebar />
      <Box sx={{ ml: "240px", p: 4, width: "100%" }}>
        {children}
      </Box>
    </Box>
  );
}
