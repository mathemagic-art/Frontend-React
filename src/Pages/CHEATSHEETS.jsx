import React from 'react'
import Navbar from '../Layouts/Navbar'
import FunctionsMenu from '../Layouts/FunctionsMenu';


function Cheatsheets({ toggle, isOpen }) {
    return (
        <div>
            <Navbar toggle={toggle} />
            {isOpen ? <FunctionsMenu /> : ""}
            <h2 className="text-left mt-10 ml-60 text-3xl font-primary text-primary">
              Basic Differentiation Rules
            </h2>
            <div className="ml-20 mt-5 border-2 w-[647px] h-[463px] rounded-3xl text-white p-10 bg-dark bg-opacity-30">
            <div className="space-between first-letter:mt-5 border-2 w-[647px] h-[463px] rounded-3xl text-white p-10 bg-dark bg-opacity-30 content-end">

            </div>
            </div>
        </div>
    );
}

export default Cheatsheets;