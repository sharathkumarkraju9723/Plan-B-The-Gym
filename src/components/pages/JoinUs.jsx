import { useRef, useState } from "react";
import tryBg from "../../assets/images/tryus.jpg";
import ReviewsSlider from "../Reviews/ReviewsSlider";

const OWNER_WHATSAPP = "917899944483"; // GYM Number

export default function JoinUS() {
    const formRef = useRef(null);

    const [form, setForm] = useState({
        Name: "",
        Mobile: "",
        Email: "",
    });

    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!form.Name || !form.Mobile) {
            return;
        }

        const message = `
        
        Membership Enquiry - PLAN B THE GYM 

        Name: ${form.Name}
        Mobile: ${form.Mobile}
        Email: ${form.Email || "Not Provided"}

        Please Contact me with Membership Details.`;

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
                className="relative min-h-[70vh] bg-cover bg-center flex items-center justify-center"
                style={{ backgroundImage: `url(${tryBg})` }}
            >
                <div className="absolute inset-0 bg-black/40" />

                <div className="relative z-10 text-center px-4">
                    <h1 className="mt-40 uppercase italic font-black tracking-tight text-gray-100 text-5xl sm:text-6xl md:text-7xl lg:text-8xl">
                        Membership
                    </h1>
                    <p className="mt-4 uppercase font-semibold tracking-wide text-gray-200 text-lg sm:text-xl">
                        Train. Recover. Connect. Repeat.
                    </p>
                </div>
            </section>

            {/* MAIN SECTION */}
            <section className="bg-white py-20">
                <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-3 gap-14">

                    {/* LEFT SIDE – TEXT + FORM */}
                    <div
                        ref={formRef}
                        className="order-1 lg:order-1 lg:col-span-2"
                    >
                        <h1 className="uppercase italic font-black tracking-tight text-black text-3xl sm:text-4xl md:text-5xl">
                            Your Gym. Your Community. Your PLAN B.
                        </h1>

                        <p className="mt-4 text-lg text-gray-800 max-w-2xl">
                            PLAN B THE GYM in Mysore is designed for people who want real results.
                            Modern equipment, expert trainers, and a motivating environment —
                            all under one roof.
                        </p>

                        {/* FORM */}
                        <div className="mt-10 bg-gray-200 rounded-xl p-6 max-w-xl">
                            <form className="space-y-5" onSubmit={handleSubmit}>
                                <input
                                    type="text"
                                    placeholder="Name *"
                                    className="w-full border px-4 py-3 rounded focus:ring-2 focus:ring-primary outline-none"
                                    onChange={(e) => setForm({ ...form, Name: e.target.value })}
                                />
                                <input
                                    type="tel"
                                    placeholder="Mobile *"
                                    className="w-full border px-4 py-3 rounded focus:ring-2 focus:ring-primary outline-none"
                                    onChange={(e) => setForm({ ...form, Mobile: e.target.value })}
                                />
                                <input
                                    type="email"
                                    placeholder="Email (Optional)"
                                    className="w-full border px-4 py-3 rounded focus:ring-2 focus:ring-primary outline-none"
                                    onChange={(e) => setForm({ ...form, Email: e.target.value })}
                                />

                                <label className="flex items-start gap-2 text-sm text-gray-800">
                                    <input type="checkbox" className="mt-1" />
                                    I’m interested in joining PLAN B THE GYM. Please contact me with
                                    membership or free trial details.
                                </label>

                                {/* Button */}
                                <div className="flex justify-center">
                                    <button
                                        type="submit"
                                        disabled={submitted}
                                        className={`mt-4 px-8 py-2.5 text-sm font-extrabold uppercase rounded-lg border-2 transition-all duration-300
                                             ${submitted
                                                ? "bg-green-600 text-white border-green-700 cursor-not-allowed"
                                                : "bg-primary text-white border-black hover:bg-white hover:text-black hover:scale-[1.02]"
                                            }`}
                                    >
                                        {submitted ? "✓ Request Sent" : "Request Membership Details"}
                                    </button>
                                </div>
                                {submitted && (
                                    <div className="mt-6 bg-green-50 border border-green-500 text-green-700 px-4 py-3 rounded-lg text-center animate-fadeIn">
                                        <p className="font-bold text-lg">✅ Request Sent Successfully</p>
                                        <p className="text-sm mt-1">
                                            Thank you for contacting <strong>PLAN B THE GYM</strong>.<br />
                                            Our team will get in touch with you shortly.
                                        </p>
                                    </div>
                                )}
                            </form>
                        </div>

                        {/* RATING */}
                        <h3 className="mt-14 uppercase italic text-primary font-black tracking-tight text-3xl sm:text-4xl md:text-5xl">
                            Trusted by Our Fitness Community
                        </h3>
                        <div className="mt-12">
                            <ReviewsSlider />
                        </div>

                    </div>

                    {/* RIGHT SIDE – MAP + IMAGE */}
                    <div className="order-2 lg:order-2 space-y-6">

                        <div className="w-full h-[260px] rounded-lg overflow-hidden border">
                            <iframe
                                title="Plan B The Gym Location"
                                src="https://www.google.com/maps?q=2nd+floor,+557/A,+New+Kantharaj+Urs+Rd,+Kuvempu+Nagara,+Mysuru&output=embed"
                                className="w-full h-full border-0"
                                loading="lazy"
                            />
                        </div>


                        <img
                            src={tryBg}
                            alt="Workout at PLAN B THE GYM"
                            className="w-full h-[520px] object-cover rounded-lg"
                        />
                    </div>


                    <div className="order-3 lg:col-span-3 mt-20 space-y-20">
                        <section>
                            <h3 className="uppercase italic text-black font-black text-4xl mb-6">
                                Why Choose PLAN B THE GYM?
                            </h3>
                            <ul className="list-disc list-inside text-lg font-bold text-gray-700 space-y-3">
                                <li>🏋️ Fully equipped strength & cardio training zones</li>
                                <li>🧘 Group classes including Yoga, Zumba, HIIT & Strength Training</li>
                                <li>💪 Guidance from certified and experienced trainers</li>
                                <li>📊 Body composition analysis to track fitness progress</li>
                                <li>🥗 Basic nutrition and lifestyle guidance</li>
                                <li>🚿 Clean, safe, and motivating workout environment</li>
                            </ul>
                        </section>
                    </div>

                </div>
            </section>
        </>
    );
}
