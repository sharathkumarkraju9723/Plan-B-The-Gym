import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/common/Navbar";
import Footer from "./components/common/Footer";

// HOME SECTIONS
import Hero from "./components/home/Hero";
import PersonalTrainers from "./components/home/PersonalTrainers";
import GymZone from "./components/home/GymZone";
import BestExperience from "./components/home/BestExperience";
import ExperiencePlanB from "./components/home/ExperiencePlanB";
import Referral from "./components/home/Referral";
import CoffeeZone from "./components/home/CoffeeZone";

// PAGES
import TryUs from "./components/pages/TryUs";
import JoinUs from "./components/pages/JoinUs";
import Recovery from "./components/pages/Recovery";
import InBody from "./components/pages/InBody";
import Classes from "./components/pages/Classes/Classes";
import Nutrition from "./components/pages/Nutrition";
import AboutUs from "./components/pages/AboutUs";

// WORKOUT PAGES
import Hiit from "./components/pages/Classes/workout/Hiit";
import Tabata from "./components/pages/Classes/workout/Tabata";
import Spin from "./components/pages/Classes/workout/Spin";
import Zumba from "./components/pages/Classes/workout/Zumba";
import Yoga from "./components/pages/Classes/workout/Yoga";
import StrengthTraining from "./components/pages/Classes/workout/StrengthTraining";


export default function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route
          path="/"
          element={
            <>
              <Hero />
              <PersonalTrainers />
              <GymZone />
              <BestExperience />
              <ExperiencePlanB/>
              <Referral />
              <CoffeeZone />
            </>
          }
        />

        <Route path="/try-us" element={<TryUs />} />
        <Route path="/join-us" element={<JoinUs />} />
        <Route path="/recovery" element={<Recovery />} />
        <Route path="/inbody" element={<InBody />} />
        <Route path="/classes" element={<Classes />} />
        <Route path="/nutrition" element={<Nutrition/>}/>
        <Route path="/about-us" element={<AboutUs/>}/>

        <Route path="/classes/workout/hiit" element={<Hiit />} />
        <Route path="/classes/workout/tabata" element={<Tabata />} />
        <Route path="/classes/workout/spin-class" element={<Spin/>} />
        <Route path="/classes/workout/zumba-fitness" element={<Zumba/>} />
        <Route path="/classes/workout/yoga" element={<Yoga />} />
        <Route path="/classes/workout/Strength-training" element={<StrengthTraining />} />
        

      </Routes>

      <Footer />
    </BrowserRouter>
  );
}
