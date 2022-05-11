import React, { useState, useRef, useEffect } from "react";
import RouteItem from "../Components/RouteItem";

const FunctionsMenu = ({ isOpen }) => {
  const [openSlide, setopenSlide] = useState("");
  const catMenu = useRef(null);

  useEffect(() => {
    if (isOpen) {
      setopenSlide(true);
    }
  }, [isOpen]);
  const onStyle =
    "w-[30rem] backdrop-blur-sm h-full dark:bg-dark bg-slate-300 text-black font-primary dark:bg-opacity-60 bg-opacity-60 absolute left-0 mt-12 z-40";
  const offStyle =
    "-ml-[100%] w-[30rem] h-full dark:bg-black bg-slate-300 text-black font-primary bg-opacity-60 absolute left-0 top-[0] z-20";
  const closeOpenMenus = (e) => {
    if (catMenu.current && openSlide && !catMenu.current.contains(e.target)) {
      setopenSlide(false);
    }
  };
  document.addEventListener("mousedown", closeOpenMenus);
  return (
    <>
      <ul className={isOpen && openSlide ? onStyle : offStyle} ref={catMenu}>
        <RouteItem text="Newton's Method Calculator" path="newton" />
        <RouteItem text="Derivative Calculator" path="derivative" />
        <RouteItem text="Limit Calculator" path="limit" />
        <RouteItem text="Taylor Series Calculator" path="taylor" />
        <RouteItem text="Simpson's Rule Calculator" path="simpson" />
        <RouteItem text="Trapezoidal Rule Calculator" path="trapezoid" />
        <RouteItem text="Midpoint Rule Calculator" path="midpoint" />
        <RouteItem text="Integral Calculator" path="integral" />
      </ul>
    </>
  );
};

export default FunctionsMenu;
