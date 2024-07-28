import React, { useContext } from "react"
import { todosContext } from "../contexts/TodosContextProvider"

interface buttonProps{
children: string
}

const Button: React.FC<buttonProps> =({children}) => {

  const {todos} = useContext(todosContext)

  return (
    <button  className="bg-[#B5C18E] w-full  h-10 rounded-sm text-black/70  hover:bg-[#dae9a9]/80 transition-all">
       {children}
      </button>
  )
}

export default Button