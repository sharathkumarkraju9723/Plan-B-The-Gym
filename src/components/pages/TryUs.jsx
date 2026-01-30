import { useRef, useState } from "react";
import tryBg from "../../assets/images/tryus.jpg";
import { CONTACT } from "../../components/config/Contact";
import { useToast } from "../../hooks/useToast";

export default function TryUs() {
  const formRef = useRef(null);
  const { showToast } = useToast();

  const [submitted, setSubmitted] = useState(false);
  const [agreed, setAgreed] = useState(false);

  const [form, setForm] = useState({
    Name: "",
    Mobile: "",
    Email: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    // STRICT VALIDATION
    if (!form.Name || !form.Mobile || !agreed || submitted) {
      showToast("! Please fill all required fields and accept the checkbox.");
      return;
    }

    const message = `
FREE GUEST PASS REQUEST – PLAN B THE GYM

Name: ${form.Name}
Mobile: ${form.Mobile}
Email: ${form.Email || "Not Provided"}

Interested in trying the gym with a free guest pass.
`;

    window.open(
      `https://wa.me/${CONTACT.WHATSAPP_OWNER}?text=${encodeURIComponent(
        message
      )}`,
      "_blank"
    );

    setSubmitted(true);

    //  BLACK SUCCESS TOAST
    showToast("✓ Request Sent Successfully! We’ll contact you shortly.");
  };

  return (
    <>
      {/* HERO */}
      <section
        className="relative min-h-[50vh] bg-contain bg-center flex items-center justify-center"
        style={{ backgroundImage: `url(${tryBg})` }}
      >
        <div className="absolute inset-0 bg-textPrimary/20" />
        <div className="relative z-10 text-center px-4">
          <h1 className="mt-30 uppercase italic font-extrabold text-textLight/80 text-4xl md:text-6xl lg:text-7xl">
            Try Us
          </h1>
          <p className="mt-4 text-lg text-textLight/90">
            Experience PLAN B THE GYM before you commit
          </p>
        </div>
      </section>

      {/* MAIN */}
      <section className="bg-section py-14 text-textPrimary">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-3 gap-12">

          {/* MAP + IMAGE */}
          <div className="order-3 lg:order-1 space-y-6">
            <iframe
              title="Plan B The Gym Location"
              src="https://www.google.com/maps?q=Plan+B+The+Gym,+Kuvempu+Nagara,+Mysuru&output=embed"
              className="w-full h-64 rounded border border-divider"
              loading="lazy"
            />

            <img
              src={tryBg}
              alt="Try Plan B The Gym"
              className="w-full min-h-[40vh] object-cover rounded-lg"
            />
          </div>

          {/* FORM */}
          <div ref={formRef} className="order-1 lg:order-2 lg:col-span-2">
            <h2 className="uppercase italic font-extrabold text-3xl md:text-5xl">
              Free Guest Pass at PLAN B THE GYM – Mysore
            </h2>

            <div className="mt-16 bg-section/50 border border-divider rounded-xl p-6 max-w-xl">
              <form onSubmit={handleSubmit} className="space-y-6">
                <h3 className="uppercase italic font-extrabold text-3xl">
                  Claim Your Free Guest Pass
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

                <label className="flex gap-2 text-sm text-textMuted items-center">
                  <input
                    type="checkbox"
                    checked={agreed}
                    onChange={(e) => setAgreed(e.target.checked)}
                    className="accent-black"
                  />
                  I want to try PLAN B THE GYM with a free guest pass
                </label>

                <div className="flex justify-center">
                  <button
                    type="submit"
                    disabled={submitted}
                    className={`px-8 py-3 mb-4 text-sm font-extrabold uppercase rounded-lg border transition
                      ${submitted
                        ? "bg-section text-textPrimary border-divider cursor-not-allowed"
                        : "bg-button text-textPrimary border-buttonBorder hover:bg-buttonHover"
                      }`}
                  >
                    {submitted ? "✓ Request Sent" : "Book Free Guest Pass"}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
