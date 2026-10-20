import { useState } from "react";

function BuscadorEjemplo() {
  // 1. La memoria donde guardaremos lo que el usuario escribe
  const [textoBusqueda, setTextoBusqueda] = useState("");

  return (
    <div style={{padding: '2rem', backgroundColor: '#cf333363', margin: '0 1.2rem', borderRadius: '1rem'}}>
      <h2>Buscador en Vivo</h2>
      
      {/* 2. Nuestro input espía */}
      <input 
        type="text" 
        placeholder="Escribe algo aquí..."
        value={textoBusqueda} // El input siempre muestra lo que diga nuestro estado
        onChange={(evento) => {
          // 3. Capturamos la letra exacta que acaba de teclear y actualizamos la memoria
          setTextoBusqueda(evento.target.value);
        }} 
      />

      {/* 4. Vemos el resultado en tiempo real */}
      <p>Estás buscando: <b>{textoBusqueda}</b></p>
    </div>
  );
}

export default BuscadorEjemplo;