import React, { useState } from "react";
import type { datosFormulario } from "../types/datosFormulario";

export function useDatosFormulario() {
    const [formu, setFormu] = useState<datosFormulario>({
        id: Date.now(),
        title: '',
        price: '',
        description: '',
        image: '',
        category: ''
    });

    const manejarForm = (e: React.ChangeEvent<HTMLInputElement>) => {
        const {name, value} = e.target;

        setFormu({
            ...formu,
            [name]: value,
        });
    }

    const manejarEnvio = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            const respuDtsProduct = await fetch('https://fakestoreapi.com/products', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },  
                body: JSON.stringify(formu)
            })

            if (!respuDtsProduct.ok) {
                throw new Error(`Èrror al intentar enviar producto`);
            }

            const dtsCreados = await respuDtsProduct.json();
            console.log("¡Producto guardado con éxito en el servidor!", dtsCreados);
        } catch (err: any) {
            console.error("Hubo un error:", err.message);
        }
    }

    return {manejarForm, manejarEnvio, formu};
}