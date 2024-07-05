import { useState } from "react"
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  BrowserRouter,
  createRoutesFromElements,
} from "react-router-dom"

import Root from "./componants/Root"

const router = createBrowserRouter(createRoutesFromElements(<Route></Route>))

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Root />
    </>
  )
}

export default App
