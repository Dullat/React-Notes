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
    <div>
      <p>Update Note</p>
      {loading ? (
        <p>Loading</p>
      ) : (
        <Form method="post">
          <div>
            <label htmlFor="title">Title</label>
            <input
              type="text"
              name="title"
              id="title"
              placeholder={note.title}
            />
          </div>
          <div>
            <label htmlFor="date">Date</label>
            <input type="text" name="date" id="date" placeholder={note.date} />
          </div>
          <div>
            <label htmlFor="des">Description</label>
            <input type="text" name="des" id="des" placeholder={note.des} />
          </div>
          <div>
            <label htmlFor="text">Text</label>
            <input type="text" name="text" id="text" placeholder={note.text} />
          </div>
          <div>
            <label htmlFor="id">ID</label>
            <input
              type="text"
              name="id"
              id="id"
              placeholder={note.id}
              disabled
            />
          </div>
          <button type="submit">btn</button>
        </Form>
      )}
    </div>
  )
}

export default Edit
