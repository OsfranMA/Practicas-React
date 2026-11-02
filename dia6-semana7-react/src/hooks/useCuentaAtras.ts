import { useState, useEffect } from "react";

export function useCuentaAtras() {
    const [segundos, setSegundos] = useState<number>(() => {
        const datosGuardados = localStorage.getItem("tiempo_actual");
        return datosGuardados !== null ? Number(datosGuardados) : 0;
    });

  const [estadoTem, setEstadoTem] = useState<boolean>(false);

  useEffect(() => {
    if (!estadoTem) return;

    const intervalo = setInterval(() => {
            setSegundos((prev) => {
                const nuevosSegundos = prev + 1;
                localStorage.setItem("tiempo_actual", nuevosSegundos.toString());
                return nuevosSegundos;
            });
    }, 1000);

    return () => {clearInterval(intervalo)};
  },[estadoTem])

  const detenerTem = () => {
    setEstadoTem((prev) => !prev);
  }
  const reiniciarTem = () => {
    setEstadoTem(false);
    setSegundos(0);
    localStorage.setItem("tiempo-actual", "0");
  }

  return { segundos, estadoTem, detenerTem, reiniciarTem }
};