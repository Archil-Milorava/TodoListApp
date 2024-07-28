import React, { createContext, useState } from "react";

export type Todo = {
  id: number;
  text: string;
  isCompleted: boolean;
};

type TodosContextProviderProps = {
  children: React.ReactNode;
};

type TodosContextType = {
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
  handleAddTodo: (todoText: string) => void;
  toggleTodo: (id: number) => void;
  deleteTodo: (id: number) => void;
};

export const todosContext = createContext<TodosContextType>(null);

function TodosContextProvider({ children }: TodosContextProviderProps) {
  const [todos, setTodos] = useState<Todo[]>([]);

  const handleAddTodo = (todoText: string) => {
    setTodos((prev) => [
      ...prev,
      {
        id: prev.length ? prev[prev.length - 1].id + 1 : 1,
        text: todoText,
        isCompleted: false,
      },
    ]);
  };

  const toggleTodo = (id: number) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, isCompleted: !todo.isCompleted } : todo
      )
    );
  };

  const deleteTodo = (id: number) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <todosContext.Provider
      value={{
        todos,
        setTodos,
        handleAddTodo,
        toggleTodo,
        deleteTodo,
      }}
    >
      {children}
    </todosContext.Provider>
  );
}

export default TodosContextProvider;
