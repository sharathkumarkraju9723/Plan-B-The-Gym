import { useState } from "react";
import tryBg from "../../assets/images/tryus.jpg";
import { CONTACT } from "../config/Contact";

export default function JoinUS() {
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
MEMBERSHIP ENQUIRY – PLAN B THE GYM

Name: ${form.Name}
Mobile: ${form.Mobile}
Email: ${form.Email || "Not Provided"}

Please contact me with membership details.
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
        style={{ backgroundImage: `url(${tryBg})` }}
      >
        <div className="absolute inset-0 bg-txetxPrimary/40" />
        <div className="relative z-10 text-center px-4">
          <h1 className="mt-40 uppercase italic font-extrabold text-textLight text-4xl md:text-6xl lg:text-7xl">
            Join Us
          </h1>
          <p className="mt-4 text-lg text-textLight/90">
            Become part of the PLAN B THE GYM community
          </p>
        </div>
      </section>

      {/* MAIN */}
      <section className="bg-white py-16 text-textPrimary">
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
              alt="PLAN B THE GYM Membership"
              className="w-full min-h-[45vh] object-cover rounded-lg"
            />
          </div>

          {/* CENTER – CONTENT + FORM */}
          <div className="order-1 lg:order-2 lg:col-span-2">
            <h2 className="uppercase italic font-extrabold text-3xl md:text-5xl">
              Membership at PLAN B THE GYM – Mysore
            </h2>

            <p className="mt-4 text-lg text-textMuted">
              Train in a motivating environment with expert guidance,
              modern equipment, and a strong fitness community.
            </p>

            <p className="mt-3 text-lg text-textSubtle">
              Strength • Cardio • Group Classes • Recovery • Guidance
            </p>

            {/* FORM */}
            <div className="mt-10 bg-suerface border  border-divider rounded-xl p-6 max-w-xl">
              <form onSubmit={handleSubmit} className="space-y-5">
                <h3 className="uppercase italic font-extrabold text-3xl">
                  Enquire About Membership
                </h3>

                <input
                  placeholder="Name *"
                  className="w-full border  border-divider bg-base px-4 py-3 rounded"
                  onChange={(e) =>
                    setForm({ ...form, Name: e.target.value })
                  }
                />

                <input
                  placeholder="Mobile *"
                  className="w-full border border-divider bg-base px-4 py-3 rounded"
                  onChange={(e) =>
                    setForm({ ...form, Mobile: e.target.value })
                  }
                />

                <input
                  placeholder="Email (Optional)"
                  className="w-full border border-divider bg-base px-4 py-3 rounded"
                  onChange={(e) =>
                    setForm({ ...form, Email: e.target.value })
                  }
                />

                <label className="flex gap-2 text-sm text-textMuted">
                  <input type="checkbox" required />
                  I’m interested in joining PLAN B THE GYM
                </label>

                <div className="flex justify-center">
                  <button
                    type="submit"
                    disabled={submitted}
                    className={`px-8 py-3 text-sm font-extrabold uppercase rounded-lg border transition
                      ${submitted
                        ? "bg-surface text-textSubtle border-divider cursor-not-allowed"
                        : "bg-button text-textPrimary border-buttonBorder hover:bg-buttonHover"
                      }`}
                  >
                    {submitted ? "✓ Request Sent" : "Request Membership Details"}
                  </button>
                </div>

                {submitted && (
                  <div className="bg-surface  border border-divider  p-3 rounded-lg text-center">
                    <p className=" font-bold">Request Sent Successfully</p>
                    <p className=" text-sm text-textMuted">Our team will contact you shortly</p>
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>

        {/* FAQ – SAME WIDTH AS TRY US / YOGA */}
        <div className="mt-20 max-w-3xl mx-auto px-4">
          <h3 className="uppercase italic font-extrabold text-3xl mb-6 text-center">
            Frequently Asked Questions
          </h3>

          <div className="border border-divider  rounded-md overflow-hidden">
            {[
              [
                "What memberships are available?",
                "We offer flexible plans based on training goals and duration."
              ],
              [
                "Are group classes included?",
                "Yes, selected group classes are included in memberships."
              ],
              [
                "Do you provide trainer guidance?",
                "Yes, certified trainers are available on the floor."
              ],
              [
                "Can I try before joining?",
                "Yes, you can request a free guest pass."
              ],
              [
                "What are gym timings?",
                "Mon–Sat: 6 AM – 10 PM | Sun: 6 AM – 8 PM"
              ],
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
      </section>
    </>
  );
}
