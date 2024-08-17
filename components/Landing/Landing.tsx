import React from "react";
import Hero from "./Hero";
import TrustedBy from "./TrustedBy";
import Features from "./Features";
import Video from "./Video";
import GettingStarted from "./GettingStarted";
import Enterprise from "./Enterprise";
import Press from "./Press";
import Testimonial from "./Testimonial";

const Landing = () => {
  return (
    <div className="flex text-slate-700 flex-col items-center gap-16 lg:gap-32">
      <Hero />
      <TrustedBy />

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
