import { useState } from "react";
import bodyCompositionImg from "../../assets/home/features/BCA.png";

const OWNER_WHATSAPP = "917899944483"; // PLAN B THE GYM number

export default function BodyComposition() {
    const [active, setActive] = useState(null);

    const [form, setForm] = useState({
        name: "",
        mobile: "",
        email: ""
    });

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!form.name || !form.mobile) {
            alert("Please enter your name and mobile number");
            return;
        }

        const message = `
        Body Composition Analysis – PLAN B THE GYM
        
        Name: ${form.name}
        Mobile: ${form.mobile}
        Email: ${form.email || "Not provided"}
        Please contact me to confirm my appointment.
        `;

        window.open(
            `https://wa.me/${OWNER_WHATSAPP}?text=${encodeURIComponent(message)}`,
            "_blank"
        );
    };

    const faqs = [
        {
            q: "What can I expect during the body composition analysis?",
            a: "The test is quick, safe, and non-invasive. It takes less than a minute and provides a detailed report of your body composition."
        },
        {
            q: "Do I need to prepare before the test?",
            a: [
                "Avoid eating 2–3 hours before the test",
                "Stay normally hydrated",
                "Avoid intense exercise 6–12 hours prior",
                "Wear light and comfortable clothing"
            ]
        },
        {
            q: "How often should I take this analysis?",
            a: "For accurate progress tracking, it is recommended once every 4–6 weeks."
        },
        {
            q: "How do I book a body composition analysis at PLAN B THE GYM?",
            a: "You can book your analysis by filling out the form above or contacting PLAN B THE GYM directly through phone or WhatsApp."
        }
    ];

    return (
        <>
            {/* HERO */}
            <section
                className="relative min-h-[70vh] bg-contain bg-center flex items-center justify-center"
                style={{ backgroundImage: `url(${bodyCompositionImg})` }}
            >
                <div className="absolute inset-0 bg-black/40" />
                <div className="relative z-10 text-center px-4">
                    <h1 className="uppercase italic font-black text-white text-6xl lg:text-8xl">
                        Body Composition Analysis
                    </h1>
                    <p className="mt-6 uppercase text-xl text-gray-200">
                        Know Your Body. Track Your Progress. Train Smarter.
                    </p>
                </div>
            </section>

            {/* CONTENT */}
            <section className="bg-white py-12">
                <div className="max-w-7xl mx-auto px-4">

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

                        {/* LEFT */}
                        <div className="lg:col-span-2 text-black space-y-8">

                            <div>
                                <h2 className="uppercase italic font-black text-3xl lg:text-4xl">
                                    What is Body Composition Analysis?
                                </h2>
                                <p className="mt-4 text-lg text-gray-700 max-w-2xl">
                                    Body composition analysis is a quick, safe, and non-invasive test
                                    that gives you accurate insights into your fitness level.
                                </p>
                            </div>

                            {/* FORM */}
                            <div className="bg-gray-100 rounded-xl p-5 max-w-lg mb-5">
                                <h3 className="uppercase italic font-extrabold text-2xl mb-4">
                                    Book Your Body Analysis
                                </h3>

                                <form className="space-y-4" onSubmit={handleSubmit}>
                                    <input
                                        placeholder="Full Name *"
                                        className="w-full border px-4 py-3 rounded bg-white"
                                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                                    />

                                    <input
                                        placeholder="Mobile Number *"
                                        className="w-full border px-4 py-3 rounded bg-white"
                                        onChange={(e) => setForm({ ...form, mobile: e.target.value })}
                                    />

                                    <input
                                        placeholder="Email (Optional)"
                                        className="w-full border px-4 py-3 rounded bg-white"
                                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                                    />

                                    <label className="flex gap-2 text-sm">
                                        <input type="checkbox" />
                                        Please call me to confirm my test appointment.
                                    </label>

                                    <button
                                        type="submit"
                                        className="w-full bg-black text-white py-3 font-bold rounded hover:bg-gray-800 transition"
                                    >
                                        Book Now
                                    </button>

                                   
                                </form>
                            </div>
                        </div>

                        {/* RIGHT */}
                        <div className="order-last lg:order-none lg:row-span-2 space-y-4">
                            <div className="h-[260px] rounded overflow-hidden border">
                                <iframe
                                    title="Plan B The Gym Location"
                                    src="https://www.google.com/maps?q=Plan+B+The+Gym,+Kuvempu+Nagara,+Mysuru&output=embed"
                                    className="w-full h-full"
                                    loading="lazy"
                                />
                            </div>

                            <img
                                src={bodyCompositionImg}
                                alt="Body Composition Analysis"
                                className="w-full h-[520px] object-cover rounded-lg"
                            />
                        </div>
                    </div>

                    {/* FAQ */}
                    <div className="w-full max-w-lg mt-5 pb-10 text-black">
                        <h3 className="uppercase italic font-extrabold text-3xl mb-4">
                            Frequently Asked Questions
                        </h3>

                        <div className="border rounded overflow-hidden">
                            {faqs.map((item, i) => (
                                <div key={i} className="border-b last:border-0">
                                    <button
                                        onClick={() => setActive(active === i ? null : i)}
                                        className="w-full px-4 py-3 flex justify-between font-semibold hover:bg-gray-100"
                                    >
                                        {item.q}
                                        <span>{active === i ? "−" : "+"}</span>
                                    </button>

                                    {active === i && (
                                        <div className="px-4 pb-4 text-sm text-gray-700">
                                            {Array.isArray(item.a) ? (
                                                <ul className="list-disc list-inside space-y-1">
                                                    {item.a.map((li, j) => (
                                                        <li key={j}>{li}</li>
                                                    ))}
                                                </ul>
                                            ) : (
                                                <p>{item.a}</p>
                                            )}
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>

                </div>
            </section>
        </>
    );
}
