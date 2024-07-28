import { useContext } from "react"
import AddTodoForm from "./AddTodoForm"
import { todosContext } from "../contexts/TodosContextProvider"

function Section() {
  const {todos} = useContext(todosContext)

  
  
  return (
    <section className="
    
    grow  flex flex-col  px-1 pt-4 
    
    
    bg-[#F7DCB9] md:border-l-2 md:border-[#B5C18E] md:col-[2/3] md:row-[2/3] md:pt-2 md:px-2">

      <AddTodoForm />

    </section>
  )
}

export default Section