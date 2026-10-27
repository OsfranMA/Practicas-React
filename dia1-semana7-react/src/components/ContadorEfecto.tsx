import {useState, useEffect} from "react";

function ContadorEfecto() {
    const [contadorEfec, setContadorEfec] = useState(0);

    useEffect(() => {
        document.title = `clicks ${contadorEfec}`;
    },[contadorEfec]);

    return (
        <div style={{backgroundColor: '#7e70dc6f', padding: '2rem', margin: '1rem', borderRadius: '1rem'  }}>
            <h1>Gestor Efectos</h1>
            <p style={{marginBottom: '0.5em'}}>Contador de clicks: {contadorEfec}</p>
            <button
            onClick={() => setContadorEfec(contadorEfec + 1)}
            style={{padding: '10px 15px', backgroundColor: '#6fc05b', borderRadius: '0.8em'}}
            >
                CLicks
            </button>
        </div>
    )
    
}

export default ContadorEfecto;