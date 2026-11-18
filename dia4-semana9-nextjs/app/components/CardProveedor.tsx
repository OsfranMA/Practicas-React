import { Proveedor } from "../types/Proveedor";

interface CardProveedorProps {
  proveedor: Proveedor;
}

export default function CardProveedor({ proveedor }: CardProveedorProps) {
  return (
    <div
      style={{ backgroundColor: "#1e1e24", color: "#f3f4f6",  padding: "24px", maxWidth: "320px", fontFamily: "system-ui, -apple-system, sans-serif", boxShadow: "0 4px 20px rgba(0, 0, 0, 0.2)", border: "1px solid #2d2d38", display: "flex", flexDirection: "column", gap: "12px"}}>
      <h2
        style={{ margin: "0 0 8px 0", fontSize: "1.5rem", fontWeight: "600", color: "#b07dff", letterSpacing: "-0.5px"}}>{proveedor.name}</h2>

        <p>{proveedor.phone}</p>

      <div style={{ display: "flex", flexDirection: "column", gap: "4px", marginTop: "8px" }}>
        <span style={{ fontSize: "0.9rem", color: "#9ca3af",  wordBreak: "break-all"}}> 📬 {proveedor.email}</span>
        
        <span style={{ fontSize: "0.9rem", color: "#a78bfa", fontWeight: "500", wordBreak: "break-all",}}>  🌐 {proveedor.website}</span>
      </div>
    </div>
  );
}
