import React from "react";
import { Link } from "react-router-dom";

const NavLink = ({ text }) => {
  return (
    <>
      <Link
        to={"/" + text.replace(" ", "").toLowerCase()}
        className="font-bold text-head dark:text-white"
      >
        {text}
      </Link>
    </>
  );
};

export default NavLink;
