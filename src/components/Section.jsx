import React from "react";
import AddTodoForm from "./AddTodoForm";

function Section({todos, setTodos}) {
  return (
    <section className="bg-[#F7DCB9] border-l-2 border-[#B5C18E] col-[2/3] row-[2/3] pt-2 px-2">

      <AddTodoForm todos={todos} setTodos={setTodos} />
    </section>
  );
}

export default Section;
