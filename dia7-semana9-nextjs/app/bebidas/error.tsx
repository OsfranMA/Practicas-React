'use client';

import { useEffect } from "react";

interface ErrorProp {
    error: Error & {digest?: string};
    reset: () => void;
};

export default function Error({error, reset}: ErrorProp) {
    useEffect(() => {
        console.error(`Error en /bebidas`, error);
    }, [error]);

    return (
        <div style={{ padding: "40px 20px", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", textAlign: "center", fontFamily: "system-ui, sans-serif" }}>
            <div style={{ backgroundColor: "#1e1e24", border: "1px solid #2a2a32", borderRadius: "16px", padding: "32px", maxWidth: "450px", boxShadow: "0 8px 24px rgba(0,0,0,0.4)" }}>
                <div style={{ fontSize: "3rem", marginBottom: "16px" }}>🚨🍹</div>
                <h2 style={{ fontSize: "1.45rem", color: "#ffffff", margin: "0 0 12px 0", fontWeight: "700" }}>Error: Algo salió mal con la barra</h2>
                <p style={{ fontSize: "0.9rem", color: "#ff9f1c", margin: "0 0 24px 0", backgroundColor: "#121214", padding: "12px", borderRadius: "8px", fontFamily: "monospace", borderLeft: "4px solid #ff9f1c", textAlign: "left", overflowX: "auto" }}>{error.message || 'Ocurrio un error inesperado'}</p>
                <button
                type="button"
                onClick={() => reset()}
                style={{ padding: "12px 24px", borderRadius: "24px", border: "none", backgroundColor: "#ff9f1c", color: "#121214", cursor: "pointer", fontSize: "1rem", fontWeight: "700", transition: "background-color 0.2s", boxShadow: "0 4px 12px rgba(255,159,28,0.2)" }}
                >
                    Intentar de nuevo
                </button>
            </div>
        </div>
    )
}
