import {
  LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer
} from "recharts";
import { Paper, Typography } from "@mui/material";

const data = [
  { day: "Mon", value: 20 },
  { day: "Tue", value: 40 },
  { day: "Wed", value: 35 },
  { day: "Thu", value: 60 },
  { day: "Fri", value: 80 }
];

export default function CaseChart() {
  return (
    <Paper sx={{ mt: 4, p: 3, borderRadius: 4 }}>
      <Typography fontWeight="bold" mb={2}>
        Weekly Recovery Trend
      </Typography>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={data}>
          <XAxis dataKey="day" />
          <YAxis />
          <Tooltip />
          <Line dataKey="value" stroke="#2563eb" strokeWidth={3} dot={false} />
        </LineChart>
      </ResponsiveContainer>
    </Paper>
  );
}
