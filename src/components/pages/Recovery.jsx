import { useState, useRef } from "react";
import recovery from "../../assets/images/recovery.png";

const OWNER_WHATSAPP = "917899944483"; // PLAN B THE GYM number

export default function Recovery() {
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
Recovery Session Enquiry - PLAN B THE GYM

Name: ${form.Name}
Mobile: ${form.Mobile}
Email: ${form.Email || "Not Provided"}

Please contact me regarding recovery therapy.
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
        style={{ backgroundImage: `url(${recovery})` }}
      >
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative z-10 text-center px-4">
          <h1 className="mt-20 uppercase italic font-black text-white text-6xl md:text-7xl lg:text-8xl">
            Recovery
          </h1>
          <p className="mt-6 uppercase text-xl text-gray-200">
            Compress. Recover. Perform Better.
          </p>
        </div>
      </section>

      {/* MAIN */}
      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-3 gap-8">

          {/* LEFT */}
          <div className="lg:col-span-2 space-y-6 text-black">
            <div>
              <h2 className="uppercase italic font-black text-3xl md:text-5xl mt-6">
                Recovery Programs for Performance & Longevity
              </h2>
              <p className="mt-4 text-lg text-gray-700 max-w-2xl">
                Modern recovery methods designed to reduce muscle soreness,
                improve circulation, and support consistent training.
              </p>
            </div>

            {/* FORM */}
            <div className="bg-gray-100 rounded-xl p-5 max-w-lg">
              <h3 className="uppercase italic font-extrabold text-2xl mb-4">
                Start Your Recovery Session
              </h3>

              <form className="space-y-4" onSubmit={handleSubmit}>
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

                <select className="w-full border px-4 py-3 rounded">
                  <option>Percussive Massage Therapy</option>
                  <option>Compression Therapy – Arms</option>
                  <option>Compression Therapy – Hips</option>
                  <option>Compression Therapy – Legs</option>
                </select>

                <label className="flex gap-2 text-sm">
                  <input type="checkbox" />
                  I’d like to book my recovery session
                </label>

                <div className="flex justify-center">
                  <button
                    type="submit"
                    disabled={submitted}
                    className={`mt-4 px-8 py-2.5 text-sm font-extrabold uppercase rounded-lg border-2 transition
                      ${
                        submitted
                          ? "bg-green-600 text-white border-green-700 cursor-not-allowed"
                          : "bg-primary text-white border-black hover:bg-white hover:text-black"
                      }`}
                  >
                    {submitted ? "✓ Request Sent" : "Book Recovery Session"}
                  </button>
                </div>

                {submitted && (
                  <div className="mt-5 bg-green-50 border border-green-500 text-green-700 p-3 rounded-lg text-center">
                    <p className="font-bold">Request Sent Successfully</p>
                    <p className="text-sm">
                      Our team will contact you shortly.
                    </p>
                  </div>
                )}
              </form>
            </div>
          </div>

          {/* MAP + IMAGE */}
          <div className="space-y-4">
            <div className="h-[260px] rounded overflow-hidden border">
              <iframe
                title="Plan B The Gym Location"
                src="https://www.google.com/maps?q=Plan+B+The+Gym,+Kuvempu+Nagara,+Mysuru&output=embed"
                className="w-full h-full"
                loading="lazy"
              />
            </div>

            <img
              src={recovery}
              alt="Recovery at PLAN B THE GYM"
              className="w-full h-[520px] object-cover rounded-lg"
            />
          </div>
        </div>
      </section>
    </>
  );
}
