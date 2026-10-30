import AtajosTeclado from './components/AtajosTeclado';
import EscudoInactividad from './components/EscudoInactividad';
import EscuchaTecladoGlobal from './components/EscuchaTecladoGlobal';
import EscribanoDinactivo from './components/EscribanoDinactivo';
import DesactivadorAlarma from './components/DesactivadorAlarma';
import './App.css'

function App() {
  return (
    <>
    <div style={{backgroundColor: '#2f2f2f'}}>
      <h1>Dia 3 semana 7 react</h1>
      <p>PSPSPSPSPSPSPSPSPSPSPSPSPSPPSPSSPSPSPP</p>
      <br />
      <EscuchaTecladoGlobal />
      <br />
      <AtajosTeclado />
      <br />
      <EscudoInactividad />
      <br />
      <EscribanoDinactivo />
      <br />
      <DesactivadorAlarma />
      <br />
    </div>
    </>
  )
}

export default App;