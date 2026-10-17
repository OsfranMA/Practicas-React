interface EmpleadoProps {
    nombre: string;
    puesto: string;
    edad: number;
    activo: boolean;
}

function EmpleadoCard({ nombre, puesto, edad, activo  }: EmpleadoProps) {
    return (
        <div style={{ 
            backgroundColor: '#1e293b55', 
            color: '#fff', 
            padding: '1.2rem', 
            borderRadius: '0.8rem', 
            margin: '0 1.5rem',
            borderLeft: activo ? '5px solid #22c55e' : '5px solid #ef4444',
        }}>
            <h3>{nombre}</h3>
            <p><strong>Puesto:</strong> {puesto}</p>
            <p><strong>Edad:</strong> {edad} años</p>
            <p>
                <strong>Estado: </strong> 
                <span style={{ color: activo ? '#22c55e' : '#ef4444' }}>
                    {activo ? 'Activo en la empresa' : 'Inactivo'}
                </span>
            </p> 
        </div>
    );
}

export default EmpleadoCard;