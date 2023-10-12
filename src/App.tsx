import { RouterProvider } from "react-router-dom"
import { MainRoute } from "./Router/MainRoute"
import { QueryClientProvider, QueryClient } from "@tanstack/react-query"
import { ReactQueryDevtools } from "@tanstack/react-query-devtools"

let client = new QueryClient()

const App = () => {
  return (
    <div>
      <QueryClientProvider client={client}>
        <RouterProvider router={MainRoute}/>
        <ReactQueryDevtools/>
        </QueryClientProvider>
    </div>
  )
}

export default App