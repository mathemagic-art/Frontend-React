import React from 'react';
import Navbar from '../Layouts/Navbar';
import FunctionsMenu from '../Layouts/FunctionsMenu';
import { ReactComponent as HeroBg } from "../Files/svgs/HeroBG.svg";
import { ReactComponent as ConsRule } from "../Files/svgs/constantrule.svg";
import { ReactComponent as MultRule } from "../Files/svgs/multiplerule.svg";
import { ReactComponent as PowRule } from "../Files/svgs/powerrule.svg";
import { ReactComponent as SumRule } from "../Files/svgs/sumrule.svg";
import { ReactComponent as DifferenceRule } from "../Files/svgs/differencerule.svg";
import { ReactComponent as ProductRule } from "../Files/svgs/productrule.svg";
import { ReactComponent as QuotientRule } from "../Files/svgs/quotientrule.svg";
import { ReactComponent as ChainRule } from "../Files/svgs/chainrule.svg";
import { ReactComponent as MidRule } from "../Files/svgs/midrule.svg";
import { ReactComponent as  TrapRule } from "../Files/svgs/traprule.svg";
import { ReactComponent as SimpRule } from "../Files/svgs/simprule.svg";
import { ReactComponent as PowerRule } from "../Files/svgs/powruke.svg";
import { ReactComponent as ExponRule } from "../Files/svgs/exponrule.svg";
import { ReactComponent as ExponenRule } from "../Files/svgs/exponenrule1.svg";
import { ReactComponent as TrigRule } from "../Files/svgs/trigrule.svg";
import { ReactComponent as TrigRule1 } from "../Files/svgs/trigrule1.svg";
import { ReactComponent as InverseRule } from "../Files/svgs/inverserulesvg";
import { ReactComponent as InverseRule1 } from "../Files/svgs/inverserule1.svg";
import { ReactComponent as TaylsRule } from "../Files/svgs/tayls1.svg";
import { ReactComponent as MacsRule } from "../Files/svgs/macs1.svg";



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
                        <h4 className="ml-[40px] mt-[45px] mb-[25px] text-[18px] font-medium text-tx dark:text-primary font-inter ">Constant Rule: <ConsRule className="dark:fill-white fill-black flex flex-row ml-[130px] -mt-7"/> </h4>
                        <h4 className="ml-[40px] mb-[20px] text-[18px] font-medium text-tx dark:text-primary font-inter ">Constant Multiple Rule: <MultRule className="flex flex-row ml-[200px] -mt-7"/> </h4>
                        <h4 className="ml-[40px] mb-[20px] text-[18px] font-medium text-tx dark:text-primary font-inter ">Power Rule:<PowRule className="flex flex-row ml-[110px] -mt-7"/></h4>
                        <h4 className="ml-[40px] mb-[20px] text-[18px] font-medium text-tx dark:text-primary font-inter ">Sum Rule:<SumRule className="flex flex-row ml-[95px] -mt-7"/></h4>
                        <h4 className="ml-[40px] mb-[20px] text-[18px] font-medium text-tx dark:text-primary font-inter ">Difference Rule: <DifferenceRule className="flex flex-row ml-[140px] -mt-7"/></h4>
                        <h4 className="ml-[40px] mb-[20px] text-[18px] font-medium text-tx dark:text-primary font-inter ">Product Rule: <ProductRule className="flex flex-row ml-[115px] -mt-7" /></h4>
                        <h4 className="ml-[40px] mb-[20px] text-[18px] font-medium text-tx dark:text-primary font-inter ">Quotient Rule: <QuotientRule className="flex flex-row ml-[125px] -mt-7" /></h4>
                        <h4 className="ml-[40px] mb-[45px] text-[18px] font-medium text-tx dark:text-primary font-inter ">Chain Rule:<ChainRule className="flex flex-row ml-[100px] -mt-7" /></h4>

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
