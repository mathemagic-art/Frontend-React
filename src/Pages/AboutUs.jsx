import React from 'react'
import Navbar from '../Layouts/Navbar'
import FunctionsMenu from '../Layouts/FunctionsMenu'
import { ReactComponent as Logo1 } from "../Files/svgs/Logo1.svg";
import { ReactComponent as Quotemark } from "../Files/svgs/Quotemark.svg";

const AboutUs = ({}) => {
  return (
    <div>
        <Navbar />
        <FunctionsMenu />
        <div className='flex justify-center'>
          <Logo1 className="h-[134px] w-[120px] "/>
        </div>
        <div className='flex ml-40'>
          <Quotemark />
        </div>
        <div>
        <h2 className="text-white text-center ml-80 mr-80 light-italic text-lg">MatheMagic offers a wealth of smart calculators from various domains of Mathematics. The stated goal of the site is to make scientific content universally accessible by expanding the searchable data space onto scientific notations, equations, and formulas. MatheMagic, makes math simpler by doing magic.</h2>

        </div>
    </div>
  )
}

export default AboutUs;