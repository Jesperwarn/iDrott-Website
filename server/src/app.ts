import express from "express";
import cors from "cors";

const app = express();
const PORT = 8000;

// Enable CORS so the frontend on localhost:5173 can access the backend
app.use(cors());

// Dummy data for testing
const events = [
  {
    id: "gjaiotjmg-falsf",
    title: "Workshop",
    description: "BLABLABLABLALBLABLALBLAB",
    startTime: "20:30",
    endTime: "23:00",
    startDate: {
        day: 5,
        month: "March",
        monthCut: "Mar",
        year: 2025
    },
    endDate: {
        day: 5,
        month: "March",
        monthCut: "Mar",
        year: 2025
    }
  },
  {
    id: "blue",
    title: "Work",
    description: "BLA",
    startTime: "20:34",
    endTime: "21:00",
    startDate: {
        day: 6,
        month: "March",
        monthCut: "Mar",
        year: 2023
    },
    endDate: {
        day: 5,
        month: "March",
        monthCut: "Mar",
        year: 2024
    }
  }
];

// Define API route
app.get("/api/events", (req, res) => {
  res.json(events);
});

// Start server
app.listen(PORT, () => {
  console.log(`✅ Backend is running at http://localhost:${PORT}`);
});
