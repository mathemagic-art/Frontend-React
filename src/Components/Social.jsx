import React from "react";
import { BsLinkedin } from "react-icons/bs";
import { GoMarkGithub } from "react-icons/go";

const Social = ({ linkedIn, GitHub }) => {
  return (
    <div className="flex justify-center py-3 gap-4 bg-white dark:bg-dark">
      <a href={GitHub} target="_blank">
        <GoMarkGithub className="h-[1.5rem] w-[1.5rem] hover:w-[2rem] hover:h-[2rem] ease-in duration-150" />
      </a>
      <a href={linkedIn} target="_blank">
        <BsLinkedin className="h-[1.5rem] w-[1.5rem] hover:w-[2rem] hover:h-[2rem] ease-in duration-150" />
      </a>
    </div>
  );
};
export default Social;
