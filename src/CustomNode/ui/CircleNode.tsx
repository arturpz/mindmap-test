import { ReactNode, memo } from "react"
import { Handle, NodeProps, Position } from "reactflow"
import styles from "./CircleNode.module.scss"
import { Box, Typography } from "@mui/material"
import { classNames } from "@/lib/classNames/classNames"

type TCircleNodeType = "blue" | "red" | "clear" | "disabled"

export type TCircleNodeData = {
    title: string | ReactNode
    icon?: ReactNode
    targetPosition?: Position
    sourcePosition?: Position
    type?: TCircleNodeType
}

export const CircleNode = memo(({ data }: NodeProps<TCircleNodeData>) => {
    const { title, icon, sourcePosition, targetPosition, type = "blue" } = data

    return (
        <Box className={classNames(styles.nodeContainer, {}, [styles[type]])}>
            {icon && <Box className={styles.iconContainer}>{icon}</Box>}
            <Box className={styles.body}>
                <Typography className={styles.title}>{title}</Typography>
            </Box>
            {targetPosition && <Handle type="target" position={targetPosition} />}
            {sourcePosition && <Handle type="source" position={sourcePosition} />}
        </Box>
    )
})
