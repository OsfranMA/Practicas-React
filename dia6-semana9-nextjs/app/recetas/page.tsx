import { Suspense } from "react";
import ListaRecetas from "./ListaRecetas";

export default function RecetasPage() {
    return (
        <>
        <main style={{ minHeight: "100vh", backgroundColor: "#f4f6f4", padding: "40px 20px", fontFamily: "system-ui, sans-serif" }}>
            <section style={{ maxWidth: "1200px", margin: "0 auto", display: "flex", flexDirection: "column", alignItems: "center" }}>
                <h1 style={{ fontSize: "2.8rem", color: "#1b5e20", margin: "0 0 8px 0", fontWeight: "800", letterSpacing: "-0.5px", textAlign: "center" }}>
                    Recetas Nacionales
                </h1>
                <div style={{ width: "80px", height: "5px", backgroundColor: "#2e7d32", borderRadius: "10px", marginBottom: "16px" }}></div>
                <p style={{ fontSize: "1.1rem", color: "#616161", margin: "0 0 40px 0", textAlign: "center" }}>Acontinuacion se precenta las recetas de todo tipo:</p>

                <Suspense fallback={<p style={{ textAlign: "center", fontSize: "1.2rem", color: "#2e7d32", fontWeight: "600", margin: "40px 0" }}>🔄 Cargando productos..</p>}>
                    <ListaRecetas/>
                </Suspense>
            </section>
        </main>
        </>
    )
}
