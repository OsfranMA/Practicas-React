import { Producto } from "../types/productos";

interface CardProductoProps {
  producto: Producto;
}

export default function CardProducto({ producto }: CardProductoProps) {
  return (
    <article
      style={{
        border: "1px solid #2d2d38",
        borderRadius: "12px",
        padding: "16px",
        backgroundColor: "#1a1a20",
        color: "#f4f4f5",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        gap: "12px",
      }}
    >
      <div>
        <img
          src={producto.image}
          alt={producto.title}
          style={{
            width: "100%",
            height: "160px",
            objectFit: "contain",
            backgroundColor: "#ffffff",
            borderRadius: "8px",
            padding: "8px",
            marginBottom: "12px",
          }}
        />
        <span style={{ fontSize: "0.75rem", color: "#a78bfa", textTransform: "uppercase" }}>
          {producto.category}
        </span>
        <h2 style={{ fontSize: "1rem", margin: "6px 0" }}>{producto.title}</h2>
      </div>

      <p style={{ fontSize: "1.1rem", fontWeight: "700", margin: 0 }}>${producto.price}</p>
    </article>
  );
}