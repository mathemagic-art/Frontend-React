import React, { useState } from "react";
import Navbar from "../Layouts/Navbar";
import FunctionsMenu from "../Layouts/FunctionsMenu";
import { ReactComponent as HeroBg } from "../Files/svgs/HeroBG.svg";
import { send } from "emailjs-com";
const ContactUs = () => {
  const [toSend, setToSend] = useState({
    name: "",
    surname: "",
    email: "",
    number: "",
    message: "",
  });
  const onSubmit = (e) => {
    e.preventDefault();
    send("service_hawx44n", "template_dyu1o6v", toSend, "Vp2nB-WOSzwvwq9du")
      .then((response) => {
        console.log("SUCCESS!", response.status, response.text);
      })
      .catch((err) => {
        console.log("FAILED...", err);
      });
    cleanUp();
  };
  const cleanUp = () => {
    setToSend({
      name: "",
      surname: "",
      email: "",
      number: "",
      message: "",
    });
  };
  const handleChange = (e) => {
    setToSend({ ...toSend, [e.target.name]: e.target.value });
  };
  return (
    <div className="bg-white text-dark h-full w-full flex flex-col text-center  dark:bg-dark dark:text-white pb-20">
      <Navbar />
      <FunctionsMenu />
      <h2 className="font-primary text-5xl tracking-wide leading-tight mt-16 mb-10">
        Send us a message <br /> and we'll get ball rolling
      </h2>
      <form
        onSubmit={onSubmit}
        action="#"
        className="backdrop-blur-sm grid w-2/5 m-auto p-12 bg-white dark:bg-black rounded-3xl shadow-xl border-2 grid-cols-2 gap-8 justify-center items-center z-10 bg-opacity-90 dark:border-black dark:bg-opacity-80 bg-blur-md"
      >
        <input
          placeholder="Name"
          className="py-2 px-4 border-2 dark:border-border text-dark dark:text-white dark:bg-black rounded-lg"
          type="text"
          name="name"
          value={toSend.name}
          onChange={handleChange}
        />
        <input
          type="text"
          placeholder="Surname"
          className="py-2 px-4 border-2 text-dark dark:border-border dark:text-white dark:bg-black rounded-lg"
          name="surname"
          value={toSend.surname}
          onChange={handleChange}
        />
        <input
          type="email"
          placeholder="Email"
          className="py-2 px-4 border-2 text-dark dark:border-border dark:text-white dark:bg-black rounded-lg"
          name="email"
          value={toSend.email}
          onChange={handleChange}
        />

        <input
          type="text"
          placeholder="Number"
          name="number"
          className="py-2 px-4 border-2 text-dark dark:border-border dark:text-white dark:bg-black rounded-lg"
          value={toSend.number}
          onChange={handleChange}
        />
        <textarea
          name="message"
          placeholder="Enter your message..."
          id="message"
          cols="30"
          rows="10"
          className="py-2 px-4 border-2 dark:border-border text-dark dark:text-white dark:bg-black rounded-lg col-span-2"
          value={toSend.message}
          onChange={handleChange}
        />
        <button
          className=" py-2 bg-primary border-2 border-primary w-[8rem] rounded-lg text-white place-self-end hover:bg-white hover:text-dark"
          onClick={cleanUp}
        >
          Cancel
        </button>
        <button
          className=" py-2 bg-white border-2 w-[8rem] rounded-lg text-black hover:bg-primary hover:text-white dark:hover:border-primary"
          type="submit"
        >
          Send
        </button>
      </form>
      <HeroBg className="-mt-[20%] m-auto z-0" />
    </div>
  );
};

export default ContactUs;
