import ProtocolSimulatorSection from "./components/ProtocolSimulatorSection"
import TryItSection from "./components/TryItSection"
import AICapabilitiesSection from "./components/AICapabilitiesSection"
import ContactSection from "./components/ContactSection"
import CoreFeaturesSection from "./components/CoreFeaturesSection"
import HeroSection from "./components/HeroSection"
import UseCasesSection from "./components/UseCasesSection"
import { useEffect } from "react"
import AOS from 'aos';

const HomePage: React.FC = () => {
  useEffect(() => {
    AOS.init({
      offset: 120, // Offset from trigger point
      duration: 300, // Animation duration (ms)
      easing: 'ease-in-out', // Easing function
      delay: 50, // Delay between animations (ms)
      once: true, // Only animate once
    });
  }, []);

  return (
    <>
        <HeroSection />
                
        {/* Add AOS animations to the following sections */}
        <div data-aos="zoom-in" id="features">
          <CoreFeaturesSection />
        </div>

        <div data-aos="zoom-in">
          <ProtocolSimulatorSection />
        </div>

        <div data-aos="fade-up" id="ai" >
          <AICapabilitiesSection />
        </div>

        <div data-aos="fade-up">
          <TryItSection />
        </div>

        <div data-aos="zoom-in" id="use-cases">
          <UseCasesSection />
        </div>

        <div data-aos="zoom-in" id="contact">
          <ContactSection />
        </div>
    </>
  )
}

export default HomePage;