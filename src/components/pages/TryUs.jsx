import { useRef, useState } from "react";
import tryBg from "../../assets/images/tryus.jpg";

const OWNER_WHATSAPP = "917899944483"; // PLAN B THE GYM

export default function TryUs() {
  const formRef = useRef(null);
  const scheduleRef = useRef(null);

  const [active, setActive] = useState(null);
  const [submitted, setSubmitted] = useState(false);

  const [form, setForm] = useState({
    Name: "",
    Mobile: "",
    Email: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.Name || !form.Mobile || submitted) return;

    const message = `
FREE GUEST PASS REQUEST – PLAN B THE GYM

Name: ${form.Name}
Mobile: ${form.Mobile}
Email: ${form.Email || "Not Provided"}

Interested in trying the gym with a free guest pass.
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
        className="relative min-h-[70vh] bg-cover bg-center flex items-center justify-center"
        style={{ backgroundImage: `url(${tryBg})` }}
      >
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative z-10 text-center px-4">
          <h1 className="mt-40 uppercase italic font-extrabold text-white text-4xl md:text-6xl lg:text-7xl">
            Try Us
          </h1>
          <p className="mt-4 text-lg text-gray-200">
            Experience PLAN B THE GYM before you commit
          </p>
        </div>
      </section>

      {/* MAIN */}
      <section className="bg-white py-16 text-black">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-3 gap-12">

          {/* LEFT – MAP + IMAGE */}
          <div className="order-3 lg:order-1 space-y-6">
            <iframe
              title="Plan B The Gym Location"
              src="https://www.google.com/maps?q=Plan+B+The+Gym,+Kuvempu+Nagara,+Mysuru&output=embed"
              className="w-full h-64 rounded border"
              loading="lazy"
            />

            <img
              src={tryBg}
              alt="Try Plan B The Gym"
              className="w-full min-h-[45vh] object-cover rounded-lg"
            />
          </div>

          {/* CENTER – CONTENT + FORM */}
          <div ref={formRef} className="order-1 lg:order-2 lg:col-span-2">
            <h2 className="uppercase italic font-extrabold text-3xl md:text-5xl">
              Free Guest Pass at PLAN B THE GYM – Mysore
            </h2>

            <p className="mt-4 text-lg">
              Get a firsthand experience of our gym environment, equipment,
              trainers, and group training culture.
            </p>

            <p className="mt-3 text-lg text-gray-500">
              Strength • Cardio • Group Classes • Guidance
            </p>

            {/* FORM */}
            <div className="mt-10 bg-gray-200 rounded-xl p-6 max-w-xl">
              <form onSubmit={handleSubmit} className="space-y-5">
                <h3 className="uppercase italic text-[#2a2a2a] font-extrabold text-3xl">
                  Claim Your Free Guest Pass
                </h3>

                <input
                  placeholder="Name *"
                  className="w-full border px-4 py-3 rounded"
                  onChange={(e) =>
                    setForm({ ...form, Name: e.target.value })
                  }
                />

                <input
                  placeholder="Mobile *"
                  className="w-full border px-4 py-3 rounded"
                  onChange={(e) =>
                    setForm({ ...form, Mobile: e.target.value })
                  }
                />

                <input
                  placeholder="Email (Optional)"
                  className="w-full border px-4 py-3 rounded"
                  onChange={(e) =>
                    setForm({ ...form, Email: e.target.value })
                  }
                />

                <label className="flex gap-2 text-sm">
                  <input type="checkbox" />
                  I want to try PLAN B THE GYM with a free guest pass
                </label>

                <div className="flex justify-center">
                  <button
                    type="submit"
                    disabled={submitted}
                    className={`px-8 py-3 text-sm font-extrabold uppercase rounded-lg border-2 transition
                      ${
                        submitted
                          ? "bg-green-600 text-white border-green-700 cursor-not-allowed"
                          : "bg-[#2f6f5f] text-white border-black hover:bg-white hover:text-[#2f6f5f]"
                      }`}
                  >
                    {submitted ? "✓ Request Sent" : "Book Free Guest Pass"}
                  </button>
                </div>

                {submitted && (
                  <div className="bg-green-50 border border-green-500 text-green-700 p-3 rounded-lg text-center">
                    <p className="font-bold">Request Sent Successfully</p>
                    <p className="text-sm">
                      Our team will contact you shortly
                    </p>
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>

        {/* FAQ – SAME AS YOGA PAGE WIDTH */}
        <div className="mt-20 max-w-3xl mx-auto px-4">
          <h3 className="uppercase italic font-extrabold text-3xl mb-6 text-center">
            Frequently Asked Questions
          </h3>

          <div className="border rounded-md overflow-hidden">
            {[
              [
                "What is the Free Guest Pass?",
                "It allows you to experience the gym for one day before joining."
              ],
              [
                "Can I try group classes?",
                "Yes, based on class schedule and availability."
              ],
              [
                "Is the guest pass really free?",
                "Yes, there is no cost for the trial visit."
              ],
              [
                "Do I need to book in advance?",
                "Yes, our team will schedule your visit after enquiry."
              ],
              [
                "What are gym timings?",
                "Monday–Saturday: 6 AM – 10 PM | Sunday: 6 AM – 8 PM"
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
                  <div className="px-4 pb-4 text-sm text-gray-700">
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
