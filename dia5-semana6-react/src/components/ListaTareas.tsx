import React, { useState } from "react";

interface Tarea {
    id: number;
    nombre: string;
}

function ListaTareas() {
    const [inputForm, setInputForm] = useState<string>('');
    const [listaTarea, setListaTarea] = useState<Tarea[]>([])

    const agregarTarea = (e: React.FormEvent) => {
        e.preventDefault();

        if (inputForm.trim() === '') return;

        const nuevoItem: Tarea = {
            id: Date.now(),
            nombre: inputForm
        };

        setListaTarea([...listaTarea, nuevoItem]);

        setInputForm('');
    }
    return (
        <div style={{ padding: '1rem', background: '#62989e4d', color: '#fff', borderRadius: '1rem', margin: '0 1rem' }}>
            <h1 style={{borderBottom: '3px solid #afb9c1', paddingBottom: '0.5em'}}>Formulario Registro Tareas</h1>
            <form onSubmit={agregarTarea} style={{margin: '2.5rem 1rem'}}>
                <input
                 type="text" 
                 placeholder="Agrega una Tarea"
                 value={inputForm}
                 onChange={(e) => setInputForm(e.target.value)}
                 style={{padding: '8px 15px', borderLeft: '2px solid #f2f2f2'}}
                />
                <button style={{display: 'inline-block', cursor: 'pointer', padding: '8px 10px', backgroundColor: '#62989e92', border: 'none'}} type="submit">Agregar Tarea</button>
            </form>
            <h2>Lista de Tareas</h2>
            <span>Total acumulado: {listaTarea.length} Tareas</span>
            <ul>
                {listaTarea.map((promp) => (
                    <li key={promp.id} style={{backgroundColor: '#62989e92', margin: '0.5em', padding: '10px', borderRadius: '0.7em'}}>
                        {promp.nombre}
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default ListaTareas