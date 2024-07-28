import React from "react";
import Button from "./Button";

function AddTodoForm() {
  return (
    <form className="text-sm    flex flex-col items-center gap-2">
      <h2 className="text-black/40 font-bold tracking-wider text-xl">
        Add Todo
      </h2>
      <input
        type="text"
        className="h-10 w-full bg-white rounded-sm px-1 text-[#914F1E] border-none"
      />
      <Button>Add to list</Button>
    </form>
  );
}

export default AddTodoForm;
