import { redirect } from "react-router-dom"

export async function action({ request, params }) {
  const res = await fetch(`http://localhost:3000/notes/${params.id}`, {
    method: "DELETE",
  })

  return redirect(`/`)
}

const Delete = () => {
  return <div></div>
}

export default Delete
