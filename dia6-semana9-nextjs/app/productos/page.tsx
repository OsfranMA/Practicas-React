import { Suspense } from "react";
import ListaProductos from "./ListaProductos";

export default function ProductosPage() {
  return (
    <main
      style={{
        minHeight: "100vh",
        backgroundColor: "#121214",
        color: "#f4f4f5",
        fontFamily: "system-ui, sans-serif",
        padding: "40px 20px",
      }}
    >
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        <h1 style={{ margin: "0 0 8px 0" }}>Catálogo de Productos</h1>
        <p style={{ margin: "0 0 24px 0", color: "#9ca3af" }}>
          Filtra por categoría con un clic o busca por nombre.
        </p>

        <Suspense fallback={<p style={{ color: "#a78bfa" }}>🔄 Cargando productos...</p>}>
          <ListaProductos />
        </Suspense>
      </div>
    </main>
  );
}