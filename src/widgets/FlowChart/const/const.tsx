import { CircleNode } from "@/widgets/FlowChart/ui/nodes/CircleNode/CircleNode"
import { ClearNode } from "@/widgets/FlowChart/ui/nodes/ClearNode/ClearNode"
import { TNodeDimensions } from "../model/types"

export const nodeDimensions: TNodeDimensions = {
    width: 70,
    height: 70,
}

export const nodeTypes = {
    circle: CircleNode,
    clear: ClearNode,
}
