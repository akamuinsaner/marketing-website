import Image from "next/image";
import NavBar from "./components/NavBar";
import HeroSection from "./components/HeroSection";
import LogoSection from "./components/LogoSection";
import FeatureSection from "./components/FeatureSection";

export default function Home() {
  return (
    <main className=" relative min-h-screen bg-gradient-to-br from-[#F9FAFB] to-[#D2D6DB] px-4 py-4 pt-[100px]">
      <NavBar />
      <div className="bg-primary w-full h-full mx-auto rounded tablet:rounded-md desktop:rounded-lg max-w-[1408px]">
        <HeroSection />
        <LogoSection />
        <FeatureSection />
      </div>
    </main>
  );
}
