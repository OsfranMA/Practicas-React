import { useState } from "react";

function ControlStock() {
    const [calculo, estado] = useState(10);

    const incrementoSuma = () => {
        estado(calculo + 1);
    };
    const descrementoResta = () => {
        estado(calculo > 0 ? calculo - 1 : 0);
    };
    return (
        <div style={{backgroundColor: '#48c33858', color: '#f2f2f2', margin: '0 2rem', padding: '1.2rem', borderRadius: '1rem'}}>
            <h1 style={{textAlign: 'center'}}>Ejercicio 1</h1>
            <h3>Monitor 24 pulgadas</h3>
            <p>Modificar Stock</p>
            <p style={{color: '#a19c9c', fontSize: '1.2rem', marginBottom: '1rem'}}>{calculo}</p>
            <button onClick={incrementoSuma} style={{padding: '7px 9px', backgroundColor: '#2ec950', border: 'none', borderRadius: '4px'}}>
                Incrementar+
            </button>
            <button onClick={descrementoResta} style={{padding: '7px 9px', backgroundColor: '#c92e2e', border: 'none', borderRadius: '4px'}}>
                descrementar-
            </button>
        </div>
    );
};

export default ControlStock;