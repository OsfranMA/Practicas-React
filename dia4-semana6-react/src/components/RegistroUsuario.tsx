import { useState } from "react";

interface DatosPerfil {
    usuario: string;
    biografia: string;
    nivelExperiencia: string;
}

function RegistroUsuario() {
    const [formData, setFormData] = useState<DatosPerfil>({
        usuario: "",
        biografia: "",
        nivelExperiencia: "Junior"
    });

    return (
        <div style={{backgroundColor: '#3bc5553a',margin: '0 1rem',padding: '1rem', border: '1px solid #ccc', borderRadius: '1rem' }}>
            <h1>Ejemplo de Formulario con Objeto</h1>
            
            <div style={{ marginBottom: '1rem' }}>
                <label>Usuario: </label>
                <input 
                    type="text" 
                    value={formData.usuario}
                    onChange={(e) => setFormData({ ...formData, usuario: e.target.value })}
                />
            </div>

            <div style={{ marginBottom: '1rem' }}>
                <label>Biografía: </label>
                <textarea 
                    value={formData.biografia}
                    onChange={(e) => setFormData({ ...formData, biografia: e.target.value })}
                />
            </div>

            <div style={{ background: '#acd3ac3a', padding: '0.5rem', color: '#333', borderRadius: '1rem' }}>
                <p><strong>Estado actual en tiempo real:</strong></p>
                <p>Usuario: {formData.usuario || "(vacío)"}</p>
                <p>Biografía: {formData.biografia || "(vacío)"}</p>
                <p>Nivel: {formData.nivelExperiencia}</p>
            </div>
        </div>
    );
}

export default RegistroUsuario;