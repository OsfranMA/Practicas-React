import { useState } from "react";

export function useToggle(valorInicial: boolean = true) {
    const [modo, setModo] = useState<boolean>(valorInicial);

    const estadoModo = () => {
        setModo(prev => !prev);
    };
    
    return { modo, estadoModo };
}