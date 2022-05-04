import React from "react";
import { ReactComponent as Fx } from "../Files/svgs/fx.svg";

const QuestionCard = ({ id, Question, Answer }) => {
  return (
    <div className="w-2/3 bg-white dark:bg-dark rounded-xl m-auto mt-[10%] shadow-xl flex flex-col justify-center z-10">
      <h3 className="w-full bg-blue-600 text-3xl text-center text-white py-2 rounded-t-xl">
        Question {id}
      </h3>
      <div>
        <p className="text-center py-10 text-2xl text-text">{Question}</p>
        <div className="flex w-2/4 m-auto justify-center items-center border-2 pr-4 rounded-lg border-border">
          <input
            type="text"
            placeholder="Enter Your Solution.."
            className="w-full  h-16 px-2 rounded-l-lg border-r-2 border-border"
          />
          <Fx className="fill-black ml-4" />
        </div>
        <div className="m-auto flex justify-center mt-10">
          <button className="px-6 py-2 bg-button text-white rounded-md text-lg font-primary hover:bg-white hover:shadow-md hover:text-dark mr-5 duration-300">
            Submit
          </button>
          <button className="px-8 py-2 bg-white shadow-md  text-dark rounded-md text-lg font-primary hover:bg-button hover:text-white ml-5 duration-300">
            Reset
          </button>
        </div>
      </div>
      <div className="flex justify-center">
        <button className="px-4 py-2 shadow-lg rounded-lg mt-10 mr-3 hover:text-text duration-300 hover:shadow-2xl">
          Prev
        </button>
        <button className="px-4 py-2 shadow-lg rounded-lg mt-10 ml-3 hover:text-text duration-300 hover:shadow-2xl">
          Next
        </button>
      </div>
      <button className="self-end mr-20 py-10 text-button hover:translate-x-1  duration-200">
        Skip to this Question {">>"}
      </button>
    </div>
  );
};

export default QuestionCard;
