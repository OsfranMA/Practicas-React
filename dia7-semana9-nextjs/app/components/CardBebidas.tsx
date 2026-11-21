import { Bebidas } from "../types/bebidas";

interface BebidasProp {
    bebida: Bebidas;
};

export default function CardBebidas({bebida}: BebidasProp) {
    return (
        <div style={{ backgroundColor: "#1e1e24", border: "1px solid #2a2a32", borderRadius: "16px", padding: "20px", maxWidth: "320px", boxShadow: "0 8px 24px rgba(0,0,0,0.3)", fontFamily: "system-ui, sans-serif", display: "flex", flexDirection: "column", gap: "14px", transition: "transform 0.2s, box-shadow 0.2s" }}>
            <h1 style={{ fontSize: "1.35rem", color: "#ffffff", margin: 0, fontWeight: "700", letterSpacing: "-0.3px", lineHeight: "1.3" }}>{bebida.strDrink}</h1>
            <figure style={{ margin: 0, width: "100%", height: "240px", borderRadius: "12px", overflow: "hidden", backgroundColor: "#121214" }}>
                <img src={bebida.strDrinkThumb} alt={bebida.strDrink} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
            </figure>
            <div style={{ display: "flex", gap: "8px", marginTop: "auto" }}>
                <span style={{ fontSize: "0.75rem", backgroundColor: "#ff9f1c", color: "#121214", padding: "6px 12px", borderRadius: "20px", fontWeight: "700", letterSpacing: "0.5px", textTransform: "uppercase" }}>{bebida.strCategory}</span>
                <span style={{ fontSize: "0.75rem", backgroundColor: "rgba(255,255,255,0.08)", color: "#a0a0aa", padding: "6px 12px", borderRadius: "20px", fontWeight: "600", border: "1px solid rgba(255,255,255,0.05)" }}>{bebida.strAlcoholic}</span>
            </div>
        </div>
    )
}
