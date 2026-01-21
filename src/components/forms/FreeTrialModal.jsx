import { useState } from "react";

const OWNER_WHATSAPP = "917899944483"; // PLAN B THE GYM

export default function StartFreeTrial({ isOpen, onClose }) {
  if (!isOpen) return null;

  const [form, setForm] = useState({
    name: "",
    mobile: "",
    email: "",
    service: "",
  });

  const update = (key) => (e) =>
    setForm({ ...form, [key]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, mobile, email, service } = form;
    if (!name || !mobile || !service) return;

    const msg = `
FREE TRIAL REQUEST – PLAN B THE GYM

Name: ${name}
Mobile: ${mobile}
Email: ${email || "Not Provided"}

Interested Service: ${service}

Please schedule my free trial.
`;

    window.open(
      `https://wa.me/${OWNER_WHATSAPP}?text=${encodeURIComponent(msg)}`,
      "_blank"
    );

    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* BACKDROP */}
      <div
        className="absolute inset-0 bg-black/70"
        onClick={onClose}
      />

      {/* MODAL */}
      <div className="relative bg-[#f6f4ef] w-full max-w-xl mx-4 p-8 rounded-2xl shadow-2xl z-50">
        {/* CLOSE */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-xl font-bold text-gray-600 hover:text-black"
        >
          ✕
        </button>

        {/* HEADER */}
        <h2 className="text-3xl font-extrabold uppercase italic text-[#1f1f1f] mb-2">
          Start Your Free Trial
        </h2>

        <p className="text-sm text-[#6b6b6b] mb-6">
          Experience training your way at{" "}
          <span className="font-semibold text-[#1f1f1f]">
            PLAN B THE GYM
          </span>.
        </p>

        {/* FORM */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            placeholder="Full Name *"
            required
            className="w-full h-[52px] border border-[#cfcac2] px-4 rounded-lg bg-white"
            onChange={update("name")}
          />

          <input
            type="tel"
            placeholder="Mobile Number *"
            required
            className="w-full h-[52px] border border-[#cfcac2] px-4 rounded-lg bg-white"
            onChange={update("mobile")}
          />

          <input
            type="email"
            placeholder="Email (Optional)"
            className="w-full h-[52px] border border-[#cfcac2] px-4 rounded-lg bg-white"
            onChange={update("email")}
          />

          {/* SELECT */}
          <div className="relative">
            <select
              required
              onChange={update("service")}
              className="w-full h-[52px] appearance-none border border-[#cfcac2] rounded-lg px-4 pr-12 bg-white text-[#1f1f1f]"
            >
              <option value="">Select a Service *</option>
              <option>Strength Training</option>
              <option>HIIT / Functional Training</option>
              <option>Personal Training</option>
              <option>Group Classes</option>
              <option>Fat Loss Programs</option>
            </select>

            <svg
              className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-600"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path d="M19 9l-7 7-7-7" />
            </svg>
          </div>

          {/* CONSENT */}
          <label className="flex items-center gap-2 text-sm text-[#6b6b6b]">
            <input type="checkbox" required />
            I agree to be contacted by PLAN B THE GYM
          </label>

          {/* CTA */}
          <button
            type="submit"
            className="w-full mt-6 bg-[#2a2a2a] text-white py-3 rounded-xl font-bold uppercase border border-[#2a2a2a] transition hover:bg-[#f6f4ef] hover:text-[#2a2a2a] hover:scale-[1.02]"
          >
            Claim Free Trial
          </button>
        </form>
      </div>
    </div>
  );
}
