import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import Plot from "react-plotly.js";
import * as math from "mathjs";
import Navbar from "../Layouts/Navbar";
import { ReactComponent as Fx } from "../Files/svgs/fx.svg";
import { ReactComponent as Newton } from "../Files/svgs/newtonwhite.svg";
import FunctionsMenu from "../Layouts/FunctionsMenu";
import { images } from "../constants";

var Latex = require("react-latex");

const NewtonMethod = () => {
  const [data, setData] = useState({
    argument_1: "",
    argument_2: "x",
    argument_3: "",
  });

  const [answer, setAnswer] = useState(["0", "", ""]);
  const [isOpen, setIsOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [exp, setExp] = useState("");
  const [red, setRed] = useState(false);

  const handleInput = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    const re = /[@$#%!~`&{}"':;?><,\\]|[A-Z]/g;
    setRed(false);
    if (re.test(value)) {
      console.log("found errr");
      setRed(true);
    } else {
      setData((values) => ({ ...values, [name]: value }));
    }
    event.preventDefault();
  };
  let variable = "f(" + data.argument_2 + ")";
  const handleReset = (event) => {
    event.preventDefault();
    setData({ argument_1: "", argument_2: "x", argument_3: "" });
    setAnswer(["0", "", ""]);
    setSubmitted(false);
  };

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    axios.post("https://api-mathemagics.herokuapp.com/newtons-method/", data).then((res) => {
      setAnswer(res.data);
    });

    setSubmitted(true);
    setExp(data.argument_1);
  };
  console.log(answer);
  const expression = exp;
  const expr = math.compile(expression.replaceAll("**", "^"));
  const xValues = math
    .range(Number(answer[0]) - 25, Number(answer[0]) + 25, 0.0099)
    .toArray();
  const yValues = xValues.map(function (x) {
    return expr.evaluate({ x: x });
  });

  const expression2 = answer[1];
  console.log(answer[1]);
  const expr2 = math.compile(expression2.replaceAll("**", "^"));
  const xValues2 = math
    .range(Number(answer[0]) - 25, Number(answer[0]) + 25, 0.0099)
    .toArray();
  const yValues2 = xValues2.map(function (x) {
    return expr2.evaluate({ x: x });
  });

  const expression3 = answer[2];
  console.log(answer[2]);
  const expr3 = math.compile(expression3.replaceAll("**", "^"));
  const xValues3 = math
    .range(Number(answer[0]) - 25, Number(answer[0]) + 25, 0.0099)
    .toArray();
  const yValues3 = xValues3.map(function (x) {
    return expr3.evaluate({ x: x });
  });

  return (
    <div className="h-full flex flex-col text-dark bg-white dark:bg-dark dark:text-white flex-wrap">
      <Navbar toggle={toggle} />
      {isOpen ? <FunctionsMenu /> : ""}
      <div className="flex tablet:flex-col text-dark bg-white dark:bg-dark dark:text-white pt-20">
        <form onSubmit={handleSubmit}>
          <div className="justify-start ml-[114px] mt-6 drop-shadow-lg border-2 w-[554px] h-[672px] rounded-3xl  p-10 dark:bg-dark bg-bg dark:text-white text-black">
            <h2 className="text-center text-[30px] font-inter font-bold text-primary">
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
                className="flex rounded-xl dark:text-black text-text mb-10"
                id="searchbox"
              >
                <input
                  required
                  className={
                    red
                      ? "w-full p-4 border-2 dark:border-primary rounded-l-xl text-xl"
                      : "w-full p-4 border-2 dark:border-primary rounded-l-xl text-xl"
                  }
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
                className={
                  red
                    ? "w-full p-4 border-2  text-black dark:border-primary rounded-xl mb-10 text-xl bg-red-300"
                    : "w-full p-4 border-2  text-black dark:border-primary rounded-xl mb-10 text-xl"
                }
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
                className={
                  red
                    ? "w-full p-4 border-2  text-black dark:border-primary rounded-xl mb-10 text-xl bg-red-300"
                    : "w-full p-4 border-2  text-black dark:border-primary rounded-xl mb-10 text-xl"
                }
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
        <div className=" w-1/2 mr-20 flex flex-col text-tx dark:text-white tablet:w-full tablet:pl-16 tablet:pb-16">
          <p className="mt-[35px] ml-[300px] font-semibold text-[30px] flex">
            According to Newton's Method:
          </p>
          <Newton className="ml-[300px] mt-[47px] w-[500px] h-[200px]  fill-tx dark:fill-white" />
          <div className="flex mt-10 pt-10 ml-[300px] h-full w-full flex-row text-2xl tracking-wide">
            {!submitted ? (
              <img src={images.graphnw} className="w-[630px] h-[400px] mb-10" />
            ) : (
              <div>
                <p className="text-[28px] font-semibold text-tx dark:text-white">
                  The root of{" "}
                  {!data.argument_1
                    ? variable
                    : variable + " = " + data.argument_1}{" "}
                  equals to{" "}
                </p>

                <div className="ml-3 pt-4 pb-14 border-2 mt-[46px] font-normal rounded-xl text-3xl px-3 border-double border-green-600 h-10 dark:text-black bg-white text-tx">
                  {data.argument_2}=
                  {answer[0] !== "" ? answer[0] : "_____________"}
                </div>
                <Plot
                  className="mt-10 mb-10"
                  data={[
                    {
                      x: xValues,
                      y: yValues,
                      name: "Area",
                      type: "scatter",
                      mode: "lines",
                      marker: { color: "C595E9" },
                    },
                    {
                      x: xValues2,
                      y: yValues2,
                      name: "initial guess",
                      type: "scatter",
                      mode: "lines",
                      marker: { color: "6F46F3" },
                    },
                    {
                      name: "final guess",
                      x: xValues3,
                      y: yValues3,
                      type: "scatter",
                      mode: "lines",
                      marker: { color: "#17AAF3" },
                    },
                  ]}
                  layout={{
                    plot_bgcolor: "#F1F5FF", // f(x)
                    paper_bgcolor: "#F1F5FF", //B
                    width: 720,
                    height: 540,
                    title: "Newton Method",
                  }}
                />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewtonMethod;
