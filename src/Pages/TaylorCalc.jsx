import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
// import MethodsCard from "../Components/MethodsCard";
import Navbar from "../Layouts/Navbar";
import { ReactComponent as Fx } from "../Files/svgs/fx.svg";
import { ReactComponent as Newton } from "../Files/svgs/newtonwhite.svg";
import FunctionsMenu from "../Layouts/FunctionsMenu";
import Plot from "react-plotly.js";
import * as math from "mathjs";

const TaylorCalc = () => {
  const [data, setData] = useState({
    argument_1: "",
    argument_2: "x",
    argument_3: "",
    argument_4: "",
  });
  const [answer, setAnswer] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [submitted, isSubmitting] = useState(false);
  const [exp, setExp] = useState("");

  const handleInput = (event) => {
    event.preventDefault();
    const name = event.target.name;
    const value = event.target.value;
    setData((values) => ({ ...values, [name]: value }));
  };

  console.log(data);

  const handleReset = (event) => {
    event.preventDefault();
    setData({
      argument_1: "",
      argument_2: "x",
      argument_3: "",
      argument_4: "",
    });
    setAnswer("");
  };

  console.log(answer);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  const handleSubmit = (event) => {
    axios.post("taylor-series/", data).then((res) => {
      setAnswer(res.data);
    });
    isSubmitting(true);
    setExp(data.argument_1);
    console.log(data);
    console.log(answer);
    event.preventDefault();
  };

  const expression = exp;
  const expr = math.compile(expression);

  const xValues = math.range(-50, 50, 1).toArray();
  const yValues = xValues.map(function (x) {
    return expr.evaluate({ x: x });
  });

  return (
    <>
      <Navbar toggle={toggle} />
      {isOpen ? <FunctionsMenu /> : ""}
      <div className="flex text-dark bg-white dark:bg-dark dark:text-white">
        <form onSubmit={handleSubmit}>
          <div className="mb[11.24px] ml-[114px] mt-[94px] border-2 w-[554px] h-[696px] drop-shadow-lg shadow-blur-4 shadow-spread-24 rounded-[30px] p-10 dark:bg-dark bg-bg dark:text-white text-black">
            <h2 className="text-center text-[30px] font-inter font-bold text-primary">
              Taylor Series Calculator
            </h2>
            <p className="text-center text-[12px] text-text mb-[40px] ">
              Approximate a function as a polynomial with an infinite number of
              terms{" "}
            </p>
            <div>
              <label htmlFor="function" className="ml-2 dark:text-bright text-text text-[16px] ">
                Enter a function f(x)
              </label>
              <div className="flex rounded-l-[8px] dark:text-black text-black mb-[40px] " id="searchbox">
                <input
                  required
                  className="w-[393px] h-[48px] p-4 border-2  dark:border-primary rounded-l-[8px] text-xl "
                  type="text"
                  id="function"
                  name="argument_1"
                  value={data.argument_1}
                  onChange={handleInput}
                />{" "}
                <button className="w-[67px] h-[48px] px-4 border-2 dark:border-primary rounded-r-[8px] ">
                  <Fx className="dark:fill-white fill-tx w-[25px]"/>
                </button>
              </div>
              <label htmlFor="point" className="ml-2 dark:text-bright text-text text-[16px] ">
                Respect to
              </label>
              <input
                required
                type="text"
                // id="figure"
                name="argument_2"
                onChange={handleInput}
                className="w-[460px] h-[48px] p-4 border-2 text-black  dark:border-primary rounded-[8px] mb-[40px] text-xl"
              />
              <label htmlFor="order" className="ml-2 dark:text-bright text-text text-[16px] ">
                Number of iterations
              </label>
              <input
                required
                type="text"
                id="order"
                value={data.argument_3}
                name="argument_3"
                onChange={handleInput}
                className="w-[460px] h-[48px] p-4 border-2  text-black dark:border-primary rounded-[8px] mb-[40px] text-xl"
              />
              <label htmlFor="error" className="ml-2 dark:text-bright text-text text-[16px] ">
                Centered at
              </label>
              <input
                optional
                type="text"
                id="error"
                value={data.argument_4}
                name="argument_4"
                onChange={handleInput}
                className="w-[460px] h-[48px] p-4 border-2  text-black dark:border-primary rounded-[8px] mb-[40px] text-xl"
              />
            </div>
            <div className=" flex justify-evenly">
              <button
                className="bg-primary text-white w-[116px] h-[48px] font-medium text-center text-[16px] rounded-[8px]"
                type="submit"
              >
                Magic!
              </button>
              <button
                className="bg-white dark:text-black text-primary border-primary  border-2  w-[116px] h-[48px] font-medium text-center text-lg rounded-[8px]"
                onClick={handleReset}
              >
                Reset!
              </button>
            </div>
          </div>
        </form>
        <div className=" w-1/2 mt-12 mr-20 flex flex-col text-tx dark:text-white">
          <p className="mt-[98px] ml-[300px] font-normal text-2xl flex">
            Based on Taylor Series Rule's:
            <Newton className="fill-tx dark:fill-white ml-10 -mt-5" />
          </p>
          <div className="flex mt-10 ml-[300px] pt-10 h-full w-full flex-row font-normal text-2xl tracking-wide">
            <p>
              The answer for{" "}
              {!data.argument_1 ? "f(x)" : "f(x) = " + data.argument_1} is:{" "}
            </p>
            <div className="ml-3 pt-4 pb-14 border-2 font-normal rounded-xl text-3xl -mt-5 px-3 border-double border-green-600 h-10 text-tx dark:text-white ">
              {answer !== "" ? answer : "_____________"}
            </div>
          </div>
          <div className="mt-20 ml-[300px] mb-28 rounded-2xl">
            {submitted ? (
              <Plot
                className="rounded-2xl"
                data={[
                  {
                    x: xValues,
                    y: yValues,
                    type: "scatter",
                    mode: "lines",
                    marker: { color: "blue" },
                  },
                  // { type: "bar", x: [1, 2, 3], y: [2, 5, 3] },
                ]}
                layout={{
                  width: 720,
                  height: 540,
                  title: "Taylor Series Calculator",
                }}
              />
            ) : (
              ""
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default TaylorCalc;
