import { notFound } from "next/navigation";
import Link from "next/link";

interface Publicacion {
  id: number;
  userId: number;
  title: string;
}

interface ParamsProps {
  params: Promise<{ id: string }>;
}

export default async function ContenidoPublicacion({ params }: ParamsProps) {
  const { id } = await params;

  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
    cache: "force-cache",
  });

  if (!res.ok) throw new Error(`Error al cargar publicación`);
  if (res.status === 404) return notFound();

  const publicaciones: Publicacion = await res.json();

  return (
    <div>
      <Link href="/publicaciones">--- Volver a inicio</Link>
      <div key={publicaciones.id}>
          <h2>{publicaciones.title}</h2>
          <p>{publicaciones.userId}</p>
        </div>
    </div>
  );
}
