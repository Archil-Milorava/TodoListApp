import { TiDeleteOutline } from "react-icons/ti";

function TodoDeleteButton({onDelete}) {

  return <TiDeleteOutline className="text-xl text-[#914F1E] hover:text-[#d0844a] transition-all" onClick={(e) => {
    e.stopPropagation();
    onDelete()
  }} />;
}

export default TodoDeleteButton;
