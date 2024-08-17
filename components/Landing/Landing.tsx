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
      <div className="pt-8 grid grid-cols-16 items-center max-w-7xl">
        <Hero></Hero>
      </div>
      <div className="section flex flex-col items-center gap-4">
        <TrustedBy />
      </div>
      <div className="section flex flex-col items-center gap-12">
        <Features />
      </div>
      <div className="flex flex-col items-center gap-4 justify-center">
        <Video />
      </div>
      <div className="flex flex-col items-center gap-4">
        <GettingStarted />
      </div>
      <div className="border rounded shadow w-full py-8 lg:px-32 max-w-md lg:max-w-5xl px-8 pb-12">
        <Enterprise />
      </div>
      <div className="section flex flex-col items-center gap-4">
        <Press />
      </div>
      <div className="flex flex-col items-center gap-8">
        <Testimonial />
      </div>
    </div>
  );
};

export default Landing;
