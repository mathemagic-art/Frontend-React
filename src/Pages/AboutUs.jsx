import React from "react";
import Navbar from "../Layouts/Navbar";
import FunctionsMenu from "../Layouts/FunctionsMenu";
import { ReactComponent as Logo1 } from "../Files/svgs/Logo1.svg";
import { ReactComponent as Quotemark } from "../Files/svgs/Quotemark.svg";
import {ReactComponent as Triangle } from "../Files/svgs/Triangle.svg";
import { images } from "../constants";

const AboutUs = () => {
  const style = {
    name: "mt-[10px] mb-[40px] text-[20px] text-tx font-bold font-Inter", 
    img_content: "ml-[14px]",
    position: "text-[16px] font-normal text-tx",
    hover: "transform transition duration-500 hover:scale-125",
    hover_shadow:
      "transition delay-200 hover:shadow-[5px_10px_20px_2px_rgba(0,255,255,0.7)] rounded-full",
    figure:  "flex mb-[73px]",
  };

  return (
    <div className="flex flex-col w-full bg-white text-head dark:text-white dark:bg-black">
      <Navbar />
      <FunctionsMenu />
      <div className="flex flex-col">
        <Logo1 className="m-auto mt-[58px] h-[134px] w-[120px] " />
        <Quotemark className="place-self-start ml-60 mt-5 fill-black dark:fill-white" />
        <h2 className="text-center fon-inter ml-96 mr-96 mt-5 italic text-3xl">
          MatheMagic offers a wealth of smart calculators from various domains
          of Mathematics. The stated goal of the site is to make scientific
          content universally accessible by expanding the searchable data space
          onto scientific notations, equations, and formulas. MatheMagic, makes
          math simpler by doing magic.
        </h2>
        <Quotemark className="rotate-180 place-self-end mr-60 self-end justify-self-end ml-auto fill-black dark:fill-white" />
        <div className="flex">
          <div className="flex flex-col mt-[150px] ml-auto items-end max-w-[350px]">
            <h3 className="">Dr. Mukhammadmuso Abduzhabbarov</h3>
            <p className="mr-[283px] max-w-[350px]">PhD in Mathematics</p>
            <p className="mt-[22px] max-w-[350px] mr-[343px]">Product Owner</p>
            <p className="mt-[22px] max-w-[350px] mr-auto">Chair of the Department of Math and Natural Sciences at University of Central Asia </p>
          </div>
          <img src={images.Muso} alt="Professor" className="self-end ml-10 mr-32 mt-[85px] w-[300px] h-[300px]"/>
        </div>

        <h1 className="text-center font-inter text-bold text-6xl mt-[150px]">
          Meet our TEAM
        </h1>
        <div className="flex flex-row justify-around items-center gap-4 mt-[100px]">
          {/* First Column */}
          <div className="flex flex-col"> 
            <figure className={style.figure}>
              <img src={images.Aisha} />
              <div className={style.img_content}>
                <h2 className={style.name}>Aisha Toichieva</h2>
                <h4 className={style.position}> Scipy Team</h4>
                <h4>Frontend</h4>
              </div>
            </figure>

            <figure className="flex">
              <img src={images.Aisha} />
              <div className={style.img_content}>
                <h2 className={style.name}>Aisha Toichieva</h2>
                <h4 className={style.position}> Scipy Team</h4>
                <h4>Frontend</h4>
              </div>
            </figure>
          </div>

          {/* Second Column */}
          <div className="flex flex-col">
          <figure className={style.figure}>
              <img src={images.Aizada} />
              <div className={style.img_content}>
                <h2 className={style.name}>Aizada Berdibekova</h2>
                <h4 className={style.position}> Scipy Team</h4>
                <h4 className={style.position}>Frontend</h4>
              </div>
            </figure>

            <figure className={style.figure}>
              <img src={images.Aizada} />
              <div className={style.img_content}>
                <h2 className={style.name}>Aizada Berdibekova</h2>
                <h4 className={style.position}> Scipy Team</h4>
                <h4 className={style.position}>Frontend</h4>
              </div>
            </figure>
          </div>

          {/* Third Column */}
          <div className="flex flex-col">
          <figure className={style.figure}>
              <img src={images.Aizada} />
              <div className={style.img_content}>
                <h2 className={style.name}>Aizada Berdibekova</h2>
                <h4 className={style.position}> Scipy Team</h4>
                <h4 className={style.position}>Frontend</h4>
              </div>
            </figure>

            <figure className={style.figure}>
              <img src={images.Aizada} />
              <div className={style.img_content}>
                <h2 className={style.name}>Aizada Berdibekova</h2>
                <h4 className={style.position}> Scipy Team</h4>
                <h4 className={style.position}>Frontend</h4>
              </div>
            </figure>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
