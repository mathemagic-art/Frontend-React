import React from "react";
import Hero from "../Layouts/Hero";
import Navbar from "../Layouts/Navbar";

const Home = () => {
  return (
    <div className=" text-dark dark:bg-dark dark:text-white bg-white">
      <Navbar />
      <Hero />
    </div>
  );
};

export default Home;
