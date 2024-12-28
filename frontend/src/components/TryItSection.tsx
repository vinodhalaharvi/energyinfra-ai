import React, {useState} from 'react';
import {ArrowRight, Cloud, Play, Server, Terminal} from 'lucide-react';

const TerminalWindow = ({commands}) => {
    const [currentStep, setCurrentStep] = useState(0);

    return (
        <div className="bg-gray-900 rounded-lg overflow-hidden shadow-xl">
            {/* Terminal Header */}
            <div className="bg-gray-800 px-4 py-2 flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500"/>
                <div className="w-3 h-3 rounded-full bg-yellow-500"/>
                <div className="w-3 h-3 rounded-full bg-green-500"/>
                <span className="text-gray-400 text-sm ml-2">demo-terminal</span>
            </div>

            {/* Terminal Content */}
            <div className="p-4 font-mono text-sm">
                {commands.slice(0, currentStep + 1).map((cmd, idx) => (
                    <div key={idx} className="mb-2">
                        <div className="flex items-center gap-2 text-gray-400">
                            <span className="text-green-400">$</span>
                            <span className="text-white">{cmd.command}</span>
                        </div>
                        {cmd.output && (
                            <div className="text-gray-400 ml-4 mt-1">{cmd.output}</div>
                        )}
                    </div>
                ))}
                {currentStep < commands.length - 1 && (
                    <button
                        onClick={() => setCurrentStep(prev => prev + 1)}
                        className="text-blue-400 hover:text-blue-300 mt-2"
                    >
                        Next Step →
                    </button>
                )}
            </div>
        </div>
    );
};

const TryItSection = () => {
    const demoCommands = [
        {
            command: "curl -O https://energy-infra.io/demo/setup.sh",
            output: "Downloaded 'setup.sh'"
        },
        {
            command: "chmod +x setup.sh && ./setup.sh",
            output: "🚀 Deploying Energy Infrastructure Demo..."
        },
        {
            command: "kubectl get pods -n energy-infra-demo",
            output: `NAME                              READY   STATUS    RESTARTS   AGE
nats-0                            1/1     Running   0          45s
influxdb-0                        1/1     Running   0          45s
prometheus-789d9c4877-2xjh8       1/1     Running   0          45s
edge-simulator-5d76d559f9-qp2nm   1/1     Running   0          45s`
        }
    ];

    const features = [
        {
            icon: Cloud,
            title: "Quick Setup",
            description: "Deploy full infrastructure in minutes"
        },
        {
            icon: Terminal,
            title: "Real Protocols",
            description: "OPC UA, Modbus, MQTT, DNP3 support"
        },
        {
            icon: Server,
            title: "Live Monitoring",
            description: "Real-time metrics and visualization"
        }
    ];

    return (
        <div className="bg-white py-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold text-gray-900 mb-4">
                        Try It Yourself
                    </h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        Deploy a fully functional energy infrastructure sandbox in minutes.
                        Experience real-time data flow, monitoring, and control.
                    </p>
                </div>

                {/* Main Content */}
                <div className="grid md:grid-cols-2 gap-12 items-center mb-12">
                    {/* Terminal Demo */}
                    <div className="order-2 md:order-1">
                        <TerminalWindow commands={demoCommands}/>
                    </div>

                    {/* Features */}
                    <div className="order-1 md:order-2">
                        <div className="space-y-8">
                            {features.map((feature, idx) => (
                                <div key={idx} className="flex items-start gap-4">
                                    <div
                                        className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                                        <feature.icon className="w-6 h-6 text-blue-600"/>
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-semibold text-gray-900 mb-1">
                                            {feature.title}
                                        </h3>
                                        <p className="text-gray-600">
                                            {feature.description}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Action Buttons */}
                <div className="text-center space-y-4">
                    <button
                        className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 inline-flex items-center">
                        <Play className="w-5 h-5 mr-2"/>
                        Launch Sandbox
                    </button>
                    <div className="flex justify-center gap-4">
                        <a href="#docs" className="text-gray-600 hover:text-gray-900 inline-flex items-center">
                            View Documentation
                            <ArrowRight className="w-4 h-4 ml-1"/>
                        </a>
                        <a href="#github" className="text-gray-600 hover:text-gray-900 inline-flex items-center">
                            GitHub Repository
                            <ArrowRight className="w-4 h-4 ml-1"/>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TryItSection;