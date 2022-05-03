import React from "react";
import Navbar from "../Layouts/Navbar";
import FunctionsMenu from "../Layouts/FunctionsMenu";
import { ReactComponent as HeroBg } from "../Files/svgs/HeroBG.svg";
const ContactUs = ({ toggle, isOpen }) => {
  return (
    <div className="bg-white text-dark h-full w-full flex flex-col text-center  dark:bg-dark dark:text-white pb-20">
      <Navbar toggle={toggle} />
      {isOpen ? <FunctionsMenu /> : ""}
      <h2 className="font-primary text-5xl tracking-wide leading-tight mt-16 mb-10">
        Send us a message <br /> and we'll get ball rolling
      </h2>
      <form
        action="#"
        className="grid w-2/5 m-auto p-12 bg-white dark:bg-black rounded-3xl shadow-xl border-2 grid-cols-2 gap-8 justify-center items-center z-10 bg-opacity-90 dark:border-black dark:bg-opacity-80 bg-blur-md"
      >
        <input
          type="text"
          placeholder="Name"
          className="py-2 px-4 border-2 dark:border-border text-dark dark:text-white dark:bg-black rounded-lg"
        />
        <input
          type="text"
          placeholder="Surname"
          className="py-2 px-4 border-2 text-dark dark:border-border dark:text-white dark:bg-black rounded-lg"
        />
        <input
          type="email"
          placeholder="Email"
          className="py-2 px-4 border-2 text-dark dark:border-border dark:text-white dark:bg-black rounded-lg"
        />
        <input
          type="text"
          placeholder="Number"
          className="py-2 px-4 border-2 text-dark dark:border-border dark:text-white dark:bg-black rounded-lg"
        />
        <textarea
          name="message"
          placeholder="Enter your message..."
          id="message"
          cols="30"
          rows="10"
          className="py-2 px-4 border-2 dark:border-border text-dark dark:text-white dark:bg-black rounded-lg col-span-2"
        />
        <button className=" py-2 bg-primary w-[8rem] rounded-lg text-white place-self-end hover:bg-white hover:text-dark">
          Cancel
        </button>
        <button className=" py-2 bg-white border-2 w-[8rem] rounded-lg text-black hover:bg-primary hover:text-white dark:hover:border-primary">
          Send
        </button>
      </form>
      <HeroBg className="-mt-[20%] m-auto z-0" />
    </div>
  );
};

export default ContactUs;