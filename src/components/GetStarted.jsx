import React from "react";
import styles from "../style";
import { arrowUp } from "../assets";

const GetStarted = () => {
  return (
    <div
      className={`${styles.flexCenter} w-[130px] h-[130px] rounded-full bg-blue-gradient
      p-[2px] cursor-pointer z-[7]

      `}
    >
      <div
        className={`${styles.flexCenter} flex-col bg-primary w-[100%] h-[100%]
      rounded-full
      `}
      >
        <div className={`${styles.flexStart} flex flex-col`}>
          <p className="flex flex-row font-poppins font-medium text-[18px] leading-[23px]">
            <span className="text-gradient pr-1">Get</span>
            <img
              src={arrowUp}
              classNamew="w-[23px] h-[23px] object-contain"
              alt="arrow"
            />
          </p>

          <p className="flex flex-row font-poppins font-medium text-[18px] leading-[23px] text-gradient">
            Started
          </p>
        </div>
      </div>
    </div>
  );
};

export default GetStarted;
