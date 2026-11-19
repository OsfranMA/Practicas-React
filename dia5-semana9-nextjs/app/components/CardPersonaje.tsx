import { Personajes } from "../types/Personajes"; 

interface PersonajesProp { 
  personajes: Personajes; 
} 

export default function CardPersonaje({personajes}: PersonajesProp) { 
  return ( 
    <div style={{ border: "1px solid #e0e0e0", borderRadius: "12px", padding: "20px", maxWidth: "300px", boxShadow: "0 4px 6px rgba(0,0,0,0.1)", fontFamily: "sans-serif", textAlign: "center", backgroundColor: "#fff" }}> 
      <h2 style={{ fontSize: "1.5rem", color: "#333", margin: "0 0 12px 0" }}>{personajes.name}</h2> 
      <figure style={{ margin: "0 0 16px 0", padding: 0 }}> 
        <img src={personajes.image} alt={personajes.name} style={{ width: "100%", height: "auto", borderRadius: "8px", objectFit: "cover" }} /> 
      </figure> 
      <p style={{ margin: "4px 0", fontSize: "0.9rem", color: "#666", fontWeight: "bold" }}>Estado: {personajes.status}</p> 
      <p style={{ margin: "4px 0", fontSize: "0.9rem", color: "#666" }}>Especie: {personajes.species}</p> 
      <p style={{ margin: "4px 0", fontSize: "0.9rem", color: "#666" }}>Género: {personajes.gender}</p> 
    </div> 
  ) 
}
