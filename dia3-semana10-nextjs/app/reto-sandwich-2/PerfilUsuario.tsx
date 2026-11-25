interface Usuario {
  id: number;
  name: string;
  username: string;
  address: {
    city: string;
  };
}

export default async function PerfilUsuario() {
    const respuesta = await fetch(`https://jsonplaceholder.typicode.com/users/2`, {
        cache: 'force-cache',
    });
    if (!respuesta.ok) throw new Error(`Error al intentar traer datos.`);
    const usuario: Usuario = await respuesta.json();
    return (
        <div key={usuario.id}>
            <h2>{usuario.name}</h2>
            <p>Nombre de Usuario: {usuario.username}</p>
            <p>Compañia: {usuario.address.city}</p>
        </div>
    )
}