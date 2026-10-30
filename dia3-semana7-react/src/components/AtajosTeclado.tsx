import { useState, useEffect } from "react";

function AtajosTeclado() {
    const [mensaje, setMensaje] = useState<string>(`Presiona 's' para guardar o 'e' para escapar`);
    const [contadorAccion, setContadorAccion] = useState<number>(0);

    useEffect(() => {
        const manejarKeypress = (evento: KeyboardEvent) => {

            if (evento.key === 's' ||evento.key === 'S') {
                setMensaje("¡Datos guardados con éxito en el sistema! 💾");
                setContadorAccion((prev) => prev + 1);
            } if (evento.key === 'e' ||evento.key === 'E') {
                setMensaje("⚠️ Operación cancelada por el usuario");
            }
        };

        window.addEventListener( 'keydown', manejarKeypress);

        return () => {
            window.removeEventListener( 'keydown', manejarKeypress);
            console.log('limpieza del sistema');
        };

    }, []);
    return (
        <div style={{ backgroundColor: '#1c546f54', margin: '1rem', borderRadius: '1rem', padding: '1.5rem', fontFamily: 'sans-serif' }}>
            <h1>Ajuste de Teclado</h1>
            <p>{mensaje}</p>
            <h4>Cantidad de veces precionada tecla: {contadorAccion}</h4>
        </div>
    )
}

export default AtajosTeclado;