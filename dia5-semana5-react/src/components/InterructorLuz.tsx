import { useState } from 'react';

function InterruptorLuz() {
  const [encendido, setEncendido] = useState<boolean>(false);

  return (
    <div style={{backgroundColor: encendido ? '#f2f4f476' : '#3837375e', margin: '0 1rem', borderRadius: '1rem', padding: '1rem'}}>
        <h1>Ejemplo</h1>
        <h2>Interructor de Luz</h2>
      <p style={{
        backgroundColor: encendido ? '#e7e9e9' : '#525252',
      }}>El foco está: {encendido ? '💡 Encendido' : '🌑 Apagado'}</p>

      <button onClick={() => setEncendido(!encendido)}>
        {encendido ? 'Apagar' : 'Encender'}
      </button>
    </div>
  );
}

export default InterruptorLuz;