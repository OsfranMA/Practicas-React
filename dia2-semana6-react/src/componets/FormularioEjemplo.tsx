import { useState } from "react";

function FormularioEjemplo() {
    const [texto, setTexto] = useState<string>("");

    return (
        <div style={{ backgroundColor: '#3183ac4b', padding: '1rem', margin: '0 1rem', borderRadius: '1rem' }}>
            <h3>Ejemplo de Input Controlado</h3>
            
            <input 
                type="text" 
                value={texto} 
                onChange={(e) => setTexto(e.target.value)} 
                placeholder="Escribe algo..."
                style={{ padding: '0.5rem', borderRadius: '4px', border: '1px solid #ccc' }}
            />
            
            <p>Lo que estás escribiendo: {texto}</p>
        </div>
    );
}

export default FormularioEjemplo;