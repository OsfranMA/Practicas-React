import { useState } from "react";

function DirectorioEmpleados() {
    const [empleados] = useState([
        {id: 1, nombre: 'Carlos Rivera', cargo: 'Backend', activo: true},
        {id: 2, nombre: 'Choco Untara', cargo: 'Java', activo: false},
        {id: 3, nombre: 'Austin Agustin', cargo: 'Full Stack', activo: true},
        {id: 4, nombre: 'OP', cargo: 'Ciberseguridad', activo: false}
    ]);
    return (
        <div style={{backgroundColor: '#ad3fc56f', borderRadius: '1rem', margin: '0 1rem', padding: '1rem'}}>
            <h1>Ejercicio 1</h1>
            <h2>Lista de Empleados</h2>

            {empleados.map((empl) => (
                <div key={empl.id} style={{backgroundColor: '#c436e36f', borderRadius: '1rem', padding: '0.7em', marginBottom: '1rem'}}>
                    <h3>{empl.nombre}</h3>
                    <p style={{fontSize: '1.2rem'}}>Cargo: {empl.cargo}</p>
                    <p style={{fontSize: '1.2rem'}}>Estado: {empl.activo ? 'Activo' : 'Inactivo'}</p>
                </div>
            ))}
        </div>
    )
}

export default DirectorioEmpleados;