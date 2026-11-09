import { useDatosFormulario } from "../hooks/useDatosFormulario";

function DatosFormulario() {
    const {manejarForm, manejarEnvio, formu} = useDatosFormulario()
    
    return (
        <div>
            <h1>Formulario</h1>
            <p>envio de datos a la API.</p>
            <br />
            <form onSubmit={manejarEnvio}>
                <input
                 type="text" 
                 name="title"
                 value={formu.title}
                 onChange={manejarForm}
                 placeholder="title the produc"
                />
                <input
                 type="number" 
                 name="price"
                 value={formu.price}
                 onChange={manejarForm}
                 placeholder="price the produc"
                />
                <input
                 type="text" 
                 name="description"
                 value={formu.description}
                 onChange={manejarForm}
                 placeholder="description the produc"
                />
                <input
                 type="text" 
                 name="image"
                 value={formu.image}
                 onChange={manejarForm}
                 placeholder="image the produc"
                />
                <input
                 type="text"
                 name="category" 
                 value={formu.category}
                 onChange={manejarForm}
                 placeholder="category the produc"
                />
                <button type="submit">Enviar a la API</button>
            </form>
        </div>
    )
}

export default DatosFormulario;