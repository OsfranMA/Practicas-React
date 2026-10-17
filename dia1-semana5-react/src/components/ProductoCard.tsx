interface ProductoProps {
  nombre: string;
  precio: number;
  enStock: boolean;
  categoria: string;
}

function ProductoCard({ nombre, precio, enStock, categoria }: ProductoProps) {
  return (
    <div
    style={{
        backgroundColor: '#bc1f531a',
        color: '#fff',
        padding: '1rem',
        margin: '0 1rem',
        borderLeft: enStock ? '5px solid #47d964c1' : '5px solid #d13939d1',
        borderRadius: '1rem'
    }}>
        <h1>Ejercicio 2</h1>
        <h2>{nombre}</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem illo ut dolore fugiat consequuntur. Enim nulla at quod numquam hic cum aut quidem.</p>
        <p>{categoria}</p>
        <p>{enStock ? 'Disponible' : 'No esta disponible'}</p>
        <p>{precio}</p>
    </div>
  );
}

export default ProductoCard