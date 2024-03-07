import { useCallback, useMemo } from "react"
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
import { buildFlowChart } from "../lib/buildFlowChart"
import { useQuery } from "@tanstack/react-query"
import { getFlowChartData } from "../model/services/getFlowChartData"
import { TResponseData } from "../model/types"
import { HorizontalChart } from "./charts/HorizontalChart"

type TFlowChartProps = {
    width: string
    height: string
}

export function FlowChartWrapper({ width, height }: TFlowChartProps) {
    const { data, status } = useQuery({
        queryKey: ["flowData"],
        queryFn: getFlowChartData,
    })

    const content = useMemo(() => {
        switch (status) {
            case "error":
                return <h1>Error</h1>
            case "pending":
                return <h1>Loading...</h1>
            case "success":
                return <HorizontalChart data={data} />
            default:
                return null
        }
    }, [status])

    return <div style={{ width, height }}>{content}</div>
}
