'use client';

import { useState, ReactNode } from 'react';

interface SelectorVistaProps {
  perfil: ReactNode;
  publicaciones: ReactNode;
}

export default function SelectorVista({ perfil, publicaciones }: SelectorVistaProps) {
  const [vista, setVista] = useState<'perfil' | 'publicaciones'>('perfil');

  return (
    <section>
      <div>
        <button type="button" onClick={() => setVista('perfil')}>
          Ver perfil
        </button>
        <button type="button" onClick={() => setVista('publicaciones')}>
          Ver posts
        </button>
      </div>

      <div>
        {vista === 'perfil' ? perfil : publicaciones}
      </div>
    </section>
  );
}