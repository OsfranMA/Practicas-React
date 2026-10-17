interface ProductoProps {
  nombre: string;
  precio: number;
  enStock: boolean;
  categoria: string;
  onAcumular: () => void;
}

function ProductoCard({ nombre, precio, enStock, categoria, onAcumular}: ProductoProps) {
  return (
    <div
    style={{
        backgroundColor: '#1a1f1d9a',
        color: '#fff',
        padding: '1rem',
        margin: '1rem 1rem',
        borderLeft: enStock ? '6px solid #47d964c1' : '6px solid #d13939d1',
        borderRadius: '1rem',
        display: 'flex',
        flexDirection: 'column',
        gap: '0.7em'
    }}>
        <h1>Ejercicio 1</h1>
        <h2>{nombre}</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem illo ut dolore fugiat consequuntur. Enim nulla at quod numquam hic cum aut quidem.</p>
        <p>{categoria}</p>
        <p>{enStock ? 'Disponible' : 'No esta disponible'}</p>
        <p>{precio}</p>
        <button disabled={enStock ? false : true}  onClick={onAcumular} style={{fontSize: '1rem',backgroundColor: enStock ? 'rgba(38, 211, 41, 0.73)' : 'rgba(211, 38, 38, 0.73)', border: 'none', borderRadius: '0.8em', display: 'inline-block', padding: '10px 5px'}}>
          {enStock ? 'Agregar al Carrito' : 'No Disponible'}
          </button>
    </div>
  );
}

export default ProductoCard