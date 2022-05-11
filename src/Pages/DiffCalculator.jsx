import axios from "axios";
import React, { useState } from "react";
import Navbar from "../Layouts/Navbar";
import { ReactComponent as Fx } from "../Files/svgs/fx.svg";
import { ReactComponent as Newton } from "../Files/svgs/newtonwhite.svg";
import { ReactComponent as X2 } from "../Files/svgs/xSquare.svg";
import FunctionsMenu from "../Layouts/FunctionsMenu";
import { BlockMath } from "react-katex";
import { images } from "../constants";

const DiffCalculator = () => {
  let ax = "";
  const [data, setData] = useState({
    argument_1: "",
    argument_2: "x",
    argument_3: "1",
  });
  const [answer, setAnswer] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [red, setRed] = useState(false);

  const handleInput = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    const re = /[@$#%!~`&{}"':;?><.,\\]|[A-Z]/g;
    setRed(false);
    if (re.test(value)) {
      console.log("found errr");
      setRed(true);
    } else {
      setData((values) => ({ ...values, [name]: value }));
    }
    event.preventDefault();
  };

  const handleReset = (event) => {
    event.preventDefault();
    setData({ argument_1: "", argument_2: "x", argument_3: "1" });
    setAnswer("");
    setSubmitted(false);
  };

  let variable = "f(" + data.argument_2 + ")";

  console.log(answer);
  if (answer) {
    ax = answer.replace(/\\/g, "\\");
  }
  console.log(ax);
  const handleSubmit = (event) => {
    axios.post("https://api-mathemagics.herokuapp.com/differentiation/", data).then((res) => {
      setAnswer(res.data);
    });
    console.log(data);
    console.log(answer);
    setSubmitted(true);
    event.preventDefault();
  };

  return (
    <>
      <Navbar />
      <FunctionsMenu />
      <div className="flex text-dark bg-white dark:bg-dark dark:text-white flex-wrap">
        <form onSubmit={handleSubmit}>
          <div className="justify-start ml-[114px] mt-[94px] border-2 w-[554px] h-[665px] rounded-[30px] drop-shadow-lg  p-10 dark:bg-dark bg-bg dark:text-white text-black">
            <h2 className="mt-5 text-center text-[30px] font-inter font-bold text-primary">
              Derivative Calculator
            </h2>
            <p className="text-center text-text mb-10">
              Finds the instantaneous rate of change of a function{" "}
            </p>
            <div>
              <label
                htmlFor="function"
                className="ml-2 dark:text-bright text-text"
              >
                Enter a function f(x)
              </label>
              <div
                className="flex rounded-xl dark:text-black text-black mb-10"
                id="searchbox"
              >
                <input
                  required
                  className={
                    red
                      ? "w-[393px] h-[48px] p-4 border-2 border-double  dark:border-primary rounded-l-lg text-lg bg-red-300 "
                      : "w-[393px] h-[48px] p-4 border-2 border-double  dark:border-primary rounded-l-lg text-lg "
                  }
                  type="text"
                  name="argument_1"
                  id="function"
                  value={data.argument_1}
                  onChange={handleInput}
                />{" "}
                <button className="px-4 w-[67px] border-2 dark:border-primary rounded-r-lg ">
                  <Fx className="dark:fill-white fill-tx w-[25px]" />
                </button>
              </div>
              <label
                htmlFor="first"
                className="ml-2 dark:text-bright  text-text"
              >
                With respect to variable
              </label>
              <input
                name="argument_2"
                id="first"
                value={data.argument_2}
                onChange={handleInput}
                className="w-[460px] h-[48px] p-4 border-2 text-black text-xl dark:border-primary rounded-lg mb-10"
              />

              <label
                htmlFor="second"
                className="ml-2 dark:text-bright text-text"
              >
                Order of derivative
              </label>
              <select
                name="argument_3"
                id="second"
                value={data.argument_3}
                onChange={handleInput}
                className="w-[460px] h-[48px] p-3 border-2 dark:text-black text-text text-lg dark:border-primary rounded-xl mb-10"
              >
                <option value="1" className="">
                  First Derivative
                </option>
                <option value="2">Second Derivative</option>
              </select>
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
          {!submitted ? (
            <div className="flex flex-col mt-[98px] ml-[300px] fill-tx dark:fill-white">
              <p className="font-semibold text-[30px] fill-tx dark:fill-white flex mb-10">
                Why do we need to learn Differentiation?
              </p>
              <p className="w-full tracking-[1%] font-normal text-[25px] ">
                Differentiation is a fundamental tool of calculus.The uniqueness
                of this concept is its predictive ability to evaluate the change
                in quantities. It finds the Tangent, Normal to Curve, identifies
                the behaviours of a a function.
              </p>
              <img
                src={images.diff}
                className="w-[300px] h-[300px] mt-20 self-center"
              />
            </div>
          ) : (
            <div className="flex flex-col">
              <div className="flex flex-col mt-10 ml-[300px] pt-10 h-full w-full font-normal text-2xl tracking-wide">
                <p className="text-[28px] font-semi-bold text-tx dark:text-white flex mt-4">
                  The {data.argument_3 === "1" ? "" : "Second "}Derivative of{" "}
                  {!data.argument_1
                    ? variable
                    : variable + " = " + data.argument_1}{" "}
                  equals to:{" "}
                </p>
                <div className="ml-3 py-8 mr-auto  mt-20 pr-[200px] border-2 font-normal rounded-xl text-3xl  px-3 border-double border-green-600 h-10 bg-white text-dark flex items-center">
                  {data.argument_3 === "1" ? "f'" : "f''"}({data.argument_2})=
                  {answer !== "" ? <BlockMath>{ax}</BlockMath> : ""}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default DiffCalculator;
