import Header from "./components/Header";
import TodoList from "./components/TodoList";
import Section from "./components/Section";
import Footer from "./components/Footer";
import { useState } from "react";


const todosList = [
  {
    id: 1,
    text: "buy groceries",
    isCompleted: true,
  },
  {
    id: 2,
    text: "go to gym",
    isCompleted: false,
  },
  {
    id: 3,
    text: "watch movie",
    isCompleted: true,
  },
  {
    id: 4,
    text: "study",
    isCompleted: false,
  },
];

function App() {
  const [todos, setTodos] = useState(todosList);


  return (
    <div className="font-sans bg-[#B5C18E] h-screen w-full flex flex-col items-center justify-center">
      <main className="h-4/5 w-1/2  rounded-t-md grid grid-rows-[1fr,11fr] grid-cols-[7fr,4fr] shadow-lg overflow-hidden ">
        <Header todos={todos} />
        <TodoList todos={todos} setTodos={setTodos} />
        <Section />
      </main>
      <Footer />
    </div>
  );
}

export default App;
