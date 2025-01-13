import { Brain, Database, Shield, LucideProps } from "lucide-react";

interface FeatureCardProps {
  icon: React.ComponentType<LucideProps>; // Match the icon's actual type
  title: string;
  description: string;
}

const FeatureCard = ({ icon: Icon, title, description }: FeatureCardProps) => (
    <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow border border-gray-100">
      <div className="text-blue-600 mb-4">
        <Icon size={32} /> {/* LucideProps includes size */}
      </div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
);

const CoreFeaturesSection = () => {
  return (
    <div className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12">Core Features</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <FeatureCard
            icon={Database}
            title="Real-Time Processing"
            description="Handle millions of data points per second with distributed processing and time-series optimization."
          />
          <FeatureCard
            icon={Brain}
            title="AI-Powered Insights"
            description="Predictive analytics and anomaly detection using advanced machine learning models."
          />
          <FeatureCard
            icon={Shield}
            title="Enterprise Security"
            description="Built-in security features with regulatory compliance and audit trails."
          />
        </div>
      </div>
    </div>
  );
};

export default CoreFeaturesSection;