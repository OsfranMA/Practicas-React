import Link from 'next/link';
import { notFound } from 'next/navigation';

interface DetalleUsuario {
  id: number;
  name: string;
  email: string;
  phone: string;
}

interface ContenidoUsuarioProps {
  params: Promise<{ id: string }>;
}

export default async function ContenidoUsuario({ params }: ContenidoUsuarioProps) {
  const { id } = await params;

  const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`, {
    cache: 'force-cache',
  });

  if (res.status === 404) {
    notFound();
  }

  if (!res.ok) {
    throw new Error('Error al obtener el detalle del usuario');
  }

  const usuario: DetalleUsuario = await res.json();

  return (
    <div>
      <Link href="/usuarios">← Volver a usuarios</Link>
      <h1>{usuario.name}</h1>
      <p>Correo: {usuario.email}</p>
      <p>Teléfono: {usuario.phone}</p>
    </div>
  );
}