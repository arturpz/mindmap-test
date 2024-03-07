import { mockResponse } from "../../const/mock"
import { TResponseData } from "../types"

export async function getFlowChartData(): Promise<TResponseData> {
    return new Promise(res => setTimeout(() => res(mockResponse), 1000))
}
