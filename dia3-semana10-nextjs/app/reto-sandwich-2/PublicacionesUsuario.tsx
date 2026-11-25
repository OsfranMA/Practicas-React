interface Publicacion {
  userId: number;
  id: number;
  title: string;
  body: string;
}

export default async function PublicacionesUsuario() {
  const respuesta = await fetch('https://jsonplaceholder.typicode.com/posts?userId=2', {
    cache: 'force-cache',
  });

  if (!respuesta.ok) {
    throw new Error('Datos no encontrados');
  }

  const publicaciones: Publicacion[] = await respuesta.json();
  const primerosTres = publicaciones.slice(0, 3);

  return (
    <div>
      <h2>Publicaciones</h2>
      <ul>
        {primerosTres.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </div>
  );
}