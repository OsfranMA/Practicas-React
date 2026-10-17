function EmpleadoCard(promp: {nombre: string, cargo: string, experiencia: number, activo: boolean}) {
    return (
        <div style={{margin: '1rem', backgroundColor: '#6bc0e561', padding: '1rem', borderRadius: '0.5em', boxShadow: '0 0 0.5rem #88bee0'}}>
            <h1>Ejercicio 2</h1>
            <div style={{textAlign: 'center'}}>
            <h2 style={{fontSize: '3rem'}}>{promp.nombre}</h2>
            <p><b>Cargo del Empleado:</b> <span style={{color: '#196f9b'}}>{promp.cargo}</span></p>
            <p>Cantidad de años de experiencia: <span style={{color: '#196f9b'}}>{promp.experiencia}</span></p>
            <p>Extado: <span style={{color: '#196f9b'}}>{promp.activo ? 'Activo' : 'Inactivo'}</span></p>
            </div>
        </div>
    )
}

export default EmpleadoCard