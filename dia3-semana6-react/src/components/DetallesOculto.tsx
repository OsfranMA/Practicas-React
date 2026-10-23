import { useState } from "react";

function DetallesOculto() {
    const [biografia, setBiografia] = useState<boolean>(false)

    return (
        <div style={{backgroundColor: '#5526b44b', padding: '1rem', margin: '0 1rem', borderRadius: '1rem'}}>
            <h1>Ejercicio 1</h1>
            <h2>Biografia</h2>
            <button onClick={() => setBiografia(!biografia)}>
                {biografia ? 'Ocultar Biografia' : 'Mostrar Biografia'}
            </button>
            {biografia && (
                <>
                <h3>Biografía de Aurelia Vance (1988 - Presente)</h3>
                <h4>Botánica Forense y Exploradora Subterránea</h4>
                <p>Aurelia Vance es una reconocida botánica forense y especialista en ecosistemas ocultos, mundialmente famosa por descubrir la Pluma de Plata, un hongo luminiscente capaz de neutralizar toxinas en ambientes subterráneos, y por su constante colaboración con la Interpol en la resolución de crímenes ambientales.</p>
                </>
            )}
        </div>
    )
}

export default DetallesOculto;