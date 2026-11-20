import { Recetas } from "../types/recetas";

interface RecetasProp {
    recetas: Recetas;
};

export default function CardRecetas({recetas}: RecetasProp) {
    return (
        <div style={{ backgroundColor: "#ffffff", border: "1px solid #e0e6e0", borderRadius: "16px", padding: "24px", maxWidth: "340px", boxShadow: "0 4px 12px rgba(46,125,50,0.05)", fontFamily: "system-ui, sans-serif", display: "flex", flexDirection: "column", gap: "12px", transition: "transform 0.2s, boxShadow 0.2s" }}>
            <h2 style={{ fontSize: "1.4rem", color: "#2e7d32", margin: 0, fontWeight: "700", lineHeight: "1.2" }}>{recetas.strMeal}</h2>
            <figure style={{ margin: 0, width: "100%", height: "200px", borderRadius: "12px", overflow: "hidden" }}>
                <img src={recetas.strMealThumb} alt={recetas.strMeal} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
            </figure>
            <p style={{ fontSize: "0.95rem", color: "#424242", margin: 0, display: "-webkit-box", WebkitLineClamp: "3", WebkitBoxOrient: "vertical", overflow: "hidden", textOverflow: "ellipsis", lineHeight: "1.5" }}><b>Instrucciones:</b> {recetas.strInstructions}</p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "8px", marginTop: "auto", paddingTop: "8px", borderTop: "1px solid #f0f4f0" }}>
                <span style={{ fontSize: "0.8rem", backgroundColor: "#e8f5e9", color: "#2e7d32", padding: "4px 10px", borderRadius: "20px", fontWeight: "600" }}>{recetas.strCategory}</span>
                <span style={{ fontSize: "0.8rem", backgroundColor: "#f4f6f4", color: "#616161", padding: "4px 10px", borderRadius: "20px", fontWeight: "600" }}>📍 {recetas.strArea}</span>
            </div>
        </div>
    )
}
