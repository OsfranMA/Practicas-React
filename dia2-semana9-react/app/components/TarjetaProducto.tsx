interface ProductoProps {
  nombre: string;
  precio: number;
}

export default function TarjetaProducto({ nombre, precio }: ProductoProps) {
  return (
    <div style={{ border: '1px solid #ccc', padding: '15px', borderRadius: '8px', margin: '10px 0' }}>
      <h3>{nombre}</h3>
      <p>Precio: ${precio}</p>
    </div>
  );
}