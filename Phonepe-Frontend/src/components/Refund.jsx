/* eslint-disable no-unused-vars */
import React from "react";
import axios from "axios";

const Refund = () => {
  const handleRefund = async () => {
    try {
      const response = await axios.get("/refund");
      console.log("Refund response:", response.data);
      // Add logic to handle the refund response as needed
    } catch (error) {
      console.error("Refund error:", error);
    }
  };

  return (
    <div>
      <h1>Refund Page</h1>
      {/* Additional Refund content */}
      <button onClick={handleRefund}>Request Refund</button>
    </div>
  );
};

export default Refund;
