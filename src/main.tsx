import React from "react"
import ReactDOM from "react-dom/client"
import App from "@/app/App"
import "@/app/styles/index.css"
import { ReactFlowProvider } from "reactflow"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"

const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
        <QueryClientProvider client={queryClient}>
            <ReactFlowProvider>
                <App />
            </ReactFlowProvider>
        </QueryClientProvider>
    </React.StrictMode>
)
