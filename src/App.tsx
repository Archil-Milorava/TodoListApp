import Footer from "./components/Footer";
import Header from "./components/Header";
import Section from "./components/Section";
import TodoList from "./components/TodoList";

function App() {

  return (
    <div className="font-sans bg-[#b8c594] h-screen w-full flex flex-col items-center justify-center">
      <main className="

flex flex-col w-full h-full p-1
      
      lg:h-4/5 lg:w-1/2 lg:p-0  rounded-t-md lg:grid lg:grid-rows-[1fr,11fr] lg:grid-cols-[8fr,4fr] shadow-lg overflow-hidden
      ">
        <Header />
        <TodoList />
        <Section />
      </main>
      <Footer />
    </div>
  );
}

export default App;
