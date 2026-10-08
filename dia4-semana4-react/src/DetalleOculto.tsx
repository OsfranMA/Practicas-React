import { useState } from "react";

function DetalleOculto() {
    const [mostrar, setMostrar] = useState(false);

    const mensajeOculto: string = mostrar ? '¡Sorpresa! Este es el contenido secreto.' : '';

    const mostrarMensaje = () => {
        setMostrar(!mostrar)
    };
    return (
        <div style={{backgroundColor: '#38aac358', color: '#f2f2f2', margin: '0 2rem', padding: '1.2rem', borderRadius: '1rem'}}>
            <h1>Ejercicio 2</h1>
            <h3>Mensaje Oculto</h3>
            <p>{mensajeOculto}</p>
            <button onClick={mostrarMensaje} style={{fontSize: '1rem' ,padding: '7px 9px', backgroundColor: '#4894bc', border: 'none', borderRadius: '4px'}}>
                {mostrar ? 'ocultar detalles' : 'mostrar detalles'}
            </button>
        </div>
    )
}

export default DetalleOculto;