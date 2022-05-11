import React from "react";
import Navbar from "../Layouts/Navbar";
import FunctionsMenu from "../Layouts/FunctionsMenu";
import { ReactComponent as Logo1 } from "../Files/svgs/Logo1.svg";
import { ReactComponent as Quotemark } from "../Files/svgs/Quotemark.svg";
import {ReactComponent as Triangle } from "../Files/svgs/Triangle.svg";
import {ReactComponent as Techno } from "../Files/svgs/Techno.svg";
import {ReactComponent as Cube } from "../Files/svgs/Cube.svg";
import { images } from "../constants";

const AboutUs = () => {
  const style = {
    name: "mt-[10px] mb-[40px] text-[20px] dark:text-white text-tx font-bold font-Inter w-[202px] h-[20px] ", 
    img_content: "ml-[14px] w-[150px] h-[150px] ",
    position: "text-[16px] font-regular text-tx dark:text-white text-left w-[250px] h-[16px] mb-[10px] ",
    hover: "transform transition duration-500 hover:scale-125",
    hover_shadow:
      "transition delay-200 hover:shadow-[5px_10px_20px_2px_rgba(0,255,255,0.7)] rounded-full",
    figure:  "flex mb-[73px]",
  };

  return (
    <div className="flex flex-col w-full bg-white text-head dark:text-white dark:bg-dark">
      <Navbar />
      <FunctionsMenu />
      <div className="flex flex-col flex-wrap">
        <Logo1 className="m-auto mt-[58px] h-[134px] w-[120px] " />
        <Triangle className="-mt-40" />
        <Quotemark className="place-self-start ml-60 mt-5 fill-black dark:fill-white" />
        <h2 className="text-center fon-inter ml-96 mr-96 mt-5 italic text-3xl">
          MatheMagic offers a wealth of smart calculators from various domains
          of Mathematics. The stated goal of the site is to make scientific
          content universally accessible by expanding the searchable data space
          onto scientific notations, equations, and formulas. MatheMagic, makes
          math simpler by doing magic.
        </h2>
        <Quotemark className="rotate-180 place-self-end mr-60 self-end justify-self-end ml-auto fill-black dark:fill-white" />
        <Cube className="ml-[260px]" />
        <div className="flex place-self-end tablet:place-self-center ml-20 tablet:mb-[200px] tablet:flex-col">
          <div className="flex flex-col mb-[150px] pl-[160px] -mt-60 w-[459px] place-self-end tablet:place-self-center tablet:pl-[0] tablet:mt-[100px]">
            <h3 className="font-inter mb-[10px] font-bold w-[500px] h-[24px] text-[24px]">Dr. Mukhammadmuso Abduzhabbarov</h3>
            <h4 className="mb-[22px] w-[500px] h-[28px] text-[20px] ">PhD in Mathematics</h4>
            <p className="mb-[10px] w-[500px] h-[28px] text-[20px]">Product Owner</p>
            <p className="w-[500px] h-[28px] text-[20px]">Chair of the Department of Math and Natural <br/> Sciences at University of Central Asia </p>
          </div>
          <img src={images.Muso} alt="Professor" className="place-self-end ml-[164px] mr-32 mb-[100px] w-[300px] h-[300px]"/>
        </div>
        <div className="tablet:mb-[200px]">
          <h3 className="text-center mb-[30px] text-[20px] font-bold font-inter" >Behind the Magic</h3>
          <h1 className="text-center font-inter text-bold text-6xl mb-[44px] ">
            Meet our TEAM
          </h1>
          <p className="text-center font-normal font-inter text-[20px] mb-[80x]" >Problem solving oriented minds representing an interdisciplinar blend of skills </p>
        </div>
        <div className="flex flex-row ml-[230px] mr-[280px] justify-around items-center gap-[85px] mt-[100px] flex-wrap">
          {/* First Column */}
          <div className="flex flex-col -mt-[230px]"> 
            <figure className={style.figure}>
                <img src={images.Elnazar} />
                <div className={style.img_content}>
                  <h2 className={style.name}>Elnazar Ulanbek Uluu</h2>
                  <h4 className={style.position}> Product Manager</h4>
                  <h4 className={style.position}>Backend Developer</h4>
                  <h4 className={style.position}>Math Algorithms Developer</h4>
                </div>
              </figure>

              <figure className={style.figure}>
                <img src={images.Shokhrukh} />
                <div className={style.img_content}>
                  <h2 className={style.name}>Shokhrukh Davlatmamadov</h2>
                  <h4 className={style.position}> Lead Math Algorithms Developer</h4>
                </div>
              </figure>

              <figure className={style.figure}>
                <img src={images.Munis} />
                <div className={style.img_content}>
                  <h2 className={style.name}>Munis Saidrahmonov</h2>
                  <h4 className={style.position}>UX/UI Designer</h4>
                  <h4 className={style.position}>Math Algorithms Developer</h4>
                </div>
              </figure>

              <figure className={style.figure}>
                <img src={images.Zakir} />
                <div className={style.img_content}>
                  <h2 className={style.name}>Zakir Hussain Muradi</h2>
                  <h4 className={style.position}> Math Algorithms Developer</h4>
                </div>
              </figure>

              <figure className={style.figure}>
                <img src={images.Umedjon} />
                <div className={style.img_content}>
                  <h2 className={style.name}>Umidbek Ulmasov </h2>
                  <h4 className={style.position}> UX/UI Designer</h4>
                  <h4 className={style.position}>Frontend Developer</h4>
                </div>
              </figure>

              <figure className={style.figure}>
                <img src={images.Eldar} />
                <div className={style.img_content}>
                  <h2 className={style.name}>Eldar Ulanov</h2>
                  <h4 className={style.position}>Backend Developer</h4>
                </div>
              </figure>


              
            </div>

          {/* Second Column */}
          <div className="flex flex-col">
            <figure className={style.figure}>
                <img src={images.Umar} />
                <div className={style.img_content}>
                  <h2 className={style.name}>Umar Nurov</h2>
                  <h4 className={style.position}> Product Coordinator</h4>
                  <h4 className={style.position}>Frontend Developer</h4>
                </div>
              </figure>

            <figure className={style.figure}>
              <img src={images.abo} />
              <div className={style.img_content}>
                <h2 className={style.name}>Abdullah Nazari</h2>
                <h4 className={style.position}> Lead Frontend Developer</h4>
              </div>
            </figure>
            <figure className={style.figure}>
              <img src={images.Jasurbek} />
              <div className={style.img_content}>
                <h2 className={style.name}>Jasurbek Sadiev</h2>
                <h4 className={style.position}> Full Stack Developer</h4>
              </div>
            </figure>
            <figure className={style.figure}>
              <img src={images.Aizada} />
              <div className={style.img_content}>
                <h2 className={style.name}>Aizada Berdibekova</h2>
                <h4 className={style.position}> Backend Developer</h4>
              </div>
            </figure>
            <figure className={style.figure}>
              <img src={images.Baistan} />
              <div className={style.img_content}>
                <h2 className={style.name}>Baistan Tashkulov</h2>
                <h4 className={style.position}> Math Algorithms Developer</h4>
              </div>
            </figure>
            <figure className={style.figure}>
              <img src={images.abbosjon} />
              <div className={style.img_content}>
                <h2 className={style.name}>Abbosjon Madiev</h2>
                <h4 className={style.position}>Full Stack Developer</h4>
              </div>
            </figure>
            <figure className="flex mb-[73px] tablet:mb-[170px]">
              <img src={images.Marzia} />
              <div className={style.img_content}>
                <h2 className={style.name}>Marzia Taban Jafari</h2>
                <h4 className={style.position}> Frontend Developer</h4>

              </div>
            </figure>
          </div>

          {/* Third Column */}
          <div className="flex flex-col -mt-[210px]">
          <figure className={style.figure}>
              <img src={images.Benazir} />
              <div className={style.img_content}>
                <h2 className={style.name}>Benazir Temiralieva</h2>
                <h4 className={style.position}> Lead UX/UI Designer </h4>
                <h4 className={style.position}>Math Algorithms Developer</h4>
                <h4 className={style.position}>Content Creator</h4>
              </div>
            </figure>

              <figure className={style.figure}>
                <img src={images.Ilkhom} />
                <div className={style.img_content}>
                  <h2 className={style.name}>Ilkhomzhon Sidikov</h2>
                  <h4 className={style.position}> Lead Backend Developer</h4>
                </div>
              </figure>
              <figure className={style.figure}>
                <img src={images.Aisha} />
                <div className={style.img_content}>
                  <h2 className={style.name}>Aisha Toichieva</h2>
                  <h4 className={style.position}> Math Algorithms Developer</h4>
                </div>
              </figure>
              <figure className={style.figure}>
                <img src={images.Attiullah} />
                <div className={style.img_content}>
                  <h2 className={style.name}>Attiullah Khan Niazi</h2>
                  <h4 className={style.position}> Math Algorithms Developer</h4>
                </div>
              </figure>
              <figure className={style.figure}>
                <img src={images.Tariq} />
                <div className={style.img_content}>
                  <h2 className={style.name}>Tariq Aziz</h2>
                  <h4 className={style.position}> Math Algorithms Developer</h4>
                </div>
              </figure>
              <figure className={style.figure}>
                <img src={images.Rauf} />
                <div className={style.img_content}>
                  <h2 className={style.name}>Rauf Alibakhshov</h2>
                  <h4 className={style.position}> Backend Developer</h4>
                </div>
              </figure>
          </div>
        </div>
      </div>
      <h2 className="text-center font-inter font-bold mt-[162px] text-[40px] dark:text-white text-tx mb-[47px]">Technologies</h2>
      <Techno className="flex place-self-center mb-[107px] tablet:w-[800px] " />
    </div>
  );
};

export default AboutUs;
