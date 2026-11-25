import DetallesServidor from "./DetallesServidor";
import ContenedorToggle from "./ContenedorToggle";

export default function Page() {
    return (
        <>
        <div>
            <ContenedorToggle>
                <DetallesServidor/>
            </ContenedorToggle>
        </div>
        </>
    )
}