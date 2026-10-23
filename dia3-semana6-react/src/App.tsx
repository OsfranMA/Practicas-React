import PanelPrivacidad from './components/PanelPrivacidad'
import DetallesOculto from './components/DetallesOculto'
import EjemploClase from './components/EjemploClase'
import './App.css'

function App() {
  return (
    <>
      <div style={{backgroundColor: '#292929'}}>
        <h1>Dia 3 semana 6 react</h1>
        <p>Proceso</p>
        <br />
        <EjemploClase />
        <br />
        <DetallesOculto />
        <br />
        <PanelPrivacidad 
        nombre='Felipe Anderson'
        id={13783}
        />
        <br />
        <PanelPrivacidad 
        nombre='Rodrigo Hernandez'
        id={1283}
        descripcion='Hola soy nuevo SALUDITOS GENTE :)'
        />
      </div>
    </>
  )
}

export default App
