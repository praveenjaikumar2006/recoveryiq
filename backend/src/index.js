import express from "express";
import cors from "cors";
import caseRoutes from "./routes/cases.js";

const app = express();
app.use(cors());
app.use(express.json());

app.use("/api/cases", caseRoutes);

app.listen(5000, () => {
  console.log("Backend running on http://localhost:5000");
});
