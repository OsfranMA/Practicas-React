'use client';
import { useState } from "react";
import { Personajes } from "../types/Personajes";
import CardPersonaje from "../components/CardPersonaje";

interface BuscadorPersonajesProp {
    personajes: Personajes[];
}

export default function BuscadorPersonajes({personajes}: BuscadorPersonajesProp) {
    const [buscador, setBuscador] = useState(``);

    const fitradorBusqueda = personajes.filter((p) => 
    p.name.toLocaleLowerCase().includes(buscador.toLocaleLowerCase())
    )

    return (
        <div style={{ padding: "24px", maxWidth: "1200px", margin: "0 auto", fontFamily: "sans-serif" }}>
            <input
             type="text" 
             value={buscador}
             onChange={(e) => setBuscador(e.target.value)}
             placeholder="Buscar Personajes..."
             style={{ width: "100%", padding: "12px 16px", fontSize: "1rem", border: "2px solid #e0e0e0", borderRadius: "8px", marginBottom: "24px", outline: "none", boxSizing: "border-box", transition: "border-color 0.2s" }}
            />

            {fitradorBusqueda.length === 0 ? (
                <p style={{ textAlign: "center", color: "#666", fontSize: "1.1rem", marginTop: "40px" }}>No se encontraron personajes.</p>
            ) : (
                <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))", gap: "20px", justifyContent: "center" }}>
                    {fitradorBusqueda.map((personajes) => (
                        <CardPersonaje key={personajes.id} personajes={personajes} />
                    ))}
                </div>
            )}
        </div>
    )
}
