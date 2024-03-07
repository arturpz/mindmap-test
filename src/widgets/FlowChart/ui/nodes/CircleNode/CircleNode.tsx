import { ReactNode, memo } from "react"
import { Handle, NodeProps, Position } from "reactflow"
import styles from "./CircleNode.module.scss"
import { Box, Typography } from "@mui/material"
import { clsx } from "clsx"

type TCircleNodeType = "blue" | "red" | "disabled"
type THandlerPosition = "top" | "right" | "bottom" | "left"

export type TCircleNodeData = {
    title: string | ReactNode
    icon?: ReactNode
    targetPositions?: THandlerPosition[]
    sourcePositions?: THandlerPosition[]
    type?: TCircleNodeType
}

const handlerPositions = {
    top: Position.Top,
    right: Position.Right,
    bottom: Position.Bottom,
    left: Position.Left,
}

export const CircleNode = memo(({ data }: NodeProps<TCircleNodeData>) => {
    const { title, icon, sourcePositions, targetPositions, type = "blue" } = data

    return (
        <Box className={clsx(styles.nodeContainer, styles[type])}>
            {icon && <Box className={styles.iconContainer}>{icon}</Box>}
            <Box className={styles.body}>
                <Typography className={styles.title}>{title}</Typography>
            </Box>
            {targetPositions?.map((position, index) => (
                <Handle
                    className={styles.handleL}
                    key={index}
                    id={position}
                    type="target"
                    position={handlerPositions[position]}
                />
            ))}
            {sourcePositions?.map((position, index) => (
                <Handle
                    className={styles.handleR}
                    key={index}
                    id={position}
                    type="source"
                    position={handlerPositions[position]}
                />
            ))}
        </Box>
    )
})
