import { useContext } from "react";
import { todosContext } from "../contexts/TodosContextProvider";
import TodoDeleteButton from "./TodoDeleteButton";

function TodoList() {
  const { todos,  toggleTodo, deleteTodo } = useContext(todosContext);



  return (
    <ul
      className={
        
        `
        h-4/6
        
        bg-[#F7DCB9] lg:h-full lg:col-[1/2] lg:row-[2/3] lg:max-w-full ${
        todos.length > 10
          ? "overflow-y-auto scrollbar-thin scrollbar-thumb-[#914F1E]/50 scrollbar-track-[#f6d1a0]  "
          : ""
      }`}
    >
      {todos.length === 0 ? (
        <h1 className="mt-14 flex items-start justify-center h-full tracking-wide text-[#914F1E]/30 text-xl font-bold">
          What are you going to do?
        </h1>
      ) : (
        todos.map((todo) => (
          <li
            onClick={() => toggleTodo(todo.id)}
            key={todo.id}
            className=" h-12 m-w-full    flex justify-between px-2 items-center border border-b-[#B5C18E]   hover:bg-[#f6d1a0] transition-all cursor-pointer"
          >
            <p
              style={{ transition: "all 0.3s ease" }}
              className={`text-black/70 font-medium text-sm max-w-sm overflow-hidden  ${
                todo.isCompleted ? "line-through text-gray-400/60" : ""
              }`}
            >
              {todo.text}
            </p>
            <TodoDeleteButton id={todo.id} onDelete={() => deleteTodo(todo.id)} />
          </li>
        ))
      )}
    </ul>
  );
}

export default TodoList;
