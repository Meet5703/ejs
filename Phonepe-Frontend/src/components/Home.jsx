/* eslint-disable no-unused-vars */
import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Home = () => {
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
      {/* Your existing form */}
      <form action="/pay" method="get">
        {/* Form content */}
      </form>

      {/* Links to navigate to payment and refund pages */}
      <Link to="/payment">Go to Payment</Link>
      <Link to="/refund">Go to Refund</Link>

      {/* Button to trigger payment API call */}
      <button onClick={handlePayment}>Make Payment</button>
    </div>
  );
};

export default Home;
