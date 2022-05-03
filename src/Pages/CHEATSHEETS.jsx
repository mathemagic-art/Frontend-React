import React from 'react'
import Navbar from '../Layouts/Navbar'
import FunctionsMenu from '../Layouts/FunctionsMenu';


function Cheatsheets({ toggle, isOpen }) {
    return (
        <div>
            <Navbar toggle={toggle} />
            {isOpen ? <FunctionsMenu /> : ""}
            <div className='flex justify-between mx-32 my-20'>
                <div className='flex flex-col'>

                    <h2 className="text-center mt-10 mb-4 text-3xl font-primary text-primary">Basic Differentiation Rules</h2>
                    <div className="flex border-2 w-[647px] h-[463px] mb-20 rounded-3xl text-white px-10 bg-dark bg-opacity-30"></div>
                    <h2 className="text-center mt-20 mb-4  text-3xl font-primary text-primary">Basic Differentiation Rules</h2>
                    <div className="flex border-2 w-[647px] h-[463px] rounded-3xl text-white px-10 bg-dark bg-opacity-30 mb-20"></div>
               </div>
               <div className='flex flex-col'>
               <h2 className="text-center mt-10 mb-4 text-3xl font-primary text-primary">Basic Integration Rules</h2>
                <div className="flex border-2 w-[647px] mb-20 h-[463px] rounded-3xl text-white px-10 bg-dark bg-opacity-30"></div>
                <h2 className="text-center mt-20 mb-4 text-3xl font-primary text-primary">Basic Limit Rules</h2>
                <div className="flex border-2 w-[647px] h-[463px] rounded-3xl text-white px-10 bg-dark bg-opacity-30"></div>
               </div>

            </div>
        </div>
    );
}

export default Cheatsheets;