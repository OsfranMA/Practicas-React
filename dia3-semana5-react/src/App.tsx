import ListaProductos from './components/ListaProductos';
import { useState } from "react";
import './App.css'

function App() {
  const listaPeliculas = [
    { id: 1, titulo: "Matrix", genero: "Ficción" },
    { id: 2, titulo: "Shrek", genero: "Comedia" },
    { id: 3, titulo: "Gladiador", genero: "Acción" }
  ];

  const [acumulado, setAcumulado] = useState(0);

  const sumarAcumulado = () => {
    setAcumulado(acumulado + 1)
  }

  return (
    <div style={{backgroundColor: '#3f3e3e'}}>
      <header style={{display: 'flex', justifyContent: 'space-around', backgroundColor: '#41b99bca', textAlign: 'center', padding: '1rem', marginBottom: '1rem'}}>
        <h1>Dia 3 semana 5 react</h1>
        <p>Practicas acontinuacion:</p>
      </header>
      <br />
      <section style={{backgroundColor: '#c239d744', padding: '1.2rem', margin: '0 1.2rem', borderRadius: '1rem'}}>
        <h1>Ejemplo</h1>
        <h2 style={{marginBottom: '0.8em'}}>Lista de peliculas Favoritas</h2>

        <div style={{display: 'flex', flexFlow: 'wrap', gap: '1rem'}}>
        {listaPeliculas.map((peliculas) => {
          return (
            <div key={peliculas.id} style={{
              backgroundColor: '#3f114173',
              padding: '0.7em 3rem',
              borderRadius: '1rem'
            }}>
              <h3>{peliculas.titulo}</h3>
              <p>{peliculas.genero}</p>
            </div>
          )
        })}
        </div>
      </section> 
      <br />
      <section style={{backgroundColor: '#39d7a244', padding: '1.2rem', margin: '0 1.2rem', borderRadius: '1rem'}}>
            <h1>Ejercicio 1</h1>
            <h2>Tienda Online</h2>
            <p style={{marginBottom: '0.7em'}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi, distinctio expedita. Voluptatum, mollitia.</p>
            <p><b>Total Acumulado:</b>{acumulado}</p>

      <ListaProductos
      onAcumulador={sumarAcumulado}
      />
      </section>
    </div>
  )
}

export default App
