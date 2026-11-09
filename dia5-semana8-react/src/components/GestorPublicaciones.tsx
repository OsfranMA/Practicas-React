import React, { useState } from "react";
import { useGestorPublicaciones } from "../hooks/useGestorPublicaciones";

function GestorPublicaciones() {
    const [dtsForm, setDtsForm] = useState({
        userId: 0,
        id: 0,
        title: '',
        body: '',
    });
    const {data, cargando, error} = useGestorPublicaciones();
    
    const manejarForm = (e: React.ChangeEvent<HTMLInputElement>) => {
        const {name, value} = e.target;
        setDtsForm({
            ...dtsForm,
            [name]: value,
        });
    };

    const manejarEnvio = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            const respuestaEnvio = await fetch(`https://jsonplaceholder.typicode.com/posts`, {
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify(dtsForm),
            });

            if (!respuestaEnvio.ok) throw new Error(`Error al intentar enviar los datos`)

            const guardarDts = await respuestaEnvio.json();
            alert(`Datos guardados exitosamente: ${guardarDts}`)

            setDtsForm({userId: 0, id: 0, title: '', body: ''})
        } catch (err: any) {
            alert(`Error inesperado`)
        }
    }
    if (cargando) return <div>Cargando datos...</div>;
    if (error) return <div>{error}</div>;
    return (
        <div style={{backgroundColor: '#28bf9c51', color: '#f3f2f2', margin: '1rem', borderRadius: '1rem', padding: '1rem'}}>
            <h1>Formulario de reguitro</h1>
            <p>Guardar datos e enviar (POST)</p>
            <form onSubmit={manejarEnvio}>
                <input
                 type="text"
                 name="title"
                 value={dtsForm.title}
                 onChange={manejarForm}
                 placeholder="Titulo de la publicación"
                />
                <input
                 type="text"
                 name="body"
                 value={dtsForm.body}
                 onChange={manejarForm}
                 placeholder="Texto..."
                />
                <button type="submit">Enviar e Agregar</button>
            </form>
            <div style={{display: 'flex', justifyContent: 'center', flexDirection: 'column', gap: '1.2rem'}}>
                {data.map((p) => (
                    <div key={p.id}>
                        <h3>{p.title}</h3>
                        <p>{p.body}</p>
                        <small><b>Autor:</b> {p.userId}</small>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default GestorPublicaciones;