import React from "react";
import { motion } from "framer-motion";
import { SlideUp } from "../../animation/animation";

const Newsletter = () => {
  return (
    <div className="max-w-[500px] mx-auto space-y-5 py-14">
      <motion.h1
        variants={SlideUp(0.2)}
        initial="initial"
        whileInView="animate"
        className="text-3xl font-bold font-serif text-center"
      >
        Subscribe to our newsletter
      </motion.h1>
      <motion.p
        variants={SlideUp(0.4)}
        initial="initial"
        whileInView="animate"
        className="max-w-[500px] max-auto text-gray-500 text-sm text-center"
      >
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Excepturi odit
        aut dolor nobis molestiae .
      </motion.p>

      {/* form */}
      <motion.div
        variants={SlideUp(0.6)}
        initial="initial"
        whileInView="animate"
        className="mt-10 flex justify-center"
      >
        <input
          type="text"
          placeholder="Enter your email"
          className="px-4 py-4 ring-1 ring-gray-300"
        />
        <button className="bg-black text-white px-6 py-4 uppercase">
          Subscribe
        </button>
      </motion.div>
    </div>
  );
};

export default Newsletter;
