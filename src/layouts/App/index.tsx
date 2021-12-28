import Home from "@pages/Home";
import LapTop from "@pages/LapTop";
import React from "react";
import { Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/laptop" element={<LapTop />}></Route>
    </Routes>
  );
};

export default App;
