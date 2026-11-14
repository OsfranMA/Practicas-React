export default function RootLayout({ children,}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body>
        <nav style={{ background: '#222', color: 'white', padding: '15px' }}>
          <strong>MI SISTEMA DE INVENTARIO</strong> | 
          <a href="/" style={{ color: 'cyan', marginLeft: '15px' }}>Inicio</a> | 
          <a href="/productos" style={{ color: 'cyan', marginLeft: '15px' }}>Productos</a>
        </nav>

        {/* AQUÍ ADENTRO CAMBIAN LAS PÁGINAS */}
        <main style={{ padding: '20px' }}>
          {children}
        </main>
      </body>
    </html>
  );
}