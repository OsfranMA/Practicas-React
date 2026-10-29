import { useState, useEffect } from "react";

function PanelControl() {
    const [brillo, setBrillo] = useState<number>(50);
    const [volumen, setVolumen] = useState<number>(30);

    useEffect(() => {
    }, [brillo]);

    useEffect(() => {
    }, [volumen]);

    return (
        <div style={{backgroundColor: '#2f94a154', margin: '0 1rem', borderRadius: '1rem', padding: '1rem'}}>
            <h2>Panel de Configuración</h2>
            <p>Brillo actual: {brillo}%</p>
            <button onClick={() => setBrillo(prev => prev + 10)}>Subir Brillo</button>

            <p>Volumen actual: {volumen}%</p>
            <button onClick={() => setVolumen(prev => prev + 5)}>Subir Volumen</button>
        </div>
    );
}

export default PanelControl;