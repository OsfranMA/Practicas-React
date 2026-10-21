import { useState } from "react";

function CalculadoraSimple() {
    const [num1, setNum1] = useState<number | string>();
    const [num2, setNum2] = useState<number | string>();

    return (
        <div style={{backgroundColor: '#ac31314b', padding: '1rem', margin: '0 1rem', borderRadius: '1rem'}}>
            <h1>Ejercicio 2</h1>
            <h2>Multiplicar</h2>
            
            <input
             type="number" 
             value={num1}
             placeholder="Escribe un numero"
             onChange={(e) => setNum1(Number(e.target.value))}
            />
            
            <input
             type="number" 
             value={num2}
             placeholder="Escribe un numero"
             onChange={(e) => setNum2(Number(e.target.value))}
            />
            
            {/* Mostramos el cálculo matemático instantáneo */}
            <p>Resultado de la multiplicación: {Number(num1) * Number(num2)}</p>
        </div>
    );
}

export default CalculadoraSimple;