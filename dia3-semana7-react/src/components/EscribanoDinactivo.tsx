import { useState, useEffect } from "react";

function EscribanoDinactivo() {
    const [estadoEscritura, setEstadoEscritura] = useState<string>('Esperando acción...');

    useEffect(() => {
        const inicarContador = () => {
            return setTimeout(() => {
                setEstadoEscritura('Esperando acción...');
            }, 3000);
        }

        let conteo = inicarContador();

        const manejarTexto = (evento: KeyboardEvent) => {
            setEstadoEscritura('✍️ Escribiendo en curso...');
            clearTimeout(conteo);
            conteo = inicarContador();
            evento;
        };

        window.addEventListener('keydown', manejarTexto);

        return () => {
            clearTimeout(conteo);
            window.removeEventListener('keydown', manejarTexto);
            console.log('Limpieza total');
        };
    }, []);
    
    return (
        <div style={{ backgroundColor: '#4f873054', margin: '1rem', borderRadius: '1rem', padding: '1.5rem', fontFamily: 'sans-serif' }}>
            <h1>Detector de Escritura</h1>
            <h3>Estado Actual</h3>
            <p>{estadoEscritura}</p>

        </div>
    )
}

export default EscribanoDinactivo;