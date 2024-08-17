import {
  algolia,
  cognosys,
  hasbro,
  juicebox,
  lenny,
  robinai,
} from "@/public/assets";
import Image from "next/image";
import React from "react";

const TrustedBy = () => {
  return (
    <div>
      <div className="flex flex-col items-center gap-4">
        <div className="uppercase text-slate-500 tracking-widest text-sm font-semibold">
          Trusted By
        </div>
        <div className="h-[229px] xl:h-[108.75px]">
        <div className="grid grid-cols-2 gap-4 place-items-center justify-center items-center xl:flex xl:gap-10 xl:flex-row flex-col h-full">
          <div className="w-40 h-full lg:mt-1 relative">
            <Image
              className="absolute"
              src={algolia}
              alt="algolia"
              layout="intrinsic"
              objectFit="cover"
            />
          </div>
          <div className="w-24 h-full -mt-12 relative">
            <Image
              className="absolute"
              src={hasbro}
              alt="hasbro"
              layout="intrinsic"
              objectFit="cover"
            />
          </div>
          <div className="w-48 h-full relative">
            <Image
              className="absolute"
              src={robinai}
              alt="robinai"
              layout="intrinsic"
              objectFit="cover"
            />
          </div>
          <div className="w-36 mt-1 h-full relative">
            <Image
              className="absolute"
              src={cognosys}
              alt="cognosys"
              layout="intrinsic"
              objectFit="cover"
            />
          </div>
          <div className="w-32 lg:mt-0 h-full relative">
            <Image
              className="absolute"
              src={juicebox}
              alt="juicebox"
              layout="intrinsic"
              objectFit="cover"
            />
          </div>
          <div className="w-36 h-full relative">
            <Image
              className="absolute"
              src={lenny}
              alt="lenny"
              layout="intrinsic"
              objectFit="cover"
            />
          </div>
        </div>

        </div>
        
      </div>
    </div>
  );
};

export default TrustedBy;