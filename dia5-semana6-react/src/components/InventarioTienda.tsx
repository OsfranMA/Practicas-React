import React, { useState } from "react";

interface ItemInventario {
    readonly id: number;
    nombre: string;
    precio: number | string;
};

function InventarioTienda() {
    const [itensInventario, setItensInventario] = useState({
        nombre: '',
        precio: ''
    })

    const [inventario, setInventario] = useState<ItemInventario[]>([]);

    const agregarInventario = (e: React.FormEvent) => {
        e.preventDefault();

        if (itensInventario.nombre.trim() === '') return;

        const nuevoIten: ItemInventario = {
            id: Date.now(),
            nombre: itensInventario.nombre,
            precio: itensInventario.precio
        };

        setInventario([...inventario, nuevoIten]);

        setItensInventario({nombre: '', precio: ''});
    }
    return (
        <div style={{ padding: '1rem', background: '#529c7c4d', color: '#fff', borderRadius: '1rem', margin: '0 1rem' }}>
            <h1 style={{borderBottom: '3px solid #83bcaf', paddingBottom: '0.5em'}}>Inventario</h1>
            <form onSubmit={agregarInventario} style={{margin: '1.5rem', padding: '0.3rem 5rem', backgroundColor: '#529c7c99', borderRadius: '1rem', display: 'flex', flexDirection: 'column', gap: '1rem'}}>
                <h3>Informacion del Producto:</h3>
                <input
                 type="text" 
                 placeholder="Agrega un producto..."
                 value={itensInventario.nombre}
                 onChange={(e) => setItensInventario({...itensInventario, nombre: e.target.value})}
                 style={{padding: '8px 15px', borderRadius: '0.5rem'}}
                />
                <input
                 type="number" 
                 placeholder="Agregar precio..."
                 value={itensInventario.precio}
                 onChange={(e) => setItensInventario({...itensInventario, precio: e.target.value})}
                 style={{padding: '8px 15px', borderRadius: '0.5rem'}}
                />
                <button style={{display: 'inline-block', cursor: 'pointer', padding: '8px 10px', backgroundColor: '#4ea59092', border: 'none', borderRadius: '1rem'}} type="submit">Agregar...</button>
            </form>
            <h2>Lista de Productos:</h2>
            <span>Total: {inventario.length}</span>
            <div style={{display: 'flex', flexFlow: 'wrap', margin: '0.5rem 1rem'}}>
            {inventario.map((prod) => (
                <div key={prod.id} style={{backgroundColor: '#e3e0e0', color: '#232323', borderRadius: '1rem', padding: '0.5em', margin: '0.7em'}}>
                    <h3>{prod.nombre}</h3>
                    <span>{prod.precio}</span>
                </div>
            ))}
            </div>
        </div>
    )
}

export default InventarioTienda;