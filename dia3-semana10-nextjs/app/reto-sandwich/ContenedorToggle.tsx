'use client';
import { useState, ReactNode } from "react";

export default function ContenedorToggle({children}: {children: ReactNode}) { 
    const [abierto, setAbierto] = useState(true);  
    return (
        <section style={{textAlign: "center", margin: '1rem'}}>
        <button
        style={{backgroundColor: '#f2f2f2', padding: '8px 10px', color: '#000', borderRadius: '1rem'}}
        onClick={() => setAbierto(!abierto)}
        type="button"
        >
            {abierto ? 'Ocultar' : 'Mostrar'}
        </button>
        {abierto && <div>{children}</div>}
        </section>
    )
}