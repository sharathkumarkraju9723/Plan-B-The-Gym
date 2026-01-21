import { useRef, useState } from "react";
import tryBg from "../../assets/images/tryus.jpg";

const OWNER_WHATSAPP = "917899944483"; // Gym WhatsApp number

export default function JoinUS() {
  const formRef = useRef(null);
  const [active, setActive] = useState(null);

  const [form, setForm] = useState({
    Name: "",
    Mobile: "",
    Email: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.Name || !form.Mobile) return;

    const message = `
Membership Enquiry - PLAN B THE GYM

Name: ${form.Name}
Mobile: ${form.Mobile}
Email: ${form.Email || "Not Provided"}

Please contact me with membership details.
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
        style={{ backgroundImage: `url(${tryBg})` }}
      >
        <div className="absolute inset-0 bg-black/30" />
        <div className="relative z-10 text-center px-4">
          <h1 className="mt-40 uppercase italic font-extrabold text-gray-100 text-4xl sm:text-5xl md:text-6xl lg:text-7xl">
            Free Guest Pass
          </h1>
          <p className="mt-4 text-lg sm:text-xl text-gray-200">
            Try Plan B The Gym in Mysore
          </p>
        </div>
      </section>

      {/* MAIN */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-3 gap-12">

          {/* LEFT */}
          <div className="order-3 lg:order-1 space-y-6">
            <div className="w-full h-64 rounded-lg overflow-hidden border">
              <iframe
                title="Plan B The Gym Location"
                src="https://www.google.com/maps?q=Plan+B+The+Gym,+Kuvempu+Nagara,+Mysuru&output=embed"
                className="w-full h-full border-0"
                loading="lazy"
              />
            </div>

            <img
              src={tryBg}
              alt="Workout at Plan B Gym"
              className="w-full min-h-[45vh] object-cover rounded-lg"
            />
          </div>

          {/* CENTER */}
          <div ref={formRef} className="order-1 text-black lg:order-2 lg:col-span-2">
            <h2 className="uppercase italic font-extrabold text-3xl sm:text-4xl md:text-5xl">
              1-Day Free Guest Pass
            </h2>

            <p className="mt-3 text-lg text-black">
              A welcoming space for fitness, focus, and community
            </p>

            <p className="mt-4 text-lg text-black max-w-2xl">
              Experience modern equipment, expert guidance, and group fitness
              sessions at PLAN B THE GYM.
            </p>

            <p className="mt-3 text-lg text-gray-500">
              ⭐ Trusted by our local fitness community
            </p>

            {/* FORM */}
            <div className="mt-10 text-black bg-gray-200 rounded-xl p-6 sm:p-8 max-w-xl">
              <form className="space-y-5" onSubmit={handleSubmit}>
                <input
                  type="text"
                  placeholder="Name*"
                  className="w-full border px-4 py-3 rounded"
                  onChange={(e) =>
                    setForm({ ...form, Name: e.target.value })
                  }
                />

                <input
                  type="tel"
                  placeholder="Mobile*"
                  className="w-full border px-4 py-3 rounded"
                  onChange={(e) =>
                    setForm({ ...form, Mobile: e.target.value })
                  }
                />

                <input
                  type="email"
                  placeholder="Email (Optional)"
                  className="w-full border px-4 py-3 rounded"
                  onChange={(e) =>
                    setForm({ ...form, Email: e.target.value })
                  }
                />

                <label className="flex items-center gap-2 text-sm">
                  <input type="checkbox" /> Get Free Guest Pass
                </label>

                <div className="flex justify-center">
                  <button
                    type="submit"
                    disabled={submitted}
                    className={`mt-4 px-8 py-2.5 text-sm font-extrabold uppercase rounded-lg border-2 transition-all
                      ${submitted
                        ? "bg-green-600 text-white border-green-700 cursor-not-allowed"
                        : "bg-primary text-white border-black hover:bg-white hover:text-black hover:scale-105"
                      }`}
                  >
                    {submitted ? "✓ Request Sent" : "Request Membership Details"}
                  </button>
                </div>

                {submitted && (
                  <div className="mt-6 bg-green-50 border border-green-500 text-green-700 px-4 py-3 rounded-lg text-center">
                    <p className="font-bold text-lg">✅ Request Sent Successfully</p>
                    <p className="text-sm mt-1">
                      Our team will contact you shortly.
                    </p>
                  </div>
                )}
              </form>
            </div>
          </div>

          {/* FAQ */}
          <div className="order-2 lg:order-3 lg:col-span-3 mt-16">
            <h3 className="uppercase italic font-extrabold text-3xl mb-6">
              Frequently Asked Questions
            </h3>

            <div className="border rounded-md overflow-hidden">
              {[
                ["Who can get the Free Guest Pass?", "Anyone interested in PLAN B THE GYM."],
                ["Can I try a class?", "Yes, one class based on availability."],
                ["Is this really free?", "Yes, it’s a one-day guest experience."],
                ["Do I need to book?", "Yes, our team will schedule your visit."],
                ["Working hours?", "Mon–Sat: 6 AM – 10 PM | Sun: 6 AM – 8 PM"],
              ].map(([q, a], i) => (
                <div key={i} className="border-b last:border-b-0">
                  <button
                    onClick={() => setActive(active === i ? null : i)}
                    className="w-full px-4 py-3 flex justify-between font-medium hover:bg-gray-100"
                  >
                    {q}
                    <span>{active === i ? "−" : "+"}</span>
                  </button>
                  {active === i && (
                    <p className="px-4 pb-4 text-sm text-gray-700">{a}</p>
                  )}
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>
    </>
  );
}
