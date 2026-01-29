import { useState } from "react";
import GroupScheduleModal from "../forms/GroupSchedule";
import TryFreeClass from "../forms/TryFreeClass";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";

import img1 from "../../assets/home/experience/tabata.jpg";
import img2 from "../../assets/home/experience/spin-class.jpg";
import img3 from "../../assets/home/experience/zumba-fitness.jpg";
import img4 from "../../assets/home/experience/yoga.jpg";
import img5 from "../../assets/home/experience/gym-1.jpg";
import img6 from "../../assets/home/experience/Strength-training.jpg";

const images = [
  { img: img1, title: "Tabata - High Intensity" },
  { img: img2, title: "Spin Class - Cardio Burn" },
  { img: img3, title: "Zumba - Dance Fitness" },
  { img: img4, title: "Yoga - Flexibility & Calm" },
  { img: img6, title: "Gym Basics - Beginner Friendly" },
  { img: img5, title: "Strength Training" },
];

export default function ExperienceWaves() {
  const [showSchedule, setShowSchedule] = useState(false);
  const [showForm, setShowForm] = useState(false);

  return (
    <>
      {/* section bg comes from global styles */}
      <section className="bg-section pt-16 pb-6">
        <div className="max-w-5xl mx-auto px-4 text-center">

          <h2 className="text-3xl uppercase italic font-extrabold text-textPrimary mb-2">
            Experience PLAN B THE GYM
          </h2>

          <p className="text-textSubtle text-lg  mb-10">
            High-energy group workout designed to build strength, flexibility, and confidence
          </p>

          <div className="relative">
            <button
              type="button"
              className="swiper-prev absolute left-2 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full select-none"
            >
              ❮
            </button>
            <button
              type="button"
              className="swiper-next absolute right-2 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full select-none"
            >
              ❯
            </button>

            <Swiper
              modules={[Navigation, Pagination]}
              navigation={{ prevEl: ".swiper-prev", nextEl: ".swiper-next" }}
              pagination={{ clickable: true }}
              loop
              centeredSlides
              slidesPerView="auto"
              spaceBetween={24}
            >
              {images.map(({ img, title }) => (
                <SwiperSlide key={title} className="!w-[520px] sm:!w-[620px]">
                  <div className="relative rounded-xl overflow-hidden">
                    <img
                      src={img}
                      alt={title}
                      className="w-full h-64 object-cover"
                    />
                    <div className="absolute inset-0 bg-" />
                    <h3 className="absolute bottom-4 left-1/2 -translate-x-1/2 text-textLight font-bold">
                      {title}
                    </h3>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

          {/* buttons use global silver styles */}
          <div className="mt-4 flex flex-col  items-center gap-4">
            <button className="mt-6 sm:w-auto bg-button px-6 py-3  border-buttonBorder text-textPrimary uppercase font-bold rounded-xl transition-all duration-300 hover:bg-buttonHover  hover:text-textPrimary hover:scale-105 active:bg-white active:text-black active:scale-95 "
              type="button"
              onClick={() => setShowSchedule(true)}
            >
              View Group Class Schedule
            </button>

            <button className="mt-4 sm:w-auto bg-button px-6 py-3  border-buttonBorder text-textPrimary uppercase font-bold rounded-xl transition-all duration-300 hover:bg-buttonHover  hover:text-textPrimary hover:scale-105 active:bg-white  active:scale-95"
              type="button"
              onClick={() => setShowForm(true)}
            >
              Try a Free Group Class
            </button>
          </div>

        </div>
      </section>

      <GroupScheduleModal
        isOpen={showSchedule}
        onClose={() => setShowSchedule(false)}
        onBook={() => {
          setShowSchedule(false);
          setShowForm(true);
        }}
      />

      <TryFreeClass
        isOpen={showForm}
        onClose={() => setShowForm(false)}
      />
    </>
  );
}
