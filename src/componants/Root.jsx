import { useState } from "react"
import {
  Form,
  Outlet,
  useLoaderData,
  NavLink,
  redirect,
} from "react-router-dom"
import { v4 as uuid } from "uuid"

export async function loader() {
  try {
    const res = await fetch(`http://localhost:3000/notes`)
    const data = await res.json()
    return { notes: data }
  } catch (error) {
    return { error }
  }
}

export async function action() {
  const newNote = {
    id: uuid(),
    title: "unsest",
    des: "description",
    text: "write here",
    date: Date.now(),
  }

  try {
    const res = await fetch(`http://localhost:3000/notes`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newNote),
    })

    return redirect(`/note/${newNote.id}/edit`)
  } catch (error) {
    return { error }
  }
}

const Root = () => {
  const { notes } = useLoaderData()
  const [isLoading, setIsLoading] = useState(true)

  if (!notes) {
    return <p>Loading...</p>
  }

  if (notes.error) {
    return <p>Error fetching data: {notes.error.message}</p>
  }

  if (!Array.isArray(notes)) {
    return <p>No notes found.</p>
  }

  return (
    <>
      <div className="grid grid-cols-[2fr_5fr] h-dvh">
        <div className="bg-slate-600 p-4 flex gap-4 flex-col">
          <h1 className="mt-8 ml-2 text-3xl font-bold">Notes</h1>
          <div className="flex items-center gap-4">
            <input
              type="text"
              className="outline-none rounded-md p-1"
              name=""
              id=""
            />
            <Form method="post">
              <button type="submit" className="bg-white rounded-md p-1">
                New
              </button>
            </Form>
          </div>
          <ul className="flex flex-col gap-4">
            {notes.map((note) => (
              <li key={note.id} className="...">
                <NavLink
                  to={`/note/${note.id}`}
                  className={({ isActive, isPending }) => {
                    isActive
                      ? "bg-zinc-50"
                      : isPending
                      ? "opacity-50"
                      : "bg-white"
                  }}
                >
                  {note.title}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
        <div className="">
          <Outlet />
        </div>
      </div>
    </>
  )
}

export default Root
