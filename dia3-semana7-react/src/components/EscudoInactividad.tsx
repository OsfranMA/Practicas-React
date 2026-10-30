import { useState, useEffect } from "react";

function EscudoInactividad() {
    const [isActivo, setIsActivo] = useState<boolean>(true);

    useEffect(() => {
        const iniciarTemporizador = () => {
            return setTimeout(() => {
                setIsActivo(false);
            }, 5000); 
        };

        let temporizador = iniciarTemporizador();

        const manejoTeclado = (evento: KeyboardEvent) => {
            setIsActivo(true); 
            evento
            clearTimeout(temporizador);
            temporizador = iniciarTemporizador(); 
        };

        window.addEventListener('keydown', manejoTeclado);

        return () => {
            window.removeEventListener('keydown', manejoTeclado);
            clearTimeout(temporizador);
            console.log("Limpieza total de memoria y temporizadores");
        };
    }, []);

    return (
        <div style={{ backgroundColor: '#1c6f2b54', margin: '1rem', borderRadius: '1rem', padding: '1.5rem', fontFamily: 'sans-serif' }}>
            <h1>Escudo de Inactividad</h1>
            {isActivo ? (
              <div>
                <p style={{ fontSize: '1.2rem', color: '#50a76c' }}>🟢 Usuario Activo</p>
                <small>Presiona cualquier tecla para mantener el estado o deja de tocar el teclado para ver la alerta.</small>
             </div>
            ) : (
            <div>
                <p style={{ fontSize: '1.2rem', color: '#a75050' }}>🔴 Sesión en pausa por inactividad</p>
                <small>¡Has estado inactivo! Presiona cualquier tecla para volver a activar el sistema.</small>
            </div>
        )}
        </div>
    )
}

export default EscudoInactividad;