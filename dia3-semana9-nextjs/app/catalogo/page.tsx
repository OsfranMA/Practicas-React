import { ProductoApi } from "../types/productoApi";

async function obtenerDtsProducApi(): Promise<ProductoApi[]> {
    "use cache";
  const resProductos = await fetch(`https://fakestoreapi.com/products?limit=6`);
  if (!resProductos.ok) throw new Error(`No se encontraron datos de productos.`);
  const guardarDts = await resProductos.json();
  return guardarDts;
}

export default async function CatalagoPage() {
  const productos = await obtenerDtsProducApi();

  return (
    <div style={{ fontFamily: 'system-ui, sans-serif', padding: '40px', backgroundColor: '#f8f9fa', minHeight: '100vh', color: '#333' }}>
      <h1 style={{ textAlign: 'center', fontSize: '2.5rem', marginBottom: '10px', color: '#111', fontWeight: '700' }}>Catalago de Productos</h1>
      <p style={{ textAlign: 'center', color: '#666', marginBottom: '40px' }}>Lista de productos acontinuación:</p>
      
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '30px', maxWidth: '1200px', margin: '0 auto' }}>
        {productos.map((p) => (
          <div key={p.id} style={{ backgroundColor: '#fff', borderRadius: '12px', padding: '20px', boxShadow: '0 4px 6px rgba(0,0,0,0.05)', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', border: '1px solid #eee' }}>
            
            <figure style={{ margin: '0 0 15px 0', height: '200px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
              <img src={p.image} alt={p.title} style={{ maxHeight: '100%', maxWidth: '100%', objectFit: 'contain' }} />
            </figure>
            
            <h2 style={{ fontSize: '1.1rem', margin: '0 0 10px 0', height: '50px', overflow: 'hidden', display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical' }}>{p.title}</h2>
            
            <p style={{ fontSize: '0.9rem', color: '#555', margin: '0 0 20px 0', height: '60px', overflow: 'hidden', display: '-webkit-box', WebkitLineClamp: 3, WebkitBoxOrient: 'vertical' }}>
              <b>Descricción:</b> {p.description}
            </p>
            
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingTop: '15px', borderTop: '1px solid #eee' }}>
              <span style={{ fontSize: '0.8rem', backgroundColor: '#e3f2fd', color: '#0d47a1', padding: '4px 8px', borderRadius: '4px', fontWeight: 'bold' }}>{p.category}</span>
              <span style={{ fontSize: '1.2rem', fontWeight: '700', color: '#2e7d32' }}>${p.price}</span>
            </div>

          </div>
        ))}
      </div>
    </div>
  )
}
