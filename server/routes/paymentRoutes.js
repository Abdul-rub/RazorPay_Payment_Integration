import express from "express"
import { VerifyPayment, checkout } from "../controller/paymentController.js";


const router = express.Router()

router.route("/checkout").post(checkout)

router.route("/verifypayment").post(VerifyPayment)

export default router;