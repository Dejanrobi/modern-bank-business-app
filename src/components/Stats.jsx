import React from "react";
import { stats } from "../constants";
import styles from "../style";

const Stats = () => (
  <section className={`${styles.flexCenter} flex-row flex-wrap sm:mb-20 mb-6`}>
    {stats.map((stat) => (
      <div
        key={stat.id}
        className={`flex-1 flex justify-center items-center flex-row m-3 md:mb-0 mb-6`}
      >
        <h4
          className="font-poppins font-semibold sm:text-[40px] text-[25px] xs:leading-[53px]
        leading-[43px] text-white
        "
        >
          {stat.value}
        </h4>
        <p
          className="font-poppins font-normal sm:text-[20px] text-[15px] xs:leading-[26px]
        leading-[21px] text-gradient uppercase ml-3
        "
        >
          {stat.title}
        </p>
      </div>
    ))}
  </section>
);

export default Stats;
