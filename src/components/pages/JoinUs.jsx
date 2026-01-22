import { useRef, useState } from "react";
import tryBg from "../../assets/images/tryus.jpg";

const OWNER_WHATSAPP = "917899944483"; // PLAN B THE GYM

export default function JoinUS() {
  const formRef = useRef(null);
  const [active, setActive] = useState(null);
  const [submitted, setSubmitted] = useState(false);

  const [form, setForm] = useState({
    Name: "",
    Mobile: "",
    Email: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.Name || !form.Mobile) return;

    const message = `
Membership Enquiry – PLAN B THE GYM

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
        className="relative min-h-[70vh] bg-cover bg-center flex items-center justify-center"
        style={{ backgroundImage: `url(${tryBg})` }}
      >
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative z-10 text-center px-4">
          <h1 className="mt-40 uppercase italic font-extrabold text-gray-100 text-4xl sm:text-5xl md:text-6xl lg:text-7xl">
            Free Guest Pass
          </h1>
          <p className="mt-4 text-lg sm:text-xl text-gray-200">
            Experience PLAN B THE GYM in Mysore
          </p>
        </div>
      </section>

      {/* MAIN */}
      <section className="bg-white text-black py-16">
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
              alt="Workout at Plan B The Gym"
              className="w-full min-h-[45vh] object-cover rounded-lg"
            />
          </div>

          {/* CENTER */}
          <div ref={formRef} className="order-1 lg:order-2 lg:col-span-2">
            <h2 className="uppercase italic font-extrabold text-3xl sm:text-4xl md:text-5xl">
              1-Day Free Guest Pass
            </h2>

            <p className="mt-4 text-lg max-w-2xl">
              Get a feel of our training environment, equipment, and community
              before making a commitment.
            </p>

            <p className="mt-3 text-lg text-gray-500">
              Strength • Cardio • Group Classes • Guidance
            </p>

            {/* FORM */}
            <div className="mt-10 bg-gray-200 rounded-xl p-6 sm:p-8 max-w-xl">
              <form className="space-y-5" onSubmit={handleSubmit}>
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

                <label className="flex items-center gap-2 text-sm">
                  <input type="checkbox" />
                  I want to claim a free guest pass
                </label>

                <div className="flex justify-center">
                  <button
                    type="submit"
                    disabled={submitted}
                    className={`px-8 py-3 text-sm font-extrabold uppercase rounded-lg border-2 transition
                      ${
                        submitted
                          ? "bg-green-600 text-white border-green-700 cursor-not-allowed"
                          : "bg-[#2F6F5F] text-white border-black hover:bg-white hover:text-[#2F6F5F]"
                      }`}
                  >
                    {submitted ? "✓ Request Sent" : "Request Guest Pass"}
                  </button>
                </div>

                {submitted && (
                  <div className="bg-green-50 border border-green-500 text-green-700 p-3 rounded-lg text-center">
                    <p className="font-bold">Request Sent Successfully</p>
                    <p className="text-sm">Our team will contact you shortly</p>
                  </div>
                )}
              </form>
            </div>
          </div>

          {/* FAQ */}
          <div className="lg:col-span-3 mt-12">
            <h3 className="uppercase italic font-black text-4xl mb-6">
              Frequently Asked Questions
            </h3>

            <div className="border rounded-md overflow-hidden">
              {[
                ["Who can get the guest pass?", "Anyone interested in training at PLAN B THE GYM."],
                ["Is the guest pass free?", "Yes, it’s a one-day complimentary experience."],
                ["Can I try a class?", "Yes, subject to class availability."],
                ["Do I need to book?", "Yes, our team will confirm your visit."],
                ["Gym timings?", "Mon–Sat: 6 AM – 10 PM | Sun: 6 AM – 8 PM"],
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
