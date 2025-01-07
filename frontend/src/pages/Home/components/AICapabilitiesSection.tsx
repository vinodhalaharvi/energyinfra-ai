import { useState } from "react";

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

const AICapabilitiesSection = () => {
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

export default AICapabilitiesSection;