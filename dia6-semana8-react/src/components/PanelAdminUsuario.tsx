import { useState } from "react";
import { usePanelAdminUsuario } from "../hooks/usePanelAdminUsuario";

function PanelAdminUsuario() {
  const {
    data,
    cargando,
    err,
    formu,
    manejarEnvioForm,
    enviarDtsUsuario,
    modificarUsuario,
    eliminarUsuario
  } = usePanelAdminUsuario();
  
  const [buscador, setBuscador] = useState('');

  if (cargando) return <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', fontSize: '2rem', fontWeight: 'bold', color: '#14a98c'}}>Cargando...</div>;
  if (err) return <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', fontSize: '1.2rem', fontWeight: 'bold', color: '#ef4444'}}>{err}</div>;

  const fitrarTarjetasUser = data.filter((u) => {
    return u.name.toLowerCase().includes(buscador.toLowerCase());
  });

  return (
    <div style={{backgroundColor: '#111827', color: '#f3f4f6', borderRadius: '1rem', padding: '1.5rem', margin: '0.5em', fontFamily: 'sans-serif'}}>
      
      <div style={{backgroundColor: '#1f2937', padding: '1.2rem', borderRadius: '10px', marginBottom: '2rem', borderLeft: '5px solid #14a98c'}}>
        <h1 style={{margin: '0 0 1rem 0', fontSize: '1.5rem', color: '#14a98c'}}>Formulario de Registro</h1>
        <form onSubmit={enviarDtsUsuario} style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '0.8rem', }}>
          <input type="text" value={formu.name} name="name" onChange={manejarEnvioForm} placeholder="Nombre de la persona" style={{padding: '0.6rem', borderRadius: '6px', border: '1px solid #374151', backgroundColor: '#374151', color: '#fff'}} />
          <input type="text" value={formu.username} name="username" onChange={manejarEnvioForm} placeholder="Nombre de usuario" style={{padding: '0.6rem', borderRadius: '6px', border: '1px solid #374151', backgroundColor: '#374151', color: '#fff'}} />
          <input type="text" value={formu.email} name="email" onChange={manejarEnvioForm} placeholder="Email" style={{padding: '0.6rem', borderRadius: '6px', border: '1px solid #374151', backgroundColor: '#374151', color: '#fff'}} />
          <input type="text" value={formu.address.street} name="address.street" onChange={manejarEnvioForm} placeholder="Calle" style={{padding: '0.6rem', borderRadius: '6px', border: '1px solid #374151', backgroundColor: '#374151', color: '#fff'}} />
          <input type="text" value={formu.address.suite} name="address.suite" onChange={manejarEnvioForm} placeholder="Apartamento" style={{padding: '0.6rem', borderRadius: '6px', border: '1px solid #374151', backgroundColor: '#374151', color: '#fff'}} />
          <input type="text" value={formu.address.city} name="address.city" onChange={manejarEnvioForm} placeholder="Ciudad" style={{padding: '0.6rem', borderRadius: '6px', border: '1px solid #374151', backgroundColor: '#374151', color: '#fff'}} />
          <input type="text" value={formu.address.zipcode} name="address.zipcode" onChange={manejarEnvioForm} placeholder="Código postal" style={{padding: '0.6rem', borderRadius: '6px', border: '1px solid #374151', backgroundColor: '#374151', color: '#fff'}} />
          <button type="submit" style={{gridColumn: '1 / -1', padding: '0.7rem', backgroundColor: '#14a98c', color: '#fff', border: 'none', borderRadius: '6px', fontWeight: 'bold', cursor: 'pointer'}}>Agregar y Guardar</button>
        </form>
      </div>

      <div>
        <h2 style={{margin: '0 0 0.8rem 0', fontSize: '1.4rem'}}>Lista de Usuarios</h2>
        <input 
          type="text" 
          value={buscador} 
          onChange={(e) => setBuscador(e.target.value)} 
          placeholder="🔍 Buscar usuario..." 
          style={{padding: '0.6rem 1rem', borderRadius: '8px', border: '1px solid #14a98c', backgroundColor: '#1f2937', color: '#fff', width: '100%', maxWidth: '350px', marginBottom: '1.5rem'}} 
        />

        <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '1rem'}}>
          {fitrarTarjetasUser.length === 0 ? (
            <p style={{color: '#9ca3af', fontStyle: 'italic'}}>No se encontraron usuarios con ese nombre.</p>
          ) : (
            fitrarTarjetasUser.map((u) => (
              <article key={u.id} style={{backgroundColor: '#1f2937', borderRadius: '8px', padding: '1rem', border: '1px solid #374151', display: 'flex', flexDirection: 'column', gap: '0.8rem'}}>
                
                <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start'}}>
                  <div>
                    <h3 style={{margin: '0', fontSize: '1.2rem', color: '#fff'}}>{u.name}</h3>
                    <h5 style={{margin: '0.2rem 0', color: '#14a98c'}}>@{u.username}</h5>
                    <p style={{margin: '0', fontSize: '0.85rem', color: '#9ca3af'}}>{u.email}</p>
                  </div>
                  <button 
                    onClick={() => eliminarUsuario(u.id)}
                    style={{backgroundColor: 'transparent', color: '#ef4444', border: 'none', fontSize: '1.2rem', cursor: 'pointer'}}
                  >
                    ✕
                  </button>
                </div>

                <div style={{fontSize: '0.85rem', borderTop: '1px solid #374151', paddingTop: '0.5rem'}}>
                  <h4 style={{margin: '0 0 0.3rem 0', color: '#9ca3af'}}>Dirección:</h4>
                  <p style={{margin: '0.2rem 0'}}><b>Calle:</b> {u.address.street} | <b>Ciudad:</b> {u.address.city}</p>
                  <p style={{margin: '0.2rem 0'}}><b>Apto:</b> {u.address.suite} | <b>C.P.:</b> {u.address.zipcode}</p>
                </div>

                <button 
                  onClick={() => modificarUsuario(u.id)} 
                  style={{marginTop: 'auto', padding: '0.5rem', backgroundColor: '#374151', color: '#14a98c', border: '1px solid #14a98c', borderRadius: '6px', cursor: 'pointer', fontWeight: 'bold'}}
                >
                  ✏️ Editar Usuario
                </button>

              </article>
            ))
          )}
        </div>
      </div>

    </div>
  );
}

export default PanelAdminUsuario;
