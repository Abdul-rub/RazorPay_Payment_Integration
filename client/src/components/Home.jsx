import { Box, Stack } from '@chakra-ui/react';
import React from 'react';
import Card from './Card';
import axios from "axios";

const Home = () => {
  const handleCheckout = async (amount) => {
    const { data: { key } } = await axios.get("https://razorpay-integration.onrender.com/api/getkey");

    const { data: { order } } = await axios.post("https://razorpay-integration.onrender.com/api/checkout", {
      amount: amount,
    });

    const options = {
      key,
      amount: order.amount,
      currency: "INR",
      name: "Razorpay_Integration_Assignmnet",
      description: "Simple Razorpay Integration",
      image: "https://avatars.githubusercontent.com/u/70228714?s=400&u=e831da0977183e55eda8868ba6c80a7646e61dc8&v=4",
      order_id: order.id,
      callback_url: "https://razorpay-integration.onrender.com/api/verifypayment",
      prefill: {
        name: "Abdul Rub",
        email: "test01@example.com",
        contact: "12345677"
      },
      notes: {
        "address": "Razorpay Corporate Office"
      },
      theme: {
        "color": "#121212"
      }
    };

    const razor = new window.Razorpay(options);

    razor.on("payment.failed", function (response) {
      console.log(response.error);
    });

    razor.open();
  };

  return (
    <Box>
      <Stack h={"100vh"} alignItems="center" justifyContent="center" direction={["column", "row"]}>
        <Card amount={1} img={"https://images.unsplash.com/photo-1518051870910-a46e30d9db16?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1350&q=80"} handleCheckout={handleCheckout} />
        <Card amount={2} img={"https://images.unsplash.com/photo-1485965120184-e220f721d03e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"} handleCheckout={handleCheckout} />
      </Stack>
    </Box>
  );
};

export default Home;
