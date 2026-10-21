import Contador from './components/Contador'
import ToggleMensaje from './components/ToggleMensaje'
import InterruptorLuz from './components/InterructorLuz'
import './App.css'

function App() {
  return (
    <>
      <main>
        <header style={{backgroundColor: '#5a5555', padding: '1rem', marginBottom: '0.5em'}}>
          <h1>Dia 5 semana 5 react</h1>
        </header>
        <div>
          <p><samp>Practicas Acontinuacion:</samp></p>
        </div>
        <br />
        <InterruptorLuz />
        <br />
        <Contador />
        <br />
        <ToggleMensaje />
      </main>
    </>
  )
}

export default App
