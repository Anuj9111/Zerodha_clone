import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import authRoute from "./routes/auth.route.js";
import Holding from "./model/HoldingsModel.js";
import Position from "./model/PositionModel.js";
import Order from "./model/OrderModel.js";
import cors from "cors";

dotenv.config();

const PORT = process.env.PORT || 3000;
const app = express();

// Configure CORS
const allowedOrigins = [
  "https://zerodha-clone-seven-flame.vercel.app",
  "https://zerodha-clone-tj5v.vercel.app",
  "http://localhost:5173",
  "http://localhost:5174",
  "http://localhost:3000",
  process.env.FRONTEND_URL,
  process.env.DASHBOARD_URL,
].filter(Boolean);

app.use(
  cors({
    origin: function (origin, callback) {
      if (!origin) return callback(null, true);
      if (
        allowedOrigins.includes(origin) ||
        origin.endsWith(".vercel.app") ||
        origin.endsWith(".onrender.com") ||
        origin.includes("localhost") ||
        process.env.NODE_ENV !== "production"
      ) {
        return callback(null, true);
      }
      return callback(null, true); // Allow all valid origins in deployment
    },
    methods: ["GET", "POST", "PUT", "DELETE", "PATCH", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization", "Cookie"],
    credentials: true,
  })
);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

// Auth routes
app.use("/", authRoute);

// Root healthcheck
app.get("/", (req, res) => {
  res.json({
    message: "Zerodha Backend is running",
    status: "OK",
    timestamp: new Date().toISOString(),
  });
});

// Holdings endpoints (supports both /allHoldings and /addHoldings)
const getHoldings = async (req, res) => {
  try {
    const allHoldings = await Holding.find({});
    res.json(allHoldings);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch holdings", error: error.message });
  }
};
app.get("/allHoldings", getHoldings);
app.get("/addHoldings", getHoldings);

// Positions endpoints (supports both /allPositions and /addPositions)
const getPositions = async (req, res) => {
  try {
    const allPositions = await Position.find({});
    res.json(allPositions);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch positions", error: error.message });
  }
};
app.get("/allPositions", getPositions);
app.get("/addPositions", getPositions);

// Order creation
app.post("/newOrder", async (req, res) => {
  try {
    if (!req.body || !req.body.name) {
      return res.status(400).json({ message: "Request body or stock name is missing" });
    }

    const newOrder = new Order({
      name: req.body.name,
      qty: Number(req.body.qty) || 1,
      price: Number(req.body.price) || 0,
      mode: req.body.mode || "BUY",
    });

    await newOrder.save();
    res.status(201).json({ message: "Order saved successfully", order: newOrder });
  } catch (error) {
    res.status(500).json({ message: "Failed to create order", error: error.message });
  }
});

// Orders list
app.get("/allOrders", async (req, res) => {
  try {
    const allOrders = await Order.find({});
    res.json(allOrders);
  } catch (error) {
    res.status(500).json({
      message: "Failed to fetch orders",
      error: error.message,
    });
  }
});

// Seed initial default data if DB is empty
const seedInitialData = async () => {
  try {
    const holdingsCount = await Holding.countDocuments();
    if (holdingsCount === 0) {
      const defaultHoldings = [
        { name: "TCS", qty: 2, avg: 538.05, price: 541.5, net: "+0.58%", day: "+2.99%" },
        { name: "HDFCBANK", qty: 4, avg: 1642.3, price: 1635.2, net: "-0.43%", day: "-1.08%" },
        { name: "ICICIBANK", qty: 6, avg: 1220.5, price: 1240.8, net: "+1.66%", day: "+0.94%" },
        { name: "SBIN", qty: 10, avg: 785.25, price: 798.6, net: "+1.70%", day: "+1.22%" },
        { name: "WIPRO", qty: 8, avg: 472.8, price: 468.3, net: "-0.95%", day: "-0.37%" },
        { name: "HCLTECH", qty: 4, avg: 1685.75, price: 1708.4, net: "+1.34%", day: "+0.69%" },
        { name: "INFY", qty: 5, avg: 1480.2, price: 1502.75, net: "+1.52%", day: "+0.83%" },
        { name: "RELIANCE", qty: 3, avg: 2865.4, price: 2898.15, net: "+1.14%", day: "-0.42%" },
      ];
      await Holding.insertMany(defaultHoldings);
      console.log(" Seeded initial Holdings data");
    }

    const positionsCount = await Position.countDocuments();
    if (positionsCount === 0) {
      const defaultPositions = [
        { product: "CNC", name: "EVEREADY", qty: 2, avg: 312.35, price: 315.2, net: "+0.57%", day: "-1.23%", isLoss: true },
        { product: "CNC", name: "TCS", qty: 5, avg: 3520.4, price: 3568.75, net: "+1.37%", day: "+0.84%", isLoss: false },
        { product: "MIS", name: "INFY", qty: 8, avg: 1485.6, price: 1472.3, net: "-0.89%", day: "-0.41%", isLoss: true },
        { product: "CNC", name: "RELIANCE", qty: 3, avg: 2890.25, price: 2912.8, net: "+0.78%", day: "+0.54%", isLoss: false },
        { product: "MIS", name: "HDFCBANK", qty: 6, avg: 1648.9, price: 1635.45, net: "-0.82%", day: "-0.95%", isLoss: true },
        { product: "CNC", name: "ICICIBANK", qty: 4, avg: 1225.75, price: 1242.3, net: "+1.35%", day: "+0.89%", isLoss: false },
        { product: "MIS", name: "SBIN", qty: 10, avg: 790.15, price: 785.6, net: "-0.58%", day: "-0.72%", isLoss: true },
        { product: "CNC", name: "HCLTECH", qty: 7, avg: 1710.5, price: 1738.9, net: "+1.66%", day: "+1.18%", isLoss: false },
      ];
      await Position.insertMany(defaultPositions);
      console.log(" Seeded initial Positions data");
    }
  } catch (err) {
    console.error("Auto-seeding error:", err);
  }
};

// Database connection & startup
if (process.env.MONGO_URI) {
  mongoose
    .connect(process.env.MONGO_URI)
    .then(() => {
      console.log("MongoDB Connected Successfully");
      seedInitialData();
    })
    .catch((err) => {
      console.error("MongoDB Connection Failed:", err);
    });
} else {
  console.warn("WARNING: MONGO_URI environment variable not set.");
}

app.listen(PORT, () => {
  console.log(`Backend server is running on port ${PORT}`);
});
