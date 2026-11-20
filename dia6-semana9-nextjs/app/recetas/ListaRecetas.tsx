import { Recetas } from "../types/recetas";
import FiltroRecetas from "./FiltroRecetas";

async function obternerDtsRecetas(): Promise<Recetas[]> {
    const res = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=`, {cache: 'no-store',});
    if (!res.ok) throw new Error(`Error al tratar de obtener datos`);
    const datosJson = await res.json();
    return datosJson.meals ?? [];
}

export default async function ListaRecetas() {
    const recetas = await obternerDtsRecetas();
    return <FiltroRecetas recetas={recetas}/>;
}