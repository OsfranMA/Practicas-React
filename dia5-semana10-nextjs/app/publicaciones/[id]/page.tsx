import { Suspense } from "react";
import ContenidoPublicacion from "./ContenidoPublicacion";

interface DatosPageProp {
  params: Promise<{ id: string }>;
}

export default function DetallePage({params}: DatosPageProp) {
    return (
        <Suspense fallback={<p>...Cargando</p>}>
            <ContenidoPublicacion params={params} />
        </Suspense>
    )
}