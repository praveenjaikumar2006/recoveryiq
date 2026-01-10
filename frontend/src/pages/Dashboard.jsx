import { Box, Typography, Grid, Card, CardContent } from "@mui/material";

export default function Dashboard() {
  return (
    <Box p={3}>
      <Typography variant="h4" fontWeight="bold" gutterBottom>
        Recovery Dashboard
      </Typography>

      <Grid container spacing={3}>
        {[
          { label: "Total Cases", value: 12 },
          { label: "High Priority", value: 4 },
          { label: "Recovered", value: "₹1.2M" },
          { label: "Escalations", value: 2 }
        ].map((item, i) => (
          <Grid item xs={12} sm={6} md={3} key={i}>
            <Card>
              <CardContent>
                <Typography variant="subtitle2">{item.label}</Typography>
                <Typography variant="h5" fontWeight="bold">
                  {item.value}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
