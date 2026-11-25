import SelectorVista from './SelectorVista';
import PerfilUsuario from './PerfilUsuario';
import PublicacionesUsuario from './PublicacionesUsuario';

export default function Page() {
  return (
    <main>
      <SelectorVista
        perfil={<PerfilUsuario />}
        publicaciones={<PublicacionesUsuario />}
      />
    </main>
  );
}