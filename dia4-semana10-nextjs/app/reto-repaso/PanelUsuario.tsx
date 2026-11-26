'use client';

import { useState, ReactNode } from "react";

interface menuOcciones {
    usuario: ReactNode;
    tareas: ReactNode; 
};

export default function PanelUsuario({usuario, tareas}: menuOcciones) {
    const [vision, setVision] = useState<'usuario' | 'tareas'>('usuario');
    
    return (
        <div>
            <button
            type="button"
            onClick={() => setVision('usuario')}
            >
                Usuario
            </button>
            <button
            type="button"
            onClick={() => setVision('tareas')}
            >
                Tareas
            </button>

            <div>
                {vision === 'usuario' ? usuario : tareas}
            </div>
        </div>
    )
}