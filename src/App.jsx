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
import Edit, { action as editAction } from "./componants/Edit"
import Delete, { action as deleteAction } from "./componants/Delete"

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" loader={rootLoader} action={rootAction} element={<Root />}>
      <Route index element={<Notes />} />
      <Route path="note/:id" loader={noteLoader} element={<Note />} />
      <Route path="note/:id/edit" action={editAction} element={<Edit />} />
      <Route
        path="note/:id/edit/delete"
        action={deleteAction}
        element={<Delete />}
      />
    </Route>
  )
)

function App() {
  return <RouterProvider router={router} />
}

export default App
