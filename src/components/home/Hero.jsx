import { useState } from "react";
import heroBg from "../../assets/home/hero/hero-bg.jpg";
import FreeTrialModal from "../forms/FreeTrialModal";

export default function Hero() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <section
        className="relative w-full min-h-[70vh] bg-no-repeat bg-center bg-contain flex items-center justify-center"
        style={{ backgroundImage: `url(${heroBg})` }}
      >
        <div className="absolute inset-0 bg-black/60"></div>

        <div className="relative z-10 text-center px-4">
          <h1 className="uppercase italic font-extrabold tracking-tight text-white text-4xl sm:text-5xl md:text-6xl lg:text-7xl">
            Your <span className="text-[#F5F1E8]">Second </span> Chance
          </h1>

          <p className="mt-4 text-gray-200 text-lg sm:text-xl">
            PLAN B THE GYM - MYSORE <br />
            Train Strong. Feel Confident. Live Healthy.
          </p>

          <button
            onClick={() => setOpen(true)}
            className="mt-6 bg-[#2F6F5F] px-8 py-3 border border-black text-white  hover:border  border-[#2F6F5F] uppercase font-bold rounded-xl transition-all hover:bg-white hover:text-[#2F6F5F] hover:scale-105"
          >
            Book Free Trial
          </button>
        </div>
      </section>

      {open && (
        <FreeTrialModal
          isOpen={open}
          onClose={() => setOpen(false)}
        />
      )}
    </>
  );
}
