import { instance } from "../server.js";
import crypto from "crypto"

export const checkout = async (req, res) => {
  const { amount } = req.body;
  try {
    console.log(typeof amount); 
    const options = {
      amount: parseInt(amount * 100),
      currency: "INR",
    };

    const order = await instance.orders.create(options);
    console.log(order);
    res.status(200).json({
      success: true,
      order,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      error: "An error occurred during checkout.",
    });
  }
};



export const VerifyPayment = async (req, res) => {
  const { razorpay_order_id, razorpay_payment_id, razorpay_signature } = req.body;

const body = razorpay_order_id + "|" + razorpay_payment_id;

const expectedSignature = crypto
  .createHmac("sha256", process.env.RAZORPAY_APT_SECRET)
  .update(body.toString())
  .digest("hex");
  console.log("sig received", razorpay_signature)
  console.log("sig generated", expectedSignature)

  res.status(200).json({
    success: true,
  });
}