import { Form } from "react-router-dom"

export async function action({ request, params }) {
  try {
    const res = await fetch(`https://localhost:3000/`)
  } catch (error) {
    error
  }
}

const Edit = () => {
  return (
    <div>
      <p>Update Note</p>
      <Form>
        <div>
          <label htmlFor="title">Title</label>
          <input type="text" name="title" id="title" />
        </div>
        <div>
          <label htmlFor="des">Description</label>
          <input type="text" name="des" id="des" />
        </div>
        <div>
          <label htmlFor="text">Title</label>
          <input type="text" name="text" id="text" />
        </div>
        <button type="submit">btn</button>
      </Form>
    </div>
  )
}

export default Edit
