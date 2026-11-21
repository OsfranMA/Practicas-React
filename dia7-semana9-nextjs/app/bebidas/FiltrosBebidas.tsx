'use client';

import { Bebidas } from "../types/bebidas";
import { useState } from "react";
import CardBebidas from "../components/CardBebidas";

interface FiltrosBebidas {
    bebidas: Bebidas[];
};

const categorias = [
    {label: 'Todos', value: 'Todos'},
    {label: 'Ordinary Drink', value: 'Ordinary Drink'},
    {label: 'Cocktail', value: 'Cocktail'},
    {label: 'Shake', value: 'Shake'},
    {label: 'Cocoa', value: 'Cocoa'},
]

export default function FiltrosBebidas({bebidas}: FiltrosBebidas) {
    const [buscador, setBuscador] = useState('');
    const [estadoCategoria, setEstadoCategoria] = useState('Todos');

    const filtroBebidas = bebidas.filter((b) => {
        const coincideBuscador = b.strDrink.toLowerCase().includes(buscador.toLowerCase());

        const coincideCategoria = estadoCategoria === 'Todos' || b.strCategory === estadoCategoria;

        return coincideBuscador && coincideCategoria;
    });

    return (
        <div style={{ fontFamily: "system-ui, sans-serif", width: "100%" }}>
            <nav style={{ display: "flex", gap: "12px", marginBottom: "24px", flexWrap: "wrap", justifyContent: "center" }}>
                {categorias.map((bebi) => {
                    const categoriaActiva = estadoCategoria === bebi.value;
                    return (
                        <button
                        key={bebi.value}
                        type="button"
                        onClick={() => setEstadoCategoria(bebi.value)}
                        style={{ padding: "10px 20px", borderRadius: "24px", border: categoriaActiva ? "1px solid #ff9f1c" : "1px solid #2a2a32", backgroundColor: categoriaActiva ? "#ff9f1c" : "#1e1e24", color: categoriaActiva ? "#121214" : "#a0a0aa", cursor: "pointer", fontSize: "0.9rem", fontWeight: "700", transition: "all 0.2s ease", boxShadow: categoriaActiva ? "0 4px 12px rgba(255,159,28,0.25)" : "none" }}
                        >
                            {bebi.label}
                        </button>
                    )
                })}
            </nav>

            <input
             type="text"
             value={buscador}
             onChange={(e) => setBuscador(e.target.value)}
             placeholder="🍸 Buscar bebidas y cócteles..." 
             style={{ width: "100%", padding: "14px 20px", fontSize: "1rem", border: "1px solid #2a2a32", borderRadius: "12px", marginBottom: "32px", outline: "none", boxSizing: "border-box", backgroundColor: "#1e1e24", color: "#ffffff", transition: "border-color 0.2s" }}
            />

            {filtroBebidas.length === 0 ? (
                <p style={{ textAlign: "center", color: "#a0a0aa", fontSize: "1.1rem", marginTop: "40px" }}>No se encontraron bebidas o cócteles con ese nombre.</p>
            ) : (
                <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: "24px", justifyContent: "center", justifyItems: "center" }}>
                    {filtroBebidas.map((bebidas) => (
                        <CardBebidas key={bebidas.idDrink} bebida={bebidas}/>
                    ))}
                </div>
            )}
        </div>
    )
}
