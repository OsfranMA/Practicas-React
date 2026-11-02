import { useModoOscuro } from "../hooks/useModoOscuro";

function ModoOscuro() {
    const {estadoModo, manejarModo} = useModoOscuro();
    return (
        <div style={{backgroundColor: estadoModo ? '#1b1b1b' : '#dadada', color: estadoModo ? '#fff' : '#000', margin: '0 1rem', padding: '1rem', borderRadius: '1rem', border: estadoModo ? '3px solid #fff' : '3px solid #000'}}>
            <h1>Cambiar de modo de claro a oscuro</h1>
            <button style={{maxWidth: '125px', height: 'auto', borderRadius: '1rem', backgroundColor: '#d7d2d2'}} onClick={manejarModo}>{estadoModo ? <img src="https://cdn-icons-png.flaticon.com/512/17648/17648604.png" alt="ModoClaro"/> : <img src="https://cdn-icons-png.flaticon.com/512/6559/6559203.png" alt="ModoOscuro"/>}</button>
        </div>
    )
}

export default ModoOscuro;