import React from "react";

function Header({todos}) {

const completedTodos = todos.filter((todo) => todo.isCompleted).length


  return (
    <header className="bg-[#914F1E]/80 border-b border-[#B5C18E] col-[1/3] row-[1/2] flex items-center justify-center p-2 text-sm text-[#B5C18E]/100">
      <p>
        <b  style={{ transition: "all 0.3s ease" }}>{completedTodos}</b> / {todos.length} Todos completed
      </p>
    </header>
  );
}

export default Header;
