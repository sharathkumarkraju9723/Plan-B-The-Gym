import img1 from "../../assets/home/features/BCA.png";
import img2 from "../../assets/home/features/open7days.png";
import img3 from "../../assets/home/features/parking.png";
import img4 from "../../assets/home/features/gymenvi.png";

const features = [
  { title: "Body Composition Analysis & Preogress Tracking", img: img1 },
  { title: "Open 7 Days for Flexible Workouts", img: img2 },
  { title: "Convenient & Hassle-Free Parking", img: img3 },
  { title: "Clean, Comfortable and Safe Training Environment", img: img4 },
];

export default function BestExperience() {
  return (
    <section className="bg-section pt-12 pb-4 sm:pt-16 sm:pb-6 lg:pt-20 lg:pb-6">
      <div className=" max-w-7xl  mx-auto px-4 sm:px-6 lg:px-8 text-center">

        <p className="text-xs sm:text-sm uppercase tracking-widest text-textSubtle mb-2">
          Professinal trainers. Modern equipments. Real Results.
        </p>

        <h2 className="text-2xl sm:text-3xl lg:text-5xl font-extrabold italic text-textPrimary mb-4">
          The PLAN B Fitness Experience
        </h2>

        <p className="text-sm sm:text-base lg:text-lg text-textMuted max-w-2xl mx-auto mb-12">
          Everything at{" "}
          <span className="text-textPrimary font-bold">
            PLAN B THE GYM
          </span>{" "}
          is designed to give you a comfortable, motivating, and result-driven fitness experience.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-4 gap-6 sm:gap-8">
          {features.map((item, title) => (
            <div key={title} className="text-center">

              {/* image */}
              <div className="mx-auto mb-4 w-full h-[220px] sm:h-64 lg:h-72 overflow-hidden rounded-lg border border-divider">
                <img
                  src={item.img}
                  alt={item.title}
                  loading="lazy"
                  className="w-full h-full object-contain sm:object-cover transition-transform duration-300 sm:hover:scale-110"
                />
              </div>

              <p className="text-lg sm:text-lg font-medium text-textPrimary leading-snug">
                {item.title}
              </p>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
