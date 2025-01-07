import { Activity } from "lucide-react";

const UseCasesSection = () => (
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

export default UseCasesSection;