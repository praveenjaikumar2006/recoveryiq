const express = require("express");
const cors = require("cors");
const { v4: uuidv4 } = require("uuid");

const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(express.json());

// In-memory data store
let cases = [];

// AI priority logic
function calculatePriority(amount) {
  if (amount >= 1000000) return 90;
  if (amount >= 500000) return 70;
  return 40;
}

// Health check
app.get("/health", (req, res) => {
  res.json({ status: "UP", time: new Date().toISOString() });
});

// Get all cases
app.get("/api/cases", (req, res) => {
  res.json(cases);
});

// Create new case
app.post("/api/cases", (req, res) => {
  const { customerName, outstandingAmount } = req.body;

  if (!customerName || !outstandingAmount) {
    return res.status(400).json({
      error: "customerName and outstandingAmount are required"
    });
  }

  const priorityScore = calculatePriority(outstandingAmount);

  const newCase = {
    id: uuidv4(),
    customerName,
    outstandingAmount,
    recovered: 0,
    escalated: outstandingAmount > 800000,
    priorityScore,
    status: "OPEN",
    createdAt: new Date().toISOString()
  };

  cases.push(newCase);
  res.status(201).json(newCase);
});

// Start server
app.listen(PORT, () => {
  console.log(`🚀 RecoveryIQ Backend running on http://localhost:${PORT}`);
});
