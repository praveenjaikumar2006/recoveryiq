import { Chip } from "@mui/material";

export default function PriorityBadge({ score }) {
  const color =
    score > 80 ? "error" :
    score > 60 ? "warning" :
    "success";

  return <Chip label={`AI Priority ${score}`} color={color} size="small" />;
}
