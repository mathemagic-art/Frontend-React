import axios from "axios";
import React, { useState } from "react";
// import MethodsCard from "../Components/MethodsCard";
import Navbar from "../Layouts/Navbar";
import { ReactComponent as Fx } from "../Files/svgs/fx.svg";
import { ReactComponent as Newton } from "../Files/svgs/newtonwhite.svg";
import { ReactComponent as X2 } from "../Files/svgs/xSquare.svg";
import FunctionsMenu from "../Layouts/FunctionsMenu";

const DiffCalculator = () => {
  const [data, setData] = useState({
    argument_1: "",
    argument_2: "x",
    argument_3: "1",
  });
  const [answer, setAnswer] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  const handleInput = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setData((values) => ({ ...values, [name]: value }));
  };

  console.log(data);

  // const handleInput = (event) => {
  //   console.log(event.target)
  //   setData(values => ({...values, [event.target.name] : event.target.value}))

  // }
  // const handleFunction = (event) => {
  //   // setData({equation: event.target.value});
  //   // console.log("samat")
  // };

  // const handleSecond = (event) => {
  //   setData({second: event.target.value})

  // };

  // const handleClick = () =>{
  //   console.log(data)
  //   // axios.post("http://127.0.0.1:8000/diff/", data).then((res)=>{setAnswer(res)})
  // };

  const handleReset = (event) => {
    event.preventDefault();
    setData({ argument_1: "", argument_2: "x", argument_3: "1" });
    setAnswer("");
  };

  let variable = "f(" + data.argument_2 + ")";
  // useEffect(() => {

  // }, [data, setData])

  console.log(answer);

  const handleSubmit = (event) => {
    axios
      .post("differentiation/", data)
      .then((res) => {
        setAnswer(res.data);
      });
    console.log(data);
    console.log(answer);
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
              <label htmlFor="function" className="ml-2 dark:text-bright text-text">
                Enter a function f(x)
              </label>
              <div className="flex rounded-xl dark:text-black text-black mb-10" id="searchbox">
                <input
                  required
                  className="w-[393px] h-[48px] p-4 border-2 border-double  dark:border-primary rounded-l-lg text-lg "
                  type="text"
                  name="argument_1"
                  id="function"
                  value={data.argument_1}
                  onChange={(e) =>
                    setData((prev) => ({ ...prev, argument_1: e.target.value }))
                  }
                />{" "}
                <button className="px-4 w-[67px] border-2 dark:border-primary rounded-r-lg ">
                  <Fx className="dark:fill-white fill-tx w-[25px]" />
                </button>
              </div>
              <label htmlFor="first" className="ml-2 dark:text-bright  text-text">
                With respect to variable
              </label>
              <input
                name="argument_2"
                id="first"
                value={data.argument_2}
                onChange={(e) =>
                  setData((prev) => ({ ...prev, argument_2: e.target.value }))
                }
                className="w-[460px] h-[48px] p-4 border-2 text-black text-xl dark:border-primary rounded-lg mb-10"
              />

              <label htmlFor="second" className="ml-2 dark:text-bright text-text">
                Order of derivative
              </label>
              <select
                name="argument_3"
                id="second"
                value={data.argument_3}
                onChange={(e) =>
                  setData((prev) => ({ ...prev, argument_3: e.target.value }))
                }
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
          <p className="mt-[98px] ml-[300px] font-semi-bold text-[28px] flex">
            According to Differential Rules:
            <Newton className="fill-tx dark:fill-white ml-10 -mt-5" />
          </p>
          <div className="flex mt-10 ml-[300px] pt-10 h-full w-full flex-row font-normal text-2xl tracking-wide">
            <p className="text-[28px] font-semi-bold text-tx dark:text-white">
              The Derivative of{" "}
              {!data.argument_1 ? variable : variable + " = " + data.argument_1}{" "}
              equals to{" "}
            </p>
            <div className="ml-3 pt-4 pb-14 border-2 font-normal rounded-xl text-3xl -mt-5 px-3 border-double border-green-600 h-10 bg-white text-">
              {data.argument_3 === "1" ? "f'" : "f''"}({data.argument_2})=
              {answer !== "" ? answer : "_____________"}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DiffCalculator;
