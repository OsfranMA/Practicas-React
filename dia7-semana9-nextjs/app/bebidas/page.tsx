import ListaBebidas from "./ListaBebidas";
import { Suspense } from "react";

export default function BebidasPage() {
    return (
        <>
        <main style={{ minHeight: "100vh", backgroundColor: "#121214", padding: "40px 20px", fontFamily: "system-ui, sans-serif" }}>
            <section style={{ maxWidth: "1200px", margin: "0 auto", display: "flex", flexDirection: "column", alignItems: "center" }}>
                <h1 style={{ fontSize: "2.8rem", color: "#ffffff", margin: "0 0 8px 0", fontWeight: "800", letterSpacing: "-0.5px", textAlign: "center" }}>
                    Menu de Bebidas
                </h1>
                <div style={{ width: "80px", height: "5px", backgroundColor: "#ff9f1c", borderRadius: "10px", marginBottom: "16px" }}></div>
                <p style={{ fontSize: "1.1rem", color: "#a0a0aa", margin: "0 0 40px 0", textAlign: "center" }}>Se precenta un apartado de todo tipo de bebidas:</p>
                
                <Suspense fallback={<p style={{ textAlign: "center", fontSize: "1.2rem", color: "#ff9f1c", fontWeight: "700", margin: "40px 0", letterSpacing: "0.5px" }}>✨ Preparando la barra (Cargando Bebidas...)</p>}>
                    <ListaBebidas />
                </Suspense>
            </section>
        </main>
        </>
    )
}
