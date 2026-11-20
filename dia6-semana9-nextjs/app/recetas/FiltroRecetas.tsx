'use client'

import CardRecetas from "../components/CardRecetas";
import { Recetas } from "../types/recetas";
import { useState } from "react";

interface FiltroRecetasProp {
    recetas: Recetas[];
};

const categorias = [
    {label: 'Todos', value: 'todos'},
    {label: 'Chicken', value: 'Chicken'},
    {label: 'Seafood', value: 'Seafood'},
    {label: 'Beef', value: 'Beef'},
    {label: 'Dessert', value: 'Dessert'},
    {label: 'Pasta', value: 'Pasta'},
];

export default function FiltroRecetas({recetas}: FiltroRecetasProp) {
    const [buscador, setBuscador] = useState('');
    const [estadoCategoria, setEstadoCategoria] = useState('todos');
    
    const recetasFiltradas = recetas.filter((receta) => {
        const coincideNombre = receta.strMeal
        .toLocaleLowerCase().includes(buscador.toLocaleLowerCase());

        const coincideCategoria = estadoCategoria === 'todos' || receta.strCategory === estadoCategoria;

        return coincideNombre && coincideCategoria;
    })

    return (
        <div style={{ fontFamily: "system-ui, sans-serif", width: "100%" }}>
            <nav aria-label="Categorías de recetas" style={{ display: "flex", gap: "10px", marginBottom: "20px", flexWrap: "wrap", justifyContent: "center" }}>
                {categorias.map((cat) => {
                    const esActiva = estadoCategoria === cat.value
                    return (
                        <button
                        key={cat.value}
                        type="button"
                        onClick={(e) => setEstadoCategoria(cat.value)}
                        style={{ padding: "10px 18px", borderRadius: "24px", border: esActiva ? "1px solid #2e7d32" : "1px solid #e0e6e0", backgroundColor: esActiva ? "#2e7d32" : "#ffffff", color: esActiva ? "#ffffff" : "#424242", cursor: "pointer", fontSize: "0.9rem", fontWeight: "600", transition: "all 0.2s ease", boxShadow: esActiva ? "0 4px 10px rgba(46,125,50,0.2)" : "none" }}
                        >
                            {cat.label}
                        </button>
                    )
                })}
            </nav>

            <input
             type="text" 
             value={buscador}
             onChange={(e) => setBuscador(e.target.value)}
             placeholder="🔍 Buscar Recetas..."
             style={{ width: "100%", padding: "14px 20px", fontSize: "1rem", border: "2px solid #e0e6e0", borderRadius: "12px", marginBottom: "32px", outline: "none", boxSizing: "border-box", backgroundColor: "#ffffff", color: "#212121", transition: "border-color 0.2s" }}
            />

            {recetasFiltradas.length === 0 ? (
                <p style={{ textAlign: "center", color: "#616161", fontSize: "1.1rem", marginTop: "40px" }}>No se encontraron recetas deliciosas con esos criterios.</p>
            ) : (
                <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))", gap: "24px", justifyContent: "center", justifyItems: "center" }}>
                    {recetasFiltradas.map((r) => (
                        <CardRecetas key={r.idMeal} recetas={r} />
                    ))}
                </div>
            )}
        </div>
    )
}
