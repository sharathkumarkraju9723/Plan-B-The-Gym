import classbg from "../../../assets/home/experience/gymC.png";
import hiit from "../../../assets/home/experience/hiit.png";
import tabata from "../../../assets/home/experience/tabata.jpg";
import spin from "../../../assets/home/experience/spin-class.jpg";
import zumba from "../../../assets/home/experience/zumba-fitness.jpg";
import yoga from "../../../assets/home/experience/yoga.jpg";
import strength from "../../../assets/home/experience/Strength-training.jpg"


const workouts = [
  {
    title: "HIIT",
    desc: "30-minute HIIT classes in Andheri West – fast, effective workouts.",
    img: hiit,
    link: "/Classes/workout/hiit",
  },
  {
    title: "Tabata",
    desc: "4-minute high-intensity rounds for maximum calorie burn.",
    img: tabata,
    link: "/Classes/workout/tabata",
  },
  {
    title: "Spin Class",
    desc: "High-energy indoor cycling with limited bikes per class.",
    img: spin,
    link: "/Classes/workout/spin-class",
  },
  {
    title: "Zumba Fitness",
    desc: "Dance-based cardio workouts that make fitness fun.",
    img: zumba,
    link: "/Classes/workout/zumba-fitness",
  },
  {
    title: "Yoga",
    desc: "Balance mind & body with guided yoga sessions.",
    img: yoga,
    link: "/Classes/workout/yoga",
  },
  {
    title: "Strength-training",
    desc: "Balance mind & body with guided yoga sessions.",
    img: strength,
    link: "/Classes/workout/Strength-training"

  }
];

export default function WorkoutsPage() {
  return (
    <>
      {/* HERO */}
      <section className="relative min-h-[60vh] flex items-center justify-center">
        <img
          src={classbg}
          alt="Workouts at PLAN B THE GYM"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50" />

        <div className="relative z-10 text-center px-4">
          <h1 className="uppercase italic font-black text-white text-5xl md:text-7xl">
            PLAN B TRAINING PROGRAMS
          </h1>
          <p className="mt-4 text-lg text-gray-200">
            Group fitness programs designed to build strength, endurance, and confidence at PLAN B THE GYM, Mysore
          </p>
        </div>
      </section>

      {/* WORKOUT GRID */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {workouts.map((w, i) => (
            <a
              key={i}
              href={w.link}
              className="group rounded-xl overflow-hidden shadow-md hover:shadow-xl transition"
            >
              <div className="relative">
                <img
                  src={w.img}
                  alt={w.title}
                  className="w-full h-[200px] object-cover"
                />
                <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition" />
              </div>

              <div className="p-6 bg-white">
                <h3 className="text-xl font-bold text-primary mb-2  transition">
                  {w.title}
                </h3>
                <p className="text-sm text-gray-600">{w.desc}</p>
              </div>
            </a>
          ))}
        </div>
      </section>
    </>
  );
} 