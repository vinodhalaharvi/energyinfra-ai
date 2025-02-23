import ProtocolSimulatorSection from "./components/ProtocolSimulatorSection";
import TryItSection from "./components/TryItSection";
import AICapabilitiesSection from "./components/AICapabilitiesSection";
import ContactSection from "./components/ContactSection";
import CoreFeaturesSection from "./components/CoreFeaturesSection";
import HeroSection from "./components/HeroSection";
import UseCasesSection from "./components/UseCasesSection";
import { motion } from "framer-motion";

const zoomInVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1 }
};

const fadeUpVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 }
};

const transitionSettings = {
  duration: 0.3, // 300ms duration
  delay: 0.05,   // 50ms delay
  ease: "easeInOut"
};

const HomePage: React.FC = () => {
  return (
    <>
      <HeroSection />

      <motion.div
        id="features"
        variants={zoomInVariants}
        initial="hidden"
        whileInView="visible"
        transition={transitionSettings}
        viewport={{ once: true, amount: 0.2 }}
      >
        <CoreFeaturesSection />
      </motion.div>

      <motion.div
        variants={zoomInVariants}
        initial="hidden"
        whileInView="visible"
        transition={transitionSettings}
        viewport={{ once: true, amount: 0.2 }}
      >
        <ProtocolSimulatorSection />
      </motion.div>

      <motion.div
        id="ai"
        variants={fadeUpVariants}
        initial="hidden"
        whileInView="visible"
        transition={transitionSettings}
        viewport={{ once: true, amount: 0.2 }}
      >
        <AICapabilitiesSection />
      </motion.div>

      <motion.div
        variants={fadeUpVariants}
        initial="hidden"
        whileInView="visible"
        transition={transitionSettings}
        viewport={{ once: true, amount: 0.2 }}
      >
        <TryItSection />
      </motion.div>

      <motion.div
        id="use-cases"
        variants={zoomInVariants}
        initial="hidden"
        whileInView="visible"
        transition={transitionSettings}
        viewport={{ once: true, amount: 0.2 }}
      >
        <UseCasesSection />
      </motion.div>

      <motion.div
        id="contact"
        variants={zoomInVariants}
        initial="hidden"
        whileInView="visible"
        transition={transitionSettings}
        viewport={{ once: true, amount: 0.2 }}
      >
        <ContactSection />
      </motion.div>
    </>
  );
};

export default HomePage;