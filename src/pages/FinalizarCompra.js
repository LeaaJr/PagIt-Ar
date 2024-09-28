import React from 'react';
import { Link } from 'react-router-dom';
import '../Estilos/FinalizarCompra.css';

const FinalizarCompra = ({ carrito, actualizarCantidadProducto, eliminarProducto }) => {
  const calcularTotal = () => {
    return carrito.reduce((total, producto) => total + producto.price * producto.cantidad, 0);
  };

  return (
    <div className="finalizar-compra-container mt-5">
      <h1 className="finalizar-compra-header mb-4">Finalizar Compra</h1>

      {carrito.length === 0 ? (
        <p>Tu carrito está vacío.</p>
      ) : (
        <table className="finalizar-compra-table table">
          <thead>
            <tr>
              <th scope="col">Producto</th>
              <th scope="col">Cantidad</th>
              <th scope="col">Precio</th>
              <th scope="col">Subtotal</th>
              <th scope="col">Acciones</th>
            </tr>
          </thead>
          <tbody>
            {carrito.map((producto) => (
              <tr key={producto.id}>
                <td>{producto.name}</td>
                <td>
                  <button 
                    className="finalizar-compra-btn finalizar-compra-btn-outline-primary me-2"
                    onClick={() => actualizarCantidadProducto(producto.id, producto.cantidad - 1)}
                    disabled={producto.cantidad <= 1}
                  >
                    -
                  </button>
                  {producto.cantidad}
                  <button 
                    className="finalizar-compra-btn finalizar-compra-btn-outline-primary ms-2"
                    onClick={() => actualizarCantidadProducto(producto.id, producto.cantidad + 1)}
                  >
                    +
                  </button>
                </td>
                <td>${producto.price}</td>
                <td>${producto.price * producto.cantidad}</td>
                <td>
                  <button 
                    className="finalizar-compra-btn finalizar-compra-btn-danger"
                    onClick={() => eliminarProducto(producto.id)}
                  >
                    Eliminar
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}

      <div className="finalizar-compra-total">
        <h3>Total: ${calcularTotal()}</h3>
        <Link to="/">
          <button className="finalizar-compra-btn finalizar-compra-btn-success me-3">Seguir Comprando</button>
        </Link>
        <button className="finalizar-compra-btn finalizar-compra-btn-primary">Realizar Pago</button>
      </div>
    </div>
  );
};

export default FinalizarCompra;
