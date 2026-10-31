
import InventarioLocal from "./components/InventarioLocal";
import MemoriaLocal from "./components/MemoriaLocal";
import "./App.css";

function App() {
  return (
    <>
      <div style={{ backgroundColor: "#181818", color: "#f2f2f2" }}>
        <h1>Dia 4 semana 7 react</h1>
        <p><samp>Acriditacion:</samp></p>
        <br />
        <MemoriaLocal />
        <br />
        <InventarioLocal />
        <br />
        <br />
      </div>
    </>
  );
}

export default App;
