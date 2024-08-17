import Image from "next/image";
import { Inter } from "next/font/google";
import Landing from "@/components/Landing/Landing";
import Navbar from "@/components/Navbar/Navbar";
import PreFooterSection from "@/components/Footer/PreFooterSection";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className="min-h-screen relative overflow-x-hidden w-full bg-white">
      <div className="min-h-screen">
        <div className="mx-auto justify-center px-4 sm:px-6 lg:px-16 bg-white text-slate-600">
          <div className="mx-auto flex flex-col w-full lg:max-w-7xl">
            <Navbar/>
            <Landing/>
          </div>
        </div>
        <PreFooterSection/>
        <div className="footer max-w-6xl mx-auto">

        </div>
      </div>
    </main>
  );
}
