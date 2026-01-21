import { useState } from "react";
import BookPT from "../forms/BookAFreePT";
import trainerImg from "../../assets/home/trainers/Ptrainer.png";


export default function PersonalTraining() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <section className="bg-white py-20">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-20 items-center">
          <div>
            
            <p className="uppercase tracking-widest text-sm text-black mb-6">
              Every Body is diffrent.  <br />
              Your fitness journey derserves personal attention.
            </p>

            
            <h2 className="uppercase italic font-extrabold text-[#2F6F5F]
                         text-5xl md:text-6xl leading-tight mb-6">
              Expert Personal <br /> Trainers
            </h2>

           
            <p className="text-gray-700 text-lg leading-relaxed max-w-xl mb-10">
              Train smarter and achieve real resluts with{" "}
              <span className="font-bold">PLAN B THE GYM's certified personal trainers</span>.
              We desing Customized workout plans based on your body type, fitness level, and goals. 
              From fat loss to muscle building, our trainers guid you every step  of the way in a safe and motivating environment.
              <span className="font-bold"> Join now</span> and make
              ‘Impossible’ ‘I’m Possible’!
            </p>


            {/* Button */}

            <button
              onClick={() => setOpen(true)}
              className="mt-6 sm:w-auto bg-[#2F6F5F] px-8 py-3  border border-black text-white uppercase font-bold rounded-xl transition-all duration-300 hover:bg-white  hover:text-[#2F6F5F] hover:scale-105 active:bg-white active:text-black active:scale-95">
              Book a Free PT Session
            </button>

            <p className="mt-8 uppercase tracking-widest text-sm text-black cursor-pointer">
              Learn more about our personal training at <span className="text-[#2F6F5F] font-bold">PLAN B</span> 
            </p>
          </div>

          <div className=" md:h-full lg:h-full xl:h-full sm:h-full">
            <img
              src={trainerImg}
              alt="Personal training"
              className="w-full h-full object-cover rounded-2xl rotate-3 shadow-2xl"
            />
          </div>

        </div>
      </section>

      {open && (
        <BookPT
          isOpen={open}
          onClose={() => setOpen(false)}
        />
      )}
    </>
  );
}
