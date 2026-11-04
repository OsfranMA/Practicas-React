import { useState, useEffect } from "react";
import type { RespuestaPersonajes } from "../types/personaje";

export function usePersonaje(idPersonaje: number) {
    const [personajes, setPersonajes] = useState<RespuestaPersonajes |  null>(null);
    const [cargando, setCargando] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const obtenerDtsPersonajes = async () => {
            try {
                setCargando(true);
                setError(null);

                const respuestaApiPersonaje = await fetch(`https://rickandmortyapi.com/api/character/${idPersonaje}`);
                    
                if (!respuestaApiPersonaje.ok) {
                    if (respuestaApiPersonaje.status === 404) {
                    throw new Error(`El personaje con ID "${idPersonaje}" no existe en la API (Error 404).`);
                } else if (respuestaApiPersonaje.status >= 500) {
                    throw new Error(`Los servidores de Rick and Morty están experimentando fallas (Error 500).`);
                } else {
                    throw new Error(`Error de red inesperado con código: ${respuestaApiPersonaje.status}`);
                };
                }

                const darFormatoPersonaje: RespuestaPersonajes = await respuestaApiPersonaje.json();
                
                setPersonajes(darFormatoPersonaje);
                setCargando(false);
            } catch (error: any) {
                setError(error.message || `Error desconocido de conexión.`);
                setCargando(false);
            }
        }
        obtenerDtsPersonajes();
    }, [idPersonaje])

    return {personajes, cargando, error};
};