import DatosUsuario from "./DatosUsuario";
import PanelUsuario from "./PanelUsuario";
import TareasUsuario from "./TareasUsuario";


export default function Page() {
    return (
        <div>
            <PanelUsuario 
            usuario={<DatosUsuario/>}
            tareas={<TareasUsuario/>}
            />
        </div>
    )
}