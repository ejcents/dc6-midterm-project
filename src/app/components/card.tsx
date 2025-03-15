import React from "react";

interface Product {
  id: number;
  title: string;
  description: string;
}

interface Todo {
  id: number;
  todo: string;
  completed: boolean;
}

const ProductCard = ({ product }: { product: Product }) => {
  return (
    <div className="border rounded-xl shadow-lg p-5 bg-white hover:shadow-xl transition-shadow duration-300">
      <h2 className="text-2xl font-bold text-gray-800">{product.title}</h2>
      <p className="text-gray-600 mt-2">{product.description} </p>
    </div>
  );
};

const TodoCard = ({ todo }: { todo: Todo }) => {
  return (
    <div
      className={`border-l-4 p-5 rounded-xl shadow-lg bg-white hover:shadow-xl transition-shadow duration-300 ${
        todo.completed ? "border-green-500" : "border-red-500"
      }`}
    >
      <h2 className={`text-lg font-semibold ${todo.completed ? "text-green-600" : "text-red-600"}`}>
        {todo.completed ? "Completed" : "Not Completed"}
      </h2>
      <p className="text-gray-700 mt-2">{todo.todo}</p>
    </div>
  );
};

export { ProductCard, TodoCard };