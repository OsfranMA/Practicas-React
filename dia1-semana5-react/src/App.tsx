import './App.css'
import EmpleadoCard from './components/EmpleadoCard'
import ProductoCard from './components/ProductoCard'

function App() {
  return (
    <>
      <h1>Dia 1 Semana 5 React</h1>
      <p style={{fontSize: '1rem'}}>Practicas React:</p>
      <br />
      <EmpleadoCard
      nombre='Eduardo Cerezo'
      puesto='Ingeniero de Datos'
      edad={26}
      activo={true}
      />
      <br />
      <EmpleadoCard
      nombre='Borja Baloteli'
      puesto='Ingeniero de DevOps'
      edad={21}
      activo={false}
      />
      <br />
      <ProductoCard 
      nombre='Phone 11 pro'
      precio={10999.87}
      enStock={true}
      categoria='Tecnologia'
      />
      <br />
      <ProductoCard 
      nombre='Televisor'
      precio={14998.99}
      enStock={false}
      categoria='Tecnologia'
      />
    </>
  )
}

export default App
