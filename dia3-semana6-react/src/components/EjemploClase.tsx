import { useState } from "react";

function EjemploClase() {
    const [mostrarMensaje, setMostrarMensaje] = useState<boolean>(false);

    return (
        <div style={{backgroundColor: '#26b4a84b', padding: '1rem', margin: '0 1rem', borderRadius: '1rem'}}>
            <h1>Ejemplo</h1>
            
            <button onClick={() => setMostrarMensaje(!mostrarMensaje)}>
                {mostrarMensaje ? "Ocultar secreto" : "Mostrar secreto"}
            </button>

            {mostrarMensaje && (
                <p>🎉 ¡Sorpresa! Este texto solo aparece cuando el estado es verdadero.</p>
            )}
        </div>
    );
}

export default EjemploClase;