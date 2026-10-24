import { useState } from "react";

interface Producto {
    id: number;
    nombre: string;
}

function ListaDinamicaEjemplo() {
    const [nombreInput, setNombreInput] = useState<string>("");

    const [listaProductos, setListaProductos] = useState<Producto[]>([]);

    const agregarProducto = (e: React.FormEvent) => {
        e.preventDefault();

        if (nombreInput.trim() === "") return; 

        const nuevoItem: Producto = {
            id: Date.now(), 
            nombre: nombreInput
        };

        setListaProductos([...listaProductos, nuevoItem]);

        setNombreInput("");
    };

    return (
        <div style={{ padding: '1rem', background: '#3c3c804d', color: '#fff', borderRadius: '1rem', margin: '0 1rem' }}>
            <h2>Ejemplo: Lista Dinámica de Productos</h2>

            <form onSubmit={agregarProducto} style={{ marginBottom: '1rem' }}>
                <input 
                    type="text" 
                    placeholder="Nuevo producto..."
                    value={nombreInput}
                    onChange={(e) => setNombreInput(e.target.value)}
                    style={{ padding: '0.5rem', marginRight: '0.5rem', borderRadius: '4px' }}
                />
                <button type="submit" style={{ padding: '0.5rem 1rem', background: '#4f46e5', color: '#fff', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>
                    Añadir a la lista
                </button>
            </form>

            <h3>Inventario actual ({listaProductos.length} items):</h3>
            <ul>
                {listaProductos.map((prod) => (
                    <li key={prod.id} style={{ margin: '0.3rem 0', textDecoration: 'none' }}>
                        {prod.nombre}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default ListaDinamicaEjemplo;