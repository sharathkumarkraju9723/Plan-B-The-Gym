import { useRef, useState } from "react";
import strengthBg from "../../../../assets/home/experience/strength-training.jpg";
import { CONTACT } from "../../../config/Contact";
import { getScheduleByClass } from "../../../../utils/getScheduleByClass";
import { useToast } from "../../../../hooks/useToast";

export default function StrengthTraining() {
    const formRef = useRef(null);
    const scheduleRef = useRef(null);
    const { showToast } = useToast();

    const [active, setActive] = useState(null);
    const [showSchedule, setShowSchedule] = useState(false);
    const [submitted, setSubmitted] = useState(false);
    const [agreed, setAgreed] = useState(false);

    const [form, setForm] = useState({
        Name: "",
        Mobile: "",
        Email: "",
    });

    //  7-DAY GLOBAL STRENGTH SCHEDULE
    const schedule = getScheduleByClass("Strength");

    // FORM SUBMIT
    const handleSubmit = (e) => {
        e.preventDefault();
        if (submitted || !form.Name || !form.Mobile) {
            showToast("Please fill all required fields and accept the checkboc");
            return;
        }
        const message = `
Strength Training Enquiry - PLAN B THE GYM

Name: ${form.Name}
Mobile: ${form.Mobile}
Email: ${form.Email || "Not Provided"}

Interested in trying a Strength Training session.
`;

        window.open(
            `https://wa.me/${CONTACT.WHATSAPP_OWNER}?text=${encodeURIComponent(message)}`,
            "_blank"
        );

        setSubmitted(true);
        showToast("✓ Request Sent Successfully! We’ll contact you shortly.")
    };

    return (
        <>
            {/* HERO */}
            <section
                className="relative min-h-[55vh] bg-contain bg-center flex items-center justify-center"
                style={{ backgroundImage: `url(${strengthBg})` }}
            >
                <div className="absolute inset-0 bg-textPrimary/40" />
                <div className="relative z-10 text-center px-4">
                    <h1 className="mt-40 uppercase italic font-extrabold text-textLight text-4xl sm:text-5xl md:text-6xl lg:text-7xl">
                        Strength Training
                    </h1>
                    <p className="mt-4 text-lg sm:text-xl text-textLight/80">
                        Build muscle, improve posture, and gain real-world strength
                    </p>
                </div>
            </section>

            {/* MAIN */}
            <section className="bg-section text-textPrimary py-12">
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
                            src={strengthBg}
                            alt="Strength training at Plan B The Gym"
                            className="w-full min-h-[50vh] object-cover rounded-lg"
                        />
                    </div>

                    {/* CENTER COLUMN */}
                    <div ref={formRef} className="order-1 lg:order-2 lg:col-span-2">
                        <h2 className="uppercase italic font-extrabold text-3xl sm:text-4xl md:text-5xl">
                            Strength Training at PLAN B THE GYM – Mysore
                        </h2>

                        <p className="mt-6 text-lg text-textMuted">
                            Our strength training sessions focus on building muscle, improving
                            joint stability, and developing functional strength using free
                            weights, machines, and guided movement patterns.
                        </p>

                        <p className="mt-6 text-lg text-textSubtle">
                            Muscle growth • Fat loss • Injury prevention • Better posture
                        </p>

                        {/* FORM */}
                        <div className="mt-10 border border-divider bg-section rounded-xl p-6 sm:p-8 max-w-xl">
                            <form className="space-y-3" onSubmit={handleSubmit}>
                                <h3 className="uppercase italic font-extrabold text-3xl">
                                    Try a Strength Session
                                </h3>

                                <input
                                    placeholder="Name *"
                                    className="w-full border border-divider bg-base px-4 py-3 rounded"
                                    onChange={(e) => setForm({ ...form, Name: e.target.value })}
                                />

                                <input
                                    placeholder="Mobile *"
                                    className="w-full border border-divider bg-base px-4 py-3 rounded"
                                    onChange={(e) => setForm({ ...form, Mobile: e.target.value })}
                                />

                                <input
                                    placeholder="Email (Optional)"
                                    className="w-full border border-divider bg-base px-4 py-3 rounded"
                                    onChange={(e) => setForm({ ...form, Email: e.target.value })}
                                />

                                <label className="flex items-center gap-2 text-sm">
                                    <input
                                        type="checkbox"
                                        checked={agreed}
                                        onChange={(e) => setAgreed(e.target.checked)}
                                        className="accent-black"
                                    />
                                    I want to try a Strength Training session at PLAN B THE GYM
                                </label>

                                {/* BUTTONS */}
                                <div className="flex flex-col items-center gap-3">
                                    <button
                                        type="submit"
                                        disabled={submitted}
                                        className={`px-8 py-3 text-sm font-extrabold uppercase rounded-lg border-2 transition
                                            ${submitted
                                                ? "bg-sectuon text-textPrimary border-divider cursor-not-allowed"
                                                : "bg-button text-textPrimary border-buttonBorder hover:bg-buttonHover"
                                            }`}
                                    >
                                        {submitted ? "✓ Request Sent" : "Book Strength Session"}
                                    </button>

                                    <button
                                        type="button"
                                        onClick={() => {
                                            setShowSchedule(true);
                                            setTimeout(() => {
                                                scheduleRef.current?.scrollIntoView({ behavior: "smooth" });
                                            }, 150);
                                        }}
                                        className="inline-block px-6 py-2 text-sm bg-button text-textPrimary font-bold uppercase rounded-lg border border-buttonBorder hover:bg-buttonHover transition"
                                    >
                                        View Class Schedule
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>

                    {/* FAQ */}
                    <div className="order-2 lg:order-3 lg:col-span-3 mt-10">
                        <div className="max-w-3xl mx-auto">
                            <h3 className="uppercase italic font-extrabold text-3xl mb-6 text-center">
                                Frequently Asked Questions
                            </h3>

                            <div className="border border-divider rounded-md overflow-hidden">
                                {[
                                    [
                                        "What is strength training?",
                                        "Strength training focuses on improving muscle strength, endurance, and joint stability through resistance-based exercises.",
                                    ],
                                    [
                                        "Is it suitable for beginners?",
                                        "Yes. Our trainers ensure proper form, controlled weights, and safe progression.",
                                    ],
                                    [
                                        "How long is each session?",
                                        "Most sessions last 45–60 minutes including warm-up and cooldown.",
                                    ],
                                    [
                                        "How often should I train?",
                                        "2–4 sessions per week works well depending on your fitness goals.",
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
                                            <div className="px-4 pb-4 text-sm font-semibold text-textMuted bg-base border border-divider justify-center">
                                                {a}
                                            </div>
                                        )}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                {/* SCHEDULE */}
                {showSchedule && (
                    <div ref={scheduleRef} className="mt-16 bg-section py-16">
                        <div className="max-w-7xl mx-auto px-4">
                            <h2 className="uppercase italic font-bold text-4xl mb-10 text-center">
                                Weekly Strength Training Schedule
                            </h2>

                            {Object.keys(schedule).length === 0 ? (
                                <p className="text-center text-textMuted">
                                    No Strength sessions scheduled currently.
                                </p>
                            ) : (
                                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                                    {Object.entries(schedule).map(([day, classes]) => (
                                        <div key={day} className="bg-base rounded-xl p-4 shadow">
                                            <h3 className="font-bold text-lg mb-4 text-center">
                                                {day}
                                            </h3>

                                            {classes.map((item, i) => (
                                                <div
                                                    key={i}
                                                    className="border rounded-lg overflow-hidden mb-3"
                                                >
                                                    <div
                                                        className={`${item.color} text-textLight px-3 py-1 text-sm font-bold`}
                                                    >
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
                            )}
                        </div>
                    </div>
                )}
            </section>
        </>
    );
}
