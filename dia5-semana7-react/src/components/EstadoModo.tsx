import { useToggle } from "../hooks/useToggle";

function EstadoModo() {
    const { modo, estadoModo } = useToggle(true)

    return (
        <div style={{ padding: "1rem", background: modo ? "#2d3748" : '#cbcbcb', color: modo ? '#fff' : "#000", margin: '0 1rem', borderRadius: '1rem' }}>
            <h1 style={{color: modo ? '#fff' : "#000", paddingBottom: '0.5em', borderBottom: modo ? '3px solid #7e7c7c' : '3px solid #383838'}}>Hola Usuario</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi libero consequuntur unde nam mollitia dolorum quia eius nulla veniam accusamus! Esse, quae ea.</p>
            <button onClick={estadoModo}>{modo ? 'Modo Claro' : 'Modo Oscuro'}</button>
        </div>
    )
}

export default EstadoModo;