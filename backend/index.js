import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import authRoute from "./routes/auth.route.js"
import Holding from "./model/HoldingsModel.js";
import Position from "./model/PositionModel.js"
import Order from "./model/OrderModel.js"
import bodyParser from "body-parser";
import cors from "cors";

dotenv.config();

const PORT = process.env.PORT || 3000;

const app = express();
// app.use(cors());
app.use(express.json());
app.use(
  cors({
    origin: ["http://localhost:5173","http://localhost:5174",],
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.use("/",authRoute);


mongoose
  .connect(process.env.MONGO_URI,{
    
  })
  .then(() => {
    console.log(" MongoDB Connected");
  })
  .catch((err) => {
    console.error(" MongoDB Connection Failed");
    console.log(" Connection Error:", err);
  });

// app.get("/addPositions", async (req, res) => {
//   let tempPositions = [
//   {
//     product: "CNC",
//     name: "EVEREADY",
//     qty: 2,
//     avg: 312.35,
//     price: 315.20,
//     net: "+0.57%",
//     day: "-1.23%",
//     isLoss: true,
//   },
//   {
//     product: "CNC",
//     name: "TCS",
//     qty: 5,
//     avg: 3520.40,
//     price: 3568.75,
//     net: "+1.37%",
//     day: "+0.84%",
//     isLoss: false,
//   },
//   {
//     product: "MIS",
//     name: "INFY",
//     qty: 8,
//     avg: 1485.60,
//     price: 1472.30,
//     net: "-0.89%",
//     day: "-0.41%",
//     isLoss: true,
//   },
//   {
//     product: "CNC",
//     name: "RELIANCE",
//     qty: 3,
//     avg: 2890.25,
//     price: 2912.80,
//     net: "+0.78%",
//     day: "+0.54%",
//     isLoss: false,
//   },
//   {
//     product: "MIS",
//     name: "HDFCBANK",
//     qty: 6,
//     avg: 1648.90,
//     price: 1635.45,
//     net: "-0.82%",
//     day: "-0.95%",
//     isLoss: true,
//   },
//   {
//     product: "CNC",
//     name: "ICICIBANK",
//     qty: 4,
//     avg: 1225.75,
//     price: 1242.30,
//     net: "+1.35%",
//     day: "+0.89%",
//     isLoss: false,
//   },
//   {
//     product: "MIS",
//     name: "SBIN",
//     qty: 10,
//     avg: 790.15,
//     price: 785.60,
//     net: "-0.58%",
//     day: "-0.72%",
//     isLoss: true,
//   },
//   {
//     product: "CNC",
//     name: "HCLTECH",
//     qty: 7,
//     avg: 1710.50,
//     price: 1738.90,
//     net: "+1.66%",
//     day: "+1.18%",
//     isLoss: false,
//   },
// ];

// tempPositions.forEach((item)=>{
//   let newPosition = new Position({
//     product:item.product,
//     name:item.name,
//     qty:item.qty,
//     avg: item.avg,
//     price: item.price,
//     net: item.avg,
//     day: item.day,
//     isLoss: item.isLoss,

//   });
//   newPosition.save();
// })


  

  
//   res.send("Done!");
// });

// app.ge  
app.get("/", (req, res) => {
    res.json({
        message: "Backend is running",
        status: "OK"
    });
});
app.get('/addHoldings',async(req,res)=>{
  let allHoldings = await Holding.find({});
  res.json(allHoldings);

})

app.get('/addPositions',async(req,res)=>{
  let allPositions = await Position.find({});
  res.json(allPositions);

})

app.post("/newOrder", async (req, res) => {
  console.log("Headers:", req.headers);
  console.log("Body:", req.body);

  if (!req.body) {
    return res.status(400).json({ message: "Request body is missing" });
  }

  const newOrder = new Order({
    name: req.body.name,
    qty: req.body.qty,
    price: req.body.price,
    mode: req.body.mode,
  });

  await newOrder.save();

  res.send("Order saved");
});

app.get("/allOrders", async (req, res) => {
  try {
    const allOrders = await Order.find({});
    res.json(allOrders);
  } catch (error) {
    res.status(500).json({
      message: "Failed to fetch orders",
    });
  }
});

app.listen(PORT, () => {
  console.log(`App is listening to the port ${PORT}`);
});
