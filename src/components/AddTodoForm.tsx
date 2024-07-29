import React, { useContext, useState } from "react";
import Button from "./Button";
import { todosContext } from "../contexts/TodosContextProvider";



function AddTodoForm() {
  const [todoText, setTodoText] = useState("");
  const [error, setError] = useState("");

  const { handleAddTodo, todos } = useContext(todosContext);

  const onFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (todoText.trim() === "") {
      setError("Please enter a todo");
      return;
    } else if (todoText.trim().length > 45 || todoText.trim().length <= 2) {
      setError("Text is too long/short");
      return;
    } else if (todos.length === 15) {
      setError(`List is loo long`);
      setTodoText("");
      return;
    }
    handleAddTodo(todoText);
    setTodoText("");
    setError("");
    console.log(todos.length);
  };

  return (
    <form
      onSubmit={onFormSubmit}
      className="grow text-sm flex flex-col items-center space-y-4"
    >
      <h2 className="text-black/40 font-bold tracking-wider text-xl">
        Add Todo
      </h2>
      <input
        value={todoText}
        onChange={(e) => setTodoText(e.target.value)}
        type="text"
        className="h-10 w-full bg-white rounded-sm px-1 text-[#914F1E] border-none"
      />
      <Button>Add to list</Button>
      {error && <p className="text-red-500 text-xs mt-1">{error}</p>}
    </form>
  );
};

export default AddTodoForm;
