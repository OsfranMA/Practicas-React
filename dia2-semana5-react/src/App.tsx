import ProductoCard from './componets/ProductoCard';
import FlashCard from './componets/FlashCard'
import './App.css'
import { useState } from "react";

function App() {
  const [aprendidas, setAprndidas] = useState(0);

  const sumarPuntos = () => {
    setAprndidas(aprendidas + 1);
  }  

  const [carrito, setCarrito] = useState(0);

  const sumarAcumulado = () => {
    setCarrito(carrito + 1);
  }

  return (
    <>
      <div style={{backgroundColor: '#1e1d1d', }}>
        <h1><u>Dia 2 semana 5 react</u></h1>
        <p>Practicas en breve:</p>
        <br />
        <section style={{backgroundColor: '#dbe9197d', color: '#fff', padding: '1rem', margin: '1rem', borderRadius: '1rem'}}>
          <h1>Ejemplo</h1>
          <h2>Tarjetas</h2>
          <p><b>Tarjetas Aprendidas:</b> {aprendidas} palabras aprendidas.</p>
          <FlashCard 
          palabra='Geradeaus'
          onAprender={sumarPuntos}
          />
        </section>
        <br />
        <section style={{backgroundColor: '#1bb57576', color: '#fff', padding: '1rem', margin: '1rem', borderRadius: '1rem'}}>
          <h1>Ejercicio 1</h1>
          <h2>Lista de Productos</h2>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iusto totam debitis animi, alias suscipit explicabo molestias, quibusdam consequatur dolorum nam pariatur? Ullam itaque in laboriosam.</p>
          <p>Articulos en el carrito: {carrito}</p>
          <ProductoCard 
          nombre='Laptop HP'
          precio={12999.87}
          enStock={true}
          categoria='Tecnologia'
          onAcumular={sumarAcumulado}
          />
        </section>
        <br />
        <section style={{backgroundColor: '#1bb57576', color: '#fff', padding: '1rem', margin: '1rem', borderRadius: '1rem'}}>
          <h1>Ejercicio 1</h1>
          <h2>Lista de Productos</h2>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iusto totam debitis animi, alias suscipit explicabo molestias, quibusdam consequatur dolorum nam pariatur? Ullam itaque in laboriosam.</p>
          <p>Articulos en el carrito: {carrito}</p>
          <ProductoCard 
          nombre='Sansumg Galaxi 24K'
          precio={3000}
          enStock={false}
          categoria='Tecnologia'
          onAcumular={sumarAcumulado}
          />
        </section>
      </div>
    </>
  )
}

export default App
