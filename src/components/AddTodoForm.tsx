import React, { useState } from "react";
import Button from "./Button";

interface AddTodoFormProps{
  handleAddTodo: (todoText: string) => void,

}

const  AddTodoForm: React.FC<AddTodoFormProps> = ({ handleAddTodo }) => {
  const [todoText, setTodoText] = useState("");
  const [error, setError] = useState("");

  const onFormSubmit = (e) => {
    e.preventDefault();
    if (todoText.trim() === "") {
      setError("Please enter a todo");
      return;
    } else if (todoText.trim().length > 45 || todoText.trim().length <= 2) {
      setError("Text is too long/short");
      return;
    }
    handleAddTodo(todoText);
    setTodoText("");
    setError("");
  };

  return (
    <form
      onSubmit={onFormSubmit}
      className="text-sm flex flex-col items-center gap-2"
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
      {error && <p className="text-red-500 text-xs mt-1">{error}</p>}
      <Button>Add to list</Button>
    </form>
  );
}

export default AddTodoForm;
