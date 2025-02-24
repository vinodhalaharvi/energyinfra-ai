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
      position: { x: 200, y: 190 },
      data: { label: 'Data Sources' },
      style: { padding: 10, width: 120, textAlign: 'center' },
    },
    // CNCF Infrastructure Stack
    {
      id: 'cncfStack',
      position: { x: 200, y: 340 },
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
      position: { x: 400, y: 190 },
      data: { label: 'API Gateway / Envoy' },
      style: { padding: 10, width: 140, textAlign: 'center' },
    },
    // Go Collectors
    {
      id: 'goCollectors',
      position: { x: 580, y: 150 },
      data: { label: 'Go Collectors' },
      style: { padding: 10, width: 120, textAlign: 'center' },
    },
    // NATS
    {
      id: 'nats',
      position: { x: 580, y: 240 },
      data: { label: 'NATS' },
      style: { padding: 10, width: 80, textAlign: 'center' },
    },
    // Observability block (Prometheus, Jaeger, etc.)
    {
      id: 'observability',
      position: { x: 750, y: 40 },
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
      position: { x: 750, y: 160 },
      data: { label: 'Google Pub/Sub' },
      style: { padding: 10, width: 120, textAlign: 'center' },
    },
    // Azure Event Hub
    {
      id: 'azureEventHub',
      position: { x: 750, y: 240 },
      data: { label: 'Azure Event Hub' },
      style: { padding: 10, width: 120, textAlign: 'center' },
    },
    // Apache Kafka
    {
      id: 'kafka',
      position: { x: 700, y: 330 },
      data: { label: 'Apache Kafka' },
      style: { padding: 10, width: 120, textAlign: 'center' },
    },
    // TimescaleDB
    {
      id: 'timescale',
      position: { x: 900, y: 150 },
      data: { label: 'TimescaleDB' },
      style: { padding: 10, width: 100, textAlign: 'center' },
    },
    // PostgreSQL / Metadata Store
    {
      id: 'postgres',
      position: { x: 900, y: 250 },
      data: { label: 'PostgreSQL\nMetadata Store' },
      style: { padding: 10, width: 120, textAlign: 'center' },
    },
    // Object Storage
    {
      id: 'objectStorage',
      position: { x: 900, y: 360 },
      data: { label: 'Object Storage' },
      style: { padding: 10, width: 120, textAlign: 'center' },
    },
    // Analytics / ClickHouse
    {
      id: 'analytics',
      position: { x: 1100, y: 200 },
      data: { label: 'Analytics / ClickHouse' },
      style: { padding: 10, width: 140, textAlign: 'center' },
    },
    // Grafana
    {
      id: 'grafana',
      position: { x: 1250, y: 60 },
      data: { label: 'Grafana' },
      style: { padding: 10, width: 80, textAlign: 'center' },
    },
    // Domain Controller (group)
    {
      id: 'domainController',
      position: { x: 1300, y: 350 },
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
    { id: 'e-dnp3-ds', source: 'dnp3', target: 'dataSources', animated: true },
    { id: 'e-modbus-ds', source: 'modbus', target: 'dataSources', animated: true },
    { id: 'e-opcua-ds', source: 'opcua', target: 'dataSources', animated: true },
    { id: 'e-mqtt-ds', source: 'mqtt', target: 'dataSources', animated: true },
    { id: 'e-grpc-ds', source: 'grpc', target: 'dataSources', animated: true },
    // Data Sources -> API Gateway
    { id: 'e-ds-apigw', source: 'dataSources', target: 'apiGateway', animated: true },
    // Infrastructure Stack edges (just to show it is connected)
    { id: 'e-ds-cncfi', source: 'dataSources', target: 'cncfStack', style: { strokeDasharray: '4' } },
    { id: 'e-apigw-cncfi', source: 'apiGateway', target: 'cncfStack', style: { strokeDasharray: '4' } },
    // API Gateway -> Go Collectors
    { id: 'e-apigw-gocollectors', source: 'apiGateway', target: 'goCollectors', animated: true },
    // Go Collectors -> Observability block
    { id: 'e-collectors-observ', source: 'goCollectors', target: 'observability', style: { strokeDasharray: '2' } },
    // Go Collectors -> NATS
    { id: 'e-gocollectors-nats', source: 'goCollectors', target: 'nats', animated: true },
    // NATS -> Kafka
    { id: 'e-nats-kafka', source: 'nats', target: 'kafka', animated: true },
    // Kafka -> Observability block
    { id: 'e-kafka-observ', source: 'kafka', target: 'observability', style: { strokeDasharray: '2' } },
    // Kafka -> TimescaleDB / PostgreSQL / Object Storage
    { id: 'e-kafka-timescale', source: 'kafka', target: 'timescale' },
    { id: 'e-kafka-postgres', source: 'kafka', target: 'postgres' },
    { id: 'e-kafka-objstore', source: 'kafka', target: 'objectStorage' },
    // Kafka -> Google PubSub / Azure EH
    { id: 'e-kafka-gpubsub', source: 'kafka', target: 'googlePubSub' },
    { id: 'e-kafka-azureeh', source: 'kafka', target: 'azureEventHub' },
    // Google PubSub -> Analytics
    { id: 'e-gpubsub-analytics', source: 'googlePubSub', target: 'analytics' },
    // Azure Event Hub -> Analytics
    { id: 'e-azure-analytics', source: 'azureEventHub', target: 'analytics' },
    // TimescaleDB -> Analytics
    { id: 'e-timescale-analytics', source: 'timescale', target: 'analytics' },
    // PostgreSQL -> Analytics
    { id: 'e-postgres-analytics', source: 'postgres', target: 'analytics' },
    // Analytics -> Grafana
    { id: 'e-analytics-grafana', source: 'analytics', target: 'grafana', animated: true },
    // DB & Storage -> Domain Controller
    { id: 'e-timescale-dc', source: 'timescale', target: 'domainController' },
    { id: 'e-postgres-dc', source: 'postgres', target: 'domainController' },
    { id: 'e-objstore-dc', source: 'objectStorage', target: 'domainController' },
    // Analytics -> Domain Controller
    { id: 'e-analytics-dc', source: 'analytics', target: 'domainController' },
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