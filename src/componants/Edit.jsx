import { useEffect, useState } from "react"
import { Form, redirect, useParams } from "react-router-dom"

export async function action({ request, params }) {
  try {
    const formData = await request.formData()
    const updates = Object.fromEntries(formData)
    console.log(updates)
    const res = await fetch(`http://localhost:3000/notes/${params.id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updates),
    })

    if (!res.ok) {
      throw new Error("Failed to update note")
    }

    return redirect(`/note/${params.id}`)
  } catch (error) {
    return error
  }
}

const Edit = () => {
  const [note, setNote] = useState()
  const [loading, setLoading] = useState(true)

  const { id } = useParams()

  useEffect(() => {
    const getNote = async () => {
      try {
        const res = await fetch(`http://localhost:3000/notes/${id}`)
        const note = await res.json()

        setNote(note)
        console.log(note)
        setLoading(false)
      } catch (error) {
        return error
      }
    }

    getNote()
  }, [id])
  return (
    <div className="p-4">
      <p className="text-2xl font-bold mb-4">Update Note</p>
      {loading ? (
        <p>Loading</p>
      ) : (
        <Form
          method="post"
          className="flex flex-col gap-4 max-w-2xl bg-zinc-50 p-4 rounded-xl shadow-sm"
        >
          <div className="flex flex-col gap-1">
            <label htmlFor="title">Title:</label>
            <input
              type="text"
              name="title"
              id="title"
              value={note.title}
              className="border-solid border-2 bg-slate-400 rounded-md px-2"
            />
          </div>
          <div className="flex flex-col gap-1">
            <label htmlFor="date">Date:</label>
            <input
              type="text"
              name="date"
              id="date"
              value={note.date}
              className="border-solid border-2 bg-slate-400 rounded-md px-2"
            />
          </div>
          <div className="flex flex-col gap-1">
            <label htmlFor="des">Description:</label>
            <input
              type="text"
              name="des"
              id="des"
              value={note.des}
              className="border-solid border-2 bg-slate-400 rounded-md px-2"
            />
          </div>
          <div className="flex flex-col gap-1">
            <label htmlFor="text">Text:</label>
            <textarea
              type="text"
              name="text"
              id="text"
              value={note.text}
              className="border-solid border-2 bg-slate-400 rounded-md px-2"
            />
          </div>
          <div className="flex flex-col gap-1">
            <label htmlFor="id">ID</label>
            <input
              type="text"
              name="id"
              id="id"
              value={note.id}
              disabled
              className="border-solid border-2 bg-slate-400 rounded-md opacity-50 px-2"
            />
          </div>
          <div className="flex justify-around">
            <button
              type="submit"
              className="bg-slate-400 rounded-md mt-4 m-auto px-4 py-1"
            >
              Update
            </button>
            <button
              type="submit"
              className="bg-slate-400 rounded-md mt-4 m-auto px-4 py-1"
            >
              Delete
            </button>
          </div>
        </Form>
      )}
    </div>
  )
}

export default Edit
