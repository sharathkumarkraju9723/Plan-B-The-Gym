import { useState } from "react";

const OWNER_WHATSAPP = "917899944483";

const SelectField = ({ value, onChange, options, placeholder }) => (
    <div className="relative">
        <select
            value={value}
            onChange={onChange}
            required
            className="w-full h-[52px] appearance-none border border-[#cfcac2] rounded-lg px-4 pr-12 bg-white text-[#1f1f1f]"
        >
            <option value="">{placeholder}</option>
            {options.map((opt) => (
                <option key={opt}>{opt}</option>
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
            `https://wa.me/${OWNER_WHATSAPP}?text=${encodeURIComponent(msg)}`,
            "_blank"
        );
        onClose();
    };

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
            <div className="absolute inset-0 bg-black/70" onClick={onClose} />

            <div className="relative bg-[#f6f4ef] w-full max-w-xl mx-4 p-8 rounded-2xl shadow-2xl z-50">
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 text-xl font-bold text-gray-600"
                >
                    ✕
                </button>

                <h2 className="text-3xl font-extrabold uppercase italic text-[#1f1f1f] mb-2">
                    Book Your Free Trial
                </h2>

                <p className="text-sm text-[#6b6b6b] mb-6">
                    Train smarter at <span className="font-semibold">PLAN B THE GYM</span>.
                </p>

                <form onSubmit={handleSubmit} className="space-y-4">
                    {[
                        ["name", "Full Name *"],
                        ["mobile", "Mobile Number *"],
                        ["email", "Email (Optional)"],
                    ].map(([key, label]) => (
                        <input
                            key={key}
                            placeholder={label}
                            type={key === "email" ? "email" : "text"}
                            required={key !== "email"}
                            className="w-full h-[52px] border border-[#cfcac2] px-4 rounded-lg bg-white"
                            onChange={update(key)}
                        />
                    ))}

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

                    <label className="flex items-center gap-2 text-sm text-[#6b6b6b]">
                        <input type="checkbox" required />
                        I agree to be contacted by PLAN B THE GYM
                    </label>

                    <button
                        type="submit"
                        className="w-full mt-6 bg-[#2a2a2a] text-white py-3 rounded-xl font-bold uppercase border border-[#2a2a2a] transition hover:bg-[#f6f4ef] hover:text-[#2a2a2a]"
                    >
                        Book Free Trial
                    </button>
                </form>
            </div>
        </div>
    );
}
