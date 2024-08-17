import React from "react";
import Hero from "./Hero";
import TrustedBy from "./TrustedBy";
import Features from "./Features";
import Video from "./Video";
import GettingStarted from "./GettingStarted";
import Enterprise from "./Enterprise";
import Press from "./Press";
import Testimonial from "./Testimonial";
import { motion } from "framer-motion";

const Landing = () => {
  return (
    <div className="flex text-slate-700 flex-col items-center gap-16 lg:gap-32">
      <Hero />
      <motion.div
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="w-[188%] lg:h-[80%] lgl:h-full xl:h-[200%]"
      >
        <TrustedBy />
      </motion.div>

      <Features />
      <Video />
      <GettingStarted />
      <Enterprise />
      <Press />
      <Testimonial />
    </div>
  );
};

export default Landing;
