import axios from "axios";
import React, { useState, useEffect } from "react";
// import MethodsCard from "../Components/MethodsCard";
import Navbar from "../Layouts/Navbar";
import { ReactComponent as Fx } from "../Files/svgs/fx.svg";
import { ReactComponent as Newton } from "../Files/svgs/newtonwhite.svg";
import { ReactComponent as X2 } from "../Files/svgs/xSquare.svg";
import FunctionsMenu from "../Layouts/FunctionsMenu";

const IntegralCalc = () => {
  const [data, setData] = useState({
    argument_1: "type1",
    argument_2: "",
    argument_3: "x",
    argument_4: "",
    argument_5: "",
  });
  const [answer, setAnswer] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  const handleInput = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setData((values) => ({ ...values, [name]: value }));
  };

  console.log(data);

  const handleReset = (event) => {
    event.preventDefault();
    setData({
      argument_1: "type1",
      argument_2: "",
      argument_3: "x",
      argument_4: "",
      argument_5: "",
    });
    setAnswer("");
  };

  let style_for_main_div = "";
  let style_for_content_div = "";
  let url = "";
  let variable = "";

  if (data.argument_1 === "type1") {
    style_for_content_div = " w-1/2 mt-12 mr-20 flex flex-col text-tx dark:text-white";
    style_for_main_div =
      "mb[11.24px] ml-[114px] mt-[94px] border-2 w-[554px] h-[665px] drop-shadow-lg shadow-blur-4 shadow-spread-24 rounded-[30px] p-10 dark:bg-dark bg-bg dark:text-white text-black";
    url = "indefinite-integral/";
    variable =
      "w-[460px] h-[48px] p-4 border-2 text-black  dark:border-primary rounded-[8px] mb-[30px] text-xl";
  } else {
    style_for_content_div = " w-1/2 mt-12 mr-20 flex flex-col text-tx dark:text-white";
    style_for_main_div =
      "mb[11.24px] ml-[114px] mt-[94px] border-2 w-[554px] h-[760px] drop-shadow-lg shadow-blur-4 shadow-spread-24 rounded-[30px] p-10 dark:bg-dark bg-bg dark:text-white text-black";
    url = "definite-integral/";
    variable =
      "w-[460px] h-[48px] p-4 border-2 text-black  dark:border-primary rounded-[8px] mb-[30px] text-xl";
  }
  // useEffect(() => {

  // }, [data, setData])

  console.log(answer);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  const handleSubmit = (event) => {
    axios.post("universal-integral/", data).then((res) => {
      setAnswer(res.data);
    });
    console.log(data);
    console.log(answer);
    event.preventDefault();
  };
  return (
    <>
      <Navbar toggle={toggle} />
      {isOpen ? <FunctionsMenu /> : ""}
      <div className="flex text-dark bg-white dark:bg-dark dark:text-white">
        <form onSubmit={handleSubmit}>
          <div className={style_for_main_div}>
            <h2 className="text-center text-[30px] mt-5 font-inter font-bold text-primary">
              {data.argument_1 === "type1"
                ? "Indefinite Integral Calculator"
                : "Definite Integral Calculator"}
            </h2>
            <p className="text-center text-text mt-[11px] mb-[24px]">
              Find areas and volumes by adding the slices to find the whole.{" "}
            </p>
              <label htmlFor="function" className="ml-2 dark:text-bright mb-[30px] text-text text-[18px] ">
                Enter a function f(x)
              </label>
              <div className="flex rounded-l-[8px] text-black mb-[30px] " id="searchbox">
                <input
                  required
                  className="w-[393px] h-[48px] p-4 border-2  dark:border-primary rounded-l-[8px] text-xl"
                  type="text"
                  id="function"
                  name="argument_2"
                  value={data.argument_2}
                  onChange={handleInput}
                />{" "}
                <button className="w-[67px] h-[48px] px-4 border-2 dark:border-primary rounded-r-[8px] ">
                  <Fx className="dark:fill-white fill-tx w-[25px]"/>
                </button>
              </div>
            <div className="">
              <label htmlFor="list" className="ml-2 dark:text-bright text-text text-[18px] ">
                Integration type
              </label>
              <select
                id="list"
                name="argument_1"
                defaultValue="type1"
                value={data.argument_1}
                onChange={handleInput}
                className="w-[460px] h-[48px] p-2 border-2 text-text  dark:border-primary rounded-[8px] mb-[30px] text-lg"
              >
                <option value="type1">Indefinite Integral</option>
                <option value="type2">Definite Integral</option>
              </select>

              <div>
                <label htmlFor="variable" className=" dark:text-bright text-text text-[18px] ">
                  Variable
                </label>
                <input
                  required
                  type="text"
                  id="variable"
                  value={data.argument_3}
                  name="argument_3"
                  onChange={handleInput}
                  className={variable }
                />

                {data.argument_1 === "type1" ? (
                  ""
                ) : (
                  <div>
                    <label
                      htmlFor="third"
                      className=" ml-2 dark:text-bright text-text text-[18px]"
                    >
                      Lower
                    </label>
                    <input
                      required
                      type="text"
                      value={data.argument_4}
                      name="argument_4"
                      onChange={handleInput}
                      className="w-[460px] h-[48px] p-4 border-2 text-black  dark:border-primary rounded-[8px] mb-[30px] text-xl"
                      defaultValue="oo"
                    />

                    <label
                      htmlFor="third"
                      className="ml-2 dark:text-bright text-text text-[18px] "
                    >
                      Upper
                    </label>
                    <input
                      required
                      type="text"
                      value={data.argument_5}
                      name="argument_5"
                      onChange={handleInput}
                      className="w-[460px] h-[48px] p-4 border-2 text-black  dark:border-primary rounded-[8px] mb-[30px] text-xl"
                      defaultValue="oo"
                    />
                  </div>
                )}
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
        <div className={style_for_content_div}>
          <p className="mt-[98px] ml-[300px] font-normal text-2xl flex">
            Based on Integral Rule's:
            <Newton className="fill-tx dark:fill-white ml-10 -mt-5" />
          </p>
          <div className="flex mt-10 ml-[300px] pt-10 h-full w-full flex-row font-normal text-2xl tracking-wide">
            <p>
              The answer for{" "}
              {!data.argument_2 ? "f(x)" : "f(x) = " + data.argument_2} is:{" "}
            </p>
            <div className="ml-3 pt-4 pb-14 border-2 font-normal rounded-xl text-3xl -mt-5 px-3 border-double border-green-600 h-10 bg-white text-black">
              {answer !== "" ? answer : "_____________"}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default IntegralCalc;
