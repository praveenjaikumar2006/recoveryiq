import express from "express";
import { v4 as uuid } from "uuid";
import { predictCase } from "../services/aiService.js";

const router = express.Router();
const cases = [];

router.post("/", (req, res) => {
  const prediction = predictCase(req.body);

  const newCase = {
    id: uuid(),
    customerName: req.body.customerName,
    outstandingAmount: req.body.outstandingAmount,
    debtAge: req.body.debtAge,
    status: "ASSIGNED",
    priority: prediction.priorityScore,
    recoveryProbability: prediction.recoveryProbability
  };

  cases.push(newCase);
  res.json(newCase);
});

router.get("/", (req, res) => {
  res.json(cases);
});

export default router;
