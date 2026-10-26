import React, { useState } from "react";

interface Proyecto {
    readonly id: number
    titulo: string;
    cliente: string;
    presupuesto: number | string;
    activo: boolean;
};

function PanelProyectos() {
    const [formProyecto, setFormProyecto] = useState({
        titulo: '',
        cliente: '',
        presupuesto: '',
        activo: false,
    });

    const [proyecto, setProyecto] = useState<Proyecto[]>([]);

    const agregarProyecto = (e: React.FormEvent) => {
        e.preventDefault();

        if (formProyecto.titulo.trim() === '' || formProyecto.cliente.trim() === '' || formProyecto.presupuesto.trim() === '' ) return;

        const nuevoProyecto: Proyecto = {
            id: Date.now(),
            titulo: formProyecto.titulo,
            cliente: formProyecto.cliente,
            presupuesto: formProyecto.presupuesto,
            activo: formProyecto.activo,
        };

        setProyecto([...proyecto, nuevoProyecto]);

        setFormProyecto({titulo: '', cliente: '', presupuesto: '', activo: false});
    }

    return (
        <div style={{padding: '0 1em', background: '#49ad854d', color: '#fff', borderRadius: '1rem', margin: '0 1rem' }}>
            <h1 style={{marginBottom: '1rem', padding: '0.5em', borderBottom: '2px solid #80807f'}}>Formulario del Proyecto</h1>
            <form onSubmit={agregarProyecto} style={{padding: '1rem', display: 'flex', flexDirection: 'column', gap: '0.8rem', alignItems: 'center', marginBottom: '1.5rem'}}>
                <label>Titulo:</label>
                <input
                 type="text"
                 value={formProyecto.titulo}
                 placeholder="Titulo del Proyecto."
                 onChange={(e) => setFormProyecto({...formProyecto, titulo: e.target.value})}
                 style={{padding: '8px 15px', borderRadius: '0.5rem', maxWidth: '10vw'}}
                />
                <label>Cliente:</label>
                <input
                 type="text"
                 value={formProyecto.cliente}
                 placeholder="Cliente del Proyecto."
                 onChange={(e) => setFormProyecto({...formProyecto, cliente: e.target.value})}
                 style={{padding: '8px 15px', borderRadius: '0.5rem', maxWidth: '10vw'}}
                />
                <label>Presupuesto:</label>
                <input
                 type="number"
                 value={formProyecto.presupuesto}
                 placeholder="Presupuesto."
                 onChange={(e) => setFormProyecto({...formProyecto, presupuesto: e.target.value})}
                 style={{padding: '8px 15px', borderRadius: '0.5rem', maxWidth: '10vw'}}
                />
                <label style={{display: 'inline-flex',  cursor: 'pointer'}}>
                    Proyecto Activo:
                </label>
                <input 
                  type="checkbox"
                  checked={formProyecto.activo}
                  onChange={(e) => setFormProyecto({ ...formProyecto, activo: e.target.checked })}
                  style={{width: '30px', height: '25px', accentColor: '#49ad85', cursor: 'pointer'}}
                />
                <button style={{display: 'inline-block', padding: '8px 15px', backgroundColor: '#49ad85', border: 'none', borderRadius: '0.8em'}}>
                    Agregar..
                </button>
            </form>
            <h2 style={{marginBottom: '1rem', padding: '0.5em', borderBottom: '2px solid #80807f', borderTop: '2px solid #80807f'}}>Listas de productos:</h2>
            <div style={{display: "flex", flexFlow: 'wrap', textAlign: 'center', padding: '0 10px', justifyContent: "center", alignItems: "center"}}>
            {proyecto.map((proy) => (
                <div style={{backgroundColor: '#444444a5', borderRadius: '1rem', maxWidth: '40%', height: 'auto', margin: '0.7em', paddingBottom: '0.8em',}} key={proy.id}>
                    <div style={{display: 'flex', justifyContent: "space-around", backgroundColor: '#49ad85', borderRadius: '1rem', marginBottom: '0.8em', gap: '1rem', padding: '0 7px'}}>
                        <h3>{proy.titulo}</h3>
                        <h4>Estado: {proy.activo ? 'Activo' : 'Inactivo'}</h4>
                    </div>
                    <p><b>Cliente:</b>{proy.cliente}</p>
                    <p><b>Presupuesto:</b>{proy.presupuesto}</p>
                </div>
            ))}
            </div>
        </div>
    )
}

export default PanelProyectos;