import React from "react";

import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import Calender from "./components/Calender/Calender";
const App = () => {
  return (
    <div>
      <Navbar />
      <Home />

      <Routes>
        <Route path="/Cale" element={<Calender />} />
      </Routes>
    </div>
  );
};

export default App;
