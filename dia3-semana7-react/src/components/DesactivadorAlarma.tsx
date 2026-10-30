import { useState, useEffect } from "react";

function DesactivadorAlarma() {
    const [segundosRestantes, setSegundosRestantes] = useState<number>(5);
    const [alarmaActiva, setAlarmaActiva] = useState<boolean>(true);

    useEffect(() => {
        const intervalo = setInterval(() => {
            setSegundosRestantes((prev) => {
                if (prev <= 1) {
                    setAlarmaActiva(false); 
                    return 0;
                }
                return prev - 1;
            }); 
        }, 1000);

        const manejarTeclado = (evento: KeyboardEvent) => {
            if (evento.code === "Space") {
                setAlarmaActiva(true);          
                setSegundosRestantes(5);        
            }
        };

        window.addEventListener("keydown", manejarTeclado);

        return () => {
            clearInterval(intervalo);
            window.removeEventListener("keydown", manejarTeclado);
        };
    }, []);

    return (
        <div style={{ backgroundColor: '#1c6f2b54', margin: '1rem', borderRadius: '1rem', padding: '1.5rem', fontFamily: 'sans-serif', color: '#fff' }}>
            <h1>Alarma de Seguridad</h1>
            <h2>Tiempo restante: {segundosRestantes} segundos</h2>

            {alarmaActiva ? (
                <div style={{ backgroundColor: '#9e252554', margin: '1rem', padding: '1rem', borderRadius: '0.5rem' }}>
                    <h3>🚨 ¡ALARMA ACTIVADA! 🚨</h3>
                    <p>¡Presiona la **Barra Espaciadora** para desactivarla antes de que sea tarde!</p>
                </div>
            ) : (
                <div style={{ backgroundColor: '#259e3b54', margin: '1rem', padding: '1rem', borderRadius: '0.5rem' }}>
                    <h3>✅ ¡Alarma Desactivada a tiempo!</h3>
                    <p>El sistema está seguro.</p>
                    <p>Preciona Espacio para activar</p>
                </div>
            )}
        </div>
    );
}

export default DesactivadorAlarma;