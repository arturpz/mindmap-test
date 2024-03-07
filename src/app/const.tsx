import { CircleNode, TCircleNodeData } from "@/CustomNode/ui/CircleNode/CircleNode"
import { ClearNode, TClearNodeData } from "@/CustomNode/ui/ClearNode/ClearNode"
import { Block, Face, Shield, Start } from "@mui/icons-material"
import { Edge, MarkerType, Node } from "reactflow"

type TNodeTypesData = TCircleNodeData | TClearNodeData

const edgeStyles = {
    markerEnd: {
        type: MarkerType.ArrowClosed,
        width: 20,
        height: 20,
        color: "#4169e1",
    },
    style: {
        strokeWidth: 2,
        stroke: "#4169e1",
    },
}

const edgeDottedStyle = {
    markerEnd: {
        type: MarkerType.ArrowClosed,
        width: 10,
        height: 10,
        color: "#4169e1",
    },
    style: {
        strokeWidth: 3,
        strokeDasharray: "3",
        stroke: "#4169e1",
    },
}

export const initialNodes: Node<TNodeTypesData>[] = [
    {
        id: "1",
        type: "circle",
        position: { x: 0, y: 0 },
        data: {
            title: "Start Node",
            icon: <Start />,
            type: "blue",
            sourcePositions: ["right"],
        },
    },
    {
        id: "2",
        type: "circle",
        position: { x: 200, y: 0 },
        data: {
            title: "Node A",
            icon: <Shield />,
            type: "red",
            targetPositions: ["left", "top"],
            sourcePositions: ["right"],
        },
    },
    {
        id: "3",
        type: "circle",
        position: { x: 400, y: -50 },
        data: { title: <Face />, icon: <Block />, type: "disabled", targetPositions: ["left"] },
    },
    {
        id: "4",
        type: "circle",
        position: { x: 400, y: 50 },
        data: {
            title: "Node B",
            type: "red",
            targetPositions: ["left", "bottom"],
            sourcePositions: ["right"],
        },
    },
    {
        id: "5",
        type: "circle",
        position: { x: 600, y: 50 },
        data: {
            title: "Node C",
            type: "red",
            targetPositions: ["left", "bottom"],
            sourcePositions: ["right"],
        },
    },
    {
        id: "6",
        type: "circle",
        position: { x: 800, y: 50 },
        data: {
            title: "Node D",
            type: "blue",
            targetPositions: ["left", "top"],
            sourcePositions: ["right"],
        },
    },
    {
        id: "7",
        type: "circle",
        position: { x: 1000, y: 50 },
        data: {
            title: "Node E",
            type: "blue",
            targetPositions: ["left", "top"],
            sourcePositions: ["right"],
        },
    },
    {
        id: "1-G",
        data: { title: "Group" },
        position: { x: 1080, y: -300 },
        className: "light",
        style: {
            width: "200px",
            height: "750px",
            border: "3px dashed rgba(64, 104, 224, 0.3)",
            backgroundColor: "transparent",
        },
        type: "output",
    },
    {
        type: "circle",
        id: "8",
        // position: { x: 1200, y: -200 },
        position: { x: 60, y: 20 },
        data: { title: "Node F", type: "blue", targetPositions: ["left", "right"] },
        parentNode: "1-G",
    },
    {
        type: "circle",
        id: "9",
        // position: { x: 1200, y: -100 },
        position: { x: 60, y: 150 },
        data: { title: "Node G", type: "blue", targetPositions: ["left", "right"] },
        parentNode: "1-G",
    },
    {
        type: "circle",
        id: "10",
        // position: { x: 1200, y: 0 },
        position: { x: 60, y: 280 },
        data: { title: "Node H", type: "blue", targetPositions: ["left", "right"] },
        parentNode: "1-G",
    },
    {
        type: "circle",
        id: "11",
        // position: { x: 1200, y: 100 },
        position: { x: 60, y: 420 },
        data: { title: "Node I", type: "blue", targetPositions: ["left", "right"] },
        parentNode: "1-G",
    },
    {
        type: "circle",
        id: "12",
        // position: { x: 1200, y: 200 },
        position: { x: 60, y: 540 },
        data: { title: "Node J", type: "blue", targetPositions: ["left", "right"] },
        parentNode: "1-G",
    },
    {
        type: "circle",
        id: "13",
        // position: { x: 1200, y: 300 },
        position: { x: 60, y: 660 },
        data: { title: "Node K", type: "blue", targetPositions: ["left", "right"] },
        parentNode: "1-G",
    },
    {
        id: "14",
        type: "clear",
        position: { x: 818, y: -150 },
        data: {
            title: "Some info for Node D & Node E",
            sourcePositions: ["bottom"],
        },
    },
    {
        id: "15",
        type: "clear",
        position: { x: 420, y: 300 },
        data: {
            title: "Some info for Node B & Node C",
            sourcePositions: ["top"],
        },
    },
    {
        id: "16",
        type: "clear",
        position: { x: 157, y: -100 },
        data: {
            title: "Some info for Node A",
            sourcePositions: ["bottom"],
        },
    },
    {
        id: "17",
        type: "clear",
        position: { x: 1350, y: -257 },
        data: {
            title: "Some info for Node F",
            sourcePositions: ["left"],
        },
    },
    {
        id: "18",
        type: "clear",
        position: { x: 1350, y: -127 },
        data: {
            title: "Some info for Node G",
            sourcePositions: ["left"],
        },
    },
    {
        id: "19",
        type: "clear",
        position: { x: 1350, y: 3 },
        data: {
            title: "Some info for Node H",
            sourcePositions: ["left"],
        },
    },
    {
        id: "20",
        type: "clear",
        position: { x: 1350, y: 143 },
        data: {
            title: "Some info for Node I",
            sourcePositions: ["left"],
        },
    },
    {
        id: "21",
        type: "clear",
        position: { x: 1350, y: 263 },
        data: {
            title: "Some info for Node J",
            sourcePositions: ["left"],
        },
    },
    {
        id: "22",
        type: "clear",
        position: { x: 1350, y: 383 },
        data: {
            title: "Some info for Node K",
            sourcePositions: ["left"],
        },
    },
    {
        id: "23",
        type: "clear",
        position: { x: 900, y: -340 },
        data: {
            title: "Group label",
            sourcePositions: ["right"],
        },
    },
]

export const initialEdges: Edge[] = [
    {
        id: "e1-2",
        source: "1",
        target: "2",
        type: "smoothstep",
        ...edgeStyles,
    },
    {
        id: "e2-3",
        source: "2",
        target: "3",
        type: "smoothstep",
    },
    {
        id: "e2-4",
        source: "2",
        target: "4",
        type: "smoothstep",
        ...edgeStyles,
    },
    {
        id: "e3-5",
        source: "4",
        target: "5",
        type: "smoothstep",
        ...edgeStyles,
    },
    { id: "e5-6", source: "5", target: "6", type: "smoothstep", ...edgeStyles },
    { id: "e6-7", source: "6", target: "7", type: "smoothstep", ...edgeStyles },
    {
        id: "e7-8",
        source: "7",
        target: "8",
        type: "smoothstep",
        style: {
            stroke: "#000",
        },
    },
    {
        id: "e7-9",
        source: "7",
        target: "9",
        type: "smoothstep",
        style: {
            stroke: "#000",
        },
    },
    {
        id: "e7-10",
        source: "7",
        target: "10",
        type: "smoothstep",
        style: {
            stroke: "#000",
        },
    },
    {
        id: "e7-11",
        source: "7",
        target: "11",
        type: "smoothstep",
        style: {
            stroke: "#000",
        },
    },
    {
        id: "e7-12",
        source: "7",
        target: "12",
        type: "smoothstep",
        style: {
            stroke: "#000",
        },
    },
    {
        id: "e7-13",
        source: "7",
        target: "13",
        type: "smoothstep",
        style: {
            stroke: "#000",
        },
    },
    {
        id: "e14-6",
        source: "14",
        target: "6",
        targetHandle: "top",
        type: "smoothstep",
        ...edgeStyles,
    },
    {
        id: "e14-7",
        source: "14",
        target: "7",
        targetHandle: "top",
        type: "smoothstep",
        ...edgeStyles,
    },
    {
        id: "e15-6",
        source: "15",
        target: "4",
        targetHandle: "bottom",
        type: "smoothstep",
        ...edgeStyles,
    },
    {
        id: "e15-7",
        source: "15",
        target: "5",
        targetHandle: "bottom",
        type: "smoothstep",
        ...edgeStyles,
    },
    {
        id: "e16-2",
        source: "16",
        target: "2",
        targetHandle: "top",
        type: "smoothstep",
        ...edgeStyles,
    },
    {
        id: "e17-8",
        source: "17",
        target: "8",
        targetHandle: "right",
        type: "smoothstep",
        ...edgeDottedStyle,
    },
    {
        id: "e18-9",
        source: "18",
        target: "9",
        targetHandle: "right",
        type: "smoothstep",
        ...edgeDottedStyle,
    },
    {
        id: "e19-10",
        source: "19",
        target: "10",
        targetHandle: "right",
        type: "smoothstep",
        ...edgeDottedStyle,
    },
    {
        id: "e20-11",
        source: "20",
        target: "11",
        targetHandle: "right",
        type: "smoothstep",
        ...edgeDottedStyle,
    },
    {
        id: "e21-12",
        source: "21",
        target: "12",
        targetHandle: "right",
        type: "smoothstep",
        ...edgeDottedStyle,
    },
    {
        id: "e22-13",
        source: "22",
        target: "13",
        targetHandle: "right",
        type: "smoothstep",
        ...edgeDottedStyle,
    },
    {
        id: "e23-g1",
        source: "23",
        target: "1-G",
        type: "smoothstep",
        ...edgeStyles,
    },
]

export const nodeTypes = {
    circle: CircleNode,
    clear: ClearNode,
}
