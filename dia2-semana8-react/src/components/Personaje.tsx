import { usePersonaje } from "../hooks/usePersonaje";

function Personaje() {
  const { personajes, cargando, error } = usePersonaje(1);

  if (cargando) {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          fontSize: "3rem",
        }}
      >
        <h5>Cargando Datos...</h5>
      </div>
    );
  }
  if (error) {
    return (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          fontSize: "2rem",
        }}
      >
        <h5>{error}</h5>
      </div>
    );
  }
  return (
    <div
      style={{
        backgroundColor: "#6a008a36",
        color: "#fff",
        borderRadius: "1rem",
        margin: "1rem",
        padding: "1.5rem",
      }}
    >
      <p>Consumiendo Api de personajes </p>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          flexFlow: "wrap",
          gap: "1rem",
          margin: '1rem 0'
        }}
      >
        <article key={personajes?.id} style={{display: "flex", flexDirection: 'column', gap: '1rem', backgroundColor: '#832b9e56', borderRadius: '1rem', padding: '1.2rem', minWidth: '300px'}}>
          <h3>{personajes?.name}</h3>
          <figure style={{margin: '0.8em', height: 'auto', display: 'block', marginLeft: 'auto', marginRight: 'auto'}}>
            <img src={personajes?.image} alt={personajes?.name} />
          </figure>
          <p><b>Especie:</b> {personajes?.species}</p>
          <p><b>Estado:</b> {personajes?.status}</p>   
        </article>
      </div>
    </div>
  );
}

export default Personaje;
