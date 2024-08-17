import Image from "next/image";
import React from "react";

const PreFooterSection = () => {
  return (
    <div className="w-full my-8 px-4 sm:px-6 lg:px-16 flex items-center justify-center lg:mt-32">
      <div className="max-w-6xl">
        <div className="bg-ctx-blue w-full rounded-md grid grid-cols-5 overflow-clip">
          <div className="flex flex-col justify-center md:col-span-2 col-span-3 z-10 py-4 px-2">
            <div className="flex justify-center">
              <div className="flex flex-col gap-4">
                <div className="flex flex-col sm:text-xl text-sm text-white font-semibold leading-snug text-balance">
                  <span>Measure &amp; Improve LLM</span>
                  <span>Product Performance.</span>
                </div>
                <a
                  className="sm:py-1.5 sm:px-4 py-1 px-4 w-fit text-blue-900 sm:text-sm text-xs rounded-md flex items-center gap-2 border-ctx-blue bg-white text-center"
                  href="https://with.context.ai"
                >
                  Get Started
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    aria-hidden="true"
                    className="w-4 h-4"
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
          <div className="relative scale-[1.6] md:col-span-3 col-span-2 flex items-center">
            <div>
              <div className="absolute bg-gradient-to-l from-transparent to-80% to-ctx-blue w-[40%] h-full"></div>
              <div className="">
                <Image
                  className=""
                  src="https://with.context.ai/assets/marketing/footer_background-8b323fecd4b9f63d62bad222afae693a220ac66fd1bdc3c9837683aade6cf044.svg"
                  alt="footerbackground"
                  layout="responsive"
                  width={500}
                  height={300}
                  objectFit="contain"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PreFooterSection;
