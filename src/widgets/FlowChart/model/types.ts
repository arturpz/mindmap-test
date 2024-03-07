export type TNodeDimensions = {
    width: number
    height: number
}

export type TNodeData = {
    id: string
    label: string
    type: string
    creation_time: string
    infected: number
}

export type TLinkData = {
    source: string
    target: string
}

export type TResponseData = {
    nodes: TNodeData[]
    links: TLinkData[]
}
