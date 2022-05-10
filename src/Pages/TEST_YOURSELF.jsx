import React from "react";
import FunctionsMenu from "../Layouts/FunctionsMenu";
import Navbar from "../Layouts/Navbar";
import { Link } from "react-router-dom";

const Test_Yourself = () => {
  return (
    <div
      className=" bg-white dark:bg-dark text-dark dark:text-white
    "
    >
      <Navbar />
      <FunctionsMenu />
      <div className="w-full m-auto">
        <h2 className="pl-[8%] text-4xl my-20 leading-snug ">
          Have a test coming up? <br />
          Refresh and upgrade your skills!
        </h2>
        <div className="pl-[12%] w-full m-auto grid grid-cols-3 gap-y-[10rem] py-10">
          <div className="bg-white shadow-lg dark:bg-white rounded-xl h-[25rem] w-[19.3rem] ">
            <p className="h-[87%]"></p>
            <Link
              to={"/testyourself/difftest"}
              className="w-full rounded-b-xl bg-primary text-2xl py-6 px-[3.4rem]"
            >
              DIFFERENTIATION
            </Link>
          </div>
          <div className="bg-white shadow-lg dark:bg-white rounded-xl h-[25rem] w-[19.3rem] ">
            <p className="h-[87%]"></p>
            <Link
              to={"/testyourself/integtest"}
              className="w-full rounded-b-xl bg-primary text-2xl py-6 px-[4.9rem]"
            >
              INTEGRATION
            </Link>
          </div>
          <div className="bg-white shadow-lg dark:bg-white rounded-xl h-[25rem] w-[19.3rem] ">
            <p className="h-[87%]"></p>
            <Link
              to={"/testyourself/limittest"}
              className="w-full rounded-b-xl bg-primary text-2xl py-6 px-[7.8rem]"
            >
              LIMIT
            </Link>
          </div>
        </div>
      </div>
      <div className="ml-[46%] pb-20 pt-32">
        <Link
          to={"/testyourself"}
          className="shadow-md border-2 rounded-sm bg-white text-dark py-2 px-3 mx-2"
        >
          1
        </Link>

        <Link
          to={"/"}
          className="shadow-md border-2 rounded-sm bg-slate-300 text-slate-400 py-2 px-3 mx-2"
        >
          2
        </Link>

        <Link
          to={"/"}
          className="shadow-md border-2 rounded-sm bg-slate-300 text-slate-400 py-2 px-3 mx-2"
        >
          3
        </Link>
      </div>
    </div>
  );
};

export default Test_Yourself;
