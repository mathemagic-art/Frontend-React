import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import Navbar from "../Layouts/Navbar";
import { ReactComponent as Fx } from "../Files/svgs/fx.svg";
import { ReactComponent as Newton } from "../Files/svgs/newtonwhite.svg";
import FunctionsMenu from "../Layouts/FunctionsMenu";
import Plot from "react-plotly.js";
import * as math from "mathjs";
import {images} from "../constants";
import {ReactComponent as Trapezoideq } from "../Files/svgs/Trapezoideq.svg"

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
    setSubmitted(false);
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
  const nRange = (data.argument_4 - data.argument_3) / data.argument_5;
  const expr = math.compile(expression.replaceAll("**", "^"));

  const xValues = math
    .range(data.argument_3, Number(data.argument_4) + 0.01, 0.0099)
    .toArray();
  const yValues = xValues.map(function (x) {
    return expr.evaluate({ x: x });
  });

  // roof
  const xValuesNterms = math
    .range(data.argument_3, Number(data.argument_4) + 0.01, nRange)
    .toArray();
  const yValuesNterms = xValuesNterms.map(function (x) {
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
        <div className=" w-1/2 mt-12 flex flex-col text-tx dark:text-white">
          {!submitted ? (
            <div className="mt-[98px] ml-[300px]">
              <p className="mb-10 font-semibold text-2xl flex">According to Trapezoidal Rule:</p>
              <Trapezoideq className="fill-tx dark:fill-white"/>
              <img src={images.graphtrap} />
            </div>
          ) : (
            <div className="flex flex-col mt-[98px] ml-[300px]">
              <p className="font-semibold text-2xl flex mb-10">
                According to Trapezoidal Rule
              </p>
              <Trapezoideq className="fill-tx dark:fill-white -ml-[230px] w-[800px] h-[300px]" />
              <div className="flex pt-10 mt-[30px] h-full w-full flex-col font-normal text-2xl tracking-wide">
                <p className="mb-5 text-tx dark:text-white font-semibold text-2xl">
                  The area under the curve equals to:
                </p>
                <div className="ml-3 pt-2 pb-10 mt-[16px] mr-auto border-2 font-normal rounded-xl text-3xl pl-3 pr-20 border-double border-green-600 h-5 text-tx dark:text-white">
                  {answer !== "" ? answer : ""}
                </div>
              </div>
            </div>
          )}



          <div className="rounded-2xl ml-[300px] -mt-10">
            {submitted ? (
              <Plot
                className="rounded-2xl"
                data={[
                  // roofs
                  {
                    x: xValuesNterms,
                    y: yValuesNterms,
                    fill: "tozeroy",
                    name: "Area",
                    // fillcolor: "6F46F3",
                    type: "scatter",
                    mode: "lines",
                    marker: { color: "6F46F3" },
                  },
                  {
                    x: xValues,
                    y: yValues,
                    name: expression,
                    type: "scatter",
                    mode: "lines",
                    marker: { color: "blue" },
                  },
                  {
                    type: "bar",
                    width: 0,
                    x: xValuesNterms,
                    y: yValuesNterms,
                    marker: { color: "blue" },
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
