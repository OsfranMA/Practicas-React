import React, { useState } from "react";

interface Empleado {
    readonly id: number;
    nombre: string;
    puesto: string;
    experiencia: number | string;
    disponible: boolean;
}

function DirectorioEmpleados() {
    const [formEmpleado, setFormEmpleado] = useState({
        nombre: '',
        puesto: '',
        experiencia: '',
        disponible: false,
    });

    const [empleado, setEmpleado] = useState<Empleado[]>([]);

    const subirEmpleado = (e: React.FormEvent) => {
        e.preventDefault();

        if (formEmpleado.nombre.trim() === '' || formEmpleado.puesto.trim() === '' || formEmpleado.experiencia.trim() === '') return;

        const nuevoEmpleForm: Empleado = {
            id: Date.now(),
            nombre: formEmpleado.nombre,
            puesto: formEmpleado.puesto,
            experiencia: formEmpleado.experiencia,
            disponible: formEmpleado.disponible,
        }

        setEmpleado([...empleado, nuevoEmpleForm]);

        setFormEmpleado({nombre: '', puesto: '', experiencia: '', disponible: false})
    }

    return (
        <div style={{padding: '0 1em', background: '#308ec94d', color: '#fff', borderRadius: '1rem', margin: '0 1rem' }}>
            <h1 style={{padding: '0.8em', marginBottom: '1rem', borderBottom: '2px solid #cbcaca'}}>Directorio Empleado</h1>
            <form onSubmit={subirEmpleado} style={{display: 'flex', flexDirection: "column", textAlign: 'center', marginBottom: '1rem', padding: '0.8em', alignItems: 'center', gap: '0.8em'}}>
                <label>Nombre y Apellido:</label>
                <input
                 type="text" 
                 value={formEmpleado.nombre}
                 onChange={(e) => setFormEmpleado({...formEmpleado, nombre: e.target.value})}
                 placeholder="Nombre del empleado."
                 style={{fontSize: '1rem', padding: '5px 14px'}}
                />
                <label>Puesto:</label>
                <input
                 type="text" 
                 value={formEmpleado.puesto}
                 onChange={(e) => setFormEmpleado({...formEmpleado, puesto: e.target.value})}
                 placeholder="Puesto del empleado."
                 style={{fontSize: '1rem', padding: '5px 14px'}}
                />
                <label>Años de Experiencia:</label>
                <input
                 type="number" 
                 value={formEmpleado.experiencia}
                 onChange={(e) => setFormEmpleado({...formEmpleado, experiencia: e.target.value})}
                 placeholder="Experiencia del empleado."
                 style={{fontSize: '1rem', padding: '5px 14px'}}
                />
                <label style={{display: "inline-flex", cursor: "pointer"}}>Disponible:</label>
                <input
                 type="checkbox" 
                 checked={formEmpleado.disponible}
                 onChange={(e) => setFormEmpleado({...formEmpleado, disponible: e.target.checked})}
                 style={{width: '30px', height: '30px', backgroundColor: '#308ec9e6'}}
                />
                <button style={{display: "inline-block", padding: '8px 25px', backgroundColor: '#308ec9e6', borderRadius: '1rem'}}>
                    Agregar..
                </button>
            </form>
            <h2 style={{padding: '0.8em', marginBottom: '1rem', borderBottom: '2px solid #cbcaca', borderTop: '2px solid #cbcaca'}}>Lista de Empleados:</h2>
            <div style={{padding: '0.3rem 2rem', display: "flex", flexFlow: 'wrap', gap: '1rem', marginBottom: '1rem', alignItems: 'center', justifyContent: 'center'}}>
                {empleado.map((emp) => (
                    <article key={emp.id} style={{backgroundColor: '#4c585e', borderRadius: '0.5em', textAlign: "start", minWidth: '40%', height: 'auto', borderLeft: emp.disponible ? '4px solid rgba(50, 217, 53, 0.97)' : '4px solid rgba(217, 50, 50, 0.97)'}}>
                        <div style={{backgroundColor: '#2d2c2c', display: "flex", justifyContent: "space-around", borderRadius: '0.5em', padding: '1rem'}}>
                            <h3>{emp.nombre}</h3>
                            <p style={{position: "relative", top: '1rem'}}>{emp.disponible ? 'Disponible' : 'No Disponible'}</p>
                        </div>
                        <div style={{fontSize: '1.2rem', padding: '1rem', display: 'flex', flexDirection: 'column', gap: '0.7em'}}>
                            <p><b>Puesto:</b> {emp.puesto}</p>
                            <p><b>Experiencia Laboral:</b> {emp.experiencia} Años</p>
                        </div>
                    </article>
                ))}
            </div>
        </div>
    )
}

export default DirectorioEmpleados;