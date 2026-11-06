import { useState, useEffect } from "react";
import type { itemProducto } from "../types/productos";

export function useProductos(ProductosBusqueda: string) {
    const [data, setData] = useState<itemProducto[]>([]);
    const [cargando, setCargando] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const obtDtsProduct = async () => {
            try {
                setCargando(true);
                setError(null);

                const responseApiProduc = await fetch(`https://fakestoreapi.com/products${ProductosBusqueda}`);

                if (!responseApiProduc.ok) {
                    if (responseApiProduc.status === 404) {
                        throw new Error(`Error detectado el producto buscado no se encotraron resultados ${ProductosBusqueda} Error 404.`)
                    } else if (responseApiProduc.status >= 500) {
                        throw new Error(`Error del sistema de Productos intente mas tarde (Error 500).`)
                    } else {
                        throw new Error(`Error del sistema inesperado porfavor intente mas tarde.`)          
                    };
                };

                const datos: itemProducto[] = await responseApiProduc.json();
                setData(datos);
                setCargando(false);
            } catch (err: any) {
                setError(err.message || `Error del sistema`);
                setData([]);
                setCargando(false);
            };
        };
        obtDtsProduct();
    }, [ProductosBusqueda]);

    return {data, cargando, error}
}