import React, { useState, useEffect } from "react";
import type { panelAdminUsuarios } from "../types/panelAdminUsuarios";

export function usePanelAdminUsuario() {
  const [data, setData] = useState<panelAdminUsuarios[]>([]);
  const [cargando, setCargando] = useState<boolean>(true);
  const [err, setErr] = useState<string | null>(null);
  const [formu, setFormu] = useState({
    id: 0,
    name: "",
    username: "",
    email: "",
    address: {
      street: "",
      suite: "",
      city: "",
      zipcode: "",
    },
  });

  const obtenerDtsUsuario = async () => {
    try {
      setCargando(true);
      setErr(null);

      const res = await fetch(`https://jsonplaceholder.typicode.com/users`);

      if (!res.ok) {
        if (res.status === 404)
          throw new Error(
            "Recurso no encontrado (404). El usuario ya no existe.",
          );
        if (res.status >= 500)
          throw new Error(
            "Error interno del servidor (500). Inténtate conectar más tarde.",
          );
        else
          throw new Error(
            "Ocurrió un error inesperado al procesar la petición.",
          );
      }

      const dtsUsuarios: panelAdminUsuarios[] = await res.json();

      setData(dtsUsuarios);
      setCargando(false);
    } catch (error: any) {
      setErr(error.message);
      setCargando(false);
    }
  };

  useEffect(() => {
    obtenerDtsUsuario();
  }, []);

  const manejarEnvioForm = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    if (name.includes(".")) {
      const [parent, child] = name.split(".");

      if (parent === "address") {
        setFormu({
          ...formu,
          address: {
            ...formu.address,
            [child]: value,
          },
        });
      }
    } else {
      setFormu({
        ...formu,
        [name]: value,
      });
    }
  };

  const enviarDtsUsuario = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const enviarDtsUsuario = await fetch(
        `https://jsonplaceholder.typicode.com/users`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formu),
        },
      );

      if (!enviarDtsUsuario.ok)
        throw new Error(`Error al tratar de enviar los datos`);

      const dtsEnviados = await enviarDtsUsuario.json();
      setData([dtsEnviados, ...data]);

      alert(`Usuario Reguistrado y Guardado ${dtsEnviados}`);

      setFormu({
        id: 0,
        name: "",
        username: "",
        email: "",
        address: { street: "", suite: "", city: "", zipcode: "" },
      });
    } catch (error: any) {
      setErr(error.message);
    }
  };

  const modificarUsuario = async (id: number) => {
    try {
      const modificarUsuario = await fetch(
        `https://jsonplaceholder.typicode.com/users`,
        {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            id: id,
            name: "",
            username: "",
            email: "",
            address: {
              street: "",
              suite: "",
              city: "",
              zipcode: "",
            },
          }),
        },
      );

      if (!modificarUsuario.ok)
        throw new Error(`Error al tratar de modificar datos`);

      const dtsModificadosUser = await modificarUsuario.json();
      alert(`Datos modificados con exito ${dtsModificadosUser}`);
    } catch (error: any) {
      setErr(error.message);
    }
  };

  const eliminarUsuario = async (id: number) => {
    try {
      const eliminarUsuario = await fetch(
        `https://jsonplaceholder.typicode.com/users/${id}`,
        {
          method: "DELETE",
        },
      );

      if (!eliminarUsuario.ok)
        throw new Error(`Error al tratar de eliminar Usuario`);

      setData(data.filter((user) => user.id !== id));
      console.log(`Tarjeta de usuario con id ${id} eliminado.`);
    } catch (error: any) {
      setErr(error.message);
    }
  };

  return {
    data,
    cargando,
    err,
    formu,
    manejarEnvioForm,
    enviarDtsUsuario,
    modificarUsuario,
    eliminarUsuario,
  };
}
