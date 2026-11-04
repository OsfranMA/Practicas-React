// import { useState, useEffect } from "react";
// Simulacion de llamado a  una API 'Ojo Ejemplo ya lo haremos real jsjs'
// import { RespuestaClima } from "../types/RespuestaClima";

// export function useClima() {
//     const [clima, setClima] = useState<RespuestaClima | null>(null);
//     const [cargando, setCargando] = useState<boolean>(true);
//     const [error, setError] = useState<string | null>(null);

//     useEffect(() => {
//         const obtenerClima = async () => {
//             try {
//                 setCargando(true);
//                 setTimeout(() => {
//                     const datosServidor: RespuestaClima = {
//                         temperatura: 28,
//                         condicion: "Soleado con brisa",
//                         ciudad: "La Unión"
//                     };
//                     setClima(datosServidor);
//                     setCargando(false);
//                 }, 1000);
//             } catch (err) {
//                 setError("No se pudo conectar con el servidor.");
//                 setCargando(false);
//             }
//         };

//         obtenerClima();
//     }, []);

//     return { clima, cargando, error };
// }