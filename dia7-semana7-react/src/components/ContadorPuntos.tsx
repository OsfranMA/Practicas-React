import { useContadorPuntos } from "../hooks/useContadorPuntos";

function ContadorPuntos() {
    const {sumarPuntos, restarPuntos, segPuntos} = useContadorPuntos();
    return (
        <div style={{backgroundColor: '#9f47cf68', borderRadius:'1rem', margin: '0 1rem', padding: '1rem'}}>
            <h1>Suma y resta Puntos</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita possimus ipsa odit.</p>
            <span>Puntos: {segPuntos}</span>
            <div style={{display: 'flex', gap: '1rem', justifyContent: 'center', margin:'1rem' }}>
                <button onClick={sumarPuntos }>Sumar (+)</button>
                <button onClick={restarPuntos}>Restar (-)</button>
            </div>
        </div>
    )
}

export default ContadorPuntos;