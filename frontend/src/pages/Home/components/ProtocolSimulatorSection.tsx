import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Server, Radio, Wifi, Activity, Terminal, LucideProps } from 'lucide-react';

interface Protocol {
    id: string;
    name: string;
    icon: React.ForwardRefExoticComponent<Omit<LucideProps, "ref"> & React.RefAttributes<SVGSVGElement>>;
    port: number;
    code: string;
}

interface Metrics {
    messagesProcessed: number;
    errors: number;
    latency: number;
}
  

const simulatorState = {
    IDLE: 'idle',
    RUNNING: 'running',
    ERROR: 'error',
    RECOVERY: 'recovery'
};

const protocols: Protocol[] = [
    {
        id: 'opcua',
        name: 'OPC UA',
        icon: Server,
        port: 4840,
        code: `func (r *OPCUAReader) Read() EdgeF[OPCValue] {
return EdgeF[OPCValue]{
    Run: func(ctx context.Context) (OPCValue, error) {
        client := opcua.NewClient(options{
            Endpoint: "opc.tcp://localhost:4840",
            Security: opcua.SecurityBasic128Rsa15,
        })
        
        // Read node value
        node := client.Node(nodeID)
        value, err := node.Read(ctx)
        
        return OPCValue{
            NodeID: nodeID,
            Value:  value,
            Time:   time.Now(),
        }, err
    },
}
}`
    },
    {
        id: 'modbus',
        name: 'Modbus',
        icon: Radio,
        port: 502,
        code: `func (r *ModbusReader) Read() EdgeF[ModbusData] {
return EdgeF[ModbusData]{
    Run: func(ctx context.Context) (ModbusData, error) {
        handler := modbus.NewTCPClientHandler("localhost:502")
        client := modbus.NewClient(handler)
        
        // Read holding registers
        registers, err := client.ReadHoldingRegisters(0x0, 10)
        
        return ModbusData{
            Register: 0x0,
            Values:   registers,
            Time:    time.Now(),
        }, err
    },
}
}`
    },
    {
        id: 'mqtt',
        name: 'MQTT',
        icon: Wifi,
        port: 1883,
        code: `func (r *MQTTReader) Read() EdgeF[MQTTMessage] {
return EdgeF[MQTTMessage]{
    Run: func(ctx context.Context) (MQTTMessage, error) {
        opts := mqtt.NewClientOptions().
            AddBroker("tcp://localhost:1883").
            SetClientID("edge-reader")
        
        client := mqtt.NewClient(opts)
        if token := client.Connect(); token.Wait() && token.Error() != nil {
            return MQTTMessage{}, token.Error()
        }
        
        // Subscribe to topic
        messages := make(chan MQTTMessage)
        client.Subscribe("sensors/#", 0, func(c mqtt.Client, m mqtt.Message) {
            messages <- MQTTMessage{
                Topic:   m.Topic(),
                Payload: m.Payload(),
                Time:    time.Now(),
            }
        })
        
        select {
        case msg := <-messages:
            return msg, nil
        case <-ctx.Done():
            return MQTTMessage{}, ctx.Err()
        }
    },
}
}`
    }
];



const ProtocolSimulatorSection = () => {
    const [activeProtocols, setActiveProtocols] = useState<string[]>([]);
    const [simulatorStatus, setSimulatorStatus] = useState(simulatorState.IDLE);
    const [metrics, setMetrics] = useState<Metrics>({
        messagesProcessed: 0,
        errors: 0,
        latency: 0,
    });

    // Simulate protocol data
    useEffect(() => {
        if (simulatorStatus === simulatorState.RUNNING) {
            const interval = setInterval(() => {
                setMetrics(prev => ({
                    messagesProcessed: prev.messagesProcessed + activeProtocols.length,
                    errors: Math.random() > 0.95 ? prev.errors + 1 : prev.errors,
                    latency: Math.random() * 100
                }));
            }, 1000);

            return () => clearInterval(interval);
        }
    }, [simulatorStatus, activeProtocols]);

    return (
        <div className="w-full bg-white p-8">
            <div className="max-w-6xl mx-auto">
                {/* Controls */}
                <div className="flex flex-col sm:flex-row justify-between items-center gap-1 mb-8">
                    <h2 className="text-2xl text-center font-bold">Protocol Simulator</h2>
                    <div className="flex gap-4">
                        <motion.button
                            className={`px-4 py-2 rounded-lg flex items-center gap-2
                ${simulatorStatus === simulatorState.RUNNING
                                ? 'bg-red-500 text-white'
                                : 'bg-green-500 text-white'}`}
                            onClick={() => setSimulatorStatus(
                                simulatorStatus === simulatorState.RUNNING
                                    ? simulatorState.IDLE
                                    : simulatorState.RUNNING
                            )}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            {simulatorStatus === simulatorState.RUNNING ? 'Stop' : 'Start'} Simulation
                            <Activity size={20} />
                        </motion.button>
                    </div>
                </div>

                <div className="grid grid-cols-2 gap-8">
                    {/* Simulator Side */}
                    <div>
                        {/* Protocol Selection */}
                        <div className="space-y-4 mb-8">
                            {protocols.map(protocol => (
                                <motion.div
                                    key={protocol.id}
                                    className={`p-4 rounded-lg border-2 cursor-pointer
                    ${activeProtocols.includes(protocol.id)
                                        ? 'border-blue-500 bg-blue-50'
                                        : 'border-gray-200'}`}
                                    onClick={() => setActiveProtocols(prev =>
                                        prev.includes(protocol.id)
                                            ? prev.filter(p => p !== protocol.id)
                                            : [...prev, protocol.id]
                                    )}
                                    whileHover={{ scale: 1.02 }}
                                >
                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center gap-3">
                                            <protocol.icon
                                                size={24}
                                                className={activeProtocols.includes(protocol.id)
                                                    ? 'text-blue-500'
                                                    : 'text-gray-400'}
                                            />
                                            <div>
                                                <div className="font-medium">{protocol.name}</div>
                                                <div className="text-sm text-gray-500">
                                                    Port: {protocol.port}
                                                </div>
                                            </div>
                                        </div>

                                        {simulatorStatus === simulatorState.RUNNING &&
                                            activeProtocols.includes(protocol.id) && (
                                                <motion.div
                                                    animate={{
                                                        scale: [1, 1.2, 1],
                                                        opacity: [0.5, 1, 0.5]
                                                    }}
                                                    transition={{ duration: 2, repeat: Infinity }}
                                                    className="w-3 h-3 rounded-full bg-green-500"
                                                />
                                            )}
                                    </div>

                                    {/* Live Data Animation */}
                                    {simulatorStatus === simulatorState.RUNNING &&
                                        activeProtocols.includes(protocol.id) && (
                                            <motion.div
                                                initial={{ height: 0 }}
                                                animate={{ height: 'auto' }}
                                                className="mt-4 bg-gray-900 rounded p-2"
                                            >
                                                <motion.pre
                                                    className="text-green-400 text-xs"
                                                    key={Date.now()}
                                                    initial={{ opacity: 0 }}
                                                    animate={{ opacity: 1 }}
                                                >
                                                    {JSON.stringify({
                                                        timestamp: new Date().toISOString(),
                                                        value: Math.random() * 100,
                                                        status: 'ok'
                                                    }, null, 2)}
                                                </motion.pre>
                                            </motion.div>
                                        )}
                                </motion.div>
                            ))}
                        </div>

                        {/* Metrics */}
                        <div className="grid grid-cols-3 gap-4">
                            <div className="bg-blue-50 p-4 rounded-lg">
                                <div className="text-sm text-gray-500">Messages</div>
                                <div className="text-2xl font-bold text-blue-600">
                                    {metrics.messagesProcessed}
                                </div>
                            </div>
                            <div className="bg-red-50 p-4 rounded-lg">
                                <div className="text-sm text-gray-500">Errors</div>
                                <div className="text-2xl font-bold text-red-600">
                                    {metrics.errors}
                                </div>
                            </div>
                            <div className="bg-green-50 p-4 rounded-lg">
                                <div className="text-sm text-gray-500">Latency</div>
                                <div className="text-2xl font-bold text-green-600">
                                    {metrics.latency.toFixed(1)}ms
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Code Side */}
                    <div>
                        <div className="bg-gray-900 rounded-lg p-6">
                            <div className="flex items-center gap-2 mb-4 text-gray-400">
                                <Terminal size={20} />
                                <span>Protocol Implementation</span>
                            </div>

                            <AnimatePresence mode="wait">
                                {activeProtocols.map(id => {

                                    const protocol = protocols.find(p => p.id === id);
                                    if (!protocol) {
                                      return null; // Handle missing protocol gracefully
                                    }

                                    return (
                                        <motion.div
                                            key={id}
                                            initial={{ opacity: 0, y: 20 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            exit={{ opacity: 0, y: -20 }}
                                            className="mb-4"
                                        >
                                            <div className="text-sm text-blue-400 mb-2">
                                                // {protocol.name} Implementation
                                            </div>
                                            <pre className="text-sm">
                        <code className="text-gray-100">
                          {protocol.code}
                        </code>
                      </pre>
                                        </motion.div>
                                    );
                                })}
                            </AnimatePresence>

                            {activeProtocols.length > 0 && (
                                <motion.div
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    className="mt-4 border-t border-gray-700 pt-4"
                                >
                                    <div className="text-sm text-blue-400 mb-2">
                                        // Composition
                                    </div>
                                    <pre className="text-sm">
                    <code className="text-gray-100">
{`func ComposeReaders(ctx context.Context) EdgeF[[]Reading] {
    return Combine(
        ${activeProtocols.map(id => {
            const protocol = protocols.find(p => p.id === id);
            return protocol ? `${protocol.name}Reader.Read()` : "// Protocol not found";
        }).join(',\n        ')}
    ).Map(processReadings)
}`}
                    </code>
                  </pre>
                                </motion.div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProtocolSimulatorSection;