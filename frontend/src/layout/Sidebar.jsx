import { Box, List, ListItem, Typography } from "@mui/material";

export default function Sidebar() {
  return (
    <Box
      sx={{
        width: 240,
        height: "100vh",
        position: "fixed",
        bgcolor: "#0f172a",
        color: "white",
        p: 3
      }}
    >
      <Typography fontSize={22} fontWeight="bold" mb={4}>
        RecoveryIQ
      </Typography>

      <List>
        {["Dashboard", "DCA Portal", "Analytics"].map(item => (
          <ListItem
            key={item}
            sx={{
              cursor: "pointer",
              borderRadius: 2,
              "&:hover": { bgcolor: "#1e293b" }
            }}
          >
            {item}
          </ListItem>
        ))}
      </List>
    </Box>
  );
}
