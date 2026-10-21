import { useState } from "react";

function FormularioNombre() {
    const [forText, setForText] = useState<string>('')
    
    return (
        <div style={{backgroundColor: '#31ac4e4b', padding: '1rem', margin: '0 1rem', borderRadius: '1rem'}}>
            <h1>Ejercicio 1</h1>
            <h2>Formulario de Reguistro</h2>
            <input
             type="text" 
             value={forText}
             placeholder="Escribe tu Nombre.."
             onChange={(e) => setForText(e.target.value)}
            />
            <p>Hola Bienvenido {forText}</p>
            
        </div>
    )
}

export default FormularioNombre