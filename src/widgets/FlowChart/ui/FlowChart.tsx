import { useCallback } from "react"
import ReactFlow, {
    Background,
    BackgroundVariant,
    Connection,
    Controls,
    MiniMap,
    addEdge,
    useEdgesState,
    useNodesState,
} from "reactflow"
import "reactflow/dist/style.css"
import { nodeTypes } from "@/widgets/FlowChart/const/const"
import { mockResponse } from "../const/mock"
import { buildFlowChart } from "../lib/buildFlowChart"

type TFlowChartProps = {
    width: string
    height: string
}

export function FlowChart({ width, height }: TFlowChartProps) {
    const { nodes: layoutedNodes, edges: layoutedEdges } = buildFlowChart(mockResponse)

    const [nodes, _, onNodesChange] = useNodesState(layoutedNodes)
    const [edges, setEdges, onEdgesChange] = useEdgesState(layoutedEdges)

    const onConnect = useCallback((params: Connection) => setEdges(eds => addEdge(params, eds)), [])

    return (
        <div style={{ width, height }}>
            <ReactFlow
                nodes={nodes}
                edges={edges}
                onNodesChange={onNodesChange}
                onEdgesChange={onEdgesChange}
                onConnect={onConnect}
                nodeTypes={nodeTypes}
                fitView
            >
                <Controls />
                <MiniMap />
                <Background variant={BackgroundVariant.Dots} gap={12} size={1} />
            </ReactFlow>
        </div>
    )
}
