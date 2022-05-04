import React from 'react'
import Navbar from '../Layouts/Navbar'
import FunctionsMenu from '../Layouts/FunctionsMenu'
import { ReactComponent as Logo1 } from "../Files/svgs/Logo1.svg";
import { ReactComponent as Quotemark } from "../Files/svgs/Quotemark.svg";
import { ReactComponent as Muso} from "../Files/svgs/Musoagai.svg";
import { ReactComponent as Umar} from "../Files/svgs/Umarjon.svg";

const AboutUs = () => {
  return (
    <div>
        <Navbar />
        <FunctionsMenu />
          <div className='grid w-full bg-white dark:bg-dark text-head dark:text-white'>
            
            <Logo1 className="m-auto h-[134px] w-[120px] "/>
            <Quotemark className='place-self-start ml-60 mt-5'/>
            <h2 className="text-center fon-inter ml-96 mr-96 mt-5 italic text-3xl">MatheMagic offers a wealth of smart calculators from various domains of Mathematics. The stated goal of the site is to make scientific content universally accessible by expanding the searchable data space onto scientific notations, equations, and formulas. MatheMagic, makes math simpler by doing magic.</h2>
            <Quotemark className="rotate-180 place-self-end mr-60 " />
            <Muso className="place-self-end"/>
            <h1 className="text-center font-inter text-bold text-6xl">Meet our TEAM</h1>
            <h2 className="text-center font-inter text-bold text-4xl mt-60">  PRODUCT MANAGERS</h2>
            <Umar className="place-self-center mt-20 cols-2" /> 
            <Umar className="cols-1" />
          </div>
          
    </div>
  )
}

export default AboutUs;