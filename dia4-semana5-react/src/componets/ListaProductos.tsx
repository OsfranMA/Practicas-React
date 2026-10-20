import { useState } from "react";

interface ListaProductosProps {
    onAcumulador: () => void;
}

function ListaProductos({onAcumulador}: ListaProductosProps) {
    const listaProductos = [
      { id: 1, nombre: 'Laptop HP', precio: 12999.87, enStock: true, categoria: 'Tecnología' },
      { id: 2, nombre: 'Samsung Galaxy 24K', precio: 3000, enStock: false, categoria: 'Tecnología' },
      { id: 3, nombre: 'Monitor Dell 27"', precio: 4500.50, enStock: true, categoria: 'Tecnología' },
      { id: 4, nombre: 'Monitor Dell 20"', precio: 2700.50, enStock: true, categoria: 'Tecnología' }
    ];

    const [buscador, setBuscador] = useState('');

    const productosFiltrados = listaProductos.filter((product) => {
        return product.nombre.toLowerCase().includes(buscador.toLowerCase())
    })

    return (
            <div style={{display: 'flex', justifyContent: 'center', gap: '1rem', flexFlow: 'wrap'}}>

                <h2>Buscar Producto:</h2>
                <input 
                type="text" 
                value={buscador}
                placeholder="Buscar Producto..."
                onChange={(product) => {
                    setBuscador(product.target.value);
                }}
                />

                {productosFiltrados.length === 0 && (
                    <p>Upps! No encontramos ningun producto.</p>
                )}

            {productosFiltrados.map((product) => {
                return (
                    <div key={product.id} style={{backgroundColor: '#5bd0a952', padding: '1rem', margin: '0.5rem', borderRadius: '1rem'}}>
                        <h3>{product.nombre}</h3>
                        <p style={{fontSize: '0.7em'}}>{product.categoria}</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora culpa libero eius?</p>
                        <span style={{margin: '0 1rem'}}>{product.enStock ? 'En Stock' : 'No Stock'}</span><span>{product.precio}</span>
                        <p><button disabled={!product.enStock} onClick={onAcumulador} style={{display: 'inline-blobk', backgroundColor: product.enStock? '#28be37' : '#787171', border: 'none', borderRadius: '0.7em', padding: '8px 15px', color: '#fff'}}>{product.enStock ? 'Acumular..' : 'Producto no disponible'}</button></p>
                    </div>
                )
            })}
            </div>
    )
}

export default ListaProductos;