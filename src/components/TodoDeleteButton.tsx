import React from "react";
import { TiDeleteOutline } from "react-icons/ti";

type TodoDeleteButtonProps = {
  onDelete: (id: number) => void;
  id: number;
};

const TodoDeleteButton: React.FC<TodoDeleteButtonProps> = ({ onDelete, id }) => {
  return (
    <TiDeleteOutline
      className="text-xl text-[#914F1E] hover:text-[#d0844a] transition-all"
      onClick={(e) => {
        e.stopPropagation();
        onDelete(id);
      }}
    />
  );
};

export default TodoDeleteButton;
