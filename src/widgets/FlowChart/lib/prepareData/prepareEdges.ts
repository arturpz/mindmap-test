import { ConnectionLineType, Edge } from "reactflow"
import { TLinkData } from "../../model/types"

export function prepareEdges({ edges }: { edges: TLinkData[] }): Edge[] {
    return edges.map(edge => ({
        id: `e${edge.source}-${edge.target}`,
        source: edge.source,
        target: edge.target,
        type: ConnectionLineType.SmoothStep,
    }))
}
