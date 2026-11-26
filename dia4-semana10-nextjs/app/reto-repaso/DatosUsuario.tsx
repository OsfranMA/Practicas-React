interface Usuario {
    readonly id: number;
    name: string;
    email: string;
};

export default async function DatosUsuario() {
    const res = await fetch(`https://jsonplaceholder.typicode.com/users/3`, {
        cache: 'force-cache',
    });
    if (!res.ok) throw new Error(`Error al tratar de encontrar datos`);
    const usuario: Usuario = await res.json();
    return (
        <div>
        <div key={usuario.id}>
            <h2>{usuario.name}</h2>
            <p>{usuario.email}</p>
        </div>
        </div>
    )
};