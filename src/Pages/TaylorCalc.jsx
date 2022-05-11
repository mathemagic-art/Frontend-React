import axios from "axios";
import { useState } from "react";
import Navbar from "../Layouts/Navbar";
import { ReactComponent as Fx } from "../Files/svgs/fx.svg";
import { ReactComponent as Taylor } from "../Files/svgs/tayloreq.svg";
import FunctionsMenu from "../Layouts/FunctionsMenu";
import Plot from "react-plotly.js";
import * as math from "mathjs";
import { BlockMath } from "react-katex";

const TaylorCalc = () => {
  const [red, setRed] = useState(false);
  const [data, setData] = useState({
    argument_1: "",
    argument_2: "x",
    argument_3: "",
    argument_4: "",
  });
  const [answer, setAnswer] = useState({
    argument_1: "", //latex form
    argument_2: "", //expression form
    argument_3: "", //x left boundary
    argument_4: "", //x right boundary
    argument_5: "", //y top boundary
    argument_6: "", //y bottom boundary
  });
  const [isOpen, setIsOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [exp, setExp] = useState("");

  const handleInput = (event) => {
    event.preventDefault();
    setRed(false);
    const name = event.target.name;
    const value = event.target.value;
    const re = /[@$#%!~`&{}"':;?><,\\]|[A-Z]/g;

    if (re.test(value)) {
      console.log("found errr");
      setRed(true);
    } else {
      setData((values) => ({ ...values, [name]: value }));
      console.log("Recieved event: " + data);
    }
  };

  const handleReset = (event) => {
    event.preventDefault();
    setData({
      argument_1: "",
      argument_2: "x",
      argument_3: "",
      argument_4: "",
    });
    setAnswer({
      argument_1: "", //latex form
      argument_2: "", //expression form
      argument_3: "", //x left boundary
      argument_4: "", //x right boundary
      argument_5: "", //y top boundary
      argument_6: "", //y bottom boundary
    });
    setSubmitted(false);
  };

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    axios.post("https://api-mathemagics.herokuapp.com/taylor-series/", data).then((res) => {
      console.log("RES: " + res.data);

      const data1 = res.data[0];
      const data2 = res.data[1].replaceAll("**", "^");
      setAnswer({
        argument_1: data1,
        argument_2: data2,
        argument_3: res.data[2],
        argument_4: res.data[3],
        argument_5: res.data[4],
        argument_6: res.data[5],
      });
    });
    setSubmitted(true);
    setExp(data.argument_1);
  };

  let ax = "";
  if (answer.argument_1) {
    ax = answer.argument_1.replaceAll(/\\/g, "\\");
  }

  const expression2 = answer.argument_2;
  const expr2 = math.compile(expression2);
  const xValues2 = math
    .range(answer.argument_3, answer.argument_4, 0.1)
    .toArray();
  const yValues2 = xValues2.map(function (x) {
    return expr2.evaluate({ x: x });
  });

  const expression = exp;
  const expr = math.compile(expression);
  const xValues = math
    .range(answer.argument_3, answer.argument_4, 0.1)
    .toArray();
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
              Taylor Series Calculator
            </h2>
            <p className="text-center text-[12px] text-text mb-[40px] ">
              Approximate a function as a polynomial with an infinite number of
              terms{" "}
            </p>
            <div>
              <label
                htmlFor="function"
                className="ml-2 dark:text-bright text-text text-[16px] "
              >
                Enter a function f(x)
              </label>

              <div
                className="flex rounded-l-[8px] dark:text-black text-black mb-[40px] "
                id="searchbox"
              >
                <input
                  required
                  className={
                    red
                      ? "w-[393px] h-[48px] p-4 border-2  dark:border-primary rounded-l-[8px] text-xl bg-red-300"
                      : "w-[393px] h-[48px] p-4 border-2  dark:border-primary rounded-l-[8px] text-xl "
                  }
                  type="text"
                  id="function"
                  name="argument_1"
                  value={data.argument_1}
                  onChange={handleInput}
                />{" "}
                <button className="w-[67px] h-[48px] px-4 border-2 dark:border-primary rounded-r-[8px] ">
                  <Fx className="dark:fill-white fill-tx w-[25px]" />
                </button>
              </div>

              <label
                htmlFor="point"
                className="ml-2 dark:te-7.14, 7.14xt-bright text-text text-[16px] "
              >
                Respect to
              </label>
              <input
                required
                type="text"
                // id="figure"
                name="argument_2"
                value={data.argument_2}
                onChange={handleInput}
                className={
                  red
                    ? "w-[460px] h-[48px] p-4 border-2 text-black  dark:border-primary rounded-[8px] mb-[40px] text-xl bg-red-300"
                    : "w-[460px] h-[48px] p-4 border-2 text-black  dark:border-primary rounded-[8px] mb-[40px] text-xl"
                }
              />
              <label
                htmlFor="order"
                className="ml-2 dark:text-bright text-text text-[16px] "
              >
                Number of iterations
              </label>
              <input
                required
                type="text"
                id="order"
                value={data.argument_3}
                name="argument_3"
                onChange={handleInput}
                className={
                  red
                    ? "w-[460px] h-[48px] p-4 border-2 text-black  dark:border-primary rounded-[8px] mb-[40px] text-xl bg-red-300"
                    : "w-[460px] h-[48px] p-4 border-2 text-black  dark:border-primary rounded-[8px] mb-[40px] text-xl"
                }
              />
              <label
                htmlFor="error"
                className="ml-2 dark:text-bright text-text text-[16px] "
              >
                Centered at
              </label>

              <input
                optional
                type="text"
                id="error"
                value={data.argument_4}
                name="argument_4"
                onChange={handleInput}
                className={
                  red
                    ? "w-[460px] h-[48px] p-4 border-2 text-black  dark:border-primary rounded-[8px] mb-[40px] text-xl bg-red-300"
                    : "w-[460px] h-[48px] p-4 border-2 text-black  dark:border-primary rounded-[8px] mb-[40px] text-xl"
                }
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

        {/* The Right Sections */}
        <div className=" w-1/2 mt-12 mr-20 flex flex-col text-tx dark:text-white justify-center items-end">
          {!submitted ? (
            <div className="flex flex-col -mt-10">
              <p className="mt-[98px] pb-[62px] font-semibold text-[28px] dark:text-white text-tx flex">
                According to Taylor's Series
              </p>
              <Taylor className="fill-tx dark:fill-white ml-10 -mt-5" />
              <p className="mt-[98px] text-[28px] font-semibold pb-[62px] dark:text-white text-tx flex">
                According to Maclorian's Series
              </p>
              <Taylor className="fill-tx dark:fill-white ml-10 -mt-5" />
            </div>
          ) : (
            <div className="flex mt-10  pt-10 flex-row font-normal text-2xl tracking-wide items-center justify-center">
              <p>According to Taylor's Series</p>
              {submitted ? "" : <Taylor className="fill-tx dark:fill-white" />}
              <div className="ml-3 pt-4 py-10 border-2 font-normal rounded-xl text-3xl  px-3 border-double border-green-600  text-tx dark:text-white flex justify-center items-center">
                {answer !== "" ? <BlockMath>{ax}</BlockMath> : "_____________"}
              </div>
            </div>
          )}
          <div className="mt-20 ml-[300px] mb-28 rounded-2xl">
            {submitted ? (
              <Plot
                className="rounded-2xl"
                data={[
                  {
                    x: xValues,
                    y: yValues,
                    name: expression,
                    type: "scatter",
                    mode: "lines",
                    marker: { color: "red" },
                  },
                  {
                    x: xValues2,
                    y: yValues2,
                    name: expr2,
                    type: "scatter",
                    mode: "lines",
                    marker: { color: "6F46F3" },
                  },
                  // { type: "bar", x: [1, 2, 3], y: [2, 5, 3] },
                ]}
                layout={{
                  plot_bgcolor: "#F1F5FF", // f(x)
                  paper_bgcolor: "#F1F5FF", //B
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

export default TaylorCalc;
