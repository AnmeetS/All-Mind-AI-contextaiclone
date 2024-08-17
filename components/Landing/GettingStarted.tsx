import { step1, step2, step3 } from "@/public/assets";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const GettingStarted = () => {
  return (
    <div className="flex flex-col items-center gap-4">
      <div className="text-4xl text-center max-w-2xl font-semibold text-balance">
        Understand user behavior in production
      </div>

      <div className="flex flex-col">
        <div className="grid grid-cols-11 gap-4">
          <div className="col-span-5 py-4 hidden lg:block">
            <Image
              src={step1}
              alt="step 1"
              layout="responsive"
              width={500}
              height={300}
              objectFit="contain"
            />
          </div>
          <div className="col-span-1 flex justify-center relative">
            <div className="w-0.5 bg-gradient-to-t from-90% from-slate-200 to-transparent h-full "></div>
            <div className="rounded-full bg-blue-100 absolute top-12 w-4 h-4"></div>
          </div>
          <div className="col-span-10 lg:col-span-5 py-11">
            <div className="font-semibold">
              1. Ingest transcripts in less than 30 minutes
            </div>

            <div className="prose-sm">
              <p>
                Integrate using our SDKs, or send transcripts directly via the
                API.
              </p>
              <div className="flex">
                <Link
                  className="rounded flex items-center gap-2 text-ctx-blue border-ctx-blue p-2 border shadow text-center transform transition-transform duration-200 hover:scale-105 hover:bg-blue-100"
                  href="https://docs.context.ai"
                >
                  Learn more
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    aria-hidden="true"
                    className="w-4"
                  >
                    <path
                      fillRule="evenodd"
                      d="M12.97 3.97a.75.75 0 011.06 0l7.5 7.5a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 11-1.06-1.06l6.22-6.22H3a.75.75 0 010-1.5h16.19l-6.22-6.22a.75.75 0 010-1.06z"
                      clipRule="evenodd"
                    />
                  </svg>
                </Link>{" "}
              </div>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-11 gap-4">
          <div className="hidden lg:block col-span-5 py-4">
            <Image
              src={step2}
              alt="step2"
              layout="responsive"
              width={500}
              height={300}
              objectFit="contain"
            />
          </div>
          <div className="col-span-1 flex justify-center relative">
            <div className="border h-full"></div>
            <div className="rounded-full bg-blue-100 absolute top-12 w-4 h-4"></div>
          </div>
          <div className="col-span-10 lg:col-span-5 py-11">
            <div className="font-semibold">
              2. Group conversations into categories
            </div>

            <div className="prose-sm">
              <p>
                Use an LLM to group conversations into relevant categories.
                Context.ai suggests relevant clusters of conversations too,
                helping you uncover hidden behavior patterns.
              </p>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-11 gap-4">
          <div className="hidden lg:block col-span-5 py-4">
            <Image
              src={step3}
              alt="step3"
              layout="responsive"
              width={500}
              height={300}
              objectFit="contain"
            />
          </div>
          <div className="col-span-1 flex justify-center relative">
            <div className="w-0.5 bg-gradient-to-b from-80% from-slate-200 to-transparent h-full"></div>
            <div className="rounded-full bg-blue-100 absolute top-12 w-4 h-4"></div>
          </div>
          <div className="col-span-10 lg:col-span-5 py-11">
            <div className="font-semibold">
              3. Identify and resolve poor experiences
            </div>
            <div className="prose-sm">
              <p>
                Understand why users are having good or bad experiences. Search
                and filter by signs of user satisfaction to understand how you
                can improve their experiences.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GettingStarted;
