import { useState } from "react";
import { CONTACT } from "../config/Contact";

export default function JoinToday({ isOpen, onClose }) {
    if (!isOpen) return null;

    const [form, setForm] = useState({
        name: "",
        mobile: "",
        email: "",
        plan: "",
        date: "",
    });

    const onChange = (k) => (e) =>
        setForm({ ...form, [k]: e.target.value });

    const submit = (e) => {
        e.preventDefault();
        const { name, mobile, email, plan, date } = form;
        if (!name || !mobile || !plan) return;

        const msg = `
MEMBERSHIP ENQUIRY – PLAN B THE GYM

Name: ${name}
Mobile: ${mobile}
Email: ${email || "Not Provided"}
Plan: ${plan}
Start Date: ${date || "Flexible"}
`;

        window.open(
            `https://wa.me/${CONTACT.WHATSAPP_OWNER}?text=${encodeURIComponent(msg)}`,
            "_blank"
        );
        onClose();
    };

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center text-textPrimary">
            {/* backdrop */}
            <div className="absolute inset-0 bg-black/70" onClick={onClose} />

            {/* modal */}
            <div className="relative bg-surface w-full max-w-xl mx-4 p-8 rounded-2xl border border-divider">
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 text-xl font-bold text-textPrimary bg-transparent"
                >
                    ✕
                </button>

                <h2 className="text-3xl font-extrabold italic uppercase text-textPrimary">
                    Join Plan B The Gym
                </h2>

                <p className="text-sm text-textMuted mb-6">
                    Confirm your membership with a quick call from our team.
                </p>

                <form onSubmit={submit} className="space-y-4">
                    {[
                        ["name", "Full Name *"],
                        ["mobile", "Mobile Number *"],
                        ["email", "Email (Optional)"],
                    ].map(([k, p]) => (
                        <input
                            key={k}
                            placeholder={p}
                            required={k !== "email"}
                            type={k === "email" ? "email" : "text"}
                            className="w-full h-[52px] border border-divider px-4 rounded-lg bg-base text-textPrimary"
                            onChange={onChange(k)}
                        />
                    ))}

                    <div className="relative">
                        <select
                            required
                            onChange={onChange("plan")}
                            className="w-full h-[52px] appearance-none border border-divider rounded-lg px-4 pr-12 bg-base text-textPrimary"
                        >
                            <option value="">Membership Plan *</option>
                            <option>Monthly</option>
                            <option>Quarterly</option>
                            <option>6 Months</option>
                            <option>Annual</option>
                            <option>Student / Couple</option>
                        </select>

                        <svg
                            className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-textPrimary pointer-events-none"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            viewBox="0 0 24 24"
                        >
                            <path d="M19 9l-7 7-7-7" />
                        </svg>
                    </div>

                    <input
                        type="date"
                        onChange={onChange("date")}
                        className="w-full h-[52px] border border-divider px-4 rounded-lg bg-base text-textPrimary"
                    />

                    <label className="flex items-center gap-2 text-sm text-textMuted">
                        <input type="checkbox" required />
                        I agree to be contacted
                    </label>

                    <button
                        type="submit"
                        className="w-full mt-4 bg-button text-textPrimary py-3 rounded-xl font-bold uppercase border border-buttonBorder transition hover:bg-buttonHover"
                    >
                        Join Now
                    </button>
                </form>
            </div>
        </div>
    );
}
