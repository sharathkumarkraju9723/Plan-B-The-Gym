import { useRef, useState } from "react";
import spinBg from "../../../../assets/home/experience/spin-class.jpg";
import {CONTACT} from "../../../config/Contact";



// WEEKLY SPIN SCHEDULE
const schedule = {
    Monday: [
        { time: "6:30 AM", title: "Spin Training", color: "bg-indigo-600" },
        { time: "7:00 PM", title: "Spin Training", color: "bg-indigo-700" },
    ],
    Wednesday: [
        { time: "6:30 AM", title: "Spin Training", color: "bg-indigo-600" },
        { time: "7:00 PM", title: "Spin Training", color: "bg-indigo-700" },
    ],
    Friday: [
        { time: "7:00 PM", title: "Spin Training", color: "bg-indigo-600" },
    ],
    Saturday: [
        { time: "8:00 AM", title: "Spin Training", color: "bg-indigo-700" },
    ],
};

export default function SpinClasses() {
    const formRef = useRef(null);
    const scheduleRef = useRef(null);

    const [active, setActive] = useState(null);
    const [showSchedule, setShowSchedule] = useState(false);
    const [submitted, setSubmitted] = useState(false);

    const [form, setForm] = useState({
        Name: "",
        Mobile: "",
        Email: "",
    });

    // FORM SUBMIT
    const handleSubmit = (e) => {
        e.preventDefault();
        if (submitted || !form.Name || !form.Mobile) return;

        const message = `
Spin Training Enquiry - PLAN B THE GYM

Name: ${form.Name}
Mobile: ${form.Mobile}
Email: ${form.Email || "Not Provided"}

Interested in trying a Spin Training session.
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
                className="relative min-h-[60vh] bg-contain bg-center flex items-center justify-center"
                style={{ backgroundImage: `url(${spinBg})` }}
            >
                <div className="absolute inset-0 bg-textPrimary/40" />
                <div className="relative z-10 text-center px-4">
                    <h1 className="mt-40 uppercase italic font-extrabold text-textLight text-4xl sm:text-5xl md:text-6xl lg:text-7xl">
                        Spin Training
                    </h1>
                    <p className="mt-4 text-lg sm:text-xl text-textLight/80">
                        High-energy indoor cycling to build stamina and burn calories
                    </p>
                </div>
            </section>

            {/* MAIN */}
            <section className="bg-section text-textPrimary py-16">
                <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-3 gap-12">

                    {/* LEFT COLUMN */}
                    <div className="order-3 lg:order-1 space-y-6">
                        <div className="w-full h-64 rounded-lg overflow-hidden border border-divider">
                            <iframe
                                title="Plan B The Gym Location"
                                src="https://www.google.com/maps?q=Plan+B+The+Gym,+Kuvempu+Nagara,+Mysuru&output=embed"
                                className="w-full h-full border-0"
                                loading="lazy"
                            />
                        </div>

                        <img
                            src={spinBg}
                            alt="Spin training at Plan B The Gym"
                            className="w-full min-h-[50vh] object-cover rounded-lg"
                        />
                    </div>

                    {/* CENTER COLUMN */}
                    <div ref={formRef} className="order-1 lg:order-2 lg:col-span-2">
                        <h2 className="uppercase italic font-extrabold text-3xl sm:text-4xl md:text-5xl">
                            Spin Classes at PLAN B THE GYM – Mysore
                        </h2>

                        <p className="mt-6 text-lg justify-center text-textMuted">
                            Spin training is an instructor-led indoor cycling workout that
                            improves cardiovascular endurance while being easy on the joints.
                            Sessions combine music, resistance control, and guided intervals
                            for an effective full lower-body workout.
                        </p>

                        <p className="mt-4 text-lg text-textSubtle">
                            Cardio endurance • Fat burn • Low-impact • Leg strength
                        </p>

                        {/* FORM */}
                        <div className="mt-10 bg-section border border-divider rounded-xl p-6 sm:p-8 max-w-xl">
                            <form className="space-y-3" onSubmit={handleSubmit}>
                                <h3 className="uppercase italic  font-extrabold text-3xl">
                                    Try a Spin Session
                                </h3>

                                <input
                                    placeholder="Name *"
                                    className="w-full border border-divider bg-base  px-4 py-3 rounded"
                                    onChange={(e) => setForm({ ...form, Name: e.target.value })}
                                />

                                <input
                                    placeholder="Mobile *"
                                    className="w-full border border-divider bg-base px-4 py-3 rounded"
                                    onChange={(e) => setForm({ ...form, Mobile: e.target.value })}
                                />

                                <input
                                    placeholder="Email (Optional)"
                                    className="w-full border border-divider bg-base  px-4 py-3 rounded"
                                    onChange={(e) => setForm({ ...form, Email: e.target.value })}
                                />

                                <label className="flex items-center gap-2 text-sm">
                                    <input type="checkbox" />
                                    I want to try a Spin Training session at PLAN B THE GYM
                                </label>

                                {/* BUTTONS – STACKED */}
                                <div className="flex flex-col items-center gap-3">
                                    <button
                                        type="submit"
                                        disabled={submitted}
                                        className={`px-8 py-3 text-sm font-extrabold uppercase rounded-lg border-2 transition
                                             ${submitted
                                                ? "bg-surface text-textSubtle border-divider cursor-not-allowed"
                                                : "bg-button text-textPrimary border-buttonButton hover:bg-buttoHover"
                                            }`}
                                    >
                                        {submitted ? "✓ Request Sent" : "Book Spin Session"}
                                    </button>

                                    <button
                                        type="button"
                                        onClick={() => {
                                            setShowSchedule(true);
                                            setTimeout(() => {
                                                scheduleRef.current?.scrollIntoView({ behavior: "smooth" });
                                            }, 150);
                                        }}
                                        className="inline-block px-6 py-2 text-sm bg-button text-textPrimary font-bold uppercase rounded-lg border border-buttonBorder hover:bg-buttonHover  transition"
                                    >
                                        View Class Schedule
                                    </button>
                                </div>

                                {submitted && (
                                    <div className="bg-surface border border-divider p-3 rounded-lg text-center">
                                        <p className="font-bold">Request Sent Successfully</p>
                                        <p className="text-sm text-textMuted">Our team will contact you shortly</p>
                                    </div>
                                )}
                            </form>
                        </div>
                    </div>

                    {/* FAQ – REDUCED WIDTH */}
                    <div className="order-2 lg:order-3 lg:col-span-3 mt-8">
                        <div className="max-w-3xl mx-auto">
                            <h3 className="uppercase italic font-extrabold text-3xl mb-6 text-center">
                                Frequently Asked Questions
                            </h3>

                            <div className="border border-divider rounded-md overflow-hidden">
                                {[
                                    [
                                        "What is spin training?",
                                        "Spin training is an indoor cycling workout focused on improving stamina, heart health, and lower-body strength."
                                    ],
                                    [
                                        "Is spin suitable for beginners?",
                                        "Yes. Resistance and pace can be adjusted to match your fitness level."
                                    ],
                                    [
                                        "How long is a spin class?",
                                        "Most spin sessions last around 45 minutes including warm-up and cooldown."
                                    ],
                                    [
                                        "How often should I attend?",
                                        "2–3 sessions per week is ideal for endurance and fat loss."
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
                    </div>
                </div>

                {/* SCHEDULE BANNER */}
                {showSchedule && (
                    <div ref={scheduleRef} className="mt-20 bg-gray-100 py-10">
                        <div className="max-w-7xl mx-auto px-4">
                            <h2 className="uppercase italic text-textPrimary font-bold text-4xl mb-10 text-center">
                                Weekly Spin Schedule
                            </h2>

                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                                {Object.entries(schedule).map(([day, classes]) => (
                                    <div key={day} className="bg-surface rounded-xl p-4 shadow">
                                        <h3 className="font-bold text-lg mb-4 text-center">{day}</h3>

                                        {classes.map((item, i) => (
                                            <div key={i} className="border rounded-lg overflow-hidden mb-3">
                                                <div className={`${item.color} text-textLight px-3 py-1 text-sm font-bold`}>
                                                    {item.time}
                                                </div>
                                                <div className="p-3 text-sm font-semibold text-textPrimary">
                                                    {item.title}
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                )}
            </section>
        </>
    );
}
