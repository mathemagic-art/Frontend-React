import { useState } from "react";
import { ReactComponent as Fx } from "../../Files/svgs/fx.svg";
import axios from "axios";
import FunctionsMenu from "../../Layouts/FunctionsMenu";
import Navbar from "../../Layouts/Navbar";
import { BlockMath } from "react-katex";

const IntegTest = () => {
  let ax = "";

  const [data, setData] = useState({
    argument_1: "1",
  });
  const [question, setQuestion] = useState({
    argument_1: "",
    argument_2: "",
  });
  const [uanswer, setUanswer] = useState({
    argument_1: "",
    argument_2: "",
  });
  const [answer, setAnswer] = useState({
    argument_1: "",
    argument_2: "",
  });

  const [show, setShow] = useState(false);
  const [showq, setShowq] = useState(false);

  const handleSelect = (e) => {
    e.preventDefault();
    setShow(false);
    setAnswer("");
    const value = e.target.value;
    setData({ argument_1: value });
  };

  if (question[0]) {
    ax = question[0].replace(/\\/g, "\\");
  }
  const handleInput = (e) => {
    e.preventDefault();
    const value = e.target.value;
    const ans = question[1];
    setUanswer({ argument_1: value, argument_2: ans });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (uanswer.argument_1 == "" || question.argument_1 == "") {
      return;
    }
    axios
      .post("https://api-mathemagics.herokuapp.com/compare", uanswer)
      .then((res) => {
        const ans = question[1];
        console.log(question[1]);

        setAnswer({ argument_1: res.data, argument_2: ans });
      });
  };
  const nextQuestion = (e) => {
    e.preventDefault();
    setShow(false);
    setAnswer("");
    axios
      .post(
        "https://api-mathemagics.herokuapp.com/test-indefinite-integral",
        data
      )
      .then((res) => {
        setQuestion({ ...res.data });
      });
    setShowq(true);
  };
  const showAnswer = () => {
    setShow(!show);
  };
  const handleReset = (event) => {
    event.preventDefault();
    setQuestion({ argument_1: "", argument_2: "", argument_3: "" });
    setShowq(false);

    setUanswer({ argument_1: "", argument_2: "" });
    setAnswer({ argument_1: "", argument_2: "" });
  };
  return (
    <div className=" h-full w-full bg-white dark:bg-dark dark:text-white text-dark">
      <Navbar />
      <FunctionsMenu />
      <div className="z-10">
        <div className="w-2/3  bg-white dark:bg-dark dark:text-white text-dark rounded-xl m-auto mt-[10%] shadow-xl flex flex-col justify-center pb-10 border-2">
          <h3 className="w-full bg-blue-600 text-3xl text-center text-white py-2 rounded-t-xl border-b-2">
            Integration Question
          </h3>
          <div className="flex flex-col p-6 text-center gap-2 text-xl items-end">
            <label htmlFor="option" className="pr-10">
              Difficulty level
            </label>
            <select
              id="option"
              className="p-2 rounded-lg bg-blue-600 text-white"
              onChange={handleSelect}
            >
              <option>Select Your Level</option>
              <option value="1">Beginer</option>
              <option value="2">Intermediate</option>
              <option value="3">Advanced</option>
            </select>
            <button
              className="px-4 py-2  bg-blue-400 text-white rounded-md text-lg font-primary hover:bg-white hover:shadow-md hover:text-dark  duration-300"
              onClick={nextQuestion}
            >
              Request Question
            </button>
          </div>

          <form onSubmit={handleSubmit}>
            {showq ? (
              <>
                <div className="my-8 mb-10 text-2xl">
                  <BlockMath>{ax}</BlockMath>
                </div>
              </>
            ) : (
              ""
            )}
            <div className="flex w-2/4 m-auto justify-center items-center border-2 text-black pr-4 rounded-lg border-border">
              <input
                type="text"
                placeholder="Enter Your Solution.."
                className="w-full  h-16 px-2 rounded-l-lg border-r-2 border-border"
                onChange={handleInput}
                name="argument_1"
                value={uanswer.argument_1}
              />
              <Fx className="fill-black dark:fill-white ml-4" />
            </div>
            <div className="m-auto flex justify-center mt-10">
              <button
                className="px-6 py-2 bg-button text-white rounded-md text-lg font-primary hover:bg-white hover:shadow-md hover:text-dark mr-5 duration-300"
                type="submit"
              >
                Submit
              </button>
              <button
                onClick={handleReset}
                className="px-8 py-2 bg-white shadow-md  text-dark rounded-md text-lg font-primary hover:bg-button hover:text-white ml-5 duration-300"
              >
                Reset
              </button>
            </div>
          </form>
          <div className="w-full flex flex-col items-center justify-center">
            <p className="text-center py-10 text-2xl text-red-500">
              {answer.argument_1}
            </p>
            <button
              className="px-6 py-2 bg-green-500 text-white rounded-md text-lg font-primary hover:bg-white hover:shadow-md hover:text-dark mr-5 duration-300"
              onClick={showAnswer}
            >
              Show Answer
            </button>
            {show ? (
              <p className="text-center py-10 text-2xl text-text">
                <BlockMath>{answer.argument_2}</BlockMath>
              </p>
            ) : (
              ""
            )}
            <button
              className="px-6 py-2 mt-4 bg-red-500 text-white rounded-md text-lg font-primary hover:bg-white hover:shadow-md hover:text-dark mr-5 duration-300"
              onClick={nextQuestion}
            >
              Next Question
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IntegTest;
