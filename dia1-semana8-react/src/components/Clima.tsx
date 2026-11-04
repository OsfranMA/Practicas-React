// import { useClima } from "../hooks/useClima";

// function Clima() {
//     const {clima, cargando, error} = useClima();
    
//     if (cargando) {
//         return <div style={{ padding: '1rem' }}>Conectando con el servidor... 🛰️</div>;
//     } if (error) {
//          return <div style={{ padding: '1rem', color: 'red' }}>{error}</div>;
//     }
//     return (
//         <div style={{ backgroundColor: '#2b6cb0', color: '#fff', borderRadius: '1rem', margin: '1rem', padding: '1.5rem' }}>
//             <h2>Clima Actual (Arquitectura Modular)</h2>
//             <p><strong>Ciudad:</strong> {clima?.ciudad}</p>
//             <p><strong>Temperatura:</strong> {clima?.temperatura}°C</p>
//             <p><strong>Condición:</strong> {clima?.condicion}</p>
//         </div>
//     )
// }

// export default Clima;