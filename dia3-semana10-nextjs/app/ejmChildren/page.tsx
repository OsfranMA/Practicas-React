import CajaDesplegable from './CajaDespegable';
import InfoServidor from './InfoServidor';

export default function Page() {
  return (
    <main>
      <CajaDesplegable>
        <InfoServidor />
      </CajaDesplegable>
    </main>
  );
}