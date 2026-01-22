import GymHero from "../../assets/images/PlanB-gym.png";

export default function PlanBGym() {
  return (
    <div className="bg-white text-black">

      {/* HERO */}
      <section
        className="relative h-[55vh] bg-cover bg-center flex items-center justify-center"
        style={{ backgroundImage: `url(${GymHero})` }}
      >
        <div className="absolute inset-0 bg-black/40" />
        <h1 className="relative text-white text-4xl sm:text-5xl font-extrabold uppercase italic">
          Location
        </h1>
      </section>

      {/* LOCATION */}
      <section className="py-12">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-10">

          {/* ADDRESS (VERTICALLY CENTERED) */}
          <div className="order-2 lg:order-1 flex justify-center lg:pt-20 ">
            <div className="space-y-4">
              <h2 className="text-2xl font-extrabold italic uppercase">
                Plan B The Gym
              </h2>

              <p className="leading-relaxed">
                2nd Floor, 557/A, New Kantharaj Urs Road,<br />
                Near Sri S Nijalingappa Circle,<br />
                Kuvempu Nagara, Mysuru – 570023
              </p>

              <p>
                <strong>Phone:</strong> +91 98765 43210
              </p>

              <div>
                <p className="font-bold mb-1">Business Hours</p>
                <ul className="list-disc ml-5 space-y-1">
                  <li>Monday – Saturday: 6:00 AM – 10:00 PM</li>
                  <li>Sunday: 6:00 AM – 8:00 PM</li>
                </ul>
              </div>
            </div>
          </div>

          {/* MAP */}
          <div className="order-1 lg:order-2 h-[300px] sm:h-[360px] lg:h-[420px] border rounded-lg overflow-hidden">
            <iframe
              title="Plan B The Gym Location"
              src="https://www.google.com/maps?q=Plan+B+The+Gym,+Kuvempu+Nagara,+Mysuru&output=embed"
              className="w-full h-full border-0"
              loading="lazy"
            />
          </div>

        </div>
      </section>
    </div>
  );
}
