import { useLoaderData, Link, useParams } from "react-router-dom"

export async function loader({ params }) {
  console.log(params.id)
  try {
    const res = await fetch(`http://localhost:3000/notes/${params.id}`)
    const note = await res.json()

    return { note }
  } catch (error) {
    return error
  }
}

const Note = () => {
  const { note } = useLoaderData()
  const { id } = useParams()
  return (
    <div className="m-4 flex flex-col gap-4 max-w-2xl">
      <div className="flex justify-between bg-slate-400 rounded-md mt-4 px-4 py-1 w-full">
        <p>{note.title || "none"}</p>
        <p>{note.date}</p>
      </div>
      <div className="bg-slate-400 rounded-md px-4 py-1 w-full">{note.des}</div>
      <p className="bg-slate-400 rounded-md px-4 py-1 w-full">
        Text: <br />
        {note.text}
      </p>

      <div className="flex justify-around bg-slate-400 rounded-md px-4 py-1 w-full cursor-pointer">
        <Link to={`/note/${id}/edit`} className="w-full text-center">
          Edit
        </Link>
      </div>
    </div>
  )
}

export default Note
