import React from "react";
import TodoDeleteButton from "./TodoDeleteButton";

type Todo = {
  id: number;
  text: string;
  isCompleted: boolean;
};

interface todoListProps {
  todos: Todo[]
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>
}


const TodoList:React.FC<todoListProps> = ({ todos, setTodos }) => {
  const toggleTodo = (id: number) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, isCompleted: !todo.isCompleted } : todo
      )
    );
  };

  const deleteTodo = (id: number) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <ul className={`bg-[#F7DCB9] col-[1/2] row-[2/3] max-w-full ${todos.length > 10 ? 'overflow-y-auto scrollbar-thin scrollbar-thumb-[#914F1E]/50 scrollbar-track-[#f6d1a0]  ' : ''}`}>
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
            <TodoDeleteButton onDelete={() => deleteTodo(todo.id)} />
          </li>
        ))
      )}
    </ul>
  );
}

export default TodoList;
