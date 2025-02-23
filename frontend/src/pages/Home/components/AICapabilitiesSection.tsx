import { useState } from "react";

// Code example component with syntax highlighting
const CodeExample = () => (
    <div className=" text-white font-mono text-sm">
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
        <div className="py-16 bg-slate-50">
            <div className="max-w-7xl mx-auto px-1 sm:px-6 lg:px-8">
                <h2 className="text-3xl font-bold text-center mb-7">AI Capabilities</h2>
                <div className="flex flex-col sm:flex-row items-center justify-center mb-8 gap-4">
                    <p className="text-sm text-gray-500">
                        Select one of the available options:
                    </p>
                    <div className="flex flex-col sm:flex-row gap-2">
                        <button
                        className={`px-4 py-2 rounded-lg border transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-opacity-50 ${
                            activeTab === 'monitoring'
                            ? 'bg-blue-600 text-white border-blue-600'
                            : 'bg-white text-blue-600 border-blue-600 hover:bg-blue-600 hover:text-white'
                        }`}
                        onClick={() => setActiveTab('monitoring')}
                        >
                        Monitoring
                        </button>
                        <button
                        className={`px-4 py-2 rounded-lg border transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-opacity-50 ${
                            activeTab === 'prediction'
                            ? 'bg-blue-600 text-white border-blue-600'
                            : 'bg-white text-blue-600 border-blue-600 hover:bg-blue-600 hover:text-white'
                        }`}
                        onClick={() => setActiveTab('prediction')}
                        >
                        Prediction
                        </button>
                        <button
                        className={`px-4 py-2 rounded-lg border transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-opacity-50 ${
                            activeTab === 'optimization'
                            ? 'bg-blue-600 text-white border-blue-600'
                            : 'bg-white text-blue-600 border-blue-600 hover:bg-blue-600 hover:text-white'
                        }`}
                        onClick={() => setActiveTab('optimization')}
                        >
                        Optimization
                        </button>
                    </div>
                </div>

                <div className="bg-slate-50 rounded-lg shadow-md p-6 sm:p-8">
                    {activeTab === 'monitoring' && (
                        <div className="space-y-4">
                            <h3 className="text-xl font-semibold">Real-Time AI Monitoring</h3>
                            <p className="text-gray-600">Intelligent monitoring with anomaly detection and automated
                                responses.</p>
                            <div className="overflow-auto bg-gray-900 rounded-lg p-4">
                                <CodeExample/>
                            </div>
                        </div>
                    )}
                    {activeTab === 'prediction' && (
                        <div className="space-y-4">
                            <h3 className="text-xl font-semibold">Predictive Analytics</h3>
                            <p className="text-gray-600">Forecast equipment failures and maintenance needs with ML
                                models.</p>
                            <div className="overflow-auto bg-gray-900 rounded-lg p-4">
                                <CodeExample/>
                            </div>
                        </div>
                    )}
                    {activeTab === 'optimization' && (
                        <div className="space-y-4">
                            <h3 className="text-xl font-semibold">AI Optimization</h3>
                            <p className="text-gray-600">Automated performance tuning and resource optimization.</p>
                            <div className="overflow-auto bg-gray-900 rounded-lg p-4">
                                <CodeExample/>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default AICapabilitiesSection;