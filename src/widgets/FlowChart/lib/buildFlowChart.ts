import { Edge, Node } from "reactflow"
import { TResponseData } from "../model/types"
import { getLayoutedElements } from "./getLayoutedElements/getLayoutedElements"
import { prepareEdges } from "./prepareData/prepareEdges"
import { prepareNodes } from "./prepareData/prepareNodes"

export function buildFlowChart(data: TResponseData): {
    nodes: Node[]
    edges: Edge[]
} {
    const layout = getLayoutedElements(
        prepareNodes({ nodes: data.nodes }),
        prepareEdges({ edges: data.links })
    )

    return layout
}
