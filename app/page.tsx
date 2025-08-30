import Hero from "./components/Hero";
import About from "./components/AboutSections";
import HowItWorks from "./components/HowItWorks";
import TopClaimSection from "./components/TopClaimSection";
import Services from "./components/Services";
import Partners from "./components/PartnersSection";
import CeoPart from "./components/CeoPart";
import Tabs from "./components/Tabs";
import MedicalServicesSection from "./components/MedicalServices";
import FAQSection from "./components/FAQ";
import BeforeAfterSection from "./components/BeforAfter";

export default function Home() {
  return (
    <div>
      
      <Hero />

      <About />
      <TopClaimSection />
      <HowItWorks />
      <BeforeAfterSection />

      <MedicalServicesSection />
      <Partners />
      <CeoPart />
      <FAQSection />
      {/* <Reordering /> */}
      {/* <GooeyMenu /> */}
    </div>
  );
}


