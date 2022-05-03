import React from "react";
import Hero from "../Layouts/Hero";
import Navbar from "../Layouts/Navbar";

const Home = ({ toggle, isOpen }) => {
  return (
    <div className=" text-dark dark:bg-dark dark:text-white bg-white">
      <Navbar toggle={toggle} />
      <Hero isOpen={isOpen} />
    </div>
  );
};

export default Home;
