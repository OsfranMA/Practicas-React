import { useCuentaAtras } from "../hooks/useCuentaAtras";

function Temporizador() {

    const { segundos, estadoTem, detenerTem, reiniciarTem } = useCuentaAtras();
    return (
        <div style={{backgroundColor: '#948e8e', margin: '0 1rem', borderRadius: '1rem', padding: '1rem'}}>
            <h1 style={{padding: '0.5em', borderBottom: '3px solid #ffffff', margin: '0.8em'}}>Temporizador</h1>
            <section>
                <h3>{segundos} Segundos</h3>
                <div style={{display: 'flex', gap: '1rem', justifyContent: 'center'}}>
                    <button style={{backgroundColor: '#31ca5f', border: 'none', padding: '10px 8px'}} onClick={detenerTem}>{estadoTem ? 'Detener' : 'Activar'}</button>
                    <button style={{backgroundColor: '#ca3131', border: 'none', padding: '10px 8px'}} onClick={reiniciarTem}>Reiniciar Contador</button>
                </div>
            </section>
        </div>
    )
}

export default Temporizador;