import coffeeImg from "../../assets/home/coffee/abcoffee.png";

export default function CoffeeSection() {
  return (
    <section
      className="relative h-[50vh] bg-contain bg-center flex items-center justify-center bg-section"
      style={{ backgroundImage: `url(${coffeeImg})` }}
    >
      {/* dark overlay */}
      <div
        className="absolute inset-0 bg-textPrimary/30"
        aria-hidden="true"
      />

      {/* content */}
      <div className="relative z-10 px-6 max-w-4xl text-center">
        <h2 className="uppercase italic font-extrabold text-textLight/80 text-3xl sm:text-4xl md:text-5xl mb-3">
          Recovery & Refresh Zone at PLAN B
        </h2>

        <p className="text-textLight/80 text-base sm:text-lg leading-relaxed ">
          Recharge your body and mind after every workout. PLAN B THE GYM offers a
          relaxing space to refresh, recover, and stay energized throughout your
          fitness journey.
        </p>
      </div>
    </section>
  );
}
