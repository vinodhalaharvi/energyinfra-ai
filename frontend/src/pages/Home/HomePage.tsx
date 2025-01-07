import ProtocolSimulatorSection from "./components/ProtocolSimulatorSection"
import TryItSection from "./components/TryItSection"
import AICapabilitiesSection from "./components/AICapabilitiesSection"
import ContactSection from "./components/ContactSection"
import CoreFeaturesSection from "./components/CoreFeaturesSection"
import HeroSection from "./components/HeroSection"
import UseCasesSection from "./components/UseCasesSection"

const HomePage = () => {
  return (
    <>
        <HeroSection />
                
        <CoreFeaturesSection />
        
        <ProtocolSimulatorSection />

        <AICapabilitiesSection />

        <TryItSection />

        <UseCasesSection />

        <ContactSection />
    </>
  )
}

export default HomePage;