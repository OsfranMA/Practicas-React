interface TareasUsuario {
    readonly id: number;
    title: string;
    completed: boolean;
};

export default async function TareasUsuario() {
    const res = await fetch(`https://jsonplaceholder.typicode.com/todos?userId=3`, {
        cache: 'force-cache'
    });
    if (!res.ok) throw new Error(`Error al tratar de encontrar datos`);
    const guarTareasUsuario: TareasUsuario[] = await res.json();
    const tareasUsuario = guarTareasUsuario.slice(1, 5);

    return (
        <div>
            {tareasUsuario.map((tareas) => (
                <div key={tareas.id}>
                    <h2>{tareas.title}</h2>
                    <p>{tareas.completed ? '✅ Hecha' : '⏳ Pendiente'}</p>
                </div>
            ))}
        </div>
    )
}