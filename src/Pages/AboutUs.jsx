import React from "react";
import Navbar from "../Layouts/Navbar";
import FunctionsMenu from "../Layouts/FunctionsMenu";
import { ReactComponent as Logo1 } from "../Files/svgs/Logo1.svg";
import { ReactComponent as Quotemark } from "../Files/svgs/Quotemark.svg";
import { images } from "../constants";

const AboutUs = () => {
  const style = {
    name: "font-bold text-[20px] leading-6 mt-3 font-DM text-center mr-[50px]", 
    teams: "text-center font-inter text-bold text-4xl mt-[180px]",
    img: "transform transition duration-500 delay-200 hover:scale-125 z-[999] w-[200px]",
    div: "flex space-around justify-center mt-[70px] gap-[28px] flex-wrap",
    hover: "transform transition duration-500 hover:scale-125",
    hover_shadow:
      "transition delay-200 hover:shadow-[5px_10px_20px_2px_rgba(0,255,255,0.7)] rounded-full",
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
        <img src={images.Muso} alt="Professor" className="self-end ml-auto mr-32 mt-[85px] w-[300px] h-[300px]"/>

        <h1 className="text-center font-inter text-bold text-6xl mt-[150px]">
          Meet our TEAM
        </h1>
        <h2 className={style.teams}> PROJECT MANAGERS</h2>
        <div className={style.div}>
          <figure className={style.img}>
            <img src={images.Elnazar} alt="Elnazar" className={style.hover_shadow} />
            <figcaption className={style.name}>
              ELNAZAR <br />
              ULANBEK ULUU
            </figcaption>
          </figure>
          <figure className={style.img}>
            <img src={images.Umar} alt="Umar" className={style.hover_shadow} />
            <figcaption className={style.name}>
              UMAR <br />
              NUROV
            </figcaption>
          </figure>
        </div>

        {/* UX/UI DESIGN TEAM */}
        <h2 className={style.teams}>UX/UI Design</h2>
        <div className={style.div}>
          <figure className={style.img}>
            <img
              src={images.Umedjon}
              alt="Umidbek Ulmasov"
              className={style.hover_shadow}
            />
            <figcaption className={style.name}>
              UMIDBEK <br />
              ULMASOV
            </figcaption>
          </figure>
          <figure className={style.img}>
            <img
              src={images.Benazir}
              alt="Benazir Temiralieva"
              className={style.hover_shadow}
            />
            <figcaption className={style.name}>
              BENAZIR <br />
              TEMIRALIEVA
            </figcaption>
          </figure>
          <figure className={style.img}>
            <img
              src={images.Munis}
              alt="Munis Saidrahmonov"
              className={style.hover_shadow}
            />
            <figcaption className={style.name}>
              MUNIS <br />
              SAIDRAHMONOV
            </figcaption>
          </figure>
        </div>


        {/* BACKEND DEVELOPMENT TEAM */}
        <h2 className={style.teams}>Backend Development</h2>
        <div className={style.div}>
          <figure className={style.img}>
            <img src={images.Eldar} alt="Eldar Ulanov" className={style.hover_shadow} />
            <figcaption className={style.name}>
              ELDAR <br />
              ULANOV
            </figcaption>
          </figure>
          <figure className={style.img}>
            <img
              src={images.Aizada}
              alt="Aizada Berdibekova"
              className={style.hover_shadow}
            />
            <figcaption className={style.name}>
              AIZADA <br />
              BERDIBEKOVA
            </figcaption>
          </figure>
          <figure className={style.img}>
            <img
              src={images.abbosjon}
              alt="Abbosjon Madiev"
              className={style.hover_shadow}
            />
            <figcaption className={style.name}>
              ABBOSJON <br />
              MADIEV
            </figcaption>
          </figure>
          <figure className={style.img}>
            <img
              src={images.Ilkhom}
              alt="Ilkhomzhon Sidikov"
              className={style.hover_shadow}
            />
            <figcaption className={style.name}>
              ILKHOMZHON <br />
              SIDIKOV
            </figcaption>
          </figure>
          <figure className={style.img}>
            <img
              src={images.Elnazar}
              alt="Elnazar Ulanbek Uluu"
              className={style.hover_shadow}
            />
            <figcaption className={style.name}>
              ELNAZAR <br />
              ULANBEK ULUU
            </figcaption>
          </figure>
          <figure className={style.img}>
            <img
              src={images.Umedjon}
              alt="Jasurbek Sadiev"
              className={style.hover_shadow}
            />
            <figcaption className={style.name}>
              JASURBEK <br />
              SADIEV
            </figcaption>
          </figure>
        </div>
        {/* FRONTEND DEVELOPMENT TEAM */}
        <h2 className={style.teams}>Frontend Development</h2>
        <div className={style.div}>
          <figure className={style.img}>
            <img src={images.Umar} alt="Umar Nurov" className={style.hover_shadow} />
            <figcaption className={style.name}>
              UMAR <br />
              NUROV
            </figcaption>
          </figure>
          <figure className={style.img}>
            <img
              src={images.Umedjon}
              alt="Umidbek Ulmasov"
              className={style.hover_shadow}
            />
            <figcaption className={style.name}>
              UMIDBEK <br />
              ULMASOV
            </figcaption>
          </figure>
          <figure className={style.img}>
            <img
              src={images.abo}
              alt="Abdullah Nazari"
              className={style.hover_shadow}
            />
            <figcaption className={style.name}>
              ABDULLAH
              <br />
              NAZARI
            </figcaption>
          </figure>
          <figure className={style.img}>
            <img
              src={images.Marzia}
              alt="Marzia Taban Jafari"
              className={style.hover_shadow}
            />
            <figcaption className={style.name}>
              MARZIA
              <br />
              TABAN JAFARI
            </figcaption>
          </figure>
          <figure className={style.img}>
            <img
              src={images.Umedjon}
              alt="Jasurbek Sadiev"
              className={style.hover_shadow}
            />
            <figcaption className={style.name}>
              JASURBEK
              <br />
              SADIEV
            </figcaption>
          </figure>
        </div>
        {/* SCIENTIFIC PYTHON TEAM */}
        <h2 className={style.teams}>Scientific Python & Math</h2>
        <div className="flex space-around justify-center mt-[70px] gap-[28px] mb-[500px] flex-wrap">
          <figure className={style.img}>
            <img src={images.Tariq} alt="Tariq Aziz" className={style.hover_shadow} />
            <figcaption className={style.name}>
              TARIQ <br />
              AZIZ
            </figcaption>
          </figure>
          <figure className={style.img}>
            <img
              src={images.Aisha}
              alt="Aisha Toichieva"
              className={style.hover_shadow}
            />
            <figcaption className={style.name}>
              AISHA <br />
              TOICHIEVA
            </figcaption>
          </figure>
          <figure className={style.img}>
            <img
              src={images.Attiullah}
              alt="Attiullah Khan Niazi"
              className={style.hover_shadow}
            />
            <figcaption className={style.name}>
              ATTIULLAH <br />
              KHAN NIAZI
            </figcaption>
          </figure>
          <figure className={style.img}>
            <img
              src={images.Benazir}
              alt="Benazir Temiralieva"
              className={style.hover_shadow}
            />
            <figcaption className={style.name}>
              BENAZIR <br />
              TEMIRALIEVA
            </figcaption>
          </figure>
          <figure className={style.img}>
            <img
              src={images.Shokhrukh}
              alt="Shokhrukh Davlatmahmadov"
              className={style.hover_shadow}
            />
            <figcaption className={style.name}>
              SHOKHRUKH <br />
              DAVLATMAHMADOV
            </figcaption>
          </figure>
          <figure className={style.img}>
            <img
              src={images.Elnazar}
              alt="Elnazar Ulanbek Ullu"
              className={style.hover_shadow}
            />
            <figcaption className={style.name}>
              ELNAZAR <br />
              ULANBEK ULUU
            </figcaption>
          </figure>
          <figure className={style.img}>
            <img
              src={images.Munis}
              alt="Munis Saidrahmonov"
              className={style.hover_shadow}
            />
            <figcaption className={style.name}>
              MUNIS <br />
              SAIDRAHMONOV
            </figcaption>
          </figure>
          <figure className={style.img}>
            <img
              src={images.Zakir}
              alt="Zakir Hussain Muradi"
              className={style.hover_shadow}
            />
            <figcaption className={style.name}>
              ZAKIR <br />
              HUSSAIN MURADI
            </figcaption>
          </figure>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
