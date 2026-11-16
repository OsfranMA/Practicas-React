import TarjetaProducto from "../components/TarjetaProducto";

export default function ProductosPage() {
  return (
    <div style={{ padding: '20px' }}>
      <h1>📦 Mi Inventario Real</h1>
      <p>Aquí estoy usando mis propios componentes de React dentro de Next.js:</p>
      
      {/* Usamos el componente con TypeScript */}
      <TarjetaProducto nombre="Laptop Gamer" precio={1200} />
      <TarjetaProducto nombre="Teclado Mecánico" precio={85} />
    </div>
  );
}