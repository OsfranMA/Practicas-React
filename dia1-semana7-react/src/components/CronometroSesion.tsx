import { useState, useEffect } from "react";

function CronometroSesion() {
    const [contadorSeg, setContadorSeg] = useState<number>(0);

    useEffect(() => {
        const intervalo = setInterval(() => {
            setContadorSeg((prev) => prev + 1)
        }, 1000)

        return () => {
            clearInterval(intervalo)
        }
    }, []);

    useEffect(() => {
        document.title = `Tiempo en sesión: ${contadorSeg}`;

    }, [contadorSeg]);
    
    return (
        <div style={{backgroundColor: '#a3e7796f', padding: '2rem', margin: '1rem', borderRadius: '1rem' }}>
            <h1>Contador de Sesión</h1>
            <p>Su tiempo es: {contadorSeg} segundos.</p>
        </div>
    )
}

export default CronometroSesion;