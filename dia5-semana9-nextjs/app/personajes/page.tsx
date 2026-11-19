import ListaPersonajes from "./ListaPersonajes";
import { Suspense } from "react";

export default function PersonajesPage() {
    return (
        <>
        <main style={{ minHeight: "100vh", backgroundColor: "#f8f9fa", padding: "40px 20px", fontFamily: "sans-serif" }}>
            <div style={{ textAlign: "center", marginBottom: "32px", maxWidth: "800px", margin: "0 auto 32px auto" }}>
                <h1 style={{ fontSize: "2.5rem", color: "#1a1a1a", marginBottom: "12px", fontWeight: "700", letterSpacing: "-0.5px" }}>Panel Administracion Personajes</h1>
                <p style={{ fontSize: "1.1rem", color: "#6c757d", margin: 0 }}>Buscar y consultar personajes en tiempo real:</p>
            </div>

            <Suspense fallback={<div style={{ textAlign: "center", fontSize: "1.2rem", color: "#6c757d", padding: "40px" }}>Cargando personajes...</div>}>
                <ListaPersonajes/>
            </Suspense>
        </main>
        </>
    )
}
