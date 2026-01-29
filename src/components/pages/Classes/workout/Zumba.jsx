import { useRef, useState } from "react";
import zumbaBg from "../../../../assets/home/experience/zumba-fitness.jpg";
import zumba from "../../../../assets/images/zumba.jpg";
import { CONTACT } from "../../../config/Contact";
import { getScheduleByClass } from "../../../../utils/getScheduleByClass";

export default function ZumbaFitness() {
  const formRef = useRef(null);
  const scheduleRef = useRef(null);

  const [active, setActive] = useState(null);
  const [showSchedule, setShowSchedule] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const [form, setForm] = useState({ Name: "", Mobile: "", Email: "" });

  // 7-DAY GLOBAL ZUMBA SCHEDULE
  const schedule = getScheduleByClass("Zumba");

  // WhatsApp submit
  const handleSubmit = (e) => {
    e.preventDefault();
    if (submitted || !form.Name || !form.Mobile) return;

    window.open(
      `https://wa.me/${CONTACT.WHATSAPP_OWNER}?text=${encodeURIComponent(`
Zumba Class Enquiry – PLAN B THE GYM

Name: ${form.Name}
Mobile: ${form.Mobile}
Email: ${form.Email || "Not Provided"}

Interested in trying a Zumba class.
      `)}`,
      "_blank"
    );

    setSubmitted(true);
  };

  return (
    <>
      {/* HERO */}
      <section
        className="relative min-h-[60vh] bg-contain bg-center flex items-center justify-center"
        style={{ backgroundImage: `url(${zumbaBg})` }}
      >
        <div className="absolute inset-0 bg-textPrimary/40" />
        <div className="relative z-10 text-center px-4">
          <h1 className="mt-40 uppercase italic font-extrabold text-textLight text-4xl sm:text-5xl md:text-6xl lg:text-7xl">
            Zumba Fitness
          </h1>
          <p className="mt-4 text-lg sm:text-xl text-textLight/80">
            Fun, music-driven cardio workouts
          </p>
        </div>
      </section>

      {/* MAIN */}
      <section className="bg-section text-textPrimary py-16">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-3 gap-12">

          {/* LEFT COLUMN */}
          <div className="order-3 lg:order-1 space-y-6">
            <div className="w-full h-64 rounded-lg overflow-hidden border border-divider">
              <iframe
                title="Plan B The Gym Location"
                src="https://www.google.com/maps?q=Plan+B+The+Gym,+Kuvempu+Nagara,+Mysuru&output=embed"
                className="w-full h-full border-0"
                loading="lazy"
              />
            </div>

            <img
              src={zumba}
              alt="Zumba class at Plan B The Gym"
              className="w-full min-h-[45vh] object-cover rounded-lg"
            />
          </div>

          {/* CENTER */}
          <div ref={formRef} className="order-1 lg:order-2 lg:col-span-2">
            <h2 className="uppercase italic font-extrabold text-3xl sm:text-4xl md:text-5xl">
              Zumba Classes at PLAN B THE GYM – Mysore
            </h2>

            <p className="mt-4 text-lg text-textMuted">
              High-energy dance workouts designed to improve endurance and calorie burn.
            </p>

            <p className="mt-4 text-lg text-textSubtle">
              Cardio fitness • Fat burn • Stress relief • Full-body movement
            </p>

            {/* FORM */}
            <div className="mt-8 border border-divider bg-base rounded-xl p-6 sm:p-8 max-w-xl">
              <form className="space-y-4" onSubmit={handleSubmit}>
                <h3 className="uppercase italic font-extrabold text-3xl">
                  Try a Zumba Class
                </h3>

                <input
                  placeholder="Name *"
                  className="w-full border border-divider bg-base px-4 py-3 rounded"
                  onChange={(e) => setForm({ ...form, Name: e.target.value })}
                />

                <input
                  placeholder="Mobile *"
                  className="w-full border border-divider bg-base px-4 py-3 rounded"
                  onChange={(e) => setForm({ ...form, Mobile: e.target.value })}
                />

                <input
                  placeholder="Email (Optional)"
                  className="w-full border border-divider bg-base px-4 py-3 rounded"
                  onChange={(e) => setForm({ ...form, Email: e.target.value })}
                />

                <label className="flex gap-2 text-sm text-textSubtle">
                  <input type="checkbox" />
                  I want to try a Zumba class
                </label>

                <div className="flex justify-center">
                  <button
                    type="submit"
                    disabled={submitted}
                    className={`px-8 py-3 text-sm font-extrabold uppercase rounded-lg border transition
                      ${submitted
                        ? "bg-surface text-textSubtle border-divider cursor-not-allowed"
                        : "bg-button text-textPrimary border-buttonButton hover:bg-buttonHover"
                      }`}
                  >
                    {submitted ? "✓ Request Sent" : "Book Zumba Session"}
                  </button>
                </div>

                {submitted && (
                  <div className="bg-surface border border-divider p-3 rounded-lg text-center">
                    <p className="font-bold">Request Sent Successfully</p>
                    <p className="text-sm text-textMuted">
                      Our team will contact you shortly
                    </p>
                  </div>
                )}

                {/* VIEW SCHEDULE */}
                <div className="flex justify-center">
                  <button
                    type="button"
                    onClick={() => {
                      setShowSchedule(true);
                      setTimeout(() => {
                        scheduleRef.current?.scrollIntoView({ behavior: "smooth" });
                      }, 150);
                    }}
                    className="inline-block px-6 py-2 text-sm bg-button text-textPrimary font-bold uppercase rounded-lg border border-buttonBorder hover:bg-buttonHover transition"
                  >
                    View Class Schedule
                  </button>
                </div>
              </form>
            </div>
          </div>

          {/* FAQ */}
          <div className="order-2 lg:order-3 lg:col-span-3 mt-10">
            <div className="max-w-3xl mx-auto">
              <h3 className="uppercase italic font-extrabold text-3xl mb-6 text-center">
                Frequently Asked Questions
              </h3>

              <div className="border border-divider rounded-md overflow-hidden">
                {[
                  ["What happens in a Zumba class?", "Dance-inspired movements with upbeat music."],
                  ["Is Zumba suitable for beginners?", "Yes, you can move at your own pace."],
                  ["How long is each session?", "45–60 minutes including warm-up and cool-down."],
                  ["How often should I attend?", "2–4 classes per week works well."],
                ].map(([q, a], i) => (
                  <div key={i} className="border-b border-divider last:border-b-0">
                    <button
                      onClick={() => setActive(active === i ? null : i)}
                      className="w-full px-4 py-3 flex justify-between text-left font-medium hover:bg-section"
                    >
                      {q}
                      <span>{active === i ? "−" : "+"}</span>
                    </button>

                    {active === i && (
                      <div className="px-4 pb-4 text-sm text-textMuted">
                        {a}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* SCHEDULE */}
        {showSchedule && (
          <div ref={scheduleRef} className="mt-20 bg-section py-16">
            <div className="max-w-7xl mx-auto px-4">
              <h2 className="uppercase italic font-bold text-4xl mb-10 text-center">
                Weekly Zumba Schedule
              </h2>

              {Object.keys(schedule).length === 0 ? (
                <p className="text-center text-textMuted">
                  No Zumba sessions scheduled currently.
                </p>
              ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                  {Object.entries(schedule).map(([day, classes]) => (
                    <div key={day} className="bg-surface p-4 rounded-xl shadow">
                      <h3 className="font-bold text-center mb-4">{day}</h3>

                      {classes.map((item, i) => (
                        <div
                          key={i}
                          className="border border-divider rounded-lg overflow-hidden mb-3"
                        >
                          <div
                            className={`${item.color} text-textLight px-3 py-1 text-sm font-bold`}
                          >
                            {item.time}
                          </div>
                          <div className="p-3 text-sm font-semibold text-textPrimary">
                            {item.title}
                          </div>
                        </div>
                      ))}
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        )}
      </section>
    </>
  );
}
