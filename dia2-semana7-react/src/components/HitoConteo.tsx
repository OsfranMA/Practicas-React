import { useState, useEffect} from "react";

function HitoConteo() {
    const [contador, setContador] = useState<number>(0);

    useEffect(() => {
        if (contador % 5 === 0) {
            alert(`🎉 ¡Hito alcanzado! El contador llegó a: ${contador}`)
        }
    }, [contador])
    
    return (
        <div style={{backgroundColor: '#76787954', margin: '0 1rem', borderRadius: '1rem', padding: '1rem'}}>
            <h1>Hito Conteo</h1>
            <p>Controla el incremento(+) y descremento(-)</p>
            <button style={{padding: '8px 8px', backgroundColor: '#50a76c79', fontSize: '1rem', borderRadius: '1rem', border: 'none', margin: '1rem', color: '#fff'}} onClick={() => setContador(prev => prev + 1)}>Incrementar</button>
            <span>Estado actual: {contador} {contador <= 1 ? 'click' : 'clicks'}</span>
            <button style={{padding: '8px 8px', backgroundColor: '#a7505079', fontSize: '1rem', borderRadius: '1rem', border: 'none', margin: '1rem', color: '#fff'}} onClick={() => setContador(prev => prev - 1)}>Descremento</button>
        </div>
    )
}

export default HitoConteo