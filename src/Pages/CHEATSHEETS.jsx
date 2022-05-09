import React from 'react';
import Navbar from '../Layouts/Navbar';
import FunctionsMenu from '../Layouts/FunctionsMenu';
import {ReactComponent as BasicDeriv} from "../Files/svgs/BasicDeriv.svg";
import { ReactComponent as HeroBg } from "../Files/svgs/HeroBG.svg";


function Cheatsheets({ toggle, isOpen }) {
    return (
        <>
            <Navbar toggle={toggle} />
            {isOpen ? <FunctionsMenu /> : ""}
            <div className='flex flex-row justify-between w-full h-full z-0'>
                <div className='z-0'>
                    <h2 className="mt-[80px] ml-[280px] mb-[20px] flex space-around justify-start text-primary font-medium font-inter text-[24px]">Basic Differentiation Rules</h2>
                    <BasicDeriv className="ml-[110px] mb-[153px] flex space-around justify-start" />
                    <h2 className="ml-[280px] mb-[20px] flex space-around justify-start text-primary font-medium font-inter text-[24px]">Basic Differentiation Rules</h2>
                    <BasicDeriv className="ml-[110px] mb-[420px] flex space-around justify-end" />
                </div>
                <div className='z-20'>
                    <h2 className="mr-[200px] mt-[80px] mb-[20px] justify-center flex space-around text-primary font-medium font-inter text-[24px]">Basic Differentiation Rules</h2>
                    <BasicDeriv className="mr-[116px] mb-[153px] flex space-around justify-start" />
                    <h2 className="mr-[200px] mb-[20px] flex space-around justify-center text-primary font-medium font-inter text-[24px]">Basic Differentiation Rules</h2>
                    <BasicDeriv className="flex space-around justify-end" />
                </div>
            
            </div>
            <HeroBg className="-mt-[600px] m-auto z-0" />
        </>
    );
}

export default Cheatsheets;
