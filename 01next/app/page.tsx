"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import todoService from "@/service/todoService.js";

export default function Home() {
  const [todos, setTodos] = useState([]);
  useEffect(() => {
    loadTodo();
  }, []);
  
  const loadTodo = async () => {
    const data = await todoService.getAllTodos();
    setTodos(data);
  }
  return (
    <div>
      <h1>Todo List</h1>
      <ul>
        {todos.map(todo => (
          <li key={todo.id}>{todo.title}</li>
        ))}
      </ul>
    </div>
  );
}
