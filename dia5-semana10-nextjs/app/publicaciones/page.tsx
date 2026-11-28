import Link from 'next/link';

interface Publicacion {
  id: number;
  userId: number;
  title: string;
}

export default async function PublicacionesPage() {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts', {
    cache: 'force-cache',
  });

  if (!res.ok) {
    throw new Error('Error al cargar las publicaciones');
  }

  const publicaciones: Publicacion[] = await res.json();

  return (
    <div>
      <h1>Publicaciones</h1>
      <ul>
        {publicaciones.slice(0, 5).map((post) => (
          <li key={post.id}>
            <Link href={`/publicaciones/${post.id}`}>
              Ver publicación de {post.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}