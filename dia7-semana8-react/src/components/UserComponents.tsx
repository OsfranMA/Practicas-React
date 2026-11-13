import { useState } from 'react';
import { useUserUpdate } from '../hooks/useUserUpdate';

export function UserComponent() {
  const { users, loading, error, updateUser } = useUserUpdate();

  const [editandoId, setEditandoId] = useState<number | null>(null);
  const [nombreTemp, setNombreTemp] = useState('');
  const [emailTemp, setEmailTemp] = useState('');

  if (loading) return <p style={{ color: 'white' }}>Cargando...</p>;
  if (error) return <p style={{ color: 'red' }}>Error: {error}</p>;

  return (
    <div style={{ padding: '20px', fontFamily: 'sans-serif', color: 'white', backgroundColor: '#111827' }}>
      <h2>Gestor de Usuarios (Modo Edición Desplegable)</h2>
      
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1rem', marginTop: '1rem' }}>
        {users.map(user => {
          const estaEditando = editandoId === user.id;

          return (
            <div key={user.id} style={{ border: '1px solid #374151', padding: '15px', borderRadius: '8px', backgroundColor: '#1f2937', display: 'flex', flexDirection: 'column', gap: '10px' }}>
              
             
              {!estaEditando ? (
                <>
                  <h3>{user.name}</h3>
                  <p style={{ color: '#9ca3af', margin: '0' }}>{user.email}</p>
                  
                  <button 
                    onClick={() => {
                      setEditandoId(user.id);       // Activamos la edición para este ID
                      setNombreTemp(user.name);     // Prellenamos con el valor actual
                      setEmailTemp(user.email);     // Prellenamos con el valor actual
                    }}
                    style={{ marginTop: 'auto', backgroundColor: '#374151', color: '#14a98c', border: '1px solid #14a98c', padding: '8px', borderRadius: '6px', cursor: 'pointer', fontWeight: 'bold' }}
                  >
                    ✏️ Modificar Usuario
                  </button>
                </>
              ) : (
                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  <label style={{ fontSize: '0.85rem', color: '#14a98c', fontWeight: 'bold' }}>Editando Usuario:</label>
                  
                  <input 
                    type="text" 
                    value={nombreTemp} 
                    onChange={(e) => setNombreTemp(e.target.value)}
                    style={{ padding: '6px', borderRadius: '4px', border: '1px solid #374151', backgroundColor: '#111827', color: 'white' }}
                  />
                  
                  <input 
                    type="text" 
                    value={emailTemp} 
                    onChange={(e) => setEmailTemp(e.target.value)}
                    style={{ padding: '6px', borderRadius: '4px', border: '1px solid #374151', backgroundColor: '#111827', color: 'white' }}
                  />

                  <div style={{ display: 'flex', gap: '8px', marginTop: '5px' }}>
                    <button 
                      onClick={() => {
                        updateUser(user.id, { name: nombreTemp, email: emailTemp });
                        setEditandoId(null); // Cerramos el menú de edición
                      }}
                      style={{ flex: 1, backgroundColor: '#14a98c', color: 'white', border: 'none', padding: '8px', borderRadius: '6px', cursor: 'pointer', fontWeight: 'bold' }}
                    >
                      💾 Agregar Cambios
                    </button>

                    <button 
                      onClick={() => setEditandoId(null)} // Cancelar edición
                      style={{ backgroundColor: '#374151', color: '#9ca3af', border: 'none', padding: '8px', borderRadius: '6px', cursor: 'pointer' }}
                    >
                      ❌
                    </button>
                  </div>
                </div>
              )}

            </div>
          );
        })}
      </div>
    </div>
  );
}