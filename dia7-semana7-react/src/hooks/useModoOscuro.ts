import { useState } from "react";

export function useModoOscuro() {
  const [estadoModo, setEstadoModo] = useState<boolean>(() => {
    const guardados = localStorage.getItem("estado-modo");
    return guardados === "true";
  });

  const manejarModo = () => {
    const nuevoEstado = !estadoModo;

    setEstadoModo(nuevoEstado);

    localStorage.setItem("estado-modo", JSON.stringify(nuevoEstado));
  };

  return { estadoModo, manejarModo };
}
