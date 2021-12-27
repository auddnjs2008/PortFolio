import Home from "@pages/Home";
import React from "react";
import { Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
    </Routes>
  );
};

export default App;
