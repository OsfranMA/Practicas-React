import { useContadorPersistente } from '../hooks/useContenedorPersistente';

function ContadorBox() {
    const { contador, incrementar, decrementar } = useContadorPersistente("mi_contador", 5);

    return (
        <div style={{ padding: "1rem", background: "#2d3748", color: "#fff", margin: '0 1rem', borderRadius: '1rem' }}>
            <h2>Contador: {contador}</h2>
            <button onClick={decrementar}>Restar</button>
            <button onClick={incrementar}>Sumar</button>
        </div>
    );
}

export default ContadorBox;