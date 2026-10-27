import CronometroSesion from './components/CronometroSesion'
import ContadorEfecto from './components/ContadorEfecto'
import GestorTareas from './components/GestorTareas'
import './App.css'

function App() {
  return (
    <>
      <main  style={{backgroundColor: 'rgb(52, 52, 53)'}}>
        <h1>Dia 1 Semana 7 REact</h1>
        <p>Practicas en breve:</p>
        <br />
        <GestorTareas />
        <br />
        <ContadorEfecto />
        <br />
        <CronometroSesion />
        <br />
      </main>
    </>
  )
}

export default App
