import React from "react";
import RouteItem from "../Components/RouteItem";

const FunctionsMenu = () => {
  return (
    <>
      <ul className="w-[30rem] h-full dark:bg-black bg-slate-300 text-dark font-primary bg-opacity-60 absolute left-0 top-24 z-10">
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
