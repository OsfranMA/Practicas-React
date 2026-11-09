import { useState, useEffect } from "react";
import type { gestorPublicaciones } from "../types/gestorPublicaciones";

export function useGestorPublicaciones() {
    const [data, setData] = useState<gestorPublicaciones[]>([]);
    const [cargando, setCargando] = useState<boolean>(true);
    const [error, setError] = useState<null | string>(null);
    
    const obtenerDtsPublicaciones = async () => {
        try {
            setCargando(true);
            setError(null);

            const respuestaPublicaciones = await fetch(`https://jsonplaceholder.typicode.com/posts`);

            if (!respuestaPublicaciones.ok) throw new Error(`Error al obtener las publicaciones ;(`);

            const datos: gestorPublicaciones[] = await respuestaPublicaciones.json();

            setData(datos);
            setCargando(false);
        } catch (err: any) {
            setError(err.message || 'Error inesperado.');
            setCargando(false);
        }
    }

    useEffect(() => {
        obtenerDtsPublicaciones();
    }, []);

    return {data, cargando, error}
};