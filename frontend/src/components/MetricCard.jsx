import { Card, CardContent, Typography } from "@mui/material";
import { motion } from "framer-motion";

export default function MetricCard({ title, value, delay }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay }}
      whileHover={{ y: -6 }}
    >
      <Card sx={{ borderRadius: 4 }}>
        <CardContent>
          <Typography variant="subtitle2" color="text.secondary">
            {title}
          </Typography>
          <Typography variant="h4" fontWeight="bold">
            {value}
          </Typography>
        </CardContent>
      </Card>
    </motion.div>
  );
}
