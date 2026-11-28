import Link from 'next/link';

interface Usuario {
  id: number;
  name: string;
}

export default async function UsuariosPage() {
  const res = await fetch('https://jsonplaceholder.typicode.com/users', {
    cache: 'force-cache',
  });
  if (!res.ok) throw new Error('Error al cargar usuarios');

  const usuarios: Usuario[] = await res.json();

  return (
    <div>
      <h1>Usuarios</h1>
      <ul>
        {usuarios.slice(0, 5).map((usuario) => (
          <li key={usuario.id}>
            <Link href={`/usuarios/${usuario.id}`}>
              Ver perfil de {usuario.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}