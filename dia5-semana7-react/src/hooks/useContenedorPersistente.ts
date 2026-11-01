import { useState, useEffect } from 'react';

export function useContadorPersistente(clave: string, valorInicial: number) {
    const [contador, setContador] = useState<number>(() => {
        const guardado = localStorage.getItem(clave);
        return guardado !== null ? Number(guardado) : valorInicial;
    });

    useEffect(() => {
        localStorage.setItem(clave, contador.toString());
    }, [clave, contador]);

    const incrementar = () => setContador(prev => prev + 1);
    const decrementar = () => setContador(prev => prev - 1);

    return { contador, incrementar, decrementar };
}