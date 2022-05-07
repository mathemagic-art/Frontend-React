import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";

import Navbar from "../Layouts/Navbar";
import { ReactComponent as Fx } from "../Files/svgs/fx.svg";
import { ReactComponent as Newton } from "../Files/svgs/newtonwhite.svg";
import FunctionsMenu from "../Layouts/FunctionsMenu";
var Latex = require("react-latex");


const NewtonMethod = () => {
  const [data, setData] = useState({
    argument_1: "",
    argument_2: "x",
    argument_3: "",
  });

  const [answer, setAnswer] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  const handleInput = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setData((values) => ({ ...values, [name]: value }));
  };
  let variable = "f(" + data.argument_2 + ")";
  const handleReset = (event) => {
    event.preventDefault();
    setData({ argument_1: "", argument_2: "x", argument_3: "" });
    setAnswer("");
  };

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  const handleSubmit = (event) => {
    axios.post("newtons-method/", data).then((res) => {
      setAnswer(res.data);
    });
    console.log(data);
    console.log(answer);
    event.preventDefault();
  };
  return (
    <div className="h-full flex flex-col text-dark bg-white dark:bg-dark dark:text-white">
      <Navbar toggle={toggle} />
      {isOpen ? <FunctionsMenu /> : ""}
      <div className="flex tablet:flex-col text-dark bg-white dark:bg-dark dark:text-white pt-20">
        <form onSubmit={handleSubmit}>
          <div className="justify-start ml-[114px] mt-8 shadow- border-2 w-[554px] h-[672px] rounded-3xl  p-10 dark:bg-dark bg-bg dark:text-white text-black">
            <h2 className="text-center text-3xl font-primary text-primary">
              Newton's Method Calculator
            </h2>
            <p className="text-center text-text mb-10">
              Finds the roots of the equation f(x)=0{" "}
            </p>
            <div>
              <label
                htmlFor="function"
                className="ml-2 dark:text-bright text-text "
              >
                Enter a function f(x)
              </label>
              <div
                className="flex rounded-xl dark:text-bright text-text mb-10"
                id="searchbox"
              >
                <input
                  required
                  className="w-full p-4 border-2  dark:border-primary rounded-l-xl text-xl"
                  type="text"
                  name="argument_1"
                  value={data.argument_1}
                  onChange={handleInput}
                />{" "}
                <button className="px-4 border-2 dark:border-primary rounded-r-xl ">
                  <Fx className="dark:fill-white fill-tx " />
                </button>
              </div>
              <label
                htmlFor="respect"
                className="ml-2  dark:text-bright text-text"
              >
                With Respect to
              </label>
              <input
                name="argument_2"
                id="respect"
                value={data.argument_2}
                onChange={handleInput}
                className="w-full p-4 border-2  text-black dark:border-primary rounded-xl mb-10 text-xl"
              />

              <label
                htmlFor="iterations"
                className="ml-2  dark:text-bright text-text"
              >
                Number of Iterations
              </label>
              <input
                required
                type="text"
                id="iterations"
                name="argument_3"
                value={data.argument_3}
                onChange={handleInput}
                className="w-full p-4 border-2 text-black  dark:border-primary rounded-xl mb-10 text-xl"
              />
            </div>
            <div className=" flex justify-evenly">
              <button
                className="bg-primary text-white px-6 py-2 text-center text-lg rounded-md"
                type="submit"
              >
                Magic!
              </button>
              <button
                className="bg-white dark:text-black text-primary border-primary border-2 border-double px-6 py-2 text-center text-lg rounded-md"
                onClick={handleReset}
              >
                Reset!
              </button>
            </div>
          </div>
        </form>
        <div className=" w-1/2 mt-12 mr-20 flex flex-col text-tx dark:text-white tablet:w-full tablet:pl-16 tablet:pb-16">
          <p className="mt-12 ml-[350px] font-semi-bold text-[28px] flex">
            According to Newton's Method:
            <Newton className="ml-10 -mt-5  fill-tx dark:fill-white" />
          </p>
          <div className="flex mt-10 pt-10 ml-[350px] h-full w-full flex-row text-2xl tracking-wide">
            <p className="text-[28px] font-semi-bold text-tx dark:text-white">
              The root of {" "}
              {!data.argument_1 ? variable : variable + " = " + data.argument_1}{" "}
              equals to{" "}
            </p>
            <div className="ml-3 pt-4 pb-14 border-2 font-normal rounded-xl text-3xl -mt-5 px-3 border-double border-green-600 h-10 bg-white text-">
              {data.argument_2}=
              {answer !== "" ? answer : "_____________"}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewtonMethod;
