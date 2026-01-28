import { useRef, useState } from "react";
import yogaBg from "../../../../assets/home/experience/yogabg.jpg";
import yogaImg from "../../../../assets/images/yogaclasses.jpg";
import { CONTACT } from "../../../config/Contact";

// WEEKLY YOGA SCHEDULE
const schedule = {
    Monday: [
        { time: "7:00 AM", title: "Yoga Flow", color: "bg-purple-600" },
        { time: "6:30 PM", title: "Relax & Stretch", color: "bg-indigo-600" },
    ],
    Wednesday: [
        { time: "7:00 AM", title: "Power Yoga", color: "bg-purple-600" },
        { time: "6:30 PM", title: "Mobility Yoga", color: "bg-indigo-600" },
    ],
    Friday: [
        { time: "6:30 PM", title: "Evening Yoga", color: "bg-purple-600" },
    ],
    Saturday: [
        { time: "8:00 AM", title: "Weekend Yoga", color: "bg-indigo-600" },
    ],
};

export default function YogaClasses() {
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

    const handleSubmit = (e) => {
        e.preventDefault();
        if (submitted || !form.Name || !form.Mobile) return;

        const message = `
Yoga Class Enquiry - PLAN B THE GYM

Name: ${form.Name}
Mobile: ${form.Mobile}
Email: ${form.Email || "Not Provided"}

Interested in trying a Yoga session.
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
                className="relative min-h-[70vh] bg-contain bg-center flex items-center justify-center"
                style={{ backgroundImage: `url(${yogaBg})` }}
            >
                <div className="absolute inset-0 bg-textPrimary/40" />
                <div className="relative z-10 text-center px-4">
                    <h1 className="mt-40 uppercase italic font-extrabold text-textLight text-4xl sm:text-5xl md:text-6xl lg:text-7xl">
                        Yoga
                    </h1>
                    <p className="mt-4 text-lg sm:text-xl text-textLight/80">
                        Balance your body, mind & breath at PLAN B THE GYM
                    </p>
                </div>
            </section>

            {/* MAIN */}
            <section className="bg-section text-textPrimary py-16">
                <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-3 gap-12">

                    {/* LEFT */}
                    <div className="order-3 lg:order-1 space-y-6">
                        <iframe
                            title="Plan B The Gym Location"
                            src="https://www.google.com/maps?q=Plan+B+The+Gym,+Kuvempu+Nagara,+Mysuru&output=embed"
                            className="w-full h-64 rounded border"
                            loading="lazy"
                        />

                        <img
                            src={yogaImg}
                            alt="Yoga at Plan B The Gym"
                            className="w-full min-h-[45vh] object-cover rounded-lg"
                        />
                    </div>

                    {/* CENTER */}
                    <div ref={formRef} className="order-1 lg:order-2 lg:col-span-2">
                        <h2 className="uppercase italic font-extrabold text-3xl md:text-5xl">
                            Yoga Classes at PLAN B THE GYM – Mysore
                        </h2>

                        <p className="mt-4 text-lg text-textMuted">
                            Improve flexibility, posture, recovery, and mental clarity with guided yoga sessions.
                        </p>

                        <p className="mt-3 text-lg text-textSubtle">
                            Flexibility • Mobility • Stress Relief • Recovery
                        </p>

                        {/* FORM */}
                        <div className="mt-12 border border-divider bg-section rounded-xl p-5 max-w-xl">
                            <form onSubmit={handleSubmit} className="space-y-4">
                                <h3 className="uppercase italic font-extrabold text-3xl">
                                    Try a Yoga Session
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

                                <label className="flex gap-2 text-sm">
                                    <input type="checkbox" /> I want to try a Yoga class
                                </label>

                                <div className="flex justify-center">
                                    <button
                                        type="submit"
                                        disabled={submitted}
                                        className={`px-8 py-3 text-sm font-extrabold uppercase rounded-lg border-2 transition 
                                            ${submitted
                                                ? "bg-surface text-textSubtle border-divider cursor-not-allowed"
                                                : "bg-button text-textPrimary border-buttonButton hover:bg-buttoHover"
                                            }`}
                                    >
                                        {submitted ? "✓ Request Sent" : "Book Yoga Session"}
                                    </button>
                                </div>

                                {submitted && (
                                    <div className="bg-surface border border-divider p-3 rounded-lg text-center">
                                        <p className="font-bold">Request Sent Successfully</p>
                                        <p className="text-sm text-textMuted">Our team will contact you shortly</p>
                                    </div>
                                )}

                                {/* SHOW SCHEDULE BUTTON */}
                                <div className="flex justify-center">
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
                            </form>
                        </div>
                    </div>
                </div>

                {/* FAQ */}
                <div className="mt-16 max-w-3xl mx-auto px-4">
                    <h3 className="uppercase italic font-extrabold text-3xl mb-6 text-center">
                        Frequently Asked Questions
                    </h3>

                    <div className="border border-divider rounded-md overflow-hidden">
                        {[
                            ["What happens in a yoga class?", "Breathing, mobility, guided poses, and relaxation."],
                            ["Is yoga beginner friendly?", "Yes, movements are scaled for all levels."],
                            ["Class duration?", "50–60 minutes per session."],
                            ["How often should I attend?", "2–3 times per week is ideal."],
                        ].map(([q, a], i) => (
                            <div key={i} className="border-b last:border-b-0">
                                <button
                                    onClick={() => setActive(active === i ? null : i)}
                                    className="w-full px-4 py-3 flex justify-between text-left font-medium hover:bg-section"
                                >
                                    {q}
                                    <span>{active === i ? "−" : "+"}</span>
                                </button>

                                {active === i && (
                                    <div className="px-4 pb-4 text-sm text-textMuted">{a}</div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>

                {/* SCHEDULE */}
                {showSchedule && (
                    <div ref={scheduleRef} className="mt-20 bg-section py-16">
                        <div className="max-w-7xl mx-auto px-4">
                            <h2 className="uppercase italic font-bold text-4xl mb-10 text-center">
                                Weekly Yoga Schedule
                            </h2>

                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                                {Object.entries(schedule).map(([day, classes]) => (
                                    <div key={day} className="bg-surface p-4 rounded-xl shadow">
                                        <h3 className="font-bold text-center mb-4">{day}</h3>

                                        {classes.map((item, i) => (
                                            <div key={i} className="border border-divider rounded-lg overflow-hidden mb-3">
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
