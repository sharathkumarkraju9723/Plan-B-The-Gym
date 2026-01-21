import { useState } from "react";

const OWNER_WHATSAPP = "917899944483"; // PLAN B THE GYM

const SelectField = ({ value, onChange, placeholder, options }) => (
  <div className="relative">
    <select
      value={value}
      onChange={onChange}
      required
      className="w-full h-[52px] appearance-none border border-[#cfcac2] rounded-lg px-4 pr-12 bg-white text-[#1f1f1f]"
    >
      <option value="">{placeholder}</option>
      {options.map((o) => (
        <option key={o}>{o}</option>
      ))}
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
);

export default function TryFreeClass({ isOpen, onClose }) {
  if (!isOpen) return null;

  const [form, setForm] = useState({
    name: "",
    mobile: "",
    classType: "",
  });

  const update = (key) => (e) =>
    setForm({ ...form, [key]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, mobile, classType } = form;
    if (!name || !mobile || !classType) return;

    const msg = `
    FREE GROUP CLASS TRIAL – PLAN B THE GYM

    Name: ${name}
    Mobile: ${mobile}
    Class Interested: ${classType}

    Please confirm my free trial slot.
    `;

    window.open(
      `https://wa.me/${OWNER_WHATSAPP}?text=${encodeURIComponent(msg)}`,
      "_blank"
    );

    onClose();
  };

  return (
    <div className="fixed text-black inset-0 z-50 flex items-center justify-center">
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/70" onClick={onClose} />

      {/* Modal */}
      <div className="relative bg-[#f6f4ef] w-full max-w-xl mx-4 p-8 rounded-2xl shadow-2xl z-50">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-xl font-bold text-gray-600"
        >
          ✕
        </button>

        <h2 className="text-2xl font-extrabold uppercase italic text-[#1f1f1f] mb-2">
          Try a Free Group Class
        </h2>

        <p className="text-sm text-[#6b6b6b] mb-6">
          Experience PLAN B THE GYM’s group workouts before you commit.
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            placeholder="Full Name *"
            required
            className="w-full h-[52px] border border-[#cfcac2] px-4 rounded-lg"
            onChange={update("name")}
          />

          <input
            placeholder="Mobile Number *"
            required
            className="w-full h-[52px] border border-[#cfcac2] px-4 rounded-lg"
            onChange={update("mobile")}
          />

          <SelectField
            value={form.classType}
            onChange={update("classType")}
            placeholder="Select Class *"
            options={[
              "HIIT",
              "Yoga",
              "Spin",
              "Zumba",
              "Strength Training",
              "Tabata",
            ]}
          />

          <label className="flex items-center gap-2 text-sm text-[#6b6b6b]">
            <input type="checkbox" required />
            I agree to be contacted by PLAN B THE GYM
          </label>

          <button
            type="submit"
            className="w-full mt-4 bg-[#2a2a2a] text-white py-3 rounded-xl font-bold uppercase border border-[#2a2a2a] transition hover:bg-[#f6f4ef] hover:text-[#2a2a2a]"
          >
            Claim Free Trial
          </button>
        </form>
      </div>
    </div>
  );
}
