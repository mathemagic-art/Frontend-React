import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import Navbar from "../Layouts/Navbar";
import { ReactComponent as Fx } from "../Files/svgs/fx.svg";
import { ReactComponent as Newton } from "../Files/svgs/newtonwhite.svg";
import FunctionsMenu from "../Layouts/FunctionsMenu";
import Plot from "react-plotly.js";
import * as math from "mathjs";

const TrapezoidCalc = () => {
  const [data, setData] = useState({
    argument_1: "",
    argument_2: "x",
    argument_3: "",
    argument_4: "",
    argument_5: "",
  });
  const [answer, setAnswer] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [exp, setExp] = useState("");

  const handleInput = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setData((values) => ({ ...values, [name]: value }));
  };

  const handleReset = (event) => {
    event.preventDefault();
    setData({
      argument_1: "",
      argument_2: "x",
      argument_3: "",
      argument_4: "",
      argument_5: "",
    });
    setAnswer("");
  };

  console.log(answer);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  const handleSubmit = (event) => {
    axios.post("trapezoid-method/", data).then((res) => {
      setAnswer(res.data);
    });
    setSubmitted(true);
    setExp(data.argument_1);
    event.preventDefault();
  };

  const expression = exp;
  const expr = math.compile(expression.replaceAll("**", "^"));
  const xValues = math.range(data.argument_3, data.argument_4, 1).toArray();
  const yValues = xValues.map(function (x) {
    return expr.evaluate({ x: x });
  });
  return (
    <>
      <Navbar toggle={toggle} />
      {isOpen ? <FunctionsMenu /> : ""}
      <div className="flex text-dark bg-white dark:bg-dark dark:text-white flex-wrap">
        <form onSubmit={handleSubmit}>
          <div className="mb[11.24px] ml-[114px] mt-[94px] border-2 w-[554px] h-[730px] drop-shadow-lg shadow-blur-4 shadow-spread-24 rounded-[30px] p-10 dark:bg-dark bg-bg dark:text-white text-black">
            <h2 className="text-center text-[30px] font-inter font-bold text-primary">
              Trapezoidal Rule Calculator
            </h2>
            <p className="text-center font-inter text-[12px] text-text mb-[33px]">
              Approximate the area under a curve by dividing in the trapezoids{" "}
            </p>
            <div>
              <label
                htmlFor="function"
                className="ml-2 dark:text-bright text-text text-[16px]"
              >
                Enter a function f(x)
              </label>
              <div
                className="flex rounded-l-[8px] dark:text-black text-black mb-[30px] "
                id="searchbox"
              >
                <input
                  required
                  className="w-[393px] h-[48px] p-4 border-2  dark:border-primary rounded-l-[8px] text-xl"
                  type="text"
                  id="function"
                  name="argument_1"
                  value={data.argument_1}
                  onChange={handleInput}
                />{" "}
                <button className="px-4 border-2 dark:border-primary rounded-r-[8px] w-[67px] h-[48px]">
                  <Fx className="dark:fill-white fill-tx w-[25px]" />
                </button>
              </div>
              <label
                htmlFor="intervals"
                className="ml-2 dark:text-bright text-text text-[16px]"
              >
                Number of Subintervals = n
              </label>
              <input
                optional
                type="text"
                id="argument_5"
                value={data.argument_5}
                name="argument_5"
                onChange={handleInput}
                className="w-[460px] h-[48px] p-4 border-2 text-black  dark:border-primary rounded-[8px] mb-[30px] text-xl"
              />
              <div>
                <div>
                  <label
                    htmlFor="lower-limit"
                    className="ml-2 dark:text-bright text-text text-[16px] "
                  >
                    Respect to
                  </label>
                  <input
                    required
                    type="text"
                    id="lower-limit"
                    name="argument_2"
                    value={data.argument_2}
                    onChange={handleInput}
                    className="w-[460px] h-[48px] p-4 border-2 text-black  dark:border-primary rounded-[8px] mb-[30px] text-xl"
                  />
                </div>
                <div className="flex flex-col">
                  <label
                    htmlFor="lower-limit"
                    className="ml-2 dark:text-bright text-text text-[16px] "
                  >
                    Lower Limit
                  </label>
                  <input
                    required
                    type="text"
                    id="lower-limit"
                    name="argument_3"
                    value={data.argument_3}
                    onChange={handleInput}
                    className="w-[460px] h-[48px] p-4 border-2 text-black  dark:border-primary rounded-[8px] mb-[30px] text-xl"
                  />
                </div>
                <div>
                  <label
                    htmlFor="upper-limit"
                    className="ml-2 dark:text-bright text-text text-[16px] "
                  >
                    Upper Limit
                  </label>
                  <input
                    required
                    type="text"
                    id="argument_4"
                    value={data.argument_4}
                    name="argument_4"
                    onChange={handleInput}
                    className="w-[460px] h-[48px] p-4 border-2 text-black  dark:border-primary rounded-[8px] mb-[30px] text-xl"
                  />
                </div>
              </div>
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
            Based on Trapezoid Rule's:
            <Newton className="fill-tx dark:fill-white ml-10 -mt-5" />
          </p>
          <div className="flex mt-10 ml-[300px] pt-10 h-full w-full flex-row font-normal text-2xl tracking-wide">
            <p>
              The answer for{" "}
              {!data.argument_1 ? "f(x)" : "f(x) = " + data.argument_1} is:{" "}
            </p>
            <div className="ml-3 pt-4 pb-14 border-2 font-normal rounded-xl text-3xl -mt-5 px-3 border-double border-green-600 h-10 text-tx dark:text-white">
              {answer !== "" ? answer : "_____________"}
            </div>
          </div>
          <div className="mt-20 rounded-2xl">
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
                  {
                    type: "bar",
                    x: data.argument_5,
                    y: yValues,
                    marker: { color: "red" },
                  },
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

export default TrapezoidCalc;
