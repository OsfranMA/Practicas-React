import { useState } from "react";

function Contador() {
    const [contador, setContador] = useState<number>(0);

    const contadorClicks = () => {
        setContador(contador + 1)
    }
    
    const descremento = () => {
        if (contador === 0) {
            setContador(contador);
        } else {
            setContador(contador - 1)
        }
    }



    return (
        <div style={{backgroundColor: '#ac31316d', padding: '1rem', margin: '0 1rem', borderRadius: '1rem'}}>
            <h1>Ejercicio 1</h1>
            <h2>Contador de clicks</h2>
            <p>Cantidad de clicks: {contador}</p>
            <button onClick={contadorClicks} style={{margin: '1rem'}}>
                Aumentar Cantidad
            </button>
            <button onClick={descremento}>
                Descrementar Cantidad
            </button>

        </div>
    )
}

export default Contador;