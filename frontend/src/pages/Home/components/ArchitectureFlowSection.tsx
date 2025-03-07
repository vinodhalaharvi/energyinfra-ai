import React from 'react';
import {
  ReactFlow,
  ReactFlowProvider,
  Controls
} from '@xyflow/react';
import { nodes, edges } from '../../../helpers/diagramData';

const ArchitectureFlowSection: React.FC = () => {
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