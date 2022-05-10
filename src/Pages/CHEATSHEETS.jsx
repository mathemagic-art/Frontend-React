import React from 'react';
import Navbar from '../Layouts/Navbar';
import FunctionsMenu from '../Layouts/FunctionsMenu';
import { ReactComponent as HeroBg } from "../Files/svgs/HeroBG.svg";



const style = {
    box: "dark:bg-black bg-white dark:border-black ml-[116px] mb-[65px] flex space-around justify-start w-[647px] h-[463px] rounded-[30px] border-2 drop-shadow mr-[116px] ",
    topic_calc: "mt-[80px] ml-[280px] mb-[20px] flex space-around justify-start text-primary font-medium font-inter text-[24px]"
};    

function Cheatsheets({ toggle, isOpen }) {
    return (
        <>
            <Navbar toggle={toggle} />
            {isOpen ? <FunctionsMenu /> : ""}
            <div className='flex flex-row justify-between w-full h-full z-0'>
                <div className='z-0'>
                    <h2 className={style.topic_calc}>Basic Differentiation Rules</h2>
                    <div className={style.box + "flex flex-col dark:bg-opacity-80"}>
                        <h4 className="ml-[40px] mt-[45px] mb-[30px] text-[18px] font-medium text-tx dark:text-primary font-inter ">Constant Rule: </h4>
                        <h4 className="ml-[40px] mb-[20px] text-[18px] font-medium text-tx dark:text-primary font-inter ">Constant Multiple Rule:</h4>
                        <h4 className="ml-[40px] mb-[20px] text-[18px] font-medium text-tx dark:text-primary font-inter ">Power Rule:</h4>
                        <h4 className="ml-[40px] mb-[20px] text-[18px] font-medium text-tx dark:text-primary font-inter ">Sum Rule:</h4>
                        <h4 className="ml-[40px] mb-[20px] text-[18px] font-medium text-tx dark:text-primary font-inter ">Difference Rule:</h4>
                        <h4 className="ml-[40px] mb-[20px] text-[18px] font-medium text-tx dark:text-primary font-inter ">Product Rule:</h4>
                        <h4 className="ml-[40px] mb-[20px] text-[18px] font-medium text-tx dark:text-primary font-inter ">Quotient Rule:</h4>
                        <h4 className="ml-[40px] mb-[45px] text-[18px] font-medium text-tx dark:text-primary font-inter ">Chain Rule:</h4>

                    </div> 
                    <h2 className={style.topic_calc}>Basic Differentiation Rules</h2>
                    <div className={style.box + "bg-opacity-95 dark:bg-opacity-80"}></div>
                </div>
                <div className='z-20'>
                    <h2 className={style.topic_calc}>Basic Differentiation Rules</h2>
                    <div className={style.box + "dark:bg-opacity-80"}></div> 
                    <h2 className={style.topic_calc}>Basic Differentiation Rules</h2>
                    <div className={style.box+ "bg-opacity-95 dark:bg-opacity-80"}></div>
                </div>
            
            </div>
            <HeroBg className="-mt-[205px] mb-[165px] m-auto z-0" />
        </>
    );
}
export default Cheatsheets;
