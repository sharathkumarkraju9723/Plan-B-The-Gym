import { useRef, useState } from "react";
import spinBg from "../../../../assets/home/experience/spin-class.jpg";

const OWNER_WHATSAPP = "917899944483"; // PLAN B THE GYM

// WEEKLY SPIN SCHEDULE
const schedule = {
    Monday: [
        { time: "6:30 AM", title: "Spin Class", color: "bg-indigo-600" },
        { time: "7:00 PM", title: "Spin Class", color: "bg-indigo-600" },
    ],
    Wednesday: [
        { time: "6:30 AM", title: "Spin Class", color: "bg-indigo-600" },
        { time: "7:00 PM", title: "Spin Class", color: "bg-indigo-600" },
    ],
    Friday: [
        { time: "7:00 PM", title: "Spin Class", color: "bg-indigo-600" },
    ],
    Saturday: [
        { time: "8:00 AM", title: "Spin Class", color: "bg-indigo-600" },
    ],
};

export default function SpinClasses() {
    const formRef = useRef(null);
    const scheduleRef = useRef(null);

    const [active, setActive] = useState(null);
    const [showSchedule, setShowSchedule] = useState(false);

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
Spin Class Enquiry - PLAN B THE GYM

Name: ${form.Name}
Mobile: ${form.Mobile}
Email: ${form.Email || "Not Provided"}

Interested in trying a Spin Class.
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
                style={{ backgroundImage: `url(${spinBg})` }}
            >
                <div className="absolute inset-0 bg-black/40" />
                <div className="relative z-10 text-center px-4">
                    <h1 className="mt-40 uppercase italic font-extrabold text-white text-4xl sm:text-5xl md:text-6xl lg:text-7xl">
                        Spin Training
                    </h1>
                    <p className="mt-4 text-lg sm:text-xl text-gray-200">
                        High-energy indoor cycling for stamina, strength & fat burn
                    </p>
                </div>
            </section>

            {/* MAIN */}
            <section className="bg-white text-black py-16">
                <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-3 gap-12">

                    {/* LEFT */}
                    <div className="order-3 lg:order-1 space-y-6">
                        <div className="w-full h-64 rounded-lg overflow-hidden border">
                            <iframe
                                title="Plan B The Gym Location"
                                src="https://www.google.com/maps?q=Plan+B+The+Gym,+Kuvempu+Nagara,+Mysuru&output=embed"
                                className="w-full h-full border-0"
                                loading="lazy"
                            />
                        </div>

                        <img
                            src={spinBg}
                            alt="Spin Training"
                            className="w-full min-h-[45vh] object-cover rounded-lg"
                        />
                    </div>

                    {/* CENTER */}
                    <div ref={formRef} className="order-1 lg:order-2 lg:col-span-2">
                        <h2 className="uppercase italic font-extrabold text-3xl sm:text-4xl md:text-5xl">
                            Spin Classes at PLAN B THE GYM – Mysore
                        </h2>

                        <p className="mt-4 text-lg">
                            Instructor-led cycling workouts designed to boost cardiovascular
                            endurance while being easy on the joints.
                        </p>

                        <p className="mt-3 text-lg text-gray-500">
                            Low-impact • High calorie burn • Full lower-body engagement
                        </p>

                        {/* FORM */}
                        <div className="mt-10 bg-gray-200 rounded-xl p-6 sm:p-8 max-w-xl">
                            <form className="space-y-5" onSubmit={handleSubmit}>
                                <h3 className="uppercase italic text-primary font-extrabold text-3xl">
                                    Try a Spin Session
                                </h3>

                                <input
                                    type="text"
                                    placeholder="Name *"
                                    className="w-full border px-4 py-3 rounded"
                                    onChange={(e) => setForm({ ...form, Name: e.target.value })}
                                />

                                <input
                                    type="tel"
                                    placeholder="Mobile *"
                                    className="w-full border px-4 py-3 rounded"
                                    onChange={(e) => setForm({ ...form, Mobile: e.target.value })}
                                />

                                <input
                                    type="email"
                                    placeholder="Email (Optional)"
                                    className="w-full border px-4 py-3 rounded"
                                    onChange={(e) => setForm({ ...form, Email: e.target.value })}
                                />

                                <label className="flex items-center gap-2 text-sm">
                                    <input type="checkbox" />
                                    I want to try a Spin class at PLAN B THE GYM
                                </label>

                                <div className="flex justify-center">
                                    <button
                                        type="submit"
                                        disabled={submitted}
                                        className={`px-8 py-3 text-sm font-extrabold uppercase rounded-lg border-2 transition
                      ${submitted
                                                ? "bg-green-600 text-white border-green-700 cursor-not-allowed"
                                                : "bg-primary text-white border-black hover:bg-white hover:text-black"
                                            }`}
                                    >
                                        {submitted ? "✓ Request Sent" : "Book Spin Session"}
                                    </button>
                                </div>

                                {submitted && (
                                    <div className="bg-green-50 border border-green-500 text-green-700 p-3 rounded-lg text-center">
                                        <p className="font-bold">Request Sent Successfully</p>
                                        <p className="text-sm">Our team will contact you shortly</p>
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
                                        className="inline-block px-6 py-2 text-sm text-center bg-black text-white font-bold uppercase rounded-lg border border-black hover:bg-white hover:text-black transition"
                                    >
                                        View Class Schedule
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>

                    {/* FAQ */}
                    <div className="order-2 lg:order-3 lg:col-span-3 mt-16">
                        <h3 className="uppercase italic font-extrabold text-3xl mb-6">
                            Frequently Asked Questions
                        </h3>

                        <div className="border rounded-md overflow-hidden">
                            {[
                                [
                                    "What is Spin Training?",
                                    "Spin training is an instructor-led indoor cycling workout designed to improve stamina, cardiovascular fitness, and overall endurance."
                                ],
                                [
                                    "Is Spin suitable for beginners?",
                                    "Absolutely. Resistance levels and pace can be adjusted, making spin classes safe and effective for all fitness levels."
                                ],
                                [
                                    "How long is a Spin class?",
                                    "Each session runs for approximately 45 minutes, including warm-up and cool-down phases."
                                ],
                                [
                                    "How often should I do Spin training?",
                                    "Most members see great results by attending spin classes 2 to 3 times per week, depending on recovery and goals."
                                ]
                            ].map(([q, a], i) => (
                                <div key={i} className="border-b last:border-b-0">
                                    <button
                                        onClick={() => setActive(active === i ? null : i)}
                                        className="w-full px-4 py-3 flex justify-between text-left font-medium hover:bg-gray-100"
                                    >
                                        {q}
                                        <span>{active === i ? "−" : "+"}</span>
                                    </button>

                                    {active === i && (
                                        <div className="px-4 pb-4 text-sm text-gray-700">{a}</div>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* CLASS SCHEDULE BANNER */}
                {showSchedule && (
                    <div ref={scheduleRef} className="mt-24 bg-gray-100 py-16">
                        <div className="max-w-7xl mx-auto px-4">
                            <h2 className="uppercase italic font-black text-4xl mb-10 text-black text-center">
                                Weekly Spin Schedule
                            </h2>

                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                                {Object.entries(schedule).map(([day, classes]) => (
                                    <div key={day} className="bg-white rounded-xl p-4 shadow">
                                        <h3 className="font-bold text-lg mb-4 text-center">{day}</h3>

                                        <div className="space-y-3">
                                            {classes.map((item, i) => (
                                                <div key={i} className="border rounded-lg overflow-hidden">
                                                    <div className={`${item.color} text-white px-3 py-1 text-sm font-bold`}>
                                                        {item.time}
                                                    </div>
                                                    <div className="p-3 text-sm font-semibold text-gray-800">
                                                        {item.title}
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
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
