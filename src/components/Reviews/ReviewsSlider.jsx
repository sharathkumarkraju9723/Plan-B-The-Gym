import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

import { reviews } from "./reviewsData";

export default function ReviewsSlider() {
  return (
    <div className="mt-12 max-w-4xl">
      <Swiper
        modules={[Autoplay]}
        slidesPerView={1}
        spaceBetween={16}
        autoplay={{
          delay: 4500,
          disableOnInteraction: false,
        }}
        loop
      >
        {reviews.map((review, index) => (
          <SwiperSlide key={index}>
            <div className="border border-[#E5E5E5] rounded-2xl p-6 bg-[#F5F1E8] shadow-sm">

              {/* HEADER */}
              <div className="flex items-center gap-4 mb-4">
                
                {/* Avatar */}
                <div className="w-10 h-10 rounded-full bg-[#2E2E2E] flex items-center justify-center text-[#F5F1E8] font-semibold">
                  {review.name.charAt(0)}
                </div>

                <div>
                  <h4 className="font-medium text-[#2E2E2E]">
                    {review.name}
                  </h4>
                  <div className="text-[#B0B0B0] text-sm">
                    ★★★★★
                  </div>
                </div>
              </div>

              {/* REVIEW TEXT */}
              <p className="text-[#4A4A4A] text-sm leading-relaxed">
                {review.text}
              </p>

            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Optional safety disclaimer */}
      <p className="mt-4 text-xs text-[#9A9A9A]">
        Testimonials shown are for demonstration purposes.
      </p>
    </div>
  );
}
