import React, {useState} from 'react';
import {Activity, ArrowRight, Brain, Database, Shield} from 'lucide-react';
import TryItSection from "./components/TryItSection.tsx";
import ProtocolSimulator from "./components/ProtocolSimulator.tsx";

// Navigation component
const Navbar = () => (
    <nav className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-md z-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between h-16 items-center">
                <div className="text-xl font-bold text-blue-600">EnergyInfra.AI</div>
                <div className="hidden md:flex space-x-8">
                    <a href="#features" className="text-gray-700 hover:text-blue-600">Features</a>
                    <a href="#ai" className="text-gray-700 hover:text-blue-600">AI Capabilities</a>
                    <a href="#use-cases" className="text-gray-700 hover:text-blue-600">Use Cases</a>
                    <a href="#contact" className="text-gray-700 hover:text-blue-600">Contact</a>
                </div>
                <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
                    Get Started
                </button>
            </div>
        </div>
    </nav>
);

// Hero section
const Hero = () => (
    <div className="pt-24 pb-16 text-center bg-gradient-to-b from-blue-50 to-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-5xl font-bold text-gray-900 mb-6">
                Cloud-Native Infrastructure for{' '}
                <span className="text-blue-600">Energy Systems</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8">
                Transform your energy infrastructure with cloud-native reliability and
                AI-powered intelligence.
            </p>
            <div className="flex justify-center space-x-4">
                <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 flex items-center">
                    Start Free Trial <ArrowRight className="ml-2" size={20}/>
                </button>
                <button className="border border-blue-600 text-blue-600 px-6 py-3 rounded-lg hover:bg-blue-50">
                    Watch Demo
                </button>
            </div>
        </div>
    </div>
);

// Feature card component
const FeatureCard = ({icon: Icon, title, description}) => (
    <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow border border-gray-100">
        <div className="text-blue-600 mb-4">
            <Icon size={32}/>
        </div>
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-600">{description}</p>
    </div>
);

// Features section
const Features = () => (
    <div id="features" className="py-16 bg-white">
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

// Code example component with syntax highlighting
const CodeExample = () => (
    <div className="bg-gray-900 rounded-lg p-6 text-white font-mono text-sm">
    <pre>
      {`// AI-enhanced infrastructure
type AIInfrastructure struct {
    Monitor   Infrastructure[SensorData]
    Predictor Infrastructure[Prediction]
    Optimizer Infrastructure[Optimization]
    Assistant Infrastructure[NLQuery]
}

// Example usage
infra := NewAIInfraBuilder().
    WithPredictor(OpenAI).
    WithOptimizer(CustomModel).
    WithAssistant(LangChain).
    Build()`}
    </pre>
    </div>
);

// AI capabilities section
const AICapabilities = () => {
    const [activeTab, setActiveTab] = useState('monitoring');

    return (
        <div id="ai" className="py-16 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-3xl font-bold text-center mb-12">AI Capabilities</h2>
                <div className="flex space-x-4 justify-center mb-8">
                    <button
                        className={`px-4 py-2 rounded-lg ${activeTab === 'monitoring' ? 'bg-blue-600 text-white' : 'bg-white'}`}
                        onClick={() => setActiveTab('monitoring')}
                    >
                        Monitoring
                    </button>
                    <button
                        className={`px-4 py-2 rounded-lg ${activeTab === 'prediction' ? 'bg-blue-600 text-white' : 'bg-white'}`}
                        onClick={() => setActiveTab('prediction')}
                    >
                        Prediction
                    </button>
                    <button
                        className={`px-4 py-2 rounded-lg ${activeTab === 'optimization' ? 'bg-blue-600 text-white' : 'bg-white'}`}
                        onClick={() => setActiveTab('optimization')}
                    >
                        Optimization
                    </button>
                </div>
                <div className="bg-white rounded-lg shadow-sm p-8">
                    {activeTab === 'monitoring' && (
                        <div className="space-y-4">
                            <h3 className="text-xl font-semibold">Real-Time AI Monitoring</h3>
                            <p className="text-gray-600">Intelligent monitoring with anomaly detection and automated
                                responses.</p>
                            <CodeExample/>
                        </div>
                    )}
                    {activeTab === 'prediction' && (
                        <div className="space-y-4">
                            <h3 className="text-xl font-semibold">Predictive Analytics</h3>
                            <p className="text-gray-600">Forecast equipment failures and maintenance needs with ML
                                models.</p>
                            <CodeExample/>
                        </div>
                    )}
                    {activeTab === 'optimization' && (
                        <div className="space-y-4">
                            <h3 className="text-xl font-semibold">AI Optimization</h3>
                            <p className="text-gray-600">Automated performance tuning and resource optimization.</p>
                            <CodeExample/>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

// Use cases section
const UseCases = () => (
    <div id="use-cases" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center mb-12">Use Cases</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {[
                    {
                        title: "Power Generation",
                        description: "Real-time monitoring and control of power generation equipment.",
                        metrics: ["30% efficiency increase", "50% faster response time"]
                    },
                    {
                        title: "Grid Management",
                        description: "Intelligent grid operations with predictive maintenance.",
                        metrics: ["40% cost reduction", "99.99% uptime achieved"]
                    },
                    {
                        title: "Industrial Energy",
                        description: "optimize industrial energy consumption and efficiency.",
                        metrics: ["25% energy savings", "60% fewer incidents"]
                    }
                ].map((useCase, index) => (
                    <div key={index}
                         className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow border border-gray-100">
                        <h3 className="text-xl font-semibold mb-2">{useCase.title}</h3>
                        <p className="text-gray-600 mb-4">{useCase.description}</p>
                        <div className="space-y-2">
                            {useCase.metrics.map((metric, idx) => (
                                <div key={idx} className="flex items-center text-green-600">
                                    <Activity size={16} className="mr-2"/>
                                    {metric}
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </div>
);

// Contact section
const Contact = () => (
    <div id="contact" className="py-16 bg-gray-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center mb-12">Get Started</h2>
            <div className="bg-white rounded-lg shadow-sm p-8">
                <form className="space-y-6">
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                        <input type="text" className="w-full px-3 py-2 border border-gray-300 rounded-lg"/>
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                        <input type="email" className="w-full px-3 py-2 border border-gray-300 rounded-lg"/>
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                        <textarea className="w-full px-3 py-2 border border-gray-300 rounded-lg" rows="4"></textarea>
                    </div>
                    <button className="w-full bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700">
                        Send Message
                    </button>
                </form>
            </div>
        </div>
    </div>
);

// Main app component
export default function App() {
    return (
        <div className="min-h-screen bg-white">
            <Navbar/>
            <Hero/>
            <Features/>
            <ProtocolSimulator/>
            <AICapabilities/>
            <TryItSection/>
            <UseCases/>
            <Contact/>
        </div>
    );
}

