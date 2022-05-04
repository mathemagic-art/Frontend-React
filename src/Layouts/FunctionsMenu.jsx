import React, {useState} from "react";
import RouteItem from "../Components/RouteItem";

const FunctionsMenu = ({ isOpen }) => {
  

  const onStyle = "w-[30rem] backdrop-blur-sm h-full dark:bg-black bg-slate-300 text-black font-primary bg-opacity-60 absolute left-0 top-[13%] z-30"
  const offStyle = "-ml-[100%] w-[30rem] h-full dark:bg-black bg-slate-300 text-black font-primary bg-opacity-60 absolute left-0 top-[13%] z-10"

  return (
    <>
      <ul className={isOpen ? onStyle : offStyle}>
        <RouteItem text="Newton's Method Calculator" path="newton" />
        <RouteItem text="Derivative Calculator" path="diff" />
        <RouteItem text="Limit Calculator" path="limit" />
        <RouteItem text="Taylor Series Calculator" path="taylor" />
        <RouteItem text="Simpson's 1/3 Rule Calculator" path="simpson" />
        <RouteItem text="Trapezoidal Rule Calculator" path="trapezoid" />
        <RouteItem text="Midpoint Rule Calculator" path="rectangle" />
        <RouteItem text="Integral Calculator" path="integral" />
      </ul>
    </>
  );
};

export default FunctionsMenu;
