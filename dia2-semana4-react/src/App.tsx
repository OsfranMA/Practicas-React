import TarjetaCurso from './tarjetaCurso';
import './App.css';
import Perfil from './Perfil';
import './App.css';

function App() {
  return (
    <div style={{padding: '10px', fontFamily: 'sans-serif', margin: '5px', backgroundColor: '#fff'}}>
      <h1 style={{color: '#000'}}>Inprementacion de tarjetaModulo</h1>
      <p style={{color: '#000'}}>Acontinuacion aparece el llamado en la siguiente fila.</p>

      {/* Implementacion */}
      <TarjetaCurso />
      <TarjetaCurso />
      <br />
      <h1 style={{textAlign: 'center', color: '#000'}}>Perfil Usuario</h1>

      {/* Perfil usuario implementado */}
      <Perfil />
    </div>
  );
};

export default App;