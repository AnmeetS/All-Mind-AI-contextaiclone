import Image from "next/image";
import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <div className="max-w-6xl flex justify-between items-center py-4 border-b min-w-0">
      <div className="w-4 lg:w-28 gap-x-8">
        <div className="lg:block hidden w-full">
          <Link href="/">
            <Image
              src="https://with.context.ai/assets/full_logo-d7c8d4f1d8637fe46c18bfe516ff24f0e7054bf429df4621ef78fa279e4f1a53.svg"
              alt="context ai logo full"
              layout="responsive"
              width={500}
              height={300}
              objectFit="contain"
            />
          </Link>{" "}
        </div>
        <div className="lg:hidden w-full block shrink-0">
          <Link href="/">
            <Image
              src="https://with.context.ai/assets/logo-a21fdf404614f829709f33a78567d99244a787c8af7d9b4451b68e298435ffb7.svg"
              alt="context ai logo"
              layout="responsive"
              width={500}
              height={300}
              objectFit="contain"
            />
          </Link>{" "}
        </div>
      </div>
      <div className="items flex items-center gap-x-8 text-sm whitespace-nowrap min-w-0 flex-wrap">
        <div className="flex items-center gap-x-4 lg:gap-x-8">
          <Link
            className="hover:text-ctx-blue"
            href="https://context.ai/pricing"
          >
            Pricing
          </Link>
          <Link className="hover:text-ctx-blue" href="https://context.ai/about">
            About Us
          </Link>
          <Link className="hover:text-ctx-blue" href="https://blog.context.ai">
            Blog
          </Link>
          <Link className="hover:text-ctx-blue" href="https://docs.context.ai">
            Docs
          </Link>
        </div>
        <div className="items-center gap-x-4 lg:flex hidden">
          <Link
            className="px-3 py-2 rounded flex items-center gap-2 text-ctx-blue border-ctx-blue p-2 border shadow w-full text-center transform transition-transform duration-200 hover:scale-105 hover:bg-blue-100"
            href="https://context.ai/demo"
          >
            Book a demo
          </Link>{" "}
          <Link
            className="px-3 py-2 rounded flex items-center gap-1 text-white border-ctx-blue bg-ctx-blue border shadow w-full text-center transform transition-transform duration-200 hover:scale-105 hover:bg-blue-700"
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
                fillRule="evenodd"
                d="M12.97 3.97a.75.75 0 011.06 0l7.5 7.5a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 11-1.06-1.06l6.22-6.22H3a.75.75 0 010-1.5h16.19l-6.22-6.22a.75.75 0 010-1.06z"
                clipRule="evenodd"
              />
            </svg>
          </Link>{" "}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
