import { useContext } from "react"
import AddTodoForm from "./AddTodoForm"
import { todosContext } from "../contexts/TodosContextProvider"

function Section() {
  const {todos} = useContext(todosContext)

  
  
  return (
    <section className="bg-[#F7DCB9] border-l-2 border-[#B5C18E] col-[2/3] row-[2/3] pt-2 px-2">

      <AddTodoForm />

    </section>
  )
}

export default Section