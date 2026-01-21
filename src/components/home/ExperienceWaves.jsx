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
  { img: img2, title: "Spin Class -Cardio Burn" },
  { img: img3, title: "Zumba - Dance Fitness" },
  { img: img4, title: "Yoga - Flexibility & Clam" },
  { img: img6, title: "Gym Basics - Beginner Friendly" },
  { img: img5, title: "Strength Training" },
];

export default function ExperienceWaves() {
  const [showSchedule, setShowSchedule] = useState(false); 
  const [showForm, setShowForm] = useState(false);

  return (
    <>
      <section className="bg-black py-16 mb-10">
        <div className="max-w-7xl mx-auto px-4 text-center">

          <h2 className="text-3xl uppercase italic font-extrabold text-[#2F6F5F] mb-2">
            Experience PLAN B THE GYM
          </h2>

          <p className="text-gray-300 mb-10">
            High-energy group workout designed to build strength, flexibility, and confidence
          </p>

          {/* SLIDER */}
          <div className="relative text-black">
            <button className="swiper-prev absolute left-2 top-1/2 -translate-y-1/2 z-10 bg-white w-10 h-10 rounded-full">❮</button>
            <button className="swiper-next absolute right-2 top-1/2 -translate-y-1/2 z-10 bg-white w-10 h-10 rounded-full">❯</button>

            <Swiper
              modules={[Navigation, Pagination]}
              navigation={{ prevEl: ".swiper-prev", nextEl: ".swiper-next" }}
              pagination={{ clickable: true }}
              loop
              centeredSlides
              slidesPerView="auto"
              spaceBetween={24}
            >
              {images.map((item, i) => (
                <SwiperSlide key={i} className="!w-[320px] sm:!w-[420px]">
                  <div className="relative rounded-xl overflow-hidden">
                    <img
                      src={item.img}
                      alt={item.title}
                      className="w-full h-64 object-cover"
                    />
                    <div className="absolute inset-0 bg-black/30" />
                    <h3 className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white font-bold">
                      {item.title}
                    </h3>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

          {/* BUTTONS */}
          <div className="mt-8 flex flex-col items-center gap-4">
          
            <button
              onClick={() => setShowSchedule(true)}
              className="bg-[#2F6F5F] px-8 py-3 border border-white text-white uppercase font-bold rounded-xl transition hover:bg-white hover:text-[#2F6F5F] hover:scale-105"
            >
              View Group Class Schedule
            </button>

            <button
              onClick={() => setShowForm(true)}
              className="bg-[#2F6F5F] px-8 py-3 border border-white text-white uppercase font-bold rounded-xl hover:bg-white hover:text-[#2F6F5F] hover:scale-105"
            >
              Try a Free  Group Class
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
