import { useLoaderData } from "react-router-dom"

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
  return (
    <div className="m-4 flex flex-col gap-4">
      <div className="flex justify-between">
        <p>{note.title}</p>
        <p>{note.date}</p>
      </div>
      <div className="">{note.des}</div>
      <p>{note.text}</p>
    </div>
  )
}

export default Note
