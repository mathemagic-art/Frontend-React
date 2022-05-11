// import axios from "axios";
import React from "react";
import "./App.css";
import Home from "./Pages/Home";
import TEST_YOURSELF from "./Pages/TEST_YOURSELF";
import { Route, Routes } from "react-router-dom";
import NewtonMethod from "./Pages/NewtonMethod";
import CHEATSHEETS from "./Pages/CHEATSHEETS";
import AboutUs from "./Pages/AboutUs";
import ContactUs from "./Pages/ContactUs";
import DiffCalculator from "./Pages/DiffCalculator";
import LimitCalc from "./Pages/LimitCalc";
import TaylorCalc from "./Pages/TaylorCalc";
import SimpsonCalc from "./Pages/SimpsonCalc";
import TrapezoidCalc from "./Pages/TrapezoidCalc";
import RectangleCalc from "./Pages/RectangleCalc";
import IntegralCalc from "./Pages/IntegralCalc";
import LimitTest from "./Pages/Test Pages/LimitTest";
import IntegTest from "./Pages/Test Pages/IntegTest";
import DiffTest from "./Pages/Test Pages/DiffTest";

const App = () => {
  return (
    <Routes>
      <Route exact path="/" element={<Home />}></Route>
      <Route path="/testyourself" element={<TEST_YOURSELF />}></Route>
      <Route path="/newton" element={<NewtonMethod />}></Route>
      <Route path="/diff" element={<DiffCalculator />}></Route>
      <Route path="/limit" element={<LimitCalc />}></Route>
      <Route path="/taylor" element={<TaylorCalc />}></Route>
      <Route path="/simpson" element={<SimpsonCalc />}></Route>
      <Route path="/trapezoid" element={<TrapezoidCalc />}></Route>
      <Route path="/rectangle" element={<RectangleCalc />}></Route>
      <Route path="/integral" element={<IntegralCalc />}></Route>
      <Route path="/cheatsheets" element={<CHEATSHEETS />}></Route>
      <Route path="/aboutus" element={<AboutUs />}></Route>
      <Route path="/contuctus" element={<ContactUs />}></Route>
      <Route path="/testyourself/limittest" element={<LimitTest />}></Route>
      <Route path="/testyourself/integtest" element={<IntegTest />}></Route>
      <Route path="/testyourself/difftest" element={<DiffTest />}></Route>
    </Routes>
  );
};

export default App;
