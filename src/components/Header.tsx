import  { useContext } from "react";
import { todosContext } from "../contexts/TodosContextProvider";



function Header() {


const {todos} = useContext(todosContext)


  return (
    <header className="
    
    
    h-10 rounded-t-md
    
    bg-[#914F1E]/80 lg:h-full border-b md:border-[#B5C18E] md:col-[1/3] md:row-[1/2] flex items-center justify-center p-2 text-sm text-[#B5C18E]/100">
      <p>
        <b style={{ transition: "all 0.3s ease" }}>
          {todos.filter((todo) => todo.isCompleted).length}
        </b>{" "}
        / {todos.length} Todos completed
      </p>
    </header>
  );
}

export default Header;
