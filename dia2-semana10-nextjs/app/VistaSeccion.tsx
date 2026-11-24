'use client';

import { useState } from 'react';
import EncabezadoSeccion from './EncabezadoSeccion';

export default function VistaSeccion() {
  const [abierto, setAbierto] = useState(false);

  return (
    <section>
      <EncabezadoSeccion />
      <button type="button" onClick={() => setAbierto(!abierto)}>
        {abierto ? 'Ocultar nota' : 'Mostrar nota'}
      </button>
      {abierto && <p>Nota activa en el navegador.</p>}
    </section>
  );
}