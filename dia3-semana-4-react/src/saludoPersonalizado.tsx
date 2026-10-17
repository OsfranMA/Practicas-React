function saludpPersonalizado(pronps: {nombre: string, curso: string}) {
    return (
        <div style={{margin: '1rem', backgroundColor: '#f3f3f3'}}>
            <h1>Ejemplo 1</h1>
            <h2>Hola mi estimado {pronps.nombre}</h2>
            <p>Su curso actual es {pronps.curso}</p>
        </div>
    );
};

export default saludpPersonalizado