import express from "express";
import { config } from "dotenv";
import Razorpay from "razorpay";
import paymentRoute from "./routes/paymentRoutes.js";
import cors from "cors";

config({ path: "./config/config.env" });

const app = express();
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());   

export const instance = new Razorpay({
  key_id: process.env.RAZORPAY_API_KEY,
  key_secret: process.env.RAZORPAY_API_SECRET,
});

app.use("/api", paymentRoute);

//key
app.get("/api/getkey",(req,res)=>{
  res.status(200).json({key: [process.env.RAZORPAY_API_KEY]})
})


//Connection
app.listen(process.env.PORT, () => {
  console.log(`Server working on ${process.env.PORT}`);
});
