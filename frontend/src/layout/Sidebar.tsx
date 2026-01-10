import { Box, List, ListItem, ListItemIcon, ListItemText } from "@mui/material";
import DashboardIcon from "@mui/icons-material/Dashboard";
import AssignmentIcon from "@mui/icons-material/Assignment";

export default function Sidebar() {
  return (
    <Box
      sx={{
        width: 240,
        height: "100vh",
        bgcolor: "#0f172a",
        color: "#fff",
        position: "fixed"
      }}
    >
      <Box sx={{ p: 3, fontSize: 22, fontWeight: "bold" }}>
        RecoveryIQ
      </Box>

      <List>
        <ListItem button>
          <ListItemIcon sx={{ color: "#38bdf8" }}>
            <DashboardIcon />
          </ListItemIcon>
          <ListItemText primary="Dashboard" />
        </ListItem>

        <ListItem button>
          <ListItemIcon sx={{ color: "#38bdf8" }}>
            <AssignmentIcon />
          </ListItemIcon>
          <ListItemText primary="Cases" />
        </ListItem>
      </List>
    </Box>
  );
}
