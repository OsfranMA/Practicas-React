import { useState } from "react";

export function useContadorPuntos() {
    const [segPuntos, setSegPuntos] = useState<number>(0);

    const sumarPuntos = () => {
        if (segPuntos < 10) {
            setSegPuntos((prev) => prev + 1)
        };
    };

    const restarPuntos = () => {
        if (segPuntos > 0) {
            setSegPuntos((prev) => prev - 1)
        };
    };

    return {sumarPuntos, restarPuntos, segPuntos};
};