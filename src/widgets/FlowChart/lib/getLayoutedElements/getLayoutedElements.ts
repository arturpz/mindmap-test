import dagre from "@dagrejs/dagre"
import { Edge, Node, Position } from "reactflow"
import { nodeDimensions } from "../../const/const"

const dagreGraph = new dagre.graphlib.Graph()
dagreGraph.setDefaultEdgeLabel(() => ({}))

export function getLayoutedElements(nodes: Node[], edges: Edge[]) {
    dagreGraph.setGraph({ rankdir: "LR" })

    nodes.forEach(node => {
        dagreGraph.setNode(node.id, {
            width: nodeDimensions.width,
            height: nodeDimensions.height,
        })
    })

    edges.forEach(edge => {
        dagreGraph.setEdge(edge.source, edge.target)
    })

    dagre.layout(dagreGraph)

    nodes.forEach(node => {
        const nodeWithPosition = dagreGraph.node(node.id)
        node.targetPosition = Position.Left
        node.sourcePosition = Position.Right

        node.position = {
            x: nodeWithPosition.x - nodeDimensions.width / 2,
            y: nodeWithPosition.y - nodeDimensions.height / 2,
        }

        return node
    })

    return { nodes, edges }
}
