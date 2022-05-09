import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import Navbar from "../Layouts/Navbar";
import { ReactComponent as Fx } from "../Files/svgs/fx.svg";
import { ReactComponent as Newton } from "../Files/svgs/newtonwhite.svg";
import FunctionsMenu from "../Layouts/FunctionsMenu";
import Plot from "react-plotly.js";
import * as math from "mathjs";
import numerical from "../Files/svgs/numerical.svg";
import { ReactComponent as Simpsons_eq} from "../Files/svgs/SimpsonsEq.svg"

const SimpsonCalc = () => {
  const [data, setData] = useState({
    argument_1: "",
    argument_2: "x",
    argument_3: "",
    argument_4: "",
  });
  const [answer, setAnswer] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [exp, setExp] = useState("");

  const handleInput = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setData((values) => ({ ...values, [name]: value }));
    event.preventDefault();
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
    setSubmitted(false);
  };

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  const handleSubmit = (event) => {
    axios.post("simpsons-method/", data).then((res) => {
      setAnswer(res.data);
    });
    setSubmitted(true);
    setExp(data.argument_1);
    event.preventDefault();
  };

  const expression = exp;
  const expr = math.compile(expression.replaceAll("**", "^"));
  const xValues = math.range(data.argument_3, data.argument_4, 0.5).toArray();
  const yValues = xValues.map(function (x) {
    return expr.evaluate({ x: x });
  });
  return (
    <>
      <Navbar toggle={toggle} />
      {isOpen ? <FunctionsMenu /> : ""}
      <div className="flex text-dark bg-white dark:bg-dark dark:text-white flex-wrap">
        <form onSubmit={handleSubmit}>
          <div className="mb[11.24px] ml-[114px] mt-[94px] border-2 w-[554px] h-[696px] drop-shadow-lg shadow-blur-4 shadow-spread-24 rounded-[30px] p-10 dark:bg-dark bg-bg dark:text-white text-black">
            <h2 className="text-center text-[30px] font-inter font-bold text-primary">
              Simpson's 1/3 Rule Calculator
            </h2>
            <p className="text-center font-inter text-[12px] text-text mb-[33px]">
              Approximate the value of a definite integral by using quadratic
              functions{" "}
            </p>
            <div>
              <label
                htmlFor="function"
                className="ml-2 dark:text-bright text-text text-[16px]"
              >
                Enter a function f(x)
              </label>
              <div
                className="flex rounded-l-[8px] dark:text-black text-black mb-[40px] "
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
                <button className="px-4 border-2 dark:border-primary rounded-r-[8px] w-[67px] h-[48px] ">
                  <Fx className="dark:fill-white fill-tx w-[25px]" />
                </button>
              </div>
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
                className="w-[460px] h-[48px] p-4 border-2 text-black  dark:border-primary rounded-[8px] mb-[40px] text-xl"
              />
              <label
                htmlFor="upper-limit"
                className="ml-2 dark:text-bright text-text text-[16px] "
              >
                Initial Point
              </label>
              <input
                required
                type="text"
                id="upper-limit"
                value={data.argument_3}
                name="argument_3"
                onChange={handleInput}
                className="w-[460px] h-[48px] p-4 border-2  text-black dark:border-primary rounded-[8px] mb-[40px] text-xl"
              />
              <label
                htmlFor="intervals"
                className="ml-2 dark:text-bright text-text text-[16px] "
              >
                End Point
              </label>
              <input
                optional
                type="text"
                id="intervals"
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
        <div className="w-1/2 mt-12 mr-20 flex flex-col text-tx dark:text-white justify-center">
          <p className="mt-[40px] ml-[300px] font-normal text-2xl flex">
            According to Simpson's 1/3 Rule's:
          </p>
          <div className="flex mt-10 ml-[300px] pt-10  flex-row font-normal text-2xl tracking-wide">
            {!submitted ?
              <Simpsons_eq className="fill-tx dark:fill-white"/>
             : (
              <div>
                <Simpsons_eq className="-mt-10 pb-20 fill-tx dark:fill-white" />
                <p className="-mt-10 pb-10">The area under the curve equals to: {" "}
                  {!data.equation ? "f(x)" : "f(x) = " + data.equation} is:{" "}
                </p>
                <div className="ml-3 pt-4 pb-14 border-2 font-normal rounded-xl text-3xl -mt-5 px-3 border-double bg-dark border-green-600 h-10 text-tx dark:text-white">
                  {answer !== "" ? answer : ""}
                </div>
              </div>
            )}
            
          </div>
          <div className="mt-20 ml-[300px]">
            {submitted ? (
              <Plot
                className="mt-10"
                data={[
                  {
                    x: xValues,
                    y: yValues,
                    type: "scatter",
                    mode: "lines",
                    marker: { color: "red" },
                  },
                  {
                    type: "bar",
                    x: xValues,
                    y: yValues,
                    marker: { color: "blue" },
                  },
                ]}
                layout={{
                  width: 720,
                  height: 540,
                  title: "Simpsons Rule Calculator",
                }}
              />
            ) : (
              <img src={numerical} className="" />
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default SimpsonCalc;
