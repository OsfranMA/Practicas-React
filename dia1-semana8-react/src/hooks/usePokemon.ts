import { useState, useEffect } from "react";
export interface RespuestaPokemon {
    readonly id: number;
    name: string;
    sprites: {
        front_default: string;
    };
}

export function usePokemon() {
    const [pokemon, setPokemon] = useState<RespuestaPokemon | null>(null);
    const [cargando, setCargando] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const obtenerDtsPokemon = async () => {
            try {
                setCargando(true);
                const pokemonApi = await fetch(`https://pokeapi.co/api/v2/pokemon/ditto`);

                if (!pokemonApi.ok) {
                    throw new Error('Error de API!!');
                };

                const datosPokemonApi: RespuestaPokemon = await pokemonApi.json();

                setPokemon(datosPokemonApi);
                setCargando(false);
            } catch (error) {
                setError(`Error api no se establecio: ${error}`);
                setCargando(false)
            }
        }
        obtenerDtsPokemon();

    }, []);

    return {pokemon, cargando, error};
}