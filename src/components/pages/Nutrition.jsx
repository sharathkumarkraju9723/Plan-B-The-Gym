import { useRef, useState } from "react";
import NutriBg from "../../assets/home/trainers/Nutri.png";
import {CONTACT} from "../../components/config/Contact";

const OWNER_WHATSAPP = "917899944483"; // PLAN B THE GYM

export default function Nutrition() {
  const formRef = useRef(null);
  const [submitted, setSubmitted] = useState(false);

  const [form, setForm] = useState({
    name: "",
    mobile: "",
    email: "",
    program: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.mobile || submitted) return;

    const message = `
Nutrition Consultation Enquiry – PLAN B THE GYM

Name: ${form.name}
Mobile: ${form.mobile}
Email: ${form.email || "Not Provided"}
Program: ${form.program || "Not Selected"}

Requesting a nutrition consultation.
`;

    window.open(
      `https://wa.me/${CONTACT.OWNER_WHATSAPP}?text=${encodeURIComponent(message)}`,
      "_blank"
    );

    setSubmitted(true);
  };

  return (
    <>
      {/* HERO */}
      <section
        className="relative min-h-[70vh] bg-contain bg-center flex items-center justify-center"
        style={{ backgroundImage: `url(${NutriBg})` }}
      >
        <div className="absolute inset-0 bg-textPrimary/40" />
        <div className="relative z-10 text-center px-4">
          <h1 className="mt-32 uppercase italic font-extrabold text-textLight text-4xl md:text-6xl lg:text-7xl">
            Nutrition Coaching
          </h1>
          <p className="mt-4 text-lg text-textLight/90">
            Fuel your training with smarter nutrition at PLAN B THE GYM
          </p>
        </div>
      </section>

      {/* MAIN */}
      <section className="bg-section py-16 text-textPrimary">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-3 gap-12">

          {/* LEFT */}
          <div className="order-3 lg:order-1 space-y-6">
            <iframe
              title="Plan B The Gym Location"
              src="https://www.google.com/maps?q=Plan+B+The+Gym,+Kuvempu+Nagara,+Mysuru&output=embed"
              className="w-full h-64 rounded border"
              loading="lazy"
            />

            <img
              src={NutriBg}
              alt="Nutrition Coaching at Plan B The Gym"
              className="w-full min-h-[45vh] object-cover rounded-lg"
            />
          </div>

          {/* CENTER */}
          <div ref={formRef} className="order-1 lg:order-2 lg:col-span-2">
            <h2 className="uppercase italic font-extrabold text-3xl md:text-5xl">
              Nutrition Coaching at PLAN B THE GYM
            </h2>

            <p className="mt-4 text-lg text-textMuted">
              Personalized nutrition guidance to support fat loss,muscle gain, <br />
              recovery, and long-term health — aligned with your workouts.
            </p>

            <p className="mt-3 text-lg text-textSubtle">
              Energy • Recovery • Body Composition • Lifestyle Balance
            </p>

            {/* FORM */}
            <div className="mt-10 bg-surface border border-divider rounded-xl p-6 max-w-xl">
              <form onSubmit={handleSubmit} className="space-y-5">
                <h3 className="uppercase italic text-primary font-extrabold text-3xl">
                  Book a Nutrition Consultation
                </h3>

                <input
                  placeholder="Name *"
                  className="w-full border border-divider bg-base px-4 py-3 rounded"
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                />

                <input
                  placeholder="Mobile *"
                  className="w-full border border-divider bg-base px-4 py-3 rounded"
                  onChange={(e) => setForm({ ...form, mobile: e.target.value })}
                />

                <input
                  placeholder="Email (Optional)"
                  className="w-full border border-borderdivider bg-base px-4 py-3 rounded"
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                />

                {/* PROGRAM SELECT */}
                <div className="relative">
                  <select
                    className="w-full border border-divider bg-base px-4 py-3 rounded appearance-none"
                    onChange={(e) =>
                      setForm({ ...form, program: e.target.value })
                    }
                  >
                    <option value="">Select a Program</option>
                    <option>Fat Loss Nutrition</option>
                    <option>Muscle & Strength Support</option>
                    <option>Lifestyle & Wellness</option>
                    <option>Women’s Nutrition</option>
                    <option>Long-Term Health Coaching</option>
                  </select>

                  <svg
                    className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-textSubtle"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                  >
                    <path d="M19 9l-7 7-7-7" />
                  </svg>
                </div>

                <label className="flex gap-2 text-sm text-textMuted">
                  <input type="checkbox" required />
                  I want to consult a nutrition coach
                </label>

                <div className="flex justify-center">
                  <button
                    type="submit"
                    disabled={submitted}
                    className={`px-8 py-3 text-sm font-extrabold uppercase rounded-lg border-2 transition
                      ${
                        submitted
                          ? "bg-surface text-textSubtle border-divider cursor-not-allowed"
                          : "bg-button text-textPrimary  border-buttonBorder hover:bg-buttonHover"
                      }`}
                  >
                    {submitted ? "✓ Request Sent" : "Book Consultation"}
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
              </form>
            </div>
          </div>
        </div>

        {/* WHY + HOW */}
        <div className="mt-20 max-w-5xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

            {/* WHY */}
            <div>
              <h3 className="uppercase italic font-extrabold text-2xl mb-4">
                Why Nutrition Coaching?
              </h3>
              <ul className="list-disc ml-6 text-sm space-y-2 text-textMuted">
                <li>Improve workout performance & recovery</li>
                <li>Support fat loss and muscle gain goals</li>
                <li>Build sustainable eating habits</li>
                <li>Reduce confusion around diet & supplements</li>
              </ul>
            </div>

            {/* HOW */}
            <div>
              <h3 className="uppercase italic font-extrabold text-2xl mb-4">
                How It Works
              </h3>
              <ul className="list-disc ml-6 text-sm space-y-2 text-textMuted">
                <li>Initial assessment of lifestyle & goals</li>
                <li>Customized nutrition guidance</li>
                <li>Ongoing support & progress tracking</li>
              </ul>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}
