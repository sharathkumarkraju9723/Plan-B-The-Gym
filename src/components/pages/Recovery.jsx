import { useRef, useState } from "react";
import recoveryBg from "../../assets/images/recovery.png";
import {CONTACT} from "../../components/config/Contact";

const OWNER_WHATSAPP = "917899944483"; // PLAN B THE GYM

export default function Recovery() {
  const formRef = useRef(null);
  const [active, setActive] = useState(null);
  const [submitted, setSubmitted] = useState(false);

  const [form, setForm] = useState({
    Name: "",
    Mobile: "",
    Email: "",
    Service: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.Name || !form.Mobile || submitted) return;

    const message = `
RECOVERY SESSION ENQUIRY – PLAN B THE GYM

Name: ${form.Name}
Mobile: ${form.Mobile}
Email: ${form.Email || "Not Provided"}
Service: ${form.Service || "Not Selected"}

Interested in booking a recovery session.
`;

    window.open(
      `https://wa.me/${CONTACT.WHATSAPP_OWNER}?text=${encodeURIComponent(message)}`,
      "_blank"
    );

    setSubmitted(true);
  };

  return (
    <>
      {/* HERO */}
      <section
        className="relative min-h-[70vh] bg-contain bg-center flex items-center justify-center"
        style={{ backgroundImage: `url(${recoveryBg})` }}
      >
        <div className="absolute inset-0 bg-textPrimary/40" />
        <div className="relative z-10 text-center px-4">
          <h1 className="mt-32 uppercase italic font-extrabold text-textLight text-4xl md:text-6xl lg:text-7xl">
            Recovery
          </h1>
          <p className="mt-4 text-lg text-textLight/80">
            Recover better. Train stronger. Perform longer.
          </p>
        </div>
      </section>

      {/* MAIN */}
      <section className="bg-section py-16 text-textPrimary">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-3 gap-12">

          {/* LEFT – MAP + IMAGE */}
          <div className="order-3 lg:order-1 space-y-6">
            <iframe
              title="Plan B The Gym Location"
              src="https://www.google.com/maps?q=Plan+B+The+Gym,+Kuvempu+Nagara,+Mysuru&output=embed"
              className="w-full h-64 rounded border border-divider"
              loading="lazy"
            />

            <img
              src={recoveryBg}
              alt="Recovery at Plan B The Gym"
              className="w-full min-h-[45vh] object-cover rounded-lg"
            />
          </div>

          {/* CENTER – CONTENT + FORM */}
          <div ref={formRef} className="order-1 lg:order-2 lg:col-span-2">
            <h2 className="uppercase italic font-extrabold text-3xl md:text-5xl">
              Recovery Therapy at PLAN B THE GYM – Mysore
            </h2>

            <p className="mt-4 text-lg text-textMuted">
              Structured recovery sessions designed to reduce soreness,
              improve circulation, and support long-term training consistency.
            </p>

            <p className="mt-3 text-lg text-textSubtle">
              Muscle Recovery • Circulation • Injury Prevention • Performance
            </p>

            {/* FORM */}
            <div className="mt-10 bg-surface border border-divider rounded-xl p-6 max-w-xl">
              <form onSubmit={handleSubmit} className="space-y-5">
                <h3 className="uppercase italic text-textprimary font-extrabold text-3xl">
                  Book a Recovery Session
                </h3>

                <input
                  placeholder="Name *"
                  className="w-full border border-divider bg-base px-4 py-3 rounded"
                  onChange={(e) =>
                    setForm({ ...form, Name: e.target.value })
                  }
                />

                <input
                  placeholder="Mobile *"
                  className="w-full border boder-divider bg-base px-4 py-3 rounded"
                  onChange={(e) =>
                    setForm({ ...form, Mobile: e.target.value })
                  }
                />

                <input
                  placeholder="Email (Optional)"
                  className="w-full border boder-divider bg-base px-4 py-3 rounded"
                  onChange={(e) =>
                    setForm({ ...form, Email: e.target.value })
                  }
                />

                <div className="relative">
                  <select
                    className="w-full appearance-none border border-divider px-4 py-3 rounded bg-base focus:outline-none"
                  >
                    <option value="">Select Recovery Service</option>
                    <option>Percussive Massage Therapy</option>
                    <option>Compression Therapy – Arms</option>
                    <option>Compression Therapy – Hips</option>
                    <option>Compression Therapy – Legs</option>
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
                  <input type="checkbox" />
                  I want to book a recovery session
                </label>

                <div className="flex justify-center">
                  <button
                    type="submit"
                    disabled={submitted}
                    className={`px-8 py-3 text-sm font-extrabold uppercase rounded-lg border transition
                      ${submitted
                        ? "bg-surface text-textSubtle border-divider cursor-not-allowed"
                        : "bg-button text-textPriary border-buttonBorder hover:bg-buttonHover"
                      }`}
                  >
                    {submitted ? "✓ Request Sent" : "Book Recovery Session"}
                  </button>
                </div>

                {submitted && (
                  <div className="bg-surface border border-divider  p-3 rounded-lg text-center">
                    <p className="font-bold">Request Sent Successfully</p>
                    <p className="text-sm text-textMuted" >Our team will contact you shortly</p>
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>

        {/* FAQ – SAME POSITION AS YOGA PAGE */}
        <div className="mt-20 max-w-3xl mx-auto px-4">
          <h3 className="uppercase italic font-extrabold text-3xl mb-6 text-center">
            Frequently Asked Questions
          </h3>

          <div className="border border-divider rounded-md overflow-hidden">
            {[
              [
                "What is recovery therapy?",
                "It focuses on reducing muscle soreness and improving circulation after workouts."
              ],
              [
                "Who should use recovery sessions?",
                "Anyone training regularly or experiencing muscle tightness."
              ],
              [
                "How long is a recovery session?",
                "Most sessions last between 20–40 minutes."
              ],
              [
                "How often should I recover?",
                "1–3 times per week depending on training intensity."
              ],
            ].map(([q, a], i) => (
              <div key={i} className="border-b last:border-b-0">
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
      </section>
    </>
  );
}
