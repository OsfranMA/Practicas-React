import { useState } from "react";

function ToggleMensaje() {
    const [estadoText, setEstadoText] = useState<boolean>(true);

    return (
        <div style={{backgroundColor: '#31aca06d', padding: '1rem', margin: '0 1rem', borderRadius: '1rem'}}>
            <h1>Ejercicio 2</h1>
            <h2>Estado de Texto</h2>
            <p>{estadoText ? 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus repellendus, odit veritatis illo, in eaque, et officiis at itaque tempora libero reiciendis dolorem deleniti omnis! Molestias porro nostrum iure voluptas nihil magnam vitae ducimus. Sapiente, odit!' : ''}</p>
            <button onClick={() => {setEstadoText(!estadoText)}}>{estadoText ? 'Ocultar Mensaje' : 'Mostrar Mensaje'}</button>
        </div>
    )
}

export default ToggleMensaje;