import { useState } from "react";

interface DatosUsuario {
    id: number;
    nombre: string;
    descripcion?: string; 
}

function PanelPrivacidad({id, nombre, descripcion}: DatosUsuario) {
    const [esPrivado, setEsPrivado] = useState<boolean>(true)
    const [notificacionesActivas, setNotificacionesActivas] = useState<boolean>(false)
    
    return (
        <div style={{backgroundColor: '#bbd6424b', padding: '1rem', margin: '0 1rem', borderRadius: '1rem'}}>
            <h1>Ejercicio 2</h1>
            <h2>Perfil: {nombre}</h2>
            {esPrivado === true ? <p style={{color: '#f22'}}>⚠️ Tu cuenta está protegida contra búsquedas externas</p> : ''}
            <span style={{margin: '0.8em'}}>ID: {id}</span>
            <p style={{marginBottom: '0.6em'}}>descripción: {descripcion ? descripcion : 'Vació.'}</p>
            <h3>Ajustes de Privacidad:</h3>
            <button style={{margin: '1rem'}} onClick={() => setEsPrivado(!esPrivado)}>{esPrivado ? 'Cuenta Privada' : 'Cuenta Publica'}</button>
            <button style={{margin: '1rem'}} onClick={() => setNotificacionesActivas(!notificacionesActivas)}>{notificacionesActivas ? 'Desactivar Notificaciones' : 'Activar Notificaciones'}</button>
        </div>
    )
}

export default PanelPrivacidad;