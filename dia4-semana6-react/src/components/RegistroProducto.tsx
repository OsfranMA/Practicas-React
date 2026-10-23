import { useState } from "react";

interface DatosProducto {
    nombre: string;
    precio: number | string;
    enStock: boolean;
}

function RegistroProducto() {

    const [productoData, setProductoData] = useState<DatosProducto>({
        nombre: '',
        precio: '',
        enStock: false,
    })
    
    return (
        <div style={{backgroundColor: '#768de73a',margin: '0 1rem',padding: '1rem', border: '1px solid #ccc', borderRadius: '1rem' }}>
            <h1>Registro Productos</h1>
            <h2>Formulario</h2>
            <label>
                Nombre del Producto:
                <input
                  type="text" 
                  value={productoData.nombre}
                  onChange={(e) => setProductoData({ ...productoData, nombre: e.target.value})}
                />
            </label>
            <br />
            <label>
                Precio:
                <input
                 type="number"
                 value={productoData.precio} 
                 onChange={(e) => setProductoData({...productoData, precio: e.target.value})}
                />
            </label>
            <br />
            <label>
                En Stock:
                <input
                 type="checkbox" 
                 checked={productoData.enStock}
                 onChange={(e) => setProductoData({...productoData, enStock: e.target.checked})}
                />
            </label>

            <div style={{backgroundColor: '#c8cfee3a', color: '#000'}}>
                <h3>Producto: {productoData.nombre}</h3>
                <p>Precio: {productoData.precio}</p>
                <p>Stock: {productoData.enStock ? 'Si' : 'No'}</p>
            </div>
        </div>
    )
}

export default RegistroProducto;