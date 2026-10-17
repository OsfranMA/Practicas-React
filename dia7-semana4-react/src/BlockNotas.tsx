import { useState } from "react";

function BlockNotas() {
    const [notas, setNotas] = useState([
        { id: 1, texto: 'Nota de bienvenida.' }
    ]);

    const [texto, setTexto] = useState('');

    const agregarNotas = () => {
        if (texto.trim() === '') return;

        const notaNueva = {
            id: Date.now(),
            texto: texto,
        };

        setNotas([...notas, notaNueva]);
        setTexto('');
    };

    const eliminarNota = (idParaBorrar: number) => {
        const notasFiltradas = notas.filter((item) => item.id !== idParaBorrar);
        
        setNotas(notasFiltradas);
    };

    return (
        <div style={{ backgroundColor: '#d6353574', borderRadius: '1rem', padding: '1rem', margin: '0 1rem' }}>
            <h1>Ejercicio 1</h1>
            <h2>Block de Notas</h2>
            
            <input
                type="text"
                value={texto}
                placeholder="Agrega una Nota.."
                onChange={(e) => setTexto(e.target.value)}
                style={{ fontSize: '1.3rem', padding: '0.3em' }}
            />
            
            <button 
                onClick={agregarNotas}
                style={{ backgroundColor: 'rgb(195, 77, 64)', padding: '15px 8px', border: 'none', borderRadius: '0.2em', cursor: 'pointer' }}
            >
                Agregar
            </button>

            <h3>Tus Notas</h3>
            
            {notas.map((item) => (
                <div 
                    key={item.id}
                    style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', backgroundColor: '#c00606bb', color: '#cccccc', fontSize: '1.2rem', borderRadius: '0.4em', margin: '1rem', padding: '0.5em' }}
                >
                    <b>{item.texto}</b>
                    
                    {/* NUEVO BOTÓN: Al hacer clic, le pasamos el ID específico de esta nota */}
                    <button 
                        onClick={() => eliminarNota(item.id)}
                        style={{ backgroundColor: '#333', color: '#fff', border: 'none', padding: '5px 10px', borderRadius: '4px', cursor: 'pointer' }}
                    >
                        X
                    </button>
                </div>
            ))}
        </div>
    );
};

export default BlockNotas;