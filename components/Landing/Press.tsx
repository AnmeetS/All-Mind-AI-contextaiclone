import { yahoo } from "@/public/assets";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Press = () => {
  return (
    <div className="section flex flex-col items-center gap-4">
      <div className="uppercase text-slate-500 tracking-widest font-semibold text-sm">
        Recently featured in
      </div>

      <div className="grid grid-cols-2 gap-4 place-items-center justify-center items-center xl:flex xl:gap-10 xl:flex-row flex-col grayscale opacity-30">
        <Link href="https://www.theinformation.com/articles/pro-weekly-the-openai-drama-spurs-soul-searching-at-ai-startups">
          <Image
            className="md:max-w-64 max-w-36"
            src="https://with.context.ai/assets/marketing/press/the_information-95c3c8b91bde3cf974c49b3c3fc74f421cf9e2edd3f9a96800bd0054507429c7.svg"
            alt="theinfo"
            layout="responsive"
            width={500}
            height={300}
            objectFit="contain"
          />
        </Link>{" "}
        <Link href="https://techcrunch.com/2023/08/30/context-ai-is-merging-product-analytics-sensibilities-with-llms/">
          <Image
            className="md:max-w-20 max-w-16"
            src="https://with.context.ai/assets/marketing/press/techcrunch-c4600e2d07d4c2a62202fc7420c364745123fffd6967d6bd9f639e51f3a91e67.svg"
            alt="techcrunch"
            layout="responsive"
            width={500}
            height={300}
            objectFit="contain"
          />
        </Link>{" "}
        <Link href="https://tech.eu/2023/08/30/contextai-secures-3-5m-funding/">
          <Image
            className="md:max-w-20 max-w-16"
            src="https://with.context.ai/assets/marketing/press/techeu-486457d5fe9842f768b7cffe2c5a7767b194d169e4b729b270392f8ccb985db8.svg"
            alt="techeu"
            layout="responsive"
            width={500}
            height={300}
            objectFit="contain"
          />
        </Link>{" "}
        <Link
          className="hidden md:block"
          href="https://venturebeat.com/ai/context-raises-3-5m-to-elevate-llm-apps-with-detailed-analytics/"
        >
          <Image
            src="https://with.context.ai/assets/marketing/press/venturebeat-203be44011c6523308e2b474ca06b9417db53297557fd01469bdc885468a5466.svg"
            alt="venturebeat"
            layout="responsive"
            width={500}
            height={300}
            objectFit="contain"
          />
        </Link>{" "}
        <Link href="https://finance.yahoo.com/news/context-ai-raises-3-5m-140000311.html">
          <Image
            className="md:max-w-36 max-w-24 min-w-24"
            src={yahoo}
            alt="yahoo"
            layout="responsive"
            width={500}
            height={300}
            objectFit="contain"
          />
        </Link>{" "}
      </div>
    </div>
  );
};

export default Press;
