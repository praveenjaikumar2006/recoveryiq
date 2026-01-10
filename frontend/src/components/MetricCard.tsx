import { Card, Typography } from "@mui/material";
import { motion } from "framer-motion";

export default function MetricCard({ title, value }: any) {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      transition={{ type: "spring", stiffness: 200 }}
    >
      <Card
        sx={{
          p: 3,
          borderRadius: 4,
          boxShadow: "0 10px 30px rgba(0,0,0,0.1)"
        }}
      >
        <Typography variant="subtitle2" color="text.secondary">
          {title}
        </Typography>
        <Typography variant="h4" fontWeight="bold">
          {value}
        </Typography>
      </Card>
    </motion.div>
  );
}
