import { useState } from "react";
import { CONTACT } from "../config/Contact";

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
      `https://wa.me/${CONTACT.WHATSAPP_OWNER}?text=${encodeURIComponent(msg)}`,
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
      <div className="relative bg-surface border border-divider w-full max-w-xl mx-4 p-6 rounded-xl z-50">
        {/* CLOSE */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-xl font-bold text-textPrimary  bg-transparent"
        >
          ✕
        </button>

        {/* HEADER */}
        <h2 className="text-3xl font-extrabold uppercase italic text-textPrimary mb-2">
          Start Your Free Trial
        </h2>

        <p className="text-sm text-textMuted mb-6">
          Experience training your way at{" "}
          <span className="font-semibold text-TextPrimary">
            PLAN B THE GYM
          </span>.
        </p>

        {/* FORM */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            placeholder="Full Name *"
            required
            className="w-full border border-divider bg-base px-4 py-3 rounded text-textPrimary"
            onChange={update("name")}
          />

          <input
            type="tel"
            placeholder="Mobile Number *"
            required
            className="w-full border border-divider bg-base px-4 py-3 rounded text-textPrimary"
            onChange={update("mobile")}
          />

          <input
            type="email"
            placeholder="Email (Optional)"
            className="w-full border border-divider bg-base px-4 py-3 rounded text-textPrimary"
            onChange={update("email")}
          />

          {/* SELECT */}
          <div className="relative">
            <select
              required
              onChange={update("service")}
              className="w-full h-[52px] appearance-none border border-divider rounded-lg px-4 pr-12 bg-base text-textPrimary"
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
          <label className="flex items-center gap-2 text-sm text-textPrimary]">
            <input type="checkbox" required />
            I agree to be contacted by PLAN B THE GYM
          </label>

          {/* CTA */}
          <button
            type="submit"
            className="w-full mt-4 bg-button text-textPrimary py-3 rounded-xl font-bold uppercase border border-buttonBorder transition hover:bg-buttonHover"
          >
            Claim Free Trial
          </button>
        </form>
      </div>
    </div>
  );
}
