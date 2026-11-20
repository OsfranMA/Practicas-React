import { Producto } from "../types/productos";
import FiltrosProductos from "./FiltrosProductos";

async function obtenerProductos(): Promise<Producto[]> {
  const res = await fetch("https://fakestoreapi.com/products", {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("No se pudieron cargar los productos desde el servidor.");
  }

  return res.json();
}

export default async function ListaProductos() {
  const productos = await obtenerProductos();
  return <FiltrosProductos productos={productos} />;
}