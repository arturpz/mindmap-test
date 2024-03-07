import { TResponseData } from "../model/types"

export const mockResponse: TResponseData = {
    nodes: [
        {
            id: "1",
            label: "Start Node",
            type: "region",
            creation_time: "2024-03-07T08:19:02.000Z",
            infected: 0,
        },
        {
            id: "2",
            label: "Node A",
            type: "account id",
            creation_time: "2024-03-07T08:19:02.000Z",
            infected: 1,
        },
        {
            id: "3",
            label: "Bob",
            type: "region",
            creation_time: "2024-03-07T08:19:02.000Z",
            infected: 0,
        },
        {
            id: "4",
            label: "Node B",
            type: "region",
            creation_time: "2024-03-07T08:19:02.000Z",
            infected: 3,
        },
        {
            id: "5",
            label: "Node C",
            type: "region",
            creation_time: "2024-03-07T08:19:02.000Z",
            infected: 2,
        },
        {
            id: "6",
            label: "Node D",
            type: "region",
            creation_time: "2024-03-07T08:19:02.000Z",
            infected: 0,
        },
        {
            id: "7",
            label: "Node E",
            type: "subnets",
            creation_time: "2024-03-07T08:19:02.000Z",
            infected: 0,
        },
        {
            id: "8",
            label: "Node F",
            type: "vpcs",
            creation_time: "2024-03-07T08:19:02.000Z",
            infected: 0,
        },
        {
            id: "9",
            label: "Node G",
            type: "vpcs",
            creation_time: "2024-03-07T08:19:02.000Z",
            infected: 0,
        },
        {
            id: "10",
            label: "Node H",
            type: "vpcs",
            creation_time: "2024-03-07T08:19:02.000Z",
            infected: 0,
        },
        {
            id: "11",
            label: "Node I",
            type: "vpcs",
            creation_time: "2024-03-07T08:19:02.000Z",
            infected: 0,
        },
        {
            id: "12",
            label: "Node J",
            type: "buckets",
            creation_time: "2024-03-07T08:19:02.000Z",
            infected: 0,
        },
        {
            id: "13",
            label: "Node K",
            type: "buckets",
            creation_time: "2024-03-07T08:19:02.000Z",
            infected: 0,
        },
    ],
    links: [
        {
            source: "1",
            target: "2",
        },
        {
            source: "2",
            target: "3",
        },
        {
            source: "2",
            target: "4",
        },
        {
            source: "4",
            target: "5",
        },
        {
            source: "5",
            target: "6",
        },
        {
            source: "6",
            target: "7",
        },
        {
            source: "7",
            target: "8",
        },
        {
            source: "7",
            target: "9",
        },
        {
            source: "7",
            target: "10",
        },
        {
            source: "7",
            target: "11",
        },
        {
            source: "7",
            target: "12",
        },
        {
            source: "7",
            target: "13",
        },
    ],
}
