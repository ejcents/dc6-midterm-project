"use client";

import React, { useEffect, useState } from "react";
// para mawala ang error issue nga wa ma define ang TodoCard sa pag import (quick fix sa vscode)
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { TodoCard } from "../components/card";

interface Todo {
  id: number;
  todo: string;
  completed: boolean;
}

export default function TodosPage() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchTodos = async () => {
      try {
        const res = await fetch("https://dummyjson.com/todos");
        const data = await res.json();
        setTodos(data.todos);
      // gi fix ang "err" kay mo error if wala ang comment sa ubos
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      } catch (err) {
        setError("Failed to fetch todos.");
      } finally {
        setLoading(false);
      }
    };

    fetchTodos();
  }, []);

  if (loading)
    return <p className="text-center capitalize text-gray-500 text-lg">loading todos...</p>;

  if (error)
    return <p className="text-center text-red-500 text-lg">{error}</p>;

  return (
    <div className="max-w-4xl mx-auto p-8">
      <h1 className="text-4xl font-extrabold capitalize text-center text-white mb-8">
        📝 to dos
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {todos.map((todo) => (
          <div
            key={todo.id}
            className={`p-5 rounded-lg shadow-lg transition-all transform hover:scale-105 ${
              todo.completed ? "bg-green-50 border-l-4 border-green-500" : "bg-red-50 border-l-4 border-red-500"
            }`}
          >
            <h2 className="text-lg font-semibold text-gray-900">{todo.todo}</h2>
            <span
              className={`text-xs font-bold px-3 py-1 rounded-full mt-2 inline-block ${
                todo.completed ? "bg-green-500 text-white" : "bg-red-500 text-white"
              }`}
            >
              {todo.completed ? "Completed" : "Pending"}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
