import { useState } from "react"
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom"

import Root, {
  loader as rootLoader,
  action as rootAction,
} from "./componants/Root"
import Notes from "./componants/Notes"
import Note, { loader as noteLoader } from "./componants/Note"

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" loader={rootLoader} action={rootAction} element={<Root />}>
      <Route index element={<Notes />} />
      <Route path="note/:id" loader={noteLoader} element={<Note />} />
    </Route>
  )
)

function App() {
  return <RouterProvider router={router} />
}

export default App
