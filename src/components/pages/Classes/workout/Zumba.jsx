import { useRef, useState } from "react";
import zumbaBg from "../../../../assets/home/experience/zumba-fitness.jpg";
import zumba from "../../../../assets/images/zumba.jpg";

const OWNER_WHATSAPP = "917899944483"; // PLAN B THE GYM

// WEEKLY ZUMBA SCHEDULE
const schedule = {
  Monday: [
    { time: "7:00 AM", title: "Morning Zumba", color: "bg-pink-600" },
    { time: "6:30 PM", title: "Evening Zumba", color: "bg-red-500" },
  ],
  Wednesday: [
    { time: "7:00 AM", title: "Dance Cardio", color: "bg-pink-600" },
    { time: "6:30 PM", title: "Zumba Burn", color: "bg-red-500" },
  ],
  Friday: [
    { time: "6:30 PM", title: "Weekend Warm-up", color: "bg-pink-600" },
  ],
  Saturday: [
    { time: "8:00 AM", title: "Weekend Zumba", color: "bg-red-500" },
  ],
};

export default function ZumbaFitness() {
  const formRef = useRef(null);
  const scheduleRef = useRef(null);

  const [active, setActive] = useState(null);
  const [showSchedule, setShowSchedule] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const [form, setForm] = useState({
    Name: "",
    Mobile: "",
    Email: "",
  });

  // ================= FORM SUBMIT =================
  const handleSubmit = (e) => {
    e.preventDefault();
    if (submitted || !form.Name || !form.Mobile) return;

    const message = `
Zumba Class Enquiry - PLAN B THE GYM

Name: ${form.Name}
Mobile: ${form.Mobile}
Email: ${form.Email || "Not Provided"}

Interested in trying a Zumba class.
`;

    window.open(
      `https://wa.me/${OWNER_WHATSAPP}?text=${encodeURIComponent(message)}`,
      "_blank"
    );

    setSubmitted(true);
  };

  return (
    <>
      {/* HERO */}
      <section
        className="relative min-h-[70vh] bg-contain bg-center flex items-center justify-center"
        style={{ backgroundImage: `url(${zumbaBg})` }}
      >
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative z-10 text-center px-4">
          <h1 className="mt-40 uppercase italic font-extrabold text-white text-4xl sm:text-5xl md:text-6xl lg:text-7xl">
            Zumba Fitness
          </h1>
          <p className="mt-4 text-lg sm:text-xl text-gray-200">
            Fun, music-driven cardio workouts at PLAN B THE GYM
          </p>
        </div>
      </section>

      {/* MAIN */}
      <section className="bg-white text-black py-16">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-12">

          {/* LEFT */}
          <div className="space-y-10">
            <div>
              <h2 className="uppercase italic font-extrabold text-3xl sm:text-4xl md:text-5xl">
                Zumba Classes at PLAN B THE GYM – Mysore
              </h2>
              <p className="mt-3 text-lg">
                High-energy dance workouts designed to improve endurance,
                coordination, and calorie burn in a fun group environment.
              </p>
              <p className="mt-2 text-lg text-gray-500">
                Cardio fitness • Fat burn • Stress relief • Full-body movement
              </p>
            </div>

            {/* FORM */}
            <div ref={formRef} className="bg-gray-200 rounded-xl p-6 sm:p-8 max-w-xl">
              <form className="space-y-5" onSubmit={handleSubmit}>
                <h3 className="uppercase italic text-primary font-extrabold text-3xl">
                  Try a Zumba Class
                </h3>

                <input
                  placeholder="Name *"
                  className="w-full border px-4 py-3 rounded"
                  onChange={(e) => setForm({ ...form, Name: e.target.value })}
                />

                <input
                  placeholder="Mobile *"
                  className="w-full border px-4 py-3 rounded"
                  onChange={(e) => setForm({ ...form, Mobile: e.target.value })}
                />

                <input
                  placeholder="Email (Optional)"
                  className="w-full border px-4 py-3 rounded"
                  onChange={(e) => setForm({ ...form, Email: e.target.value })}
                />

                <label className="flex gap-2 text-sm">
                  <input type="checkbox" />
                  I want to try a Zumba class at PLAN B THE GYM
                </label>

                <div className="flex justify-center">
                  <button
                    type="submit"
                    disabled={submitted}
                    className={`px-8 py-3 text-sm font-extrabold uppercase rounded-lg border-2 transition 
                      ${submitted
                        ? "bg-green-600 text-white border-green-700 cursor-not-allowed"
                        : "bg-primary text-white border-black hover:bg-white hover:text-black"
                      }`}
                  >
                    {submitted ? "✓ Request Sent" : "Book Zumba Session"}
                  </button>
                </div>

                {submitted && (
                  <div className="bg-green-50 border border-green-500 text-green-700 p-3 rounded-lg text-center">
                    <p className="font-bold">Request Sent Successfully</p>
                    <p className="text-sm">Our team will contact you shortly</p>
                  </div>
                )}

                {/* SHOW SCHEDULE BUTTON */}
                <div className="flex justify-center">
                  <button
                    type="button"
                    onClick={() => {
                      setShowSchedule(true);
                      setTimeout(() => {
                        scheduleRef.current?.scrollIntoView({ behavior: "smooth" });
                      }, 150);
                    }}
                    className="inline-block px-6 py-2 text-sm text-center bg-black text-white font-bold uppercase rounded-lg border border-black hover:bg-white hover:text-black transition"
                  >
                    View Class Schedule
                  </button>
                </div>
              </form>
            </div>
          </div>

          {/* RIGHT */}
          <div className="space-y-6 self-start">
            <div className="w-full h-64 rounded-lg overflow-hidden border">
              <iframe
                title="Plan B The Gym Location"
                src="https://www.google.com/maps?q=Plan+B+The+Gym,+Kuvempu+Nagara,+Mysuru&output=embed"
                className="w-full h-full border-0"
                loading="lazy"
              />
            </div>

            <img
              src={zumba}
              alt="Zumba at Plan B The Gym"
              className="w-full h-[420px] object-cover rounded-lg"
            />
          </div>
        </div>

        {/* FAQ (REDUCED WIDTH) */}
        <div className="mt-20 max-w-3xl mx-auto px-4">
          <h3 className="uppercase italic font-extrabold text-3xl mb-6 text-center">
            Frequently Asked Questions
          </h3>

          <div className="border rounded-md overflow-hidden">
            {[
              [
                "What happens in a Zumba class?",
                "Each class combines dance-inspired movements with upbeat music to deliver a full-body cardio workout."
              ],
              [
                "Is Zumba suitable for beginners?",
                "Yes. Movements are simple, fun, and can be done at your own pace."
              ],
              [
                "How long is each session?",
                "Most Zumba sessions last 45–60 minutes including warm-up and cool-down."
              ],
              [
                "How often should I attend?",
                "2–4 classes per week works well for improving stamina and burning calories."
              ],
            ].map(([q, a], i) => (
              <div key={i} className="border-b last:border-b-0">
                <button
                  onClick={() => setActive(active === i ? null : i)}
                  className="w-full px-4 py-3 flex justify-between text-left font-medium hover:bg-gray-100"
                >
                  {q}
                  <span>{active === i ? "−" : "+"}</span>
                </button>

                {active === i && (
                  <div className="px-4 pb-4 text-sm text-gray-700">{a}</div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* SCHEDULE */}
        {showSchedule && (
          <div ref={scheduleRef} className="mt-24 bg-gray-100 py-16">
            <div className="max-w-7xl mx-auto px-4">
              <h2 className="uppercase italic font-black text-4xl mb-10 text-center">
                Weekly Zumba Schedule
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {Object.entries(schedule).map(([day, classes]) => (
                  <div key={day} className="bg-white p-4 rounded-xl shadow">
                    <h3 className="font-bold text-center mb-4">{day}</h3>

                    {classes.map((item, i) => (
                      <div key={i} className="border rounded-lg overflow-hidden mb-3">
                        <div className={`${item.color} text-white px-3 py-1 text-sm font-bold`}>
                          {item.time}
                        </div>
                        <div className="p-3 text-sm font-semibold text-gray-800">
                          {item.title}
                        </div>
                      </div>
                    ))}
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </section>
    </>
  );
}
