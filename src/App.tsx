import Header from "./components/Header";
import TodoList from "./components/TodoList";
import Section from "./components/Section";
import Footer from "./components/Footer";
import { useContext, useState } from "react";
import { todosContext } from "./contexts/TodosContextProvider";



function App() {
 
  const {todos} = useContext(todosContext)

  return (
    <div className="font-sans bg-[#b8c594] h-screen w-full flex flex-col items-center justify-center">
      <main className="h-4/5 w-1/2  rounded-t-md grid grid-rows-[1fr,11fr] grid-cols-[7fr,4fr] shadow-lg overflow-hidden ">
        <Header  />
        <TodoList  />
        <Section/>
      </main>
      <Footer />
    </div>
  );
}

export default App;
