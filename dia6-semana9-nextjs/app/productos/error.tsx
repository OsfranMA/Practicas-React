"use client";

import { useEffect } from "react";

interface ErrorProps {
  error: Error & { digest?: string };
  reset: () => void;
}

export default function ProductosError({ error, reset }: ErrorProps) {
  useEffect(() => {
    console.error("Error en /productos:", error);
  }, [error]);

  return (
    <div
      style={{
        padding: "24px",
        borderRadius: "12px",
        border: "1px solid #ef4444",
        backgroundColor: "#2a1215",
        color: "#fecaca",
      }}
    >
      <h2 style={{ marginTop: 0 }}>Algo salió mal al cargar el catálogo</h2>
      <p>{error.message || "Ocurrió un error inesperado."}</p>
      <button
        type="button"
        onClick={() => reset()}
        style={{
          padding: "8px 16px",
          borderRadius: "8px",
          border: "none",
          backgroundColor: "#ef4444",
          color: "#ffffff",
          cursor: "pointer",
          fontWeight: "600",
        }}
      >
        Reintentar
      </button>
    </div>
  );
}