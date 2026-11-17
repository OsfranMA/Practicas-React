import { Usuario } from "../types/usuarios";

async function obtenerUsuarios(): Promise<Usuario[]> {
  const respuesta = await fetch('https://jsonplaceholder.typicode.com/users');

  if (!respuesta.ok) {
    throw new Error('Error al obtener los usuarios del servidor');
  }

  return respuesta.json();
}

export default async function UsuariosPage() {
  const usuarios = await obtenerUsuarios();

  return (
    <main style={{ padding: '40px', fontFamily: 'system-ui' }}>
      <h1>👥 Directorio de Usuarios (Server Component)</h1>
      <p style={{ marginBottom: '20px', color: '#666' }}>
        Estos datos vinieron directo del servidor sin usar useEffect ni useState.
      </p>

      <div style={{ display: 'grid', gap: '15px' }}>
        {usuarios.map((user) => (
          <div
            key={user.id}
            style={{
              border: '1px solid #ddd',
              padding: '15px',
              borderRadius: '8px',
            }}
          >
            <h3>{user.name}</h3>
            <p>📧 {user.email}</p>
            <p>🏢 Empresa: {user.company.name}</p>
          </div>
        ))}
      </div>
    </main>
  );
}