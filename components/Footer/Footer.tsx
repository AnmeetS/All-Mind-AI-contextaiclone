import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <div className="footer max-w-6xl mx-auto">
      <div className="flex justify-between items-center py-4 border-t whitespace-nowrap flex-wrap gap-4">
        <div className="flex items-center gap-4">
          <Image
            className="max-w-4 min-w-4 hover:rotate-180 transition-all duration-200"
            src="https://with.context.ai/assets/logo-a21fdf404614f829709f33a78567d99244a787c8af7d9b4451b68e298435ffb7.svg"
            alt="logo"
            layout="responsive"
            width={500}
            height={300}
            objectFit="contain"
          />
          <span className="text-sm text-slate-600">© 2023-2024 Context</span>
        </div>
        <div className="items flex items-center gap-x-8 text-sm flex-wrap text-black">
          <Link href="https://context.ai/terms">Terms and Conditions</Link>
          <Link href="https://context.ai/privacy">Privacy Policy</Link>
          <Link href="https://context.ai/compare/gpt-3-5-turbo/gpt-4-turbo-preview">
            <div className="flex items-center gap-1 rounded text-ctx-blue border-rounded border border-ctx-blue p-2 shadow-sm">
              Compare Models
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
            </div>
          </Link>{" "}
        </div>
      </div>
    </div>
  );
};

export default Footer;
