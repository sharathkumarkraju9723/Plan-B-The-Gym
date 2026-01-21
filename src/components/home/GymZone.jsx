import { useState } from "react";
import JoinToday from "../forms/JoinToday";
import bgImg from "../../assets/home/crossfit/crossfit-zone.png";

export default function GymZone() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <section
        className="relative h-[60vh]  bg-center  bg-contain bg-no-repeat"
        style={{ backgroundImage: `url(${bgImg})` }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/60"></div>

        {/* Content */}
        <div className="relative z-10 h-full flex items-center justify-center text-center">
          <div>
            <p className="text-white uppercase tracking-widest text-lg mb-3">
              Experience the fitness in PLAN B
            </p>

            <h2 className="text-white uppercase font-semibold italic text-3xl md:text-6xl">
              Spacious & Confortable <br /> Training Zone
            </h2>

            <button
              onClick={() => setOpen(true)}
              className="mt-6 sm:w-auto bg-[#2F6F5F] px-8 py-3  border border-white text-white uppercase font-bold rounded-xl transition-all duration-300 hover:bg-white  hover:text-[#2F6F5F] hover:scale-105 active:bg-white active:text-black active:scale-95">
              Join PLAN B Today
            </button>

            <p className="mt-6 text-gray-100 uppercase tracking-widest text-sm mb-3">
              Explore flexible membership plans designed for your  fitness goals
            </p>
          </div>
        </div>
      </section>
      {open && (
        <JoinToday
          isOpen={open}
          onClose={() => setOpen(false)}
        />
      )}
    </>
  );
}
