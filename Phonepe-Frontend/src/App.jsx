/* eslint-disable no-unused-vars */
// App.jsx
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Payment from "./components/Payment";
import Refund from "./components/Refund";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/refund" element={<Refund />} />
      </Routes>
    </Router>
  );
};

export default App;
