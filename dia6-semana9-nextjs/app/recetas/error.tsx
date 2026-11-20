'use client';

import { useEffect } from "react";

interface ErrorProp {
    error: Error & {digest?: string};
    reset: () => void;
}

export default function RecetasError({error, reset}: ErrorProp) {
    useEffect(() => {
        console.error('Error en /recetas', error);
    }, [error]);

    return (
        <div style={{ padding: "40px 20px", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", textAlign: "center", fontFamily: "system-ui, sans-serif" }}>
            <div style={{ backgroundColor: "#ffffff", border: "1px solid #e0e6e0", borderRadius: "16px", padding: "32px", maxWidth: "450px", boxShadow: "0 4px 12px rgba(0,0,0,0.05)" }}>
                <div style={{ fontSize: "3rem", marginBottom: "16px" }}>🍽️⚠️</div>
                <h2 style={{ fontSize: "1.5rem", color: "#212121", margin: "0 0 12px 0", fontWeight: "700" }}>Algo salió mal al intentar cargar las recetas</h2>
                <p style={{ fontSize: "0.95rem", color: "#616161", margin: "0 0 24px 0", backgroundColor: "#f4f6f4", padding: "12px", borderRadius: "8px", fontFamily: "monospace", borderLeft: "4px solid #2e7d32", textAlign: "left", overflowX: "auto" }}>
                    {error.message || `Ocurrió un error inesperado`}
                </p>
                <button
                onClick={() => reset()}
                type="button"
                style={{ padding: "12px 24px", borderRadius: "24px", border: "none", backgroundColor: "#2e7d32", color: "#ffffff", cursor: "pointer", fontSize: "1rem", fontWeight: "600", transition: "background-color 0.2s", boxShadow: "0 4px 10px rgba(46,125,50,0.2)" }}
                >
                    Intentar de nuevo
                </button>
            </div>
        </div>
    )
}
