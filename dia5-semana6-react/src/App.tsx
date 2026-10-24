import ListaTareas from './components/ListaTareas'
import InventarioTienda from './components/InventarioTienda'
import ListaDinamicaEjemplo from './components/ListaDinamicaEjemplo'
import './App.css'

function App() {
  return (
    <>
      <main>
        <h1>Dia 5 semana 6 - react</h1>
        <p>Formulario para agregar productos</p>
        <br />
        <ListaDinamicaEjemplo />
        <br />
        <ListaTareas />
        <br />
        <InventarioTienda />
        <br />
      </main>
    </>
  )
}

export default App