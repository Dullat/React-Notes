import { Form } from "react-router-dom"

const Root = () => {
  // const [notes, ]
  return (
    <>
      <div className="grid grid-cols-[2fr_5fr] h-dvh">
        <div className="bg-slate-600 p-4 flex gap-4 flex-col">
          <h1 className="mt-8 ml-2 text-3xl font-bold">Notes</h1>
          <div className="flex items-center">
            <input
              type="text"
              className="outline-none rounded-md"
              name=""
              id=""
            />
            <Form method="post">
              <button type="submit">New</button>
            </Form>
          </div>
        </div>
        <div className=""></div>
      </div>
    </>
  )
}

export default Root
