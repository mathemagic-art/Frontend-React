import React from "react";
import NavLink from "../Components/NavLink";
import { ReactComponent as Logo } from "../Files/svgs/Logo.svg";
import { ReactComponent as Bucket } from "../Files/svgs/bucket.svg";
import { Link } from "react-router-dom";
import Toggle from "../Components/toggle";

const Navbar = ({ toggle }) => {
  return (
    <div className="flex flex-row items-center  text-2xl tablet:text-lg text-dark bg-white dark:bg-dark dark:text-white shadow-md h-[13%]">
      <div className="flex mx-10 tablet:mx-2">
        <button onClick={toggle}>
          <Bucket className="dark:fill-white fill-black" />
        </button>
      </div>
      <div className="flex flex-row p-10 py-10 px-5 space-x-10 tablet:space-x-3 items-center m-auto gap-20 tablet:gap-3">
        <NavLink text={"TEST YOURSELF"} />
        <NavLink text={"CHEATSHEETS"} />
        <Link to="/">
          <h1 className="text-4xl tablet:text-2xl font-semibold text-center flex flex-row">
            <Logo className="mr-3" />
            MATHEMAGICS
          </h1>
        </Link>
        <NavLink text={"ABOUT US"} className="flex" />
        <NavLink text={"CONTACT US"} className="flex" />
        <Toggle />
      </div>
    </div>
  );
};

export default Navbar;
