import { soc2 } from "@/public/assets";
import Image from "next/image";
import React from "react";

const Enterprise = () => {
  return (
    <div className="border rounded shadow w-full py-8 lg:px-32 max-w-md lg:max-w-5xl px-8 pb-12">
      <div className="flex flex-col gap-4 items-center">
        <div className="uppercase text-slate-500 tracking-widest text-sm font-semibold">
          Enterprise
        </div>

        <div className="text-3xl text-center w-full font-semibold mb-8">
          Trust and Security for Enterprise
        </div>

        <div className="flex justify-start w-full gap-10 items-center">
          <Image
            className="max-w-32 hidden lg:block"
            src={soc2}
            alt="soc2"
            layout="responsive"
            width={128}
            height={300}
            objectFit="contain"
          />
          <div className="flex lg:flex-row flex-col items-start gap-12 min-w-0">
            <div className="">
              <div className="font-semibold mb-2">SOC 2 Compliant</div>
              <div className="prose-sm">
                Context.ai is SOC 2 Type II compliant, so you can have
                confidence your data is handled with the highest levels of
                security.
              </div>
            </div>
            <div className="">
              <div className="font-semibold mb-2">Self-Hosted Deployment</div>
              <div className="prose-sm">
                Context.ai offers a self-hosted option for customers with the
                strictest data residency requirements.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Enterprise;