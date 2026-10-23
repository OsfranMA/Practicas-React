import RegistroProducto from './components/RegistroProducto'
import RegistroUsuario from './components/RegistroUsuario'
import './App.css'

function App() {
  return (
    <>
     <div style={{backgroundColor: '#4c4c4c', padding: '1rem'}}>
      <h1>Dia 4 semana 6 - REACT</h1>
      <p>Zum Beispiel:</p>
      <br />
      <RegistroUsuario />
      <br />
      <RegistroProducto />
      <br />
     </div>
    </>
  )
}

export default App