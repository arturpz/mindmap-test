import { ReactNode, memo } from "react"
import { Handle, NodeProps, Position } from "reactflow"
import styles from "./ClearNode.module.scss"
import { Box, Typography } from "@mui/material"

type THandlerPosition = "top" | "right" | "bottom" | "left"

export type TClearNodeData = {
    title: string | ReactNode
    targetPositions?: THandlerPosition[]
    sourcePositions?: THandlerPosition[]
}

const handlerPositions = {
    top: Position.Top,
    right: Position.Right,
    bottom: Position.Bottom,
    left: Position.Left,
}

export const ClearNode = memo(({ data }: NodeProps<TClearNodeData>) => {
    const { title, targetPositions, sourcePositions } = data

    return (
        <Box className={styles.nodeContainer}>
            <Typography className={styles.title}>{title}</Typography>

            {targetPositions?.map((position, index) => (
                <Handle
                    className={styles.handle}
                    id={position}
                    key={index}
                    type="target"
                    position={handlerPositions[position]}
                />
            ))}
            {sourcePositions?.map((position, index) => (
                <Handle
                    className={styles.handle}
                    id={position}
                    key={index}
                    type="source"
                    position={handlerPositions[position]}
                />
            ))}
        </Box>
    )
})
