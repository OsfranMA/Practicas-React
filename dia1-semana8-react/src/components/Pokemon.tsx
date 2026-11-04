import { usePokemon } from "../hooks/usePokemon";

function Pokemon() {
    const {pokemon, cargando, error} = usePokemon();
    if (cargando) {
        return <div style={{backgroundColor: '#f2f2f2', padding: '1rem', color: '#000'}}><h2 style={{fontSize: '2.3rem'}}>Cargando Datos</h2></div>;
    } if (error) {
        return <div style={{backgroundColor: '#f2f2f2', padding: '1rem', color: '#000'}}><h2 style={{fontSize: '2.3rem'}}>{error}</h2></div>;
    }

    return (
        <div style={{ backgroundColor: '#6364654d', color: '#fff', borderRadius: '1rem', margin: '1rem', padding: '1.5rem' }}>
            <h1>Api de pokemons</h1>
            <p>Utilizada de la api gratuita de internet pokeapi .-.</p>
            <div>
                <article style={{backgroundColor: '#414141', padding: '1rem', margin: '0.8rem 1rem', borderRadius: '1rem'}} key={pokemon?.id}>
                    <h2>Pokemon entrado!</h2>
                    <h1>Nombre: {pokemon?.name}</h1>
                    <img src={pokemon?.sprites.front_default} alt={pokemon?.sprites.front_default} />
                </article>
            </div>
        </div>
    )
}

export default Pokemon;