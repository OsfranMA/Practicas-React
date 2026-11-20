"use client";

import { useState } from "react";
import { Producto } from "../types/productos";
import CardProducto from "../components/CardProducto";

interface FiltrosProductosProps {
  productos: Producto[];
}

const CATEGORIAS = [
  { label: "Todos", value: "todos" },
  { label: "Electrónica", value: "electronics" },
  { label: "Joyería", value: "jewelery" },
  { label: "Ropa Hombre", value: "men's clothing" },
  { label: "Ropa Mujer", value: "women's clothing" },
];

export default function FiltrosProductos({ productos }: FiltrosProductosProps) {
  const [busqueda, setBusqueda] = useState("");
  const [categoriaActiva, setCategoriaActiva] = useState("todos");

  const productosFiltrados = productos.filter((producto) => {
    const coincideNombre = producto.title
      .toLowerCase()
      .includes(busqueda.toLowerCase());

    const coincideCategoria =
      categoriaActiva === "todos" || producto.category === categoriaActiva;

    return coincideNombre && coincideCategoria;
  });

  return (
    <div>
      <nav
        aria-label="Categorías de productos"
        style={{ display: "flex", flexWrap: "wrap", gap: "8px", marginBottom: "16px" }}
      >
        {CATEGORIAS.map((cat) => {
          const estaActiva = categoriaActiva === cat.value;
          return (
            <button
              key={cat.value}
              type="button"
              onClick={() => setCategoriaActiva(cat.value)}
              style={{
                padding: "8px 14px",
                borderRadius: "8px",
                border: "1px solid #3f3f46",
                cursor: "pointer",
                backgroundColor: estaActiva ? "#8b5cf6" : "#18181b",
                color: "#ffffff",
                fontWeight: estaActiva ? "600" : "400",
              }}
            > 
              {cat.label}
            </button>
          );
        })}
      </nav>

      <input
        type="text"
        value={busqueda}
        onChange={(e) => setBusqueda(e.target.value)}
        placeholder="Buscar producto por nombre..."
        style={{
          width: "100%",
          maxWidth: "380px",
          padding: "10px 14px",
          borderRadius: "8px",
          border: "1px solid #3f3f46",
          backgroundColor: "#18181b",
          color: "#f4f4f5",
          marginBottom: "24px",
        }}
      />

      {productosFiltrados.length === 0 ? (
        <p style={{ color: "#9ca3af" }}>
          No hay productos que coincidan con &ldquo;{busqueda}&rdquo; en esta categoría.
        </p>
      ) : (
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(240px, 1fr))",
            gap: "20px",
          }}
        >
          {productosFiltrados.map((producto) => (
            <CardProducto key={producto.id} producto={producto} />
          ))}
        </div>
      )}
    </div>
  );
}