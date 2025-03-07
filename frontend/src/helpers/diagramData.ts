import { Edge, Node, MarkerType, Position } from '@xyflow/react';

// Static node definitions
export const nodes: Node[] = [
  // Left-most data protocols (repositioned slightly so lines don't cross)
  {
    id: 'dnp3',
    position: { x: 50, y: 50 },
    sourcePosition: Position.Right,
    targetPosition: Position.Right,
    data: { label: 'DNP3' },
    style: { width: 80 },
  },
  {
    id: 'modbus',
    position: { x: 50, y: 130 },
    sourcePosition: Position.Right,
    targetPosition: Position.Right,
    data: { label: 'Modbus' },
    style: { width: 80 },
  },
  {
    id: 'opcua',
    position: { x: 50, y: 210 },
    sourcePosition: Position.Right,
    targetPosition: Position.Right,
    data: { label: 'OPC UA' },
    style: { width: 80 },
  },
  {
    id: 'mqtt',
    position: { x: 50, y: 290 },
    sourcePosition: Position.Right,
    targetPosition: Position.Right,
    data: { label: 'MQTT' },
    style: { width: 80 },
  },
  {
    id: 'grpc',
    position: { x: 50, y: 370 },
    sourcePosition: Position.Right,
    targetPosition: Position.Right,
    data: { label: 'gRPC' },
    style: { width: 80 },
  },

  // Data Sources (moved so the wires fan out nicely)
  {
    id: 'dataSources',
    position: { x: 200, y: 210 },
    targetPosition: Position.Left,
    sourcePosition: Position.Right,
    data: { label: 'Data Sources' },
    style: { padding: 10, width: 120, textAlign: 'center' },
  },

  // CNCF Infrastructure Stack
  {
    id: 'cncfStack',
    position: { x: 190, y: 340 },
    targetPosition: Position.Right,
    sourcePosition: Position.Right,
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
    targetPosition: Position.Left,
    sourcePosition: Position.Right,
    position: { x: 370, y: 150 },
    data: { label: 'API Gateway / Envoy' },
    style: { padding: 10, width: 140, textAlign: 'center' },
  },

  // Go Collectors
  {
    id: 'goCollectors',
    targetPosition: Position.Left,
    sourcePosition: Position.Right,
    position: { x: 540, y: 170 },
    data: { label: 'Go Collectors' },
    style: { padding: 10, width: 120, textAlign: 'center' },
  },

  // NATS
  {
    id: 'nats',
    targetPosition: Position.Left,
    sourcePosition: Position.Right,
    position: { x: 680, y: 220 },
    data: { label: 'NATS' },
    style: { padding: 10, width: 80, textAlign: 'center' },
  },

  // Observability block
  {
    id: 'observability',
    targetPosition: Position.Left,
    position: { x: 950, y: 30 },
    data: { label: 'Prometheus | Jaeger\nCloudEvents | Loki\nOpenTelemetry' },
    style: {
      width: 180,
      background: '#fffbe6',
      border: '1px solid #999',
      padding: 10,
      textAlign: 'center'
    },
  },

  // Google Pub/Sub - Azure Event Hub
  {
    id: 'observability2',
    targetPosition: Position.Left,
    position: { x: 950, y: 120 },
    data: { label: 'Google Pub/Sub | \nAzure Event Hub ' },
    style: {
      width: 180,
      background: '#fffbe6',
      border: '1px solid #999',
      padding: 10,
      textAlign: 'center'
    },
  },

  // Apache Kafka
  {
    id: 'kafka',
    targetPosition: Position.Left,
    sourcePosition: Position.Right,
    position: { x: 790, y: 260 },
    data: { label: 'Apache Kafka' },
    style: { padding: 10, width: 120, textAlign: 'center' },
  },

  // TimescaleDB
  {
    id: 'timescale',
    targetPosition: Position.Left,
    sourcePosition: Position.Right,
    position: { x: 960, y: 200 },
    data: { label: 'TimescaleDB' },
    style: { padding: 10, width: 100, textAlign: 'center' },
  },

  // PostgreSQL / Metadata Store
  {
    id: 'postgres',
    targetPosition: Position.Left,
    sourcePosition: Position.Right,
    position: { x: 960, y: 250 },
    data: { label: 'PostgreSQL\nMetadata Store' },
    style: { padding: 10, width: 120, textAlign: 'center' },
  },

  // Object Storage
  {
    id: 'objectStorage',
    targetPosition: Position.Left,
    position: { x: 960, y: 320 },
    data: { label: 'Object Storage' },
    style: { padding: 10, width: 120, textAlign: 'center' },
  },

  // Analytics / ClickHouse
  {
    id: 'analytics',
    targetPosition: Position.Left,
    sourcePosition: Position.Right,
    position: { x: 1140, y: 160 },
    data: { label: 'Analytics / ClickHouse' },
    style: { padding: 10, width: 140, textAlign: 'center' },
  },

  // Grafana
  {
    id: 'grafana',
    targetPosition: Position.Left,
    position: { x: 1320, y: 50 },
    data: { label: 'Grafana' },
    style: { padding: 10, width: 80, textAlign: 'center' },
  },

  // Domain Controller (group)
  {
    id: 'domainController',
    targetPosition: Position.Top,
    position: { x: 1200, y: 350 },
    data: {
      label: 'Domain Controller\n\nDomain State | Command Engine\nBusiness Rules | Orchestrator'
    },
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
export const edges: Edge[] = [
  // Protocols -> Data Sources
  {
    id: 'e-dnp3-ds',
    source: 'dnp3',
    target: 'dataSources',
    animated: false,
    markerEnd: {
        type: MarkerType.Arrow,
        width: 20,
        height: 20,
        color: 'oklch(0.379 0.146 265.522)',
    },
    style: { stroke: 'oklch(0.379 0.146 265.522)' }
  },
  {
    id: 'e-modbus-ds',
    source: 'modbus',
    target: 'dataSources',
    animated: false,
    markerEnd: {
        type: MarkerType.Arrow,
        width: 20,
        height: 20,
        color: 'oklch(0.379 0.146 265.522)',
    },
    style: { stroke: 'oklch(0.379 0.146 265.522)' }
  },
  {
    id: 'e-opcua-ds',
    source: 'opcua',
    target: 'dataSources',
    animated: false,
    markerEnd: {
        type: MarkerType.Arrow,
        width: 20,
        height: 20,
        color: 'oklch(0.379 0.146 265.522)',
    },
    style: { stroke: 'oklch(0.379 0.146 265.522)' }
  },
  {
    id: 'e-mqtt-ds',
    source: 'mqtt',
    target: 'dataSources',
    animated: false,
    markerEnd: {
        type: MarkerType.Arrow,
        width: 20,
        height: 20,
        color: 'oklch(0.379 0.146 265.522)',
    },
    style: { stroke: 'oklch(0.379 0.146 265.522)' }
  },
  {
    id: 'e-grpc-ds',
    source: 'grpc',
    target: 'dataSources',
    animated: false,
    markerEnd: {
        type: MarkerType.Arrow,
        width: 20,
        height: 20,
        color: 'oklch(0.379 0.146 265.522)',
    },
    style: { stroke: 'oklch(0.379 0.146 265.522)' }
  },

  // Data Sources -> API Gateway
  {
    id: 'e-ds-apigw',
    source: 'dataSources',
    target: 'apiGateway',
    animated: false,
    markerEnd: {
        type: MarkerType.Arrow,
        width: 20,
        height: 20,
        color: 'oklch(0.379 0.146 265.522)',
    },
    style: { stroke: 'oklch(0.379 0.146 265.522)' }
  },

  // Infrastructure Stack edges (dashed to show linkage)
  {
    id: 'e-cncfi-apiGateway',
    source: 'cncfStack',
    target: 'apiGateway',
    animated: false,
    markerEnd: {
        type: MarkerType.Arrow,
        width: 20,
        height: 20,
        color: 'oklch(0.379 0.146 265.522)',
    },
    style: { stroke: 'oklch(0.379 0.146 265.522)' }
  },
  {
    id: 'e-cncfi-goCollectors',
    source: 'cncfStack',
    target: 'goCollectors',
    animated: false,
    markerEnd: {
        type: MarkerType.Arrow,
        width: 20,
        height: 20,
        color: 'oklch(0.379 0.146 265.522)',
    },
    style: { stroke: 'oklch(0.379 0.146 265.522)' }
  },
  {
    id: 'e-cncfi-nats',
    source: 'cncfStack',
    target: 'nats',
    animated: false,
    markerEnd: {
        type: MarkerType.Arrow,
        width: 20,
        height: 20,
        color: 'oklch(0.379 0.146 265.522)',
    },
    style: { stroke: 'oklch(0.379 0.146 265.522)' }
  },
  {
    id: 'e-cncfi-kafka',
    source: 'cncfStack',
    target: 'kafka',
    animated: false,
    markerEnd: {
        type: MarkerType.Arrow,
        width: 20,
        height: 20,
        color: 'oklch(0.379 0.146 265.522)',
    },
    style: { stroke: 'oklch(0.379 0.146 265.522)' }
  },

  // API Gateway -> Go Collectors
  {
    id: 'e-apigw-gocollectors',
    source: 'apiGateway',
    target: 'goCollectors',
    animated: false,
    markerEnd: {
        type: MarkerType.Arrow,
        width: 20,
        height: 20,
        color: 'oklch(0.379 0.146 265.522)',
    },
    style: { stroke: 'oklch(0.379 0.146 265.522)' }
  },

  // Go Collectors -> Observability block (dashed)
  {
    id: 'e-collectors-observ',
    source: 'goCollectors',
    target: 'observability',
    animated: false,
    markerEnd: {
        type: MarkerType.Arrow,
        width: 20,
        height: 20,
        color: 'oklch(0.379 0.146 265.522)',
    },
    style: { stroke: 'oklch(0.379 0.146 265.522)' }
  },

  // Nats -> Observability block (dashed)
    {
        id: 'e-nats-observ',
        source: 'nats',
        target: 'observability',
        animated: false,
        markerEnd: {
            type: MarkerType.Arrow,
            width: 20,
            height: 20,
            color: 'oklch(0.379 0.146 265.522)',
        },
        style: { stroke: 'oklch(0.379 0.146 265.522)' }
    },

  // Go Collectors -> NATS
  {
    id: 'e-gocollectors-nats',
    source: 'goCollectors',
    target: 'nats',
    animated: false,
    markerEnd: {
        type: MarkerType.Arrow,
        width: 20,
        height: 20,
        color: 'oklch(0.379 0.146 265.522)',
    },
    style: { stroke: 'oklch(0.379 0.146 265.522)' }
  },

  // NATS -> Kafka
  {
    id: 'e-nats-kafka',
    source: 'nats',
    target: 'kafka',
    animated: false,
    markerEnd: {
        type: MarkerType.Arrow,
        width: 20,
        height: 20,
        color: 'oklch(0.379 0.146 265.522)',
    },
    style: { stroke: 'oklch(0.379 0.146 265.522)' }
  },

  // Kafka -> Observability block (dashed)
  {
    id: 'e-kafka-observ',
    source: 'kafka',
    target: 'observability',
    animated: false,
    markerEnd: {
        type: MarkerType.Arrow,
        width: 20,
        height: 20,
        color: 'oklch(0.379 0.146 265.522)',
    },
    style: { stroke: 'oklch(0.379 0.146 265.522)' }
  },

  // Kafka -> Observability block 2 (dashed)
  {
    id: 'e-kafka-observ2',
    source: 'kafka',
    target: 'observability2',
    animated: false,
    markerEnd: {
        type: MarkerType.Arrow,
        width: 20,
        height: 20,
        color: 'oklch(0.379 0.146 265.522)',
    },
    style: { stroke: 'oklch(0.379 0.146 265.522)' }
  },

  // Kafka -> TimescaleDB / PostgreSQL / Object Storage
  {
    id: 'e-kafka-timescale',
    source: 'kafka',
    target: 'timescale',
    animated: false,
    markerEnd: {
        type: MarkerType.Arrow,
        width: 20,
        height: 20,
        color: 'oklch(0.379 0.146 265.522)',
    },
    style: { stroke: 'oklch(0.379 0.146 265.522)' }
  },
  {
    id: 'e-kafka-postgres',
    source: 'kafka',
    target: 'postgres',
    animated: false,
    markerEnd: {
        type: MarkerType.Arrow,
        width: 20,
        height: 20,
        color: 'oklch(0.379 0.146 265.522)',
    },
    style: { stroke: 'oklch(0.379 0.146 265.522)' }
  },
  {
    id: 'e-kafka-objstore',
    source: 'kafka',
    target: 'objectStorage',
    animated: false,
    markerEnd: {
        type: MarkerType.Arrow,
        width: 20,
        height: 20,
        color: 'oklch(0.379 0.146 265.522)',
    },
    style: { stroke: 'oklch(0.379 0.146 265.522)' }
  },

  // TimescaleDB -> Analytics
  {
    id: 'e-timescale-analytics',
    source: 'timescale',
    target: 'analytics',
    animated: false,
    markerEnd: {
        type: MarkerType.Arrow,
        width: 20,
        height: 20,
        color: 'oklch(0.379 0.146 265.522)',
    },
    style: { stroke: 'oklch(0.379 0.146 265.522)' }
  },

  // Analytics -> Grafana
  {
    id: 'e-analytics-grafana',
    source: 'analytics',
    target: 'grafana',
    animated: false,
    markerEnd: {
        type: MarkerType.Arrow,
        width: 20,
        height: 20,
        color: 'oklch(0.379 0.146 265.522)',
    },
    style: { stroke: 'oklch(0.379 0.146 265.522)' }
  },

  // timescale -> Domain Controller
  {
    id: 'e-timescale-dc',
    source: 'timescale',
    target: 'domainController',
    animated: false,
    markerEnd: {
        type: MarkerType.Arrow,
        width: 20,
        height: 20,
        color: 'oklch(0.379 0.146 265.522)',
    },
    style: { stroke: 'oklch(0.379 0.146 265.522)' }
  },

  // Analytics -> Domain Controller
  {
    id: 'e-analytics-dc',
    source: 'analytics',
    target: 'domainController',
    animated: false,
    markerEnd: {
        type: MarkerType.Arrow,
        width: 20,
        height: 20,
        color: 'oklch(0.379 0.146 265.522)',
    },
    style: { stroke: 'oklch(0.379 0.146 265.522)' }
  },

  // Domain contgroollet -> Nats
    {
        id: 'e-dc-nats',
        source: 'domainController',
        target: 'nats',
        animated: false,
        markerEnd: {
            type: MarkerType.Arrow,
            width: 20,
            height: 20,
            color: 'oklch(0.379 0.146 265.522)',
        },
        style: { stroke: 'oklch(0.379 0.146 265.522)' }
    },
];
