import React from 'react';
import {
  ReactFlow,
  ReactFlowProvider,
  Node,
  Edge,
  Controls
} from '@xyflow/react';

const ArchitectureFlowSection: React.FC = () => {
  // Static node definitions
  const nodes: Node[] = [
    // Left-most data protocols
    {
      id: 'dnp3',
      position: { x: 50, y: 50 },
      data: { label: 'DNP3' },
      style: { width: 80 },
    },
    {
      id: 'modbus',
      position: { x: 50, y: 120 },
      data: { label: 'Modbus' },
      style: { width: 80 },
    },
    {
      id: 'opcua',
      position: { x: 50, y: 190 },
      data: { label: 'OPC UA' },
      style: { width: 80 },
    },
    {
      id: 'mqtt',
      position: { x: 50, y: 260 },
      data: { label: 'MQTT' },
      style: { width: 80 },
    },
    {
      id: 'grpc',
      position: { x: 50, y: 330 },
      data: { label: 'gRPC' },
      style: { width: 80 },
    },

    // Data Sources
    {
      id: 'dataSources',
      // Moved slightly to the right and up
      position: { x: 200, y: 150 },
      data: { label: 'Data Sources' },
      style: { padding: 10, width: 120, textAlign: 'center' },
    },

    // CNCF Infrastructure Stack
    {
      id: 'cncfStack',
      // Shifted a bit down and right
      position: { x: 220, y: 340 },
      data: { label: 'CNCF Infrastructure Stack\nSecurity | Service Mesh | CI/CD' },
      style: {
        padding: 10,
        width: 180,
        textAlign: 'center',
        background: '#fffbe6',
        border: '1px solid #999'
      },
    },

    // API Gateway / Envoy
    {
      id: 'apiGateway',
      // Moved to keep edges from crossing
      position: { x: 370, y: 150 },
      data: { label: 'API Gateway / Envoy' },
      style: { padding: 10, width: 140, textAlign: 'center' },
    },

    // Go Collectors
    {
      id: 'goCollectors',
      // Moved closer to the top row
      position: { x: 540, y: 90 },
      data: { label: 'Go Collectors' },
      style: { padding: 10, width: 120, textAlign: 'center' },
    },

    // NATS
    {
      id: 'nats',
      // Below Go Collectors
      position: { x: 540, y: 200 },
      data: { label: 'NATS' },
      style: { padding: 10, width: 80, textAlign: 'center' },
    },

    // Observability block
    {
      id: 'observability',
      position: { x: 720, y: 30 },
      data: { label: 'Prometheus | Jaeger\nCloudEvents | Loki\nOpenTelemetry' },
      style: {
        width: 180,
        background: '#fffbe6',
        border: '1px solid #999',
        padding: 10,
        textAlign: 'center'
      },
    },

    // Google Pub/Sub
    {
      id: 'googlePubSub',
      position: { x: 720, y: 110 },
      data: { label: 'Google Pub/Sub' },
      style: { padding: 10, width: 120, textAlign: 'center' },
    },

    // Azure Event Hub
    {
      id: 'azureEventHub',
      position: { x: 720, y: 190 },
      data: { label: 'Azure Event Hub' },
      style: { padding: 10, width: 120, textAlign: 'center' },
    },

    // Apache Kafka
    {
      id: 'kafka',
      position: { x: 720, y: 290 },
      data: { label: 'Apache Kafka' },
      style: { padding: 10, width: 120, textAlign: 'center' },
    },

    // TimescaleDB
    {
      id: 'timescale',
      position: { x: 920, y: 110 },
      data: { label: 'TimescaleDB' },
      style: { padding: 10, width: 100, textAlign: 'center' },
    },

    // PostgreSQL / Metadata Store
    {
      id: 'postgres',
      position: { x: 920, y: 210 },
      data: { label: 'PostgreSQL\nMetadata Store' },
      style: { padding: 10, width: 120, textAlign: 'center' },
    },

    // Object Storage
    {
      id: 'objectStorage',
      position: { x: 920, y: 320 },
      data: { label: 'Object Storage' },
      style: { padding: 10, width: 120, textAlign: 'center' },
    },

    // Analytics / ClickHouse
    {
      id: 'analytics',
      position: { x: 1140, y: 160 },
      data: { label: 'Analytics / ClickHouse' },
      style: { padding: 10, width: 140, textAlign: 'center' },
    },

    // Grafana
    {
      id: 'grafana',
      position: { x: 1340, y: 50 },
      data: { label: 'Grafana' },
      style: { padding: 10, width: 80, textAlign: 'center' },
    },

    // Domain Controller (group)
    {
      id: 'domainController',
      position: { x: 1340, y: 320 },
      data: { label: 'Domain Controller\n\nDomain State | Command Engine\nBusiness Rules | Orchestrator' },
      style: {
        width: 220,
        background: '#fffbe6',
        border: '1px solid #999',
        padding: 10,
        textAlign: 'center'
      },
    },
  ];

  // Static edge definitions
  const edges: Edge[] = [
    // Protocols -> Data Sources
    { id: 'e-dnp3-ds', source: 'dnp3', target: 'dataSources', animated: true, style: { stroke: 'oklch(0.379 0.146 265.522)' } },
    { id: 'e-modbus-ds', source: 'modbus', target: 'dataSources', animated: true, style: { stroke: 'oklch(0.379 0.146 265.522)' }  },
    { id: 'e-opcua-ds', source: 'opcua', target: 'dataSources', animated: true, style: { stroke: 'oklch(0.379 0.146 265.522)' }  },
    { id: 'e-mqtt-ds', source: 'mqtt', target: 'dataSources', animated: true, style: { stroke: 'oklch(0.379 0.146 265.522)' }  },
    { id: 'e-grpc-ds', source: 'grpc', target: 'dataSources', animated: true, style: { stroke: 'oklch(0.379 0.146 265.522)' }  },
    // Data Sources -> API Gateway
    { id: 'e-ds-apigw', source: 'dataSources', target: 'apiGateway', animated: true, style: { stroke: 'oklch(0.379 0.146 265.522)' }  },
    // Infrastructure Stack edges (just to show it is connected)
    { id: 'e-ds-cncfi', source: 'dataSources', target: 'cncfStack', style: { strokeDasharray: '4', stroke: 'oklch(0.379 0.146 265.522)' } },
    { id: 'e-apigw-cncfi', source: 'apiGateway', target: 'cncfStack', style: { strokeDasharray: '4', stroke: 'oklch(0.379 0.146 265.522)' } },
    // API Gateway -> Go Collectors
    { id: 'e-apigw-gocollectors', source: 'apiGateway', target: 'goCollectors', animated: true, style: { stroke: 'oklch(0.379 0.146 265.522)' }  },
    // Go Collectors -> Observability block
    { id: 'e-collectors-observ', source: 'goCollectors', target: 'observability', style: { strokeDasharray: '2', stroke: 'oklch(0.379 0.146 265.522)' } },
    // Go Collectors -> NATS
    { id: 'e-gocollectors-nats', source: 'goCollectors', target: 'nats', animated: true, style: { stroke: 'oklch(0.379 0.146 265.522)' }  },
    // NATS -> Kafka
    { id: 'e-nats-kafka', source: 'nats', target: 'kafka', animated: true, style: { stroke: 'oklch(0.379 0.146 265.522)' }  },
    // Kafka -> Observability block
    { id: 'e-kafka-observ', source: 'kafka', target: 'observability', style: { strokeDasharray: '2', stroke: 'oklch(0.379 0.146 265.522)' } },
    // Kafka -> TimescaleDB / PostgreSQL / Object Storage
    { id: 'e-kafka-timescale', source: 'kafka', target: 'timescale', style: { stroke: 'oklch(0.379 0.146 265.522)' }  },
    { id: 'e-kafka-postgres', source: 'kafka', target: 'postgres', style: { stroke: 'oklch(0.379 0.146 265.522)' }  },
    { id: 'e-kafka-objstore', source: 'kafka', target: 'objectStorage', style: { stroke: 'oklch(0.379 0.146 265.522)' }  },
    // Kafka -> Google PubSub / Azure EH
    { id: 'e-kafka-gpubsub', source: 'kafka', target: 'googlePubSub', style: { stroke: 'oklch(0.379 0.146 265.522)' }  },
    { id: 'e-kafka-azureeh', source: 'kafka', target: 'azureEventHub', style: { stroke: 'oklch(0.379 0.146 265.522)' }  },
    // Google PubSub -> Analytics
    { id: 'e-gpubsub-analytics', source: 'googlePubSub', target: 'analytics', style: { stroke: 'oklch(0.379 0.146 265.522)' }  },
    // Azure Event Hub -> Analytics
    { id: 'e-azure-analytics', source: 'azureEventHub', target: 'analytics', style: { stroke: 'oklch(0.379 0.146 265.522)' }  },
    // TimescaleDB -> Analytics
    { id: 'e-timescale-analytics', source: 'timescale', target: 'analytics', style: { stroke: 'oklch(0.379 0.146 265.522)' }  },
    // PostgreSQL -> Analytics
    { id: 'e-postgres-analytics', source: 'postgres', target: 'analytics', style: { stroke: 'oklch(0.379 0.146 265.522)' }  },
    // Analytics -> Grafana
    { id: 'e-analytics-grafana', source: 'analytics', target: 'grafana', animated: true, style: { stroke: 'oklch(0.379 0.146 265.522)' }  },
    // DB & Storage -> Domain Controller
    { id: 'e-timescale-dc', source: 'timescale', target: 'domainController', style: { stroke: 'oklch(0.379 0.146 265.522)' }  },
    { id: 'e-postgres-dc', source: 'postgres', target: 'domainController', style: { stroke: 'oklch(0.379 0.146 265.522)' }  },
    { id: 'e-objstore-dc', source: 'objectStorage', target: 'domainController', style: { stroke: 'oklch(0.379 0.146 265.522)' }  },
    // Analytics -> Domain Controller
    { id: 'e-analytics-dc', source: 'analytics', target: 'domainController', style: { stroke: 'oklch(0.379 0.146 265.522)' }  },
  ];

  return (
    <section className="my-12 px-4">
      <h2 className="text-3xl font-bold text-center mb-2">
        System Architecture
      </h2>
      <p className="text-center text-gray-600 mb-8">
        A visual overview of how the system components interact.
      </p>

      <div
        className="mx-auto"
        style={{ width: '100%', height: '700px', maxWidth: '1400px' }}
      >
        <ReactFlowProvider>
          <ReactFlow 
            nodes={nodes}
            edges={edges}
            fitView
            className='border border-gray-300 bg-gray-200 rounded-lg shadow-md'
            colorMode="light"
            attributionPosition="top-right"
            nodesDraggable={false}
          >
            <Controls />
          </ReactFlow>
        </ReactFlowProvider>
      </div>
    </section>
  );
};

export default ArchitectureFlowSection;