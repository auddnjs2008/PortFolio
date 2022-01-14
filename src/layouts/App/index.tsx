import BookDetailbox from "@components/BookDetailbox";
import Books from "@pages/Books";

import Home from "@pages/Home";
import LapTop from "@pages/LapTop";
import Profile from "@pages/Profile";
import Project from "@pages/Project";
import React from "react";
import { Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/laptop" element={<LapTop />}></Route>
      <Route path="/profile" element={<Profile />}></Route>
      <Route path="/books" element={<Books />}></Route>
      <Route path="/projects" element={<Project />}></Route>
      <Route path="/projects/:id" element={<BookDetailbox />}></Route>
    </Routes>
  );
};

export default App;
