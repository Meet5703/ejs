/* eslint-disable no-unused-vars */
import React from "react";
import axios from "axios";

const Payment = () => {
  const handlePayment = async () => {
    try {
      const response = await axios.get("https://tst-7e6r.onrender.com/pay");
      console.log("Payment response:", response.data);
      // Add logic to handle the payment response as needed
    } catch (error) {
      console.error("Payment error:", error);
    }
  };

  return (
    <div>
      <h1>Payment Page</h1>
      {/* Additional Payment content */}
      <button onClick={handlePayment}>Make Payment</button>
    </div>
  );
};

export default Payment;
