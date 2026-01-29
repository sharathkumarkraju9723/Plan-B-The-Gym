import { useRef, useState } from "react";
import bodyCompositionImg from "../../assets/home/features/BCA.png";
import {CONTACT} from "../../components/config/Contact.js";


export default function BodyComposition() {
  const formRef = useRef(null);
  const [active, setActive] = useState(null);
  const [submitted, setSubmitted] = useState(false);

  const [form, setForm] = useState({
    name: "",
    mobile: "",
    email: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.mobile || submitted) return;

    const message = `
Body Composition Analysis – PLAN B THE GYM

Name: ${form.name}
Mobile: ${form.mobile}
Email: ${form.email || "Not Provided"}

Please contact me to confirm my appointment.
`;

    window.open(
      `https://wa.me/${CONTACT.WHATSAPP_OWNER}?text=${encodeURIComponent(message)}`,
      "_blank"
    );

    setSubmitted(true);
  };

  const faqs = [
    {
      q: "What is body composition analysis?",
      a: "It is a quick, non-invasive assessment that measures fat mass, muscle mass, body water, and overall composition."
    },
    {
      q: "How should I prepare?",
      a: [
        "Avoid heavy meals 2–3 hours before",
        "Stay normally hydrated",
        "Avoid intense workouts before testing",
        "Wear light clothing"
      ]
    },
    {
      q: "How often should I repeat the test?",
      a: "Once every 4–6 weeks is ideal for tracking real progress."
    },
    {
      q: "Who should get this done?",
      a: "Anyone serious about fat loss, muscle gain, health tracking, or performance improvement."
    }
  ];

  return (
    <>
      {/* HERO */}
      <section
        className="relative min-h-[70vh] bg-contain bg-center flex items-center justify-center"
        style={{ backgroundImage: `url(${bodyCompositionImg})` }}
      >
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative z-10 text-center px-4">
          <h1 className="mt-40 uppercase italic font-extrabold text-textLight text-4xl md:text-6xl lg:text-7xl">
            Body Composition Analysis
          </h1>
          <p className="mt-4 text-lg text-textLight/70">
            Know your body. Track progress. Train smarter.
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
              src={bodyCompositionImg}
              alt="Body Composition Analysis at Plan B The Gym"
              className="w-full min-h-[45vh] object-cover rounded-lg"
            />
          </div>

          {/* CENTER */}
          <div ref={formRef} className="order-1 lg:order-2 lg:col-span-2">
            <h2 className="uppercase italic font-extrabold text-3xl md:text-5xl">
              Body Composition Analysis at PLAN B THE GYM – Mysore
            </h2>

            <p className="mt-4 text-lg">
              Get accurate insights into fat levels, muscle mass, and overall body
              balance to guide your training and nutrition decisions.
            </p>

            <p className="mt-3 text-lg text-textSubtle">
              Fat % • Muscle Mass • Body Water • Progress Tracking
            </p>

            {/* FORM */}
            <div className="mt-10 bg-section rounded-xl p-6 max-w-xl">
              <form onSubmit={handleSubmit} className="space-y-5">
                <h3 className="uppercase italic text-primary font-extrabold text-3xl">
                  Book Your Analysis
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
                  className="w-full border border-divider bg-base px-4 py-3 rounded"
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                />

                <label className="flex gap-2 text-sm text-textMuted">
                  <input type="checkbox" required />
                  Please contact me to confirm my appointment
                </label>

                <div className="flex justify-center">
                  <button
                    type="submit"
                    disabled={submitted}
                    className={`px-8 py-3 text-sm font-extrabold uppercase rounded-lg border transition
                      ${
                        submitted
                          ? "bg-green-600 text-textSubtle border-divider cursor-not-allowed"
                          : "bg-primary text-textPrimary border-button hover:bg-buttonHover"
                      }`}
                  >
                    {submitted ? "✓ Request Sent" : "Book Analysis"}
                  </button>
                </div>

                {submitted && (
                  <div className="bg-surface border border-divider p-3 rounded-lg text-center">
                    <p className="font-bold">Request Sent Successfully</p>
                    <p className="text-sm text-textMuted">Our team will contact you shortly</p>
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>

        {/* FAQ */}
        <div className="mt-20 max-w-3xl mx-auto px-4">
          <h3 className="uppercase italic font-extrabold text-3xl mb-6 text-center">
            Frequently Asked Questions
          </h3>

          <div className="border border-divider rounded-md overflow-hidden">
            {faqs.map((item, i) => (
              <div key={i} className="border-b  border-divider last:border-b-0">
                <button
                  onClick={() => setActive(active === i ? null : i)}
                  className="w-full px-4 py-3 flex justify-between text-left font-medium hover:bg-section"
                >
                  {item.q}
                  <span>{active === i ? "−" : "+"}</span>
                </button>

                {active === i && (
                  <div className="px-4 pb-4 text-sm text-textMuted">
                    {Array.isArray(item.a) ? (
                      <ul className="list-disc ml-5 space-y-1">
                        {item.a.map((li, j) => (
                          <li key={j}>{li}</li>
                        ))}
                      </ul>
                    ) : (
                      <p>{item.a}</p>
                    )}
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
