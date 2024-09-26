const CarritoCompras = ({ carrito = [] }) => {
    return (
      <div className="carrito-compras">
        <h2>Carrito de Compras</h2>
        {carrito.length === 0 ? (
          <p>Tu carrito está vacío.</p>
        ) : (
          <ul>
            {carrito.map((producto) => (
              <li key={producto.id}>
                {producto.name} - Cantidad: {producto.cantidad} - Precio: ${producto.price * producto.cantidad}
              </li>
            ))}
          </ul>
        )}
      </div>
    );
  };