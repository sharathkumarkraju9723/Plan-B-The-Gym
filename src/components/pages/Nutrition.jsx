import { useRef, useState } from "react";
import NutriBg from "../../assets/home/trainers/Nutri.png";

const OWNER_WHATSAPP = "917899944483"; // PLAN B THE GYM

export default function Nutrition() {
  const formRef = useRef(null);
  const [submitted, setSubmitted] = useState(false);

  const [form, setForm] = useState({
    Name: "",
    Mobile: "",
    Email: "",
    Program: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (submitted || !form.Name || !form.Mobile) return;

    const message = `
Nutrition Coaching Enquiry – PLAN B THE GYM

Name: ${form.Name}
Mobile: ${form.Mobile}
Email: ${form.Email || "Not Provided"}
Program: ${form.Program || "Not Selected"}
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
        <div className="max-w-5xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-[2fr_1fr] gap-10">

          {/* LEFT */}
          <div className="space-y-10">

            <div>
              <h2 className="uppercase italic font-extrabold text-xl sm:text-2xl">
                Nutrition Coaching at PLAN B THE GYM – Mysore
              </h2>
              <p className="mt-2 text-sm">
                Personalised nutrition guidance to support training performance,
                energy levels, and long-term healthy habits.
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

              <form onSubmit={handleSubmit} className="space-y-4 text-sm">

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

                <select
                  className="w-full border px-4 py-3 rounded"
                  onChange={(e) => setForm({ ...form, Program: e.target.value })}
                >
                  <option value="">Select a Program</option>
                  <option>Starter Nutrition Plan</option>
                  <option>Balanced Lifestyle Nutrition</option>
                  <option>Weight Management Support</option>
                  <option>Women’s Wellness Nutrition</option>
                  <option>Long-Term Lifestyle Coaching</option>
                </select>

                <label className="flex gap-2 text-xs">
                  <input type="checkbox" required />
                  I am interested in nutrition coaching at PLAN B THE GYM
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
                    {submitted ? "✓ Request Sent" : "Book Consultation"}
                  </button>
                </div>

                {submitted && (
                  <div className="bg-green-50 border border-green-500 text-green-700 p-3 rounded-lg text-center">
                    Our team will contact you shortly
                  </div>
                )}
              </form>
            </div>

            {/* WHY */}
            <div>
              <h3 className="uppercase italic font-extrabold text-lg">
                Why Nutrition Coaching?
              </h3>
              <ul className="mt-3 list-disc ml-5 text-sm space-y-1">
                <li>Improve workout performance & recovery</li>
                <li>Boost daily energy and focus</li>
                <li>Create sustainable eating habits</li>
                <li>Support long-term health goals</li>
              </ul>
            </div>

            {/* HOW */}
            <div>
              <h3 className="uppercase italic font-extrabold text-lg">
                How It Works
              </h3>
              <ul className="mt-3 list-disc ml-5 text-sm space-y-1">
                <li>Initial lifestyle & goal assessment</li>
                <li>Personalised nutrition guidance</li>
                <li>Ongoing support & follow-ups</li>
              </ul>
            </div>

          </div>

          {/* RIGHT SIDEBAR */}
          <aside className="space-y-6">
            <div className="border rounded-md overflow-hidden h-[180px]">
              <iframe
                title="Plan B The Gym Location"
                src="https://www.google.com/maps?q=Plan+B+The+Gym,+Kuvempu+Nagara,+Mysuru&output=embed"
                className="w-full h-full border-0"
                loading="lazy"
              />
            </div>

            <img
              src={NutriBg}
              alt="Nutrition Coaching"
              className="w-full h-[240px] object-cover rounded-md"
            />
          </aside>

        </div>
      </section>
    </>
  );
}
