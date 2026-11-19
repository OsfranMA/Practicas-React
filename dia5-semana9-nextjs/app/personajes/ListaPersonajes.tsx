import BuscadorPersonajes from "./BuscadorPersonajes";
import { Personajes } from "../types/Personajes";

async function ObtenerDtsPersonajes(): Promise<Personajes[]> {
    const resDtsPersonajes = await fetch(`https://rickandmortyapi.com/api/character`);
    if (!resDtsPersonajes.ok) throw new Error(`Error al intentar obtener Datos`);
    const datosJson = await resDtsPersonajes.json();
    return datosJson.results;
};

export default async function ListaPersonajes() {
    const personajes = await ObtenerDtsPersonajes();

    return <BuscadorPersonajes personajes={personajes} />;
}