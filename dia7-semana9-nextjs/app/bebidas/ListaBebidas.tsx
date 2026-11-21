import FiltrosBebidas from "./FiltrosBebidas";
import { Bebidas } from "../types/bebidas";

async function ObtenerDtsBebida(): Promise<Bebidas[]> {
    const res = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=a`, {cache: 'no-store',});
    if (!res.ok) throw new Error(`No se encontraron datos.`);
    const guardarDtsBebidas = await res.json();
    return guardarDtsBebidas.drinks ?? [];
}

export default async function ListaBebidas() {
    const recetas = await ObtenerDtsBebida();
    return <FiltrosBebidas bebidas={recetas}/>
}