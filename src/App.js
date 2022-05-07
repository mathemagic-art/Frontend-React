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

const App = () => {
  return (
    <Routes>
      <Route exact path="/" element={<Home />}></Route>
      <Route path="/TESTYOURSELF" element={<TEST_YOURSELF />}></Route>
      <Route path="/newton" element={<NewtonMethod />}></Route>
      <Route path="/diff" element={<DiffCalculator />}></Route>
      <Route path="/limit" element={<LimitCalc />}></Route>
      <Route path="/taylor" element={<TaylorCalc />}></Route>
      <Route path="/simpson" element={<SimpsonCalc />}></Route>
      <Route path="/trapezoid" element={<TrapezoidCalc />}></Route>
      <Route path="/rectangle" element={<RectangleCalc />}></Route>
      <Route path="/integral" element={<IntegralCalc />}></Route>
      <Route path="/CHEATSHEETS" element={<CHEATSHEETS />}></Route>
      <Route path="/AboutUs" element={<AboutUs />}></Route>
      <Route path="/CONTACTUS" element={<ContactUs />}></Route>
      <Route path="/TESTYOURSELF/LIMITTEST" element={<LimitTest />}></Route>
    </Routes>
  );
};

export default App;
