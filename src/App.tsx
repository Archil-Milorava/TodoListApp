import Header from "./components/Header";
import TodoList from "./components/TodoList";
import Section from "./components/Section";
import Footer from "./components/Footer";
import { useState } from "react";

function App() {
  const [todos, setTodos] = useState([]);

  const handleAddTodo = (todoText) => {
    setTodos((prev) => [
      ...prev,
      {
        id: prev.length ? prev[prev.length - 1].id + 1 : 1,
        text: todoText,
        isCompleted: false,
      },
    ]);
  };

  return (
    <div className="font-sans bg-[#98a37a] h-screen w-full flex flex-col items-center justify-center">
      <main className="h-4/5 w-1/2  rounded-t-md grid grid-rows-[1fr,11fr] grid-cols-[7fr,4fr] shadow-lg overflow-hidden ">
        <Header todos={todos} />
        <TodoList todos={todos} setTodos={setTodos} />
        <Section
          
          handleAddTodo={handleAddTodo}
        />
      </main>
      <Footer />
    </div>
  );
}

export default App;
