import { useState, useEffect } from "react";

function EscuchaTecladoGlobal() {
    const [ultimaTecla, setUltimaTecla] = useState<string>("Ninguna");

    useEffect(() => {
        const manejarKeyPress = (evento: KeyboardEvent) => {
            setUltimaTecla(evento.key);
        };

        window.addEventListener("keydown", manejarKeyPress);

        return () => {
            window.removeEventListener("keydown", manejarKeyPress);
            console.log("[Limpieza]: Listener de teclado removido de la memoria.");
        };
    }, []);

    return (
        <div style={{ backgroundColor: '#76787954', margin: '1rem', borderRadius: '1rem', padding: '1.5rem', fontFamily: 'sans-serif' }}>
            <h2>Detector Global de Teclado (Día 3)</h2>
            <p>Presiona cualquier tecla en tu teclado en este preciso momento:</p>
            <h3 style={{ color: '#50a76c' }}>Última tecla pulsada: {ultimaTecla}</h3>
        </div>
    );
}

export default EscuchaTecladoGlobal;