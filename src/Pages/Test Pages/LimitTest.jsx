import React from "react";
import QuestionCard from "../../Components/QuestionCard";
import FunctionsMenu from "../../Layouts/FunctionsMenu";
import Navbar from "../../Layouts/Navbar";
import { ReactComponent as HeroBg } from "../../Files/svgs/HeroBG.svg";

const LimitTest = () => {
  return (
    <div className="bg-white h-full w-full dark:bg-dark dark:text-white text-dark">
      <Navbar />
      <FunctionsMenu />
      <QuestionCard />
    </div>
  );
};

export default LimitTest;
