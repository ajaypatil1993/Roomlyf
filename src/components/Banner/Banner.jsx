import React from "react";
import BannerPng from "../../assets/Banner.png";
import { motion } from "framer-motion";
import { SlideUp } from "../../animation/animation";

const Banner = () => {
  return (
    <div>
      <div className="container py-14">
        <div className="grid gride-cols-1 md:grid-cols-2 gap-10">
          {/* Image section */}
          <div className="flex flex-col justify-center">
            <motion.img
              initial={{ x: -100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              src={BannerPng}
              alt="banner"
              className="w-[95%] md:w-full mx-auto"
            />
          </div>
          {/* text section */}
          <div className="space-y-5 flex justify-center flex-col xl:max-w-[500px]">
            <motion.h1
              variants={SlideUp(0.2)}
              initial="initial"
              whileInView="animate"
              className="text-4xl font-bold font-serif"
            >
              We Believe that a team makes any project better
            </motion.h1>
            <motion.p
              variants={SlideUp(0.4)}
              initial="initial"
              whileInView="animate"
              className="text-gray-500 text-sm leading-7"
            >
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sunt
              harum debitis odit nostrum quis, provident, eos iusto
            </motion.p>
            <div>
              <motion.button
                variants={SlideUp(0.6)}
                initial="initial"
                whileInView="animate"
                className=" text-sm font-semibold lg:text-base border-[1px] bg-black text-white border-black px-4 py-2 shadow-[5px_5px_0px_0px_#6c6c6c] hover:bg-white hover:text-black duration-300 hover:shadow-[5px_5px_0px_0px_#6c6c6c]"
              >
                Discover Now
              </motion.button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
