import React from "react";
import AddTodoForm from "./AddTodoForm";

interface sectionProps {
  handleAddTodo: (todoText: string) => void
}

const Section: React.FC<sectionProps> = ({handleAddTodo}) => {
  return (
    <section className="bg-[#F7DCB9] border-l-2 border-[#B5C18E] col-[2/3] row-[2/3] pt-2 px-2">

      <AddTodoForm   handleAddTodo={handleAddTodo}  />
    </section>
  );
}

export default Section;




