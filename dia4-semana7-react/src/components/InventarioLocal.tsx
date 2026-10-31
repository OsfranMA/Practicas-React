import React, { useState, useEffect } from "react";

interface Producto {
  readonly id: number;
  nombre: string;
  precio: number | string;
  enStock: boolean;
}

function InventarioLocal() {
  const [produc, setProduc] = useState<Producto[]>(() => {
    const datosGuardados = localStorage.getItem("productos_guardados");

    if (datosGuardados !== null) {
      try {
        return JSON.parse(datosGuardados);
      } catch (error) {
        console.error("error de datos", error);
        return [];
      }
    }
  });
  const [inputForm, setInputForm] = useState<Producto>({
    id: 0,
    nombre: "",
    precio: "",
    enStock: false,
  });

  useEffect(() => {
    localStorage.setItem("productos_guardados", JSON.stringify(produc));
  }, [produc]);

  const manejarEnvio = (e: React.FormEvent) => {
    e.preventDefault();

    if (!inputForm.nombre.trim() || !inputForm.precio) return;

    const nuevoIten: Producto = {
      ...inputForm,
      id: Date.now(),
    };

    setProduc([...produc, nuevoIten]);

    setInputForm({
      id: 0,
      nombre: "",
      precio: "",
      enStock: false,
    });
  };

  const eliminarProduc = (idEliminar: number) => {
    const filtrarTarjeta = produc.filter((e) => e.id !== idEliminar)
    setProduc(filtrarTarjeta);
  };

  return (
    <div
      style={{
        backgroundColor: "#2d3748",
        color: "#fff",
        margin: "1rem",
        borderRadius: "1rem",
        padding: "1.5rem",
      }}
    >
      <h1>
        Inventario Local
      </h1>

      <form
        onSubmit={manejarEnvio}
        style={{
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          gap: "1rem",
        }}
      >
        <h2>Agregar Producto</h2>
        <label>
          Nombre:
          <input
            type="text"
            value={inputForm.nombre}
            onChange={(e) =>
              setInputForm({ ...inputForm, nombre: e.target.value })
            }
            placeholder="Escribe nombre del Producto."
            style={{ border: "none", padding: "5px" }}
          />
        </label>
        <label>
          Precio:
          <input
            type="text"
            value={inputForm.precio}
            onChange={(e) =>
              setInputForm({ ...inputForm, precio: e.target.value })
            }
            placeholder="Escribe el precio del Producto."
            style={{ border: "none", padding: "5px" }}
          />
        </label>
        <label
          style={{
            alignItems: "center",
            cursor: "pointer",
          }}
        > En Stock:
          <input
            type="checkbox"
            checked={inputForm.enStock}
            onChange={(e) =>
              setInputForm({ ...inputForm, enStock: e.target.checked })
            }
            style={{
              accentColor: "#0070f3",
              width: "18px",
              height: "18px",
              cursor: "pointer",
              position: "relative",
              top: '4px',
              left: '4px'
            }}
          />
        </label>
        <button type="submit" >Agregar al Invetario</button>
      </form>

      <section style={{backgroundColor: '#2d3748', margin: '0 1rem', padding: '1rem'}}>
        <h2>Inventario</h2>
        <div style={{display: 'flex', flexFlow: 'wrap', gap: '1rem', justifyContent: 'center'}}>
        {produc.map((prod) => (
            <div key={prod.id} style={{backgroundColor: '#0e1a2d63', borderRadius: '0.5em', borderLeft: prod.enStock ? '3px solid hsla(135, 65%, 50%, 0.96)' : '3px solid hsla(0, 65%, 50%, 0.96)'}}>
                <div style={{display: "flex", gap: '1rem', justifyContent: "space-around"}}>
                    <h3>{prod.nombre}</h3>
                    <button style={{backgroundColor: 'hsl(9, 100%, 57%)', color: '#ede4e4', border: 'none', borderRadius: '1rem', display: "inline-block", maxWidth: '20px', height: '20px', position: "relative", top: '1.3rem'}} onClick={() => eliminarProduc(prod.id)}>X</button>
                </div>
                <div style={{display: "flex", gap: '1rem', padding: '1rem'}}>
                <span>{prod.precio}</span>
                <span>{prod.enStock ? 'Disponible' : 'Agotado'}</span>
                </div>
            </div>   
        ))}
        </div>
      </section>
    </div>
  );
}

export default InventarioLocal;