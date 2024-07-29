import React, { createContext, useEffect, useState } from "react";

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

const defaultValue: TodosContextType = {
  todos: [],
  setTodos: () => {},
  handleAddTodo: () => {},
  toggleTodo: () => {},
  deleteTodo: () => {},
};

export const todosContext = createContext<TodosContextType>(defaultValue);

function TodosContextProvider({ children }: TodosContextProviderProps) {
  const todosFromLocalStorage = () => {
    const response = localStorage.getItem("todos");
    return response ? JSON.parse(response) : [];
  };

  const [todos, setTodos] = useState<Todo[]>(todosFromLocalStorage);

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
    setTodos((prev) =>
      prev.map((todo) =>
        todo.id === id ? { ...todo, isCompleted: !todo.isCompleted } : todo
      )
    );
  };

  const deleteTodo = (id: number) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  };

  // Side effects
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

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
