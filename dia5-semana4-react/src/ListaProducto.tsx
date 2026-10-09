import { useState } from "react";

function ListaProducto() {
    const [productos] = useState([
    { id: 1, nombre: 'Laptop Pro', precio: 1200 },
    { id: 2, nombre: 'Teclado Mecánico', precio: 80 },
    { id: 3, nombre: 'Monitor UltraWide', precio: 450 },
    ]);
    return (
        <div style={{backgroundColor: '#bd3e3e6f', borderRadius: '1rem', margin: '0 1rem', padding: '1rem'}}>
            <h1>Ejemplo</h1>
            <h2>Invetario de Productos</h2>

            {productos.map((produc): any => (
                <div key={produc.id} style={{backgroundColor: 'rgba(189, 62, 62, 0.48)', textAlign: 'start', padding: '1rem', borderRadius: '0.5em', marginBottom: '1rem'}}>
                    <h3>{produc.nombre}</h3>
                    <span>Precio: {produc.precio}</span>
                </div>
            ))}
        </div>
    );
};

export default ListaProducto