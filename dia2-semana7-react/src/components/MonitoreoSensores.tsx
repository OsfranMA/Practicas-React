import { useState, useEffect } from "react";

function MonitoreoSensores() {
    const [temperatura, setTemperatura] = useState(20);
    const [humedad, setHumedad] = useState(60);

    useEffect(() => {
        console.log(`Estado de la temperatura actual ${temperatura} ℃.`)
    },[temperatura]);

    useEffect(() => {
        console.log(`Estado de la humedad: ${humedad} %.`)
    }, [humedad]);

    return (
        <div style={{backgroundColor: '#76787954', margin: '0 1rem', borderRadius: '1rem', padding: '1rem'}}>
            <h1>Configuración Temperatura y Humedad:</h1>
            <p>Configurar <b>Temperatura:</b></p>
            <span style={{margin: '1rem'}}>{temperatura} ℃</span>
            <button style={{padding: '8px 8px', backgroundColor: '#50a76c79', fontSize: '1rem', borderRadius: '1rem', border: 'none', margin: '1rem', color: '#fff'}} disabled={temperatura === 100} onClick={() => setTemperatura(prev => prev + 1)}>+</button>
            <button style={{padding: '8px 8px', backgroundColor: '#a7505087', fontSize: '1rem', borderRadius: '1rem', border: 'none', color: '#fff'}} disabled={temperatura === -50} onClick={() => setTemperatura(prev => prev - 1)}>-</button>
            <p>Configurar <b>Humedad:</b></p>
            <span style={{margin: '1rem'}}>{humedad} %</span>
            <button style={{padding: '8px 8px', backgroundColor: '#50a76c79', fontSize: '1rem', borderRadius: '1rem', border: 'none', margin: '1rem', color: '#fff'}} disabled={humedad === 100} onClick={() => setHumedad(prev => prev + 1)}>+</button>
            <button style={{padding: '8px 8px', backgroundColor: '#a7505087', fontSize: '1rem', borderRadius: '1rem', border: 'none', color: '#fff'}} disabled={humedad === 0} onClick={() => setHumedad(prev => prev - 1)}>-</button>
        </div>
    )
}

export default MonitoreoSensores;