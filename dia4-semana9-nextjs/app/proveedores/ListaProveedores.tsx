import CardProveedor from "../components/CardProveedor";
import { Proveedor } from "../types/Proveedor";

async function obtenerDtsProveedores(): Promise<Proveedor[]> {
    const res = await fetch(`https://jsonplaceholder.typicode.com/users?_limit=6`);
    if (!res.ok) throw new Error(`Error al intentar traer datos`);
    return res.json();
};

export default async function ListaProveedores() {
    const provedoresDts = await obtenerDtsProveedores();
    return (
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '30px' }}>
            {provedoresDts.map((p) => (
                <CardProveedor key={p.id} proveedor={p}/>
            ))}
        </div>
    )
}