import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import CompanyLogo from "./components/CompanyLogo";
import PurposeSection from "./components/PurposeSection";
import FeaturesSection from "./components/FeaturesSection";
import ScheduleSection from "./components/ScheduleSection";

function App() {
  return (
    <>
      <main className="relative min-h-screen overflow-x-hidden">
        <div className="absolute -top-48 -left-20 w-[500px] h-[500px] bg-gradient-to-tl from-indigo-500/20 to-pink-500/20 rounded-full blur-[80px] -z-10"></div>
        <div className="overflow-hidden ">
          <Navbar />
          <Hero />
          <CompanyLogo />
          <PurposeSection />
          <FeaturesSection />
          <ScheduleSection />
        </div>
      </main>
    </>
  );
}

export default App;
