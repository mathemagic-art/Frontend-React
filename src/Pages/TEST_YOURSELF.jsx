import React from "react";
import FunctionsMenu from "../Layouts/FunctionsMenu";
import Navbar from "../Layouts/Navbar";
import { Link } from "react-router-dom";
import { images } from "../constants";

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
        <div className="pl-[12%] w-full m-auto grid grid-cols-3 gap-y-[10rem] py-10 flex-wrap grid-flow-col">
          <div className="bg-white shadow-lg dark:bg-white rounded-[26px] h-[25rem] w-[19.3rem]">
            <img src={images.diffpic}/>
            <p className="h-[87%] -mt-[360px] w-full"></p>
            <Link
              to={"/testyourself/difftest"}
              className="w-full rounded-b-xl bg-primary text-2xl py-6 px-[3.67rem]"
            >
              DIFFERENTIATION
            </Link>
          </div>
          <div className="bg-white shadow-lg dark:bg-white rounded-[26px] h-[25rem] w-[19.3rem] ">
          <img src={images.integpic} className="rounded-xl"/>
            <p className="h-[87%] -mt-[360px]"></p>
            <Link
              to={"/testyourself/integtest"}
              className="w-full rounded-b-xl bg-primary text-2xl py-6 px-[5rem]"
            >
              INTEGRATION
            </Link>
          </div>
          <div className="bg-white shadow-lg dark:bg-white rounded-xl h-[25rem] w-[19.3rem] ">
          <img src={images.limitpic}/>
            <p className="h-[87%] -mt-[370px]"></p>
            <Link
              to={"/testyourself/limittest"}
              className="w-full rounded-b-xl bg-primary text-2xl py-6 px-[7.86rem]"
            >
              LIMIT
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Test_Yourself;
