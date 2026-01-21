import coffeeImg from "../../assets/home/coffee/abcoffee.png";

export default function CoffeeSection() {
  return (
    <section
      className="relative h-[35vh] bg-contain bg-center align-center flex items-center justify-center"
      style={{ backgroundImage: `url(${coffeeImg})` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Content */}
      <div className="relative z-10 h-full flex items-center justify-center text-center px-8">
        <div>
          <h2 className="uppercase italic font-extrabold text-yellow-400 text-4xl mb-4">
            Recovery & Refresh Zone at PLAN B
          </h2>

          <p className="text-white max-w-xl text-lg mx-auto center">
            Recharge your body and mind after every workout. 
            PLAN B THE GYM offers a relaxing space to refresh, recover,
            and stay energized throughout your fitness journey.

          </p>
        </div>
      </div>
    </section>
  );
}
