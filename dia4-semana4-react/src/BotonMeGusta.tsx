import { useState } from "react";

function BotonMeGusta() {
    const [likes, setLikes] = useState(13);

    const incrementoLikes = () => {
        setLikes(likes + 1);
    };
    return (
        <div style={{backgroundColor: '#2a2a2a', color: '#f2f2f2', margin: '0 2rem', padding: '1.2rem', borderRadius: '1rem'}}>
            <h1 style={{textAlign: 'center'}}>Ejemplo</h1>
            <h3>Zapatillas Urbanas Pro</h3>
            <p>A 45 ingenieros en Madrid les gusta esto.</p>
      
            {/* Botón interactivo que reacciona al usuario */}
            <button onClick={incrementoLikes} style={{padding: '8px 10px', color: '#fff', backgroundColor: '#24d559', border: 'none', borderRadius: '3px'}}>
                ❤️ Me gusta ({likes})
            </button>
        </div>
    )
}

export default BotonMeGusta