import TodoDeleteButton from "./TodoDeleteButton";



function TodoList({todos, setTodos}) {

  const toggleTodo = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, isCompleted: !todo.isCompleted } : todo
      )
    );
  };


  const deleteTodo = (id) => {
   
    setTodos(todos.filter((todo) => todo.id !== id ) )
  }

  return (
    <ul className="bg-[#F7DCB9] col-[1/2] row-[2/3]">
      {todos.map((todo) => (
        <li
          onClick={() => toggleTodo(todo.id)}
          key={todo.id}
          className=" h-12  flex justify-between px-2 items-center border border-b-[#B5C18E]   hover:bg-[#f6d1a0] transition-all cursor-pointer"
        >
          <p
            style={{ transition: "all 0.3s ease" }}
            className={`text-black/70 font-medium text-sm ${
              todo.isCompleted ? "line-through text-gray-400/60" : ""
            }`}
          >
            {todo.text}
          </p>
          <TodoDeleteButton onDelete={() => deleteTodo(todo.id)} />
        </li>
      ))}
    </ul>
  );
}

export default TodoList;
