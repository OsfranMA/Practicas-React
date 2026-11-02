import { useState, useEffect } from "react";

export function useTemporizadorRegresivo() {
    const [segundosRestantes, setSegundosRestantes] = useState<number>(60);
    const [activo, setActivo] = useState<boolean>(false);

    useEffect(() => {
        if (!activo || segundosRestantes <= 0) {
            return;
        }

        let intervalo = setInterval(() => {
            setSegundosRestantes((prev) => {
                if (prev <= 1) {
                    setActivo(false);
                    return 0;
                }
                return prev - 1;
            });
        }, 1000);

        return () => {
            clearInterval(intervalo);
        };
    }, [activo, segundosRestantes]); 

    const iniciar = () => setActivo(true);
    
    const reiniciar = () => {
        setActivo(false);
        setSegundosRestantes(60); 
    };

    return { segundosRestantes, activo, iniciar, reiniciar };
}