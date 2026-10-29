import MonitoreoSensores from './components/MonitoreoSensores'
import PanelControl from './components/PanelControl'
import HitoConteo from './components/HitoConteo'
import './App.css'

function App() {
  return (
    <div style={{backgroundColor: '#3e3d3d'}}>
      <h1>Dia 2 semana 7 react</h1>
      <p>Acoplecimiento:</p>
      <br />
      <PanelControl />
      <br />
      <MonitoreoSensores />
      <br />
      <HitoConteo />
      <br />
    </div>
  )
}

export default App
