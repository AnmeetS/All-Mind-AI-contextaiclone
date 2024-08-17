import Image from "next/image";

import React from "react";

const Hero = () => {
  return (
    <div>
      <div className="pt-8 grid grid-cols-16 items-center max-w-7xl">
        <div className="col-span-16 md:col-span-6">
          <div className="flex flex-col gap-4">
            <div className="flex flex-col font-semibold gap-1 text-slate-700">
              <div className="text-4xl text-balance">
                <span className="text-ctx-blue">Text Analytics</span>
                for LLM Products.
              </div>
            </div>

            <div className="prose text-slate-700 text-balance">
              <p>
                Context.ai helps you understand natural language in your LLM
                powered products.
              </p>
            </div>
            <div className="flex whitespace-nowrap">
              <div className="flex items-center gap-4 text-sm justify-start">
                <a
                  className="px-3 py-2 rounded flex items-center gap-2 text-ctx-blue border-ctx-blue p-2 border shadow w-full text-center"
                  href="/demo"
                >
                  Book a demo
                </a>{" "}
                <a
                  className="px-3 py-2 rounded flex items-center gap-1 text-white border-ctx-blue bg-ctx-blue border shadow w-full text-center"
                  href="https://with.context.ai"
                >
                  Get Started
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    aria-hidden="true"
                    className="w-4"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M12.97 3.97a.75.75 0 011.06 0l7.5 7.5a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 11-1.06-1.06l6.22-6.22H3a.75.75 0 010-1.5h16.19l-6.22-6.22a.75.75 0 010-1.06z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                </a>{" "}
              </div>
            </div>
          </div>
        </div>
        <div className="col-span-10 hidden md:block">
          <Image src="https://with.context.ai/assets/marketing/hero_evals_preview-99333b57fe6a926ce3be4269d8f2473dccd9e9e5a716bcc3bd5d64b759b526a2.svg" width={500} height={500} alt="heroevalpreview"  />
        </div>
      </div>
    </div>
  );
};

export default Hero;
