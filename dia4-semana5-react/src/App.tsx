import { useState } from "react";
import ListaProductos from './componets/ListaProductos'
import BuscadorEjemplo from './componets/BuscadorEjemplo'
import './App.css'

function App() {
  const [acumulador, setAcumulador] =useState(0);

  const sumarCarrito = () => {
    setAcumulador(acumulador + 1);
  }



  return (
    <>
      <div style={{backgroundColor: '#3f3d3d'}}>
        <h1>Dia 4 semana 5 react</h1>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Soluta tempora nemo laborum aut quo neque debitis id iure, cum tempore quis?</p>
        <br />
        <BuscadorEjemplo />
        <br />
        <section style={{backgroundColor: '#39d7a244', padding: '1.2rem', margin: '0 1.2rem', borderRadius: '1rem'}}>
            <h1>Ejercicio 1</h1>
            <h2>Tienda Online</h2>
            <p style={{marginBottom: '0.7em'}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi, distinctio expedita. Voluptatum, mollitia.</p>
            <p><b>Total Acumulado:</b>{acumulador}</p>
            <ListaProductos
            onAcumulador={sumarCarrito}
            />
        </section>
        <br />
        <section>
          
        </section>
      </div>
    </>
  )
}

export default App
