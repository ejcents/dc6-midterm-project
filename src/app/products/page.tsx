import React from "react";
import { ProductCard } from "../components/card";

interface Product {
  id: number;
  title: string;
  description: string;
}

async function fetchProducts() {
  const res = await fetch("https://dummyjson.com/products");
  if (!res.ok) throw new Error("Failed to load products");
  const data = await res.json();
  return data.products;
}

export default async function ProductsPage() {
  let products: Product[] = [];

  try {
    products = await fetchProducts();
  // para mawala ang error issue nga wa ma define ang "error" sa try-catch (quick fix sa vscode)
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  } catch (error) {
    return <p className="text-center capitalize text-red-500">failed to load products.</p>;
  }

  return (
    <div className="max-w-6xl mx-auto p-6">
      <h1 className="text-4xl font-extrabold capitalize text-center mb-6">products</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}
