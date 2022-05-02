import React from 'react'
import Navbar from '../Layouts/Navbar'
import FunctionsMenu from '../Layouts/FunctionsMenu'

const ContactUs = ({toggle, isOpen}) => {
  return (
    <div>
        <Navbar toggle={toggle} />
        {isOpen ? <FunctionsMenu /> : ""} 
        <h1 className="text-center text-white text-5xl">This is <span>CONTACT US</span> Page</h1>

    </div>
  )
}

export default ContactUs;