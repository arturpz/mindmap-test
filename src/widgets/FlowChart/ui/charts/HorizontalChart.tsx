import { useCallback, useMemo } from "react"
import { buildFlowChart } from "../../lib/buildFlowChart"
import { TResponseData } from "../../model/types"
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
import { nodeTypes } from "../../const/const"

export function HorizontalChart({ data }: { data: TResponseData }) {
    const layoutData = useMemo(() => buildFlowChart(data), [data])

    const [nodes, _, onNodesChange] = useNodesState(layoutData.nodes)
    const [edges, setEdges, onEdgesChange] = useEdgesState(layoutData.edges)

    const onConnect = useCallback((params: Connection) => setEdges(eds => addEdge(params, eds)), [])

    return (
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
    )
}
