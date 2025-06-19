import Hero from "./components/Hero";
import About from "./components/AboutSections";
import HowItWorks from "./components/HowItWorks";
import TopClaimSection from "./components/TopClaimSection";
import Services from "./components/Services";
import Partners from "./components/PartnersSection";
import CeoPart from "./components/CeoPart";
import Tabs from "./components/Tabs";

export default function Home() {
  return (
    <div>
      
      <Hero />

      <About />
      <TopClaimSection />
      <HowItWorks />
      <Services />
      <Partners />
      <CeoPart />

      {/* <Reordering /> */}
      <Tabs />
      {/* <GooeyMenu /> */}
    </div>
  );
}


