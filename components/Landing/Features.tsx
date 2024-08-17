import { analyticsnippet, evalsnippet } from "@/public/assets";
import Image from "next/image";
import React from "react";

const Features = () => {
  return (
    <div className="section flex flex-col items-center gap-12">
      <div className="grid lg:grid-cols-2 max-w-md lg:max-w-4xl gap-8">
        <div className="rounded shadow border p-8 flex flex-col gap-4 justify-between">
          <div className="text">
            <div className="text-lg font-semibold mb-4">
              <span className="text-ctx-blue">
                Learn How People Use Your Product
              </span>
            </div>

            <div className="prose-sm">
              <p>
                Segment user inputs into subgroups, detecting user intents and
                trends in behaviors.
              </p>
            </div>
          </div>
          <div className="w-full">
            <Image
              src={evalsnippet}
              alt="evalsnippet"
              layout="responsive"
              width={500}
              height={300}
              objectFit="contain"
            />
          </div>
        </div>
        <div className="rounded shadow border p-8 flex flex-col gap-4 justify-between">
          <div className="text">
            <div className="text-lg font-semibold mb-4">
              <span className="text-ctx-blue">
                Measure Success from User Signals
              </span>
            </div>

            <div className="prose-sm">
              <p className="textprose-sm">
                Track performance with implicit and explicit user feedback
                signals to identify areas for improvement.
              </p>
            </div>
          </div>
          <div className="rounded overflow-hidden ">
            <Image
              src={analyticsnippet}
              alt="analyticsnippet"
              layout="responsive"
              width={500}
              height={300}
              objectFit="contain"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;