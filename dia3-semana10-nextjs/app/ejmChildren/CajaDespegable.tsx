'use client';

import { useState, ReactNode } from 'react';

export default function CajaDesplegable({ children }: { children: ReactNode }) {
  const [visible, setVisible] = useState(true);

  return (
    <section>
      <button type="button" onClick={() => setVisible(!visible)}>
        {visible ? 'Ocultar bloque' : 'Mostrar bloque'}
      </button>
      {visible && <div>{children}</div>}
    </section>
  );
}