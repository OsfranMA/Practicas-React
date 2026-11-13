import { useState } from "react";
import { useTareaModificables } from "../hooks/useTareaModificables";

function TareaModificables() {
    const {data, cargando, err, manejarCambiosForm, modificarTarea, useForm, setUseForm} = useTareaModificables();
    const [editandoId, setEditandoId] = useState<number | null>(null);
    if (cargando) return <div style={{textAlign:'center',padding:'20px',fontSize:'18px',color:'#555',fontWeight:'bold'}}>CARGANDO...</div>
    if (err) return <div style={{textAlign:'center',padding:'20px',color:'#e53e3e',fontWeight:'bold'}}>{err}</div>
    return (
        <div style={{maxWidth:'600px',margin:'30px auto',padding:'20px',fontFamily:'system-ui,sans-serif',backgroundColor:'#f8f9fa',borderRadius:'12px',boxShadow:'0 4px 10px rgba(0,0,0,0.05)'}}>
            <h1 style={{fontSize:'24px',color:'#1a1a1a',marginBottom:'20px',borderBottom:'2px solid #eee',paddingBottom:'10px'}}>Lista de Tareas</h1>
            <div>
                {data.map((t) => {
                    const estaEditando = editandoId === t.id

                    return (
                        <div key={t.id} style={{backgroundColor:'#fff',padding:'20px',borderRadius:'8px',marginBottom:'15px',border:'1px solid #e2e8f0',boxShadow:'0 2px 4px rgba(0,0,0,0.02)'}}>

                            {!estaEditando ? (
                                <>
                                <h2 style={{fontSize:'18px',margin:'0 0 8px 0',color:'#2d3748'}}>{t.title}</h2>
                                <p style={{margin:'0 0 15px 0',color:'#718096',fontSize:'14px'}}><b>Estado:</b>{t.completed ? 'Completada' : 'Incompleta'}</p>
                                <button
                                style={{backgroundColor:'#3182ce',color:'#fff',border:'none',padding:'8px 14px',borderRadius:'6px',cursor:'pointer',fontWeight:'600',fontSize:'14px'}}
                                onClick={() => {
                                    setEditandoId(t.id)
                                    setUseForm({ title: t.title, completed: t.completed })
                                    useForm.completed = t.completed
                                }}
                                >Modificar Tarea
                                </button>
                                </>
                            ) : (
                                <>
                                <div>
                                    <h2 style={{fontSize:'18px',margin:'0 0 15px 0',color:'#3182ce'}}>Editando Tarea</h2>
                                    <label style={{display:'block',fontWeight:'600',marginBottom:'5px',fontSize:'14px',color:'#4a5568'}}>Titulo:</label>
                                    <input
                                     style={{width:'100%',padding:'10px',marginBottom:'15px',borderRadius:'6px',border:'1px solid #cbd5e0',fontSize:'14px',boxSizing:'border-box',outline:'none'}}
                                     type="text"
                                     name="title"
                                     value={useForm.title}
                                     onChange={manejarCambiosForm}
                                     placeholder="Titulo de la tarea" 
                                    />
                                    <label style={{display:'block',fontWeight:'600',marginBottom:'5px',fontSize:'14px',color:'#4a5568'}}>Estado:</label>
                                    <input
                                     style={{marginBottom:'20px',cursor:'pointer'}}
                                     type="checkbox" 
                                     name="completed"
                                     checked={useForm.completed}
                                     onChange={manejarCambiosForm}
                                    />
                                    <div style={{display:'flex',gap:'10px'}}>
                                        <button
                                        style={{backgroundColor:'#38a169',color:'#fff',border:'none',padding:'10px 16px',borderRadius:'6px',cursor:'pointer',fontWeight:'600',fontSize:'14px'}}
                                        onClick={() => {
                                            modificarTarea(t.id, {title: useForm.title, completed: useForm.completed})
                                            setEditandoId(null);
                                        }}
                                        >Aplicar Cambios</button>
                                        <button
                                        style={{backgroundColor:'#e53e3e',color:'#fff',border:'none',padding:'10px 16px',borderRadius:'6px',cursor:'pointer',fontWeight:'600',fontSize:'14px'}}
                                        onClick={() => setEditandoId(null)}
                                        >X</button>
                                    </div>
                                </div>
                                </>
                            )}
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default TareaModificables;
