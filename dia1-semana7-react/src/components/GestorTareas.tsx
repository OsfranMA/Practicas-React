import { useState, useEffect } from 'react';

function GestorTareas() {
    const [tareasPendientes, setTareasPendientes] = useState(3);

    useEffect(() => {
        document.title = `Tienes ${tareasPendientes} tareas pendientes`;
        
        console.log("¡Me ejecuté porque las tareas cambiaron!");
    }, [tareasPendientes]); 

    return (
        <div style={{backgroundColor: '#70dc866f', padding: '2rem', margin: '1rem', borderRadius: '1rem' }}>
            <h1>Mis Tareas Pendientes: {tareasPendientes}</h1>
            <button 
                onClick={() => setTareasPendientes(tareasPendientes + 1)}
                style={{ padding: '10px 20px', cursor: 'pointer' }}
            >
                Añadir Tarea
            </button>
        </div>
    );
}

export default GestorTareas;