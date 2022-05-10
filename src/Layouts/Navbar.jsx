import { React, useState } from "react";
import NavLink from "../Components/NavLink";
import { ReactComponent as Logo1 } from "../Files/svgs/Logo1.svg";
import { ReactComponent as Bucket } from "../Files/svgs/bucket.svg";
import { Link } from "react-router-dom";
import Toggle from "../Components/toggle";
import FunctionsMenu from "./FunctionsMenu";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="flex flex-row items-center  text-2xl tablet:text-lg text-dark bg-white dark:bg-dark dark:text-white shadow-md border-b-2 dark:border-dark">
      <div className="flex mx-10 tablet:mx-2">
        <button onClick={toggle}>
          <Bucket className="dark:fill-white fill-black" />
          <FunctionsMenu isOpen={isOpen} />
        </button>
      </div>
      <div className="flex flex-row p-10 py-10 px-5 space-x-10 tablet:space-x-3 text-tx items-center m-auto gap-20 tablet:gap-3">
        <NavLink text={"TEST YOURSELF"} onClick={toggle} isOpen={isOpen} />
        <NavLink text={"CHEATSHEETS"} onClick={toggle} isOpen={isOpen} />
        <Link to="/">
          <h1 className="text-4xl tablet:text-2xl dark:text-white text-head font-bold text-center flex flex-row">
            
            MATHEMA<Logo1 className="dark:stroke-primary tx  w-[40px] h-[50px] " onClick={toggle} isOpen={isOpen} />ICS
          </h1>
        </Link>
        <NavLink
          text={"ABOUT US"}
          className="flex"
          onClick={toggle}
          isOpen={isOpen}
        />
        <NavLink
          text={"CONTUCT US"}
          className="flex"
          onClick={toggle}
          isOpen={isOpen}
        />
        <Toggle />
      </div>
    </div>
  );
};

export default Navbar;
