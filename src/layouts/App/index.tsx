import BookDetailbox from "@components/BookDetailbox";
import BookProjects from "@components/BookProjects";
import Home from "@pages/Home";
import LapTop from "@pages/LapTop";
import React from "react";
import { Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/laptop" element={<LapTop />}></Route>
      <Route path="/projects" element={<BookProjects />}></Route>
      <Route path="/projects/:id" element={<BookDetailbox />}></Route>
    </Routes>
  );
};

export default App;
