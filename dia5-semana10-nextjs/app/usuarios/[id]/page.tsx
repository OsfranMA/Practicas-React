import { Suspense } from 'react';
import ContenidoUsuario from './ContenidoUsuario';

interface PageProps {
  params: Promise<{ id: string }>;
}

export default function DetalleUsuarioPage({ params }: PageProps) {
  return (
    <Suspense fallback={<p>Cargando usuario...</p>}>
      <ContenidoUsuario params={params} />
    </Suspense>
  );
}