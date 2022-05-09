import React from "react";
import axios from "axios"
import { useState, useEffect } from "react";
// import MethodsCard from "../Components/MethodsCard";
import Navbar from "../Layouts/Navbar";
import { ReactComponent as Fx } from "../Files/svgs/fx.svg";
import {ReactComponent as Newton } from "../Files/svgs/newtonwhite.svg";
import {ReactComponent as X2} from "../Files/svgs/xSquare.svg";
import FunctionsMenu from "../Layouts/FunctionsMenu";

const LimitCalc = () => {
  const [data, setData] = useState({argument_1:"", argument_2:"x", argument_3:"+-", argument_4:"oo"})
  const [answer, setAnswer] = useState("")
  const [isOpen, setIsOpen] = useState(false);

  const handleInput = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setData(values => ({...values, [name]: value}))
  }

  console.log(data)

  let variable = "f("+(data.argument_2)+")"


  let approach = ""

  if (data.argument_4 === "oo"){
    approach = " ∞ "
  }else{
    approach = data.argument_4
  }

  // const handleInput = (event) => {
  //   console.log(event.target)
  //   setData(values => ({...values, [event.target.name] : event.target.value}))

  // }
  // const handleFunction = (event) => {
  //   // setData({equation: event.target.value});
  //   // console.log("samat")
  // };
  // const handleFirst = (event) => {
  //   setData({first: event.target.value})
  // };
  // const handleSecond = (event) => {
  //   setData({second: event.target.value})
    
  // };

  // const handleClick = () =>{
  //   console.log(data)
  //   // axios.post("https://api-mathemagics.herokuapp.com/limit/", data).then((res)=>{setAnswer(res)})
  // };

  const handleReset = (event) => {
    event.preventDefault()
    setData({argument_1:"", argument_2:"x", argument_3:"x", argument_4: "oo"})
    setAnswer("")
  }

  // useEffect(() => {
    
  // }, [data, setData])
  
  
  console.log(answer)
  
  const toggle = () => {
    setIsOpen(!isOpen);
  };
  
  const handleSubmit = (event) => {
    axios.post("limit-calculator/", data).then((res)=>{setAnswer(res.data)})
    console.log(data)
    console.log(answer)
    event.preventDefault()
    
  }
  return (
    <>
      <Navbar toggle={toggle} />
      {isOpen ? <FunctionsMenu /> : ""}
      <div className="flex text-dark bg-white dark:bg-dark dark:text-white flex-wrap" >
        <form onSubmit={handleSubmit}>
        <div className="ml-[114px] mt-[94px] border-2 w-[554px] h-[696px] drop-shadow-lg rounded-[30px] p-10 dark:bg-dark bg-bg dark:text-white text-black ">
          <h2 className="text-center text-[30px] font-inter font-bold text-primary ">
            Limit Calculator
          </h2>
          <p className="text-center text-[14px] text-text mb-[21px] ">
            Analyses the behavior of a function near a particular point{" "}<br />
            infinity(oo, -oo) and pi(π)
          </p>
          <div>
            <label htmlFor="function" className="ml-2 dark:text-bright text-text text-[16px]">
              Enter a function f(x)
            </label>
            <div className="flex rounded-l-[8px] dark:text-black text-black mb-[40px] " id="searchbox">
              <input
              required
                className="w-[393px] h-[48px] p-4 border-2  dark:border-primary rounded-l-xl text-xl"
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
            <label htmlFor="first" className="ml-2 dark:text-bright text-text text-[16px]">
              Respect to
            </label>
            <input name="argument_2" value={data.argument_2} onChange = {handleInput} className="w-[460px] h-[48px] p-4 border-2 text-black text-xl dark:border-primary rounded-[8px] mb-[40px]" />
                
            <label htmlFor="second" className="ml-2 dark:text-bright text-text text-[16px]">
              Side
            </label>
            <select value = {data.argument_3} name="argument_3" onChange = {handleInput} className="w-[460px] h-[48px] p-3 border-2 dark:text-black text-text text-[18px] dark:border-primary rounded-[8px] mb-[40px] ">
                <option value = "+-">Two-sided</option>
                <option value = "-">Left (-)</option>
                <option value = "+">Right (+)</option>
            </select>
            <label htmlFor="third" className="ml-2 dark:text-bright text-text text-[16px]">
              Limits approach to
            </label>
            <input
              required
              type="text"
              // id="iteration ∞"
              value={data.argument_4}
              name="argument_4"
              onChange={handleInput}
              className="w-[460px] h-[48px] p-4 border-2  text-black dark:border-primary rounded-xl mb-[40px] text-xl"
              defaultValue="oo"
              />    
          </div>
          <div className=" flex justify-evenly">
            <button className="bg-primary text-white w-[116px] h-[48px] font-medium text-center text-[16px] rounded-[8px]" type="submit" >
              Magic!
            </button>
            <button className="bg-white dark:text-black text-primary border-primary  border-2  w-[116px] h-[48px] font-medium text-center text-lg rounded-[8px]" onClick={handleReset}>
              Reset!
            </button>
          </div>
        </div>
        </form>
        <div className=" w-1/2 mt-12 mr-20 flex flex-col text-tx dark:text-white">
          <p className="mt-[98px] ml-[300px] font-normal text-2xl flex">According to Limit Rule's:<Newton className="fill-tx dark:fill-white ml-10 -mt-5"/></p>
          <div className="flex mt-10 ml-[300px] pt-10 h-full w-full flex-row font-normal text-2xl tracking-wide">
          <p>The limit of {!data.argument_1? variable: (variable + " = " + data.argument_1)} as x approaches {approach} : {!data.argument_2 ? "": variable}=</p><div className="ml-3 pt-4 pb-14 border-2 font-normal rounded-xl text-3xl -mt-5 px-3 border-double border-green-600 h-10 text-tx dark:text-white">{answer !=="" ? answer:"_____________" }</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LimitCalc;
