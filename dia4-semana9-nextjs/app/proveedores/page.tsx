import { Suspense } from "react";
import ListaProveedores from "./ListaProveedores";

export default function AppProveedores() {
  return (
    <div
      style={{
        backgroundColor: "#121214", // Un fondo general aún más oscuro para hacer resaltar las tarjetas
        minHeight: "100vh",
        color: "#f3f4f6", // Texto principal claro
        fontFamily: "system-ui, -apple-system, sans-serif",
        padding: "40px 20px",
      }}
    >
      <main
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
        }}
      >
        <h1 style={{ margin: "0 0 8px 0", fontSize: "2.5rem", fontWeight: "700", letterSpacing: "-1px", background: "linear-gradient(to right, #b07dff, #f3f4f6)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent"}}>Lista de Proveedores</h1>
        
        <p style={{ margin: "0 0 32px 0", color: "#9ca3af",  fontSize: "1.1rem",}}>Lista a continuación:</p>

        <Suspense fallback={<p style={{ color: "#a78bfa", fontSize: "1rem", fontStyle: "italic", animation: "pulse 2s infinite"}}>  🔄 Cargando Proveedores... </p>}>
          <ListaProveedores />
        </Suspense>
      </main>
    </div>
  );
}
