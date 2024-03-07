import { Node } from "reactflow"
import { TNodeData } from "../../model/types"

export function prepareNodes({ nodes }: { nodes: TNodeData[] }): Node[] {
    return nodes.map(node => {
        return {
            id: node.id,
            type: "circle",
            data: {
                title: node.label,
                targetPositions: ["left"],
                sourcePositions: ["right"],
                type: !!node.infected ? "red" : "blue",
            },
            position: { x: 0, y: 0 },
        }
    })
}
