import SaludoPersonalizado from "./saludoPersonalizado";
import ProductoCard from "./ProductoCard";
import EmpleadoCard from "./EmpleadoCard";
import './App.css'

function App() {
  return (
    <div style={{margin: '1rem 5rem', backgroundColor: '#f2f2f2', borderRadius: '1rem', padding: '0.5em'}}>
      <h1 style={{textAlign: 'center'}}>Dia 3 de semana 4 del Plan</h1>
      {/* Saludo personalizado mediante un pronp */}
      <SaludoPersonalizado nombre='Ederson' curso='sin cursos actualmente' />
      <br />
      {/* Productos personalizados con occiones */}
      <ProductoCard nombre='Laptop HP' precio={'12,999.99'} enStock={false} />
      <ProductoCard nombre='Mochila' precio={200} enStock='12' />
      <br />
      {/* Tarjeta que muestra el perfil de un usuario */}
      <EmpleadoCard nombre='Anderson Ferreira' cargo='Ingeniero Industrial' experiencia={1.3} activo={true} />
      <EmpleadoCard nombre='Cesar Sibaja' cargo='Arquitecto' experiencia={5} activo={false} />
    </div>
  )
}

export default App