import { useTemporizadorRegresivo } from "../hooks/useTemporizadorRegresivo";

function TemporizadorRegresivo() {
    const { segundosRestantes, activo, iniciar, reiniciar } = useTemporizadorRegresivo();

    return (
        <div style={{ backgroundColor: '#2d3748', color: '#fff', borderRadius: '1rem', margin: '0 1rem', padding: '1rem', textAlign: 'center' }}>
            <h2>Temporizador de Enfoque (60s)</h2>
            <p style={{ fontSize: '2.5rem', fontWeight: 'bold' }}>{segundosRestantes}s</p>
            
            <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', marginTop: '1rem' }}>
                <button 
                    onClick={iniciar} 
                    disabled={activo || segundosRestantes === 0}
                    style={{ backgroundColor: activo ? '#718096' : '#319795', color: '#fff', border: 'none', padding: '10px 15px', borderRadius: '5px', cursor: 'pointer' }}
                >
                    {activo ? "En Marcha..." : "Iniciar"}
                </button>

                <button 
                    onClick={reiniciar}
                    style={{ backgroundColor: '#e53e3e', color: '#fff', border: 'none', padding: '10px 15px', borderRadius: '5px', cursor: 'pointer' }}
                >
                    Reiniciar
                </button>
            </div>
        </div>
    );
}

export default TemporizadorRegresivo;