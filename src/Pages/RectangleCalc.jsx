import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import Navbar from "../Layouts/Navbar";
import { ReactComponent as Fx } from "../Files/svgs/fx.svg";
import { ReactComponent as Rectangle } from "../Files/svgs/Rectangle.svg";
import FunctionsMenu from "../Layouts/FunctionsMenu";
import * as math from "mathjs";
import Plot from "react-plotly.js";
import numerical from "../Files/svgs/numerical.svg";
import images from "../constants/images";


const RectangleCalc = () => {
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

  console.log(data);

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
    axios.post("rectangle-method/", data).then((res) => {
      setAnswer(res.data);
    });
    setSubmitted(true);
    setExp(data.argument_1);
    event.preventDefault();
  };

  const expression = exp;
  const nRange = (data.argument_4 - data.argument_3) / data.argument_5;
  
  const expr = math.compile(expression.replaceAll("**", "^"));
  const xValues = math.range(data.argument_3, Number(data.argument_4) + 0.0001, 0.01).toArray();
  const yValues = xValues.map(function (x) {
    return expr.evaluate({ x: x });
  });
  const xValuesNterms = math.range(data.argument_3, Number(data.argument_4) + 0.01, nRange).toArray();
  const xWidth = xValuesNterms.map(function (x) {
    return 0
  })
  const yValuesNterms = xValuesNterms.map(function (x) {
    return expr.evaluate({ x: x });
  });
  
  // const yValuesNterms = xValuesNterms.map(function (x) {
  //   return expr.evaluate({ x: x });
  // });

  return (
    <>
      <Navbar toggle={toggle} />
      {isOpen ? <FunctionsMenu /> : ""}
      <div className="flex text-dark bg-white dark:bg-dark dark:text-white flex-wrap">
        <form onSubmit={handleSubmit}>
          <div className="mb[11.24px] ml-[114px] mt-[94px] border-2 w-[554px] h-[730px] drop-shadow-lg shadow-blur-4 shadow-spread-24 rounded-[30px] p-10 dark:bg-dark bg-bg dark:text-white text-black">
            <h2 className="text-center text-[30px] font-inter font-bold text-primary">
              Rectangle Rule Calculator
            </h2>
            <p className="text-center font-inter text-[12px] text-text mb-[33px]">
              Approximate the area under a simple curve{" "}
            </p>
            <div>
              <label
                htmlFor="function"
                className="ml-2 dark:text-bright text-text text-[16px]"
              >
                Enter a function f(x)
              </label>
              <div className="flex rounded-l-[8px] dark:text-black text-black mb-[30px]">
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
                htmlFor="variable"
                className="ml-2 dark:text-bright text-text text-[16px]"
              >
                Respect to
              </label>
              <input
                required
                type="text"
                id="variable"
                name="argument_2"
                value={data.argument_2}
                onChange={handleInput}
                className="w-[460px] h-[48px] p-4 border-2 text-black  dark:border-primary rounded-[8px] mb-[30px] text-xl"
              />
              <label
                htmlFor="lower-limit"
                className="dark:text-bright text-text text-[16px]"
              >
                Lower Limit = α
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
              <label
                htmlFor="upper-limit"
                className="ml-2 dark:text-bright text-text text-[16px] "
              >
                Upper Limit = β
              </label>
              <input
                required
                type="text"
                id="upper-limit"
                value={data.argument_4}
                name="argument_4"
                onChange={handleInput}
                className="w-[460px] h-[48px] p-4 border-2 text-black  dark:border-primary rounded-[8px] mb-[30px] text-xl"
              />
              <label
                htmlFor="intervals"
                className="ml-2 dark:text-bright text-text text-[16px] "
              >
                Number of Subintervals = n
              </label>
              <input
                optional
                type="text"
                id="intervals"
                value={data.argument_5}
                name="argument_5"
                onChange={handleInput}
                className="w-[460px] h-[48px] p-4 border-2 text-black  dark:border-primary rounded-[8px] mb-[30px] text-xl"
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
        <div className=" w-1/2 mt-12 mr-20 flex flex-col  text-tx dark:text-white">
          {!submitted ? (
            <div className="flex flex-col ml-[300px]  text-tx dark:text-white">
              <p className="mt-[98px] font-semibold text-2xl">
               According to Rectangle Rule's:
              </p>
              <Rectangle className="fill-tx dark:fill-white mt-10" />
              <img src={images.rectangle} className="mt-[60px]" />
            </div>
          ) : (
            <div>
              <p className="mt-[98px] ml-[300px] font-semibold text-2xl flex mb-10">
                According to Rectangle Rule's:
              </p>
              <Rectangle className="fill-tx dark:fill-white mt-10 ml-[300px]" />

              <div className="flex mt-10 ml-[300px] pt-10 h-full w-full flex-col font-normal text-2xl tracking-wide">
                <p className="mb-5 text-tx dark:text-white font-semibold text-2xl">
                  The area under the curve equals to:
                </p>
                <div className="ml-3 pt-2 pb-10 border-2 mr-auto font-normal rounded-xl text-3xl mt-[35px] pl-3 pr-20 border-double border-green-600 h-10 text-tx dark:text-white">
                  {answer !== "" ? answer : ""}
                </div>
              </div>
            </div>
          )}
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
                    x: xValuesNterms,
                    y: yValuesNterms,
                    marker: { color: "blue" },
                    width: nRange ,
                  },
                ]}
                layout={{
                  width: 720,
                  height: 540,
                  title: "Simpsons Rule Calculator",
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

export default RectangleCalc;
