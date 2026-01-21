import { useRef } from "react";
import NutriBg from "../../assets/home/trainers/Nutri.png";

export default function Nutrition() {
  const formRef = useRef(null);

  return (
    <>
      {/* HERO */}
      <section
        className="relative h-[60vh] bg-cover bg-center flex items-center justify-center"
        style={{ backgroundImage: `url(${NutriBg})` }}
      >
        <div className="absolute inset-0 bg-black/45" />
        <h1 className="relative z-10 uppercase italic font-extrabold text-white text-3xl sm:text-4xl md:text-5xl">
          Nutrition Coaching
        </h1>
      </section>

      {/* CONTENT */}
      <section className="bg-white text-black py-14">
        <div className="max-w-5xl mx-auto px-4">

          <div className="grid grid-cols-1 lg:grid-cols-[2fr_1fr] gap-10">


            <div className="space-y-10">


              <div>
                <h2 className="uppercase italic font-extrabold text-xl sm:text-2xl">
                  Nutritionis Coaching at PLAN B THE GYM – Mysore
                </h2>
                <p className="mt-2 text-sm">
                  Personalized nutrition guidance designed to support your workouts,
                  improve energy levels, and help you build sustainable healthy habits.
                </p>
              </div>

              {/* FORM */}
              <div
                ref={formRef}
                className="bg-gray-100 border rounded-md p-5 max-w-[420px]"
              >
                <h3 className="uppercase italic font-extrabold text-lg mb-4">
                  Book Your Nutrition Consultation
                </h3>

                <form className="space-y-4 text-sm">
                  <input
                    className="w-full border border-black px-3 py-2 rounded"
                    placeholder="Name*"
                  />
                  <input
                    className="w-full border border-black px-3 py-2 rounded"
                    placeholder="Mobile*"
                  />
                  <input
                    className="w-full border border-black px-3 py-2 rounded"
                    placeholder="Email (Optional)"
                  />

                  <select className="w-full border border-black px-3 py-2 rounded">
                    <option value="">Select a Program</option>
                    <option>Starter Nutrition Plan</option>
                    <option>Balanced Lifestyle Nutrition</option>
                    <option>Weight Management Support</option>
                    <option>Women’s Wellness Nutrition</option>
                    <option>Long-Term Health & Lifestyle Coaching</option>
                  </select>

                  <label className="flex gap-2 text-xs">
                    <input type="checkbox" />
                    I am interested in booking a nutrition coaching session.
                  </label>

                  <button className="w-full bg-black text-white uppercase font-bold py-3 rounded hover:bg-gray-800 transition">
                    Book My Consultation
                  </button>

                  <a
                    href="https://wa.me/917899944483"
                    className="block text-center w-full bg-green-600 text-white uppercase font-bold py-3 rounded hover:bg-green-700 transition"
                  >
                    Book via WhatsApp
                  </a>
                </form>
              </div>

              {/* WHY */}
              <div>
                <h3 className="uppercase italic font-extrabold text-lg">
                  Why Nutrition Coaching?
                </h3>
                <ul className="mt-3 list-disc ml-5 text-sm space-y-1">
                  <li>Support workout performance & recovery</li>
                  <li>Improve daily energy & focus</li>
                  <li>Build sustainable eating habits</li>
                  <li>Support long-term wellness goals</li>
                </ul>
              </div>

              {/* HOW */}
              <div>
                <h3 className="uppercase italic font-extrabold text-lg">
                  How Nutrition Coaching Works
                </h3>
                <ul className="mt-3 list-disc ml-5 text-sm space-y-1">
                  <li>Initial consultation to understand your lifestyle</li>
                  <li>Personalized nutrition guidance</li>
                  <li>Ongoing support and follow-ups</li>
                </ul>
              </div>

            </div>

            {/* RIGHT SIDEBAR */}
            <aside className="space-y-6">

              {/* MAP CARD */}
              <div className="border rounded-md overflow-hidden h-[180px]">
                <iframe
                  title="Plan B The Gym Location"
                  src="https://www.google.com/maps?q=Plan+B+The+Gym,+Kuvempu+Nagara,+Mysuru&output=embed"
                  className="w-full h-full border-0"
                  loading="lazy"
                />
              </div>

              {/* IMAGE CARD */}
              <img
                src={NutriBg}
                alt="Nutrition Coaching"
                className="w-full h-[240px] object-cover rounded-md"
              />

            </aside>

          </div>
        </div>
      </section>
    </>
  );
}
