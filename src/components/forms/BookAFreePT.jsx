import { useState } from "react";
import { CONTACT } from "../config/Contact";

/* reusable select */
const SelectField = ({ value, onChange, options, placeholder }) => (
  <div className="relative">
    <select
      value={value}
      onChange={onChange}
      required
      className="w-full h-[52px] appearance-none border border-divider rounded-lg px-4 pr-12 bg-base text-textPrimary"
    >
      <option value="">{placeholder}</option>
      {options.map((opt) => (
        <option key={opt}>{opt}</option>
      ))}
    </select>

    <svg
      className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-textPrimary"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      viewBox="0 0 24 24"
    >
      <path d="M19 9l-7 7-7-7" />
    </svg>
  </div>
);

export default function BookFreeTrial({ isOpen, onClose }) {
  if (!isOpen) return null;

  const [form, setForm] = useState({
    name: "",
    mobile: "",
    email: "",
    goal: "",
    time: "",
  });

  const update = (key) => (e) =>
    setForm({ ...form, [key]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, mobile, email, goal, time } = form;
    if (!name || !mobile || !goal || !time) return;

    const msg = `
FREE TRIAL REQUEST – PLAN B THE GYM

Name: ${name}
Mobile: ${mobile}
Email: ${email || "Not Provided"}

Goal: ${goal}
Preferred Time: ${time}
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

      {/* ONLY INNER FORM BOX */}
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
          Book Your Free Trial
        </h2>

        <p className="text-sm text-textMuted mb-6">
          Train smarter at{" "}
          <span className="font-semibold text-textPrimary">
            PLAN B THE GYM
          </span>.
        </p>

        {/* FORM */}
        <form onSubmit={handleSubmit} className="space-y-3">
          <input
            placeholder="Name *"
            className="w-full border border-divider bg-base px-4 py-3 rounded text-textPrimary"
            onChange={update("name")}
          />

          <input
            placeholder="Mobile *"
            className="w-full border border-divider bg-base px-4 py-3 rounded text-textPrimary"
            onChange={update("mobile")}
          />

          <input
            placeholder="Email (Optional)"
            className="w-full border border-divider bg-base px-4 py-3 rounded text-textPrimary"
            onChange={update("email")}
          />

          <SelectField
            value={form.goal}
            onChange={update("goal")}
            placeholder="Select Your Goal *"
            options={[
              "Fat Loss",
              "Strength & Muscle",
              "Mobility & Recovery",
              "General Fitness",
              "Sports Conditioning",
            ]}
          />

          <SelectField
            value={form.time}
            onChange={update("time")}
            placeholder="Preferred Time Slot *"
            options={[
              "06:00 AM – 09:00 AM",
              "09:00 AM – 12:00 PM",
              "04:00 PM – 07:00 PM",
              "07:00 PM – 10:00 PM",
            ]}
          />

          <label className="flex items-center gap-2 text-sm text-textMuted">
            <input type="checkbox" required />
            I agree to be contacted by PLAN B THE GYM
          </label>

          <button
            type="submit"
            className="w-full mt-4 bg-button text-textPrimary py-3 rounded-xl font-bold uppercase border border-buttonBorder transition hover:bg-buttonHover"
          >
            Book Free Trial
          </button>
        </form>
      </div>
    </div>
  );
}
