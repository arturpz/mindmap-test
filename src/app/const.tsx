import { CircleNode, TCircleNodeData } from "@/CustomNode/ui/CircleNode"
import { Block, Face, Shield, Start } from "@mui/icons-material"
import { Edge, Node, Position } from "reactflow"

const handleHorizontal = {
    targetPosition: Position.Left,
    sourcePosition: Position.Right,
}

export const initialNodes: Node<TCircleNodeData>[] = [
    {
        id: "1",
        type: "circle",
        position: { x: 0, y: 0 },
        data: {
            title: "Start Node",
            icon: <Start />,
            type: "blue",
            sourcePosition: Position.Right,
        },
    },
    {
        id: "2",
        type: "circle",
        position: { x: 200, y: 0 },
        data: { title: "Node A", icon: <Shield />, type: "red", ...handleHorizontal },
    },
    {
        id: "3",
        type: "circle",
        position: { x: 400, y: -50 },
        data: { title: <Face />, icon: <Block />, targetPosition: Position.Left },
    },
    {
        id: "4",
        type: "circle",
        position: { x: 400, y: 50 },
        data: { title: "Node B", ...handleHorizontal },
    },
    {
        id: "5",
        type: "circle",
        position: { x: 600, y: 50 },
        data: { title: "Node C", ...handleHorizontal },
    },
    {
        id: "6",
        type: "circle",
        position: { x: 800, y: 50 },
        data: { title: "Node D", ...handleHorizontal },
    },
    {
        id: "7",
        type: "circle",
        position: { x: 1000, y: 50 },
        data: { title: "Node E", ...handleHorizontal },
    },
    {
        type: "circle",
        id: "8",
        position: { x: 1200, y: -200 },
        data: { title: "Node F", targetPosition: Position.Left },
    },
    {
        type: "circle",
        id: "9",
        position: { x: 1200, y: -100 },
        data: { title: "Node G", targetPosition: Position.Left },
    },
    {
        type: "circle",
        id: "10",
        position: { x: 1200, y: 0 },
        data: { title: "Node H", targetPosition: Position.Left },
    },
    {
        type: "circle",
        id: "11",
        position: { x: 1200, y: 100 },
        data: { title: "Node I", targetPosition: Position.Left },
    },
    {
        type: "circle",
        id: "12",
        position: { x: 1200, y: 200 },
        data: { title: "Node J", targetPosition: Position.Left },
    },
    {
        type: "circle",
        id: "13",
        position: { x: 1200, y: 300 },
        data: { title: "Node K", targetPosition: Position.Left },
    },
    // { id: "14", position: { x: 1200, y: 100 }, data: { label: "Node L" } },
    // { id: "15", position: { x: 1200, y: 150 }, data: { label: "Node M" } },
]

export const initialEdges: Edge[] = [
    { id: "e1-2", source: "1", target: "2", type: "smoothstep", animated: true },
    { id: "e2-3", source: "2", target: "3", type: "smoothstep" },
    { id: "e2-4", source: "2", target: "4", type: "smoothstep" },
    { id: "e3-5", source: "4", target: "5", type: "smoothstep" },
    { id: "e5-6", source: "5", target: "6", type: "smoothstep" },
    { id: "e6-7", source: "6", target: "7", type: "smoothstep" },
    { id: "e7-8", source: "7", target: "8", type: "smoothstep" },
    { id: "e7-9", source: "7", target: "9", type: "smoothstep" },
    { id: "e7-10", source: "7", target: "10", type: "smoothstep" },
    { id: "e7-11", source: "7", target: "11", type: "smoothstep" },
    { id: "e7-12", source: "7", target: "12", type: "smoothstep" },
    { id: "e7-13", source: "7", target: "13", type: "smoothstep" },
]

export const nodeTypes = {
    circle: CircleNode,
}
