interface Usuario {
  id: number;
  name: string;
  email: string;
  company: {
    name: string;
  };
}

export default async function DetallesServidor() {
  const respuesta = await fetch('https://jsonplaceholder.typicode.com/users/1', {
    cache: 'force-cache',
  });

  if (!respuesta.ok) {
    throw new Error('No se pudieron cargar los datos del servidor');
  }

  const usuario: Usuario = await respuesta.json();

  return (
    <div className="mt-4 rounded-lg border p-4">
      <h2 className="text-lg font-bold">{usuario.name}</h2>
      <p>Correo: {usuario.email}</p>
      <p>Empresa: {usuario.company.name}</p>
    </div>
  );
}