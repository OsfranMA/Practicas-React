function ProductoCard (pronps: {nombre: string, precio: string | number, enStock: boolean | string}) {
    return (
        <div style={{margin: '1rem', backgroundColor: '#e5e2e2', padding: '1rem', borderRadius: '0.5em', boxShadow: '0 0 1rem #e3cdcd'}}>
        <h1>Ejercicio 1</h1>
        <br />
        <h2 style={{textAlign: 'center', color: 'rgba(64, 64, 64, 0.86)'}}>{pronps.nombre}</h2>
        <p><b>Descripción:</b> Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis quia temporibus magnam, repellat architecto quam optio quis explicabo molestiae dolorum qui delectus laborum suscipit, consectetur libero! Saepe, accusantium cupiditate! Consequuntur molestias maiores quisquam quaerat, modi exercitationem earum eligendi itaque, eum debitis cum. Quia, quibusdam perferendis.</p>
        <p>Precio <span style={{color: '#b92d2d'}}>{pronps.precio}</span></p>
        <p>Stock <span style={{color: '#b92d2d'}}>{pronps.enStock}</span></p>
        </div>
    );
};

export default ProductoCard;