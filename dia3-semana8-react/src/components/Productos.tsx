import { useState } from "react";
import { useProductos } from "../hooks/useProductos";

function Producto() {
    const [buscador, setBuscador] = useState(``)
    const {data, cargando, error} = useProductos('');
    if (cargando) {
        return <div style={{fontWeight: "bold", fontSize: '2rem', textAlign: 'center'}}><p>Cargando...</p></div>
    } else if (error) {
        return <div style={{fontWeight: "bold", fontSize: '2rem', textAlign: 'center', color: 'hsla(0, 51%, 44%, 0.93)'}}><p>{error}</p></div>
    }
    const productosFiltrados = data.filter((p) => 
    p.title.toLowerCase().includes(buscador.toLowerCase())
    );
    return (
        <div style={{backgroundColor: '#096f483b', margin: '0 1rem', padding: '1rem', borderRadius: '1rem'}}>
            <h1>Tienda Online</h1>
            <p>Buscador de Productos:</p>
            <input
             type="text" 
             value={buscador}
             onChange={(e) => setBuscador(e.target.value)}
             placeholder="Buscar Productos"
            />
            <div style={{margin: '0.8rem', display: 'flex', justifyContent: 'center', flexFlow: "wrap", gap: '1rem'}}>
                {productosFiltrados.length === 0 ? (
                    <p>No se encontraron productos con ese nombre.</p>
                ) : (
                    productosFiltrados.map((p) => (
                        <div key={p.id} style={{ backgroundColor: '#fff', borderRadius: '12px', padding: '1rem', maxWidth: '250px', fontFamily: 'sans-serif', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}> 
                            <h2 style={{ fontSize: '1.15rem', margin: 0, color: '#111' }}>{p.title}</h2> 
                            <figure style={{ margin: 0, height: '150px', backgroundColor: '#fff', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden' }}> 
                                <img src={p.image} alt={p.title} style={{ maxHeight: '100%', maxWidth: '100%', objectFit: 'contain' }} /> 
                            </figure> 
                            <p style={{ fontSize: '0.85rem', margin: 0, color: '#333', lineHeight: '1.4' }}><b>Informacion:</b> {p.description}</p>  
                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: '0.85rem', fontWeight: 'bold' }}>
                                <span style={{ backgroundColor: '#096f4815', padding: '2px 8px', borderRadius: '12px', fontSize: '0.75rem', color: '#096f48' }}>{p.category}</span> 
                                <span style={{ fontSize: '1.1rem', color: '#096f48' }}>${p.price}</span> 
                            </div>
                        </div>
                    ))
                )}
            </div>
        </div>
    )
}

export default Producto;