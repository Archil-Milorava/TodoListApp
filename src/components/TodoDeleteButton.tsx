import React from "react";
import { TiDeleteOutline } from "react-icons/ti";

type todoDeleteButtonProps = {
  onDelete:  (id: number ) => void,
}


const TodoDeleteButton:React.FC<todoDeleteButtonProps> = ({onDelete}: todoDeleteButtonProps) => {

  return <TiDeleteOutline className="text-xl text-[#914F1E] hover:text-[#d0844a] transition-all" onClick={(e) => {
    e.stopPropagation();
    onDelete()
  }} />;
}

export default TodoDeleteButton;
