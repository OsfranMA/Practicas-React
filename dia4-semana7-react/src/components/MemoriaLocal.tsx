import { useState, useEffect } from "react";

function MemoriaLocal() {
    const [productos, setProductos] = useState<string[]>(() => {
        const datosGuardados = localStorage.getItem("inventario_local");
        
        if (datosGuardados !== null) {
            try {
                return JSON.parse(datosGuardados) as string[];
            } catch (error) {
                console.error("Error al leer el localStorage:", error);
                return [];
            }
        }
        
        return ["Perfume 212 VIP Black", "Refresco de la pulpería"];
    });

    const [inputTexto, setInputTexto] = useState<string>("");

    useEffect(() => {
        localStorage.setItem("inventario_local", JSON.stringify(productos));
    }, [productos]);

    const manejarEnvio = (e: React.FormEvent) => {
        e.preventDefault();
        if (!inputTexto.trim()) return; 
        
        setProductos([...productos, inputTexto]);
        setInputTexto("");
    };

    const limpiarStorage = () => {
        localStorage.removeItem("inventario_local");
        setProductos([]);
    };

    return (
        <div style={{ backgroundColor: '#2d3748', color: '#fff', margin: '1rem', borderRadius: '1rem', padding: '1.5rem', fontFamily: 'sans-serif' }}>
            <h2>📦 Memoria Local (Directo en Componente)</h2>
            
            <form onSubmit={manejarEnvio} style={{ marginBottom: '1rem' }}>
                <input 
                    type="text" 
                    value={inputTexto} 
                    onChange={(e) => setInputTexto(e.target.value)}
                    placeholder="Ej. Perfume Versace Eros..."
                    style={{ padding: '0.5rem', marginRight: '0.5rem', borderRadius: '4px', border: 'none' }}
                />
                <button type="submit" style={{ padding: '0.5rem 1rem', cursor: 'pointer' }}>
                    Guardar Producto
                </button>
            </form>

            <h3>Lista de elementos en el navegador:</h3>
            <ul>
                {productos.map((prod, index) => (
                    <li key={index}>{prod}</li>
                ))}
            </ul>

            <button 
                onClick={limpiarStorage} 
                style={{ backgroundColor: '#e53e3e', color: '#white', border: 'none', padding: '0.5rem 1rem', borderRadius: '4px', cursor: 'pointer', marginTop: '1rem' }}
            >
                Borrar localStorage y Reiniciar
            </button>
        </div>
    );
}

export default MemoriaLocal;