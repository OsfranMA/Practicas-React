import CalculadoraSimple from './componets/CalculadoraSimple'
import FormularioNombre from './componets/FormularioNombre'
import FormularioEjemplo from './componets/FormularioEjemplo'
import './App.css'

function App() {
  return (
    <>
      <main>
        <header>
          <h1>Dia 2 - Semana 6 REACT max</h1>
          <p><samp>Vamos Proactivo</samp></p>
        </header>
        <br />
        <FormularioEjemplo />
        <br />
        <FormularioNombre />
        <br />
        <CalculadoraSimple />
        <br />
      </main>
    </>
  )
}

export default App
