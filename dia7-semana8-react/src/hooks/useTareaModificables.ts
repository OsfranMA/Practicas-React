import React, { useState, useEffect } from "react";
import type { Tarea } from "../types/Tarea";

export function useTareaModificables() {
    const [data, setData] = useState<Tarea[]>([]);
    const [cargando, setCargando] = useState<boolean>(true);
    const [err, setErr] = useState<null | string>(null);
    const [useForm, setUseForm] = useState({
        title: '',
        completed: false,
    })

    const obtenerDtsTarea = async () => {
        try {
            setCargando(true);
            setErr(null);

            const resTarea = await fetch(`https://jsonplaceholder.typicode.com/todos?_limit=3`);

            if (!resTarea.ok) throw new Error(`Error inesperado`);

            const guardarDtsTarea: Tarea[] = await resTarea.json();
            setData(guardarDtsTarea);
            setCargando(false);
        } catch (error) {
            if (error instanceof Error) setErr(error.message);
            setCargando(false);
        };
    }

    useEffect(() => {
        obtenerDtsTarea()
    }, []);

    const manejarCambiosForm = (e: React.ChangeEvent<HTMLInputElement>) => {
        e.preventDefault();
        const {name, value, type, checked} = e.target;

        const valorFinal = type === 'checkbox' ? checked : value;

        setUseForm({
            ...useForm,
            [name]: valorFinal,
        });
    };

    const modificarTarea = async (id: number, datosTarea: {title: string; completed: boolean}) => {
        try {
            setErr(null);

            const respuesta = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`, {
                method: 'PUT',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify({id, ...datosTarea}),
            });
            
            if (!respuesta.ok) throw new Error(`Error al actualizar el usuario ${id}`);

            const dtsModificadoTarea = await respuesta.json();

            setData(prev =>
                prev.map(tarea => (tarea.id === id ? dtsModificadoTarea : tarea))
            )
        } catch (error) {
            if (error instanceof Error) setErr(error.message);
        }
    }

    return {data, cargando, err, manejarCambiosForm, modificarTarea, useForm, setUseForm}
};