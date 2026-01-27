import { useState } from "react";
import heroBg from "../../assets/home/hero/hero-bg.jpg";
import FreeTrialModal from "../forms/FreeTrialModal";

export default function Hero() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* HERO */}
      <section
        className="relative w-full min-h-[70vh]  bg-center bg-contain flex items-center justify-center bg-section"
        style={{ backgroundImage: `url(${heroBg})` }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/60" />

        {/* CONTENT */}
        <div className="relative z-10 text-center px-4">
          <h1 className="uppercase italic font-extrabold tracking-tight text-textLight text-4xl sm:text-5xl md:text-6xl lg:text-7xl">
            Your <span className="text-textLight">Second</span> Chance
          </h1>

          <p className="mt-4 text-textLight/80 text-sm font-bold sm:text-xl">
            PLAN B THE GYM – MYSORE <br />
            Train Strong. Feel Confident. Live Healthy.
          </p>

          {/* CTA */}
          <button
            onClick={() => setOpen(true)}
            className="
              mt-6 px-8 py-3
              uppercase font-extrabold rounded-xl
              bg-btn text-textMain
              border border-buttonBorder
              transition-all duration-300
              hover:bg-btnHover hover:scale-105
            "
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
