import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../Cards.css';

const CardDeck = () => {
  const [productos, setProductos] = useState([]);
  const [cantidad, setCantidad] = useState({});
  const [carrito, setCarrito] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5500/productos')
      .then(response => {
        console.log('Datos recibidos:', response.data); // Agrega este log
        setProductos(response.data);
      })
      .catch(error => {
        console.error('Error al obtener los productos:', error);
      });
  }, []);

  // Función para aumentar la cantidad del producto
  const aumentarCantidad = (id) => {
    setCantidad((prevCantidad) => ({
      ...prevCantidad,
      [id]: (prevCantidad[id] || 0) + 1,
    }));
  };

  // Función para disminuir la cantidad del producto
  const disminuirCantidad = (id) => {
    setCantidad((prevCantidad) => ({
      ...prevCantidad,
      [id]: Math.max((prevCantidad[id] || 0) - 1, 0),
    }));
  };

  // Función para agregar el producto al carrito
  const agregarAlCarrito = (producto) => {
    const cantidadProducto = cantidad[producto.id] || 1;
    setCarrito((prevCarrito) => {
      const productoExistente = prevCarrito.find((item) => item.id === producto.id);
      if (productoExistente) {
        return prevCarrito.map((item) =>
          item.id === producto.id ? { ...item, cantidad: item.cantidad + cantidadProducto } : item
        );
      } else {
        return [...prevCarrito, { ...producto, cantidad: cantidadProducto }];
      }
    });
    setCantidad((prevCantidad) => ({ ...prevCantidad, [producto.id]: 0 })); // Resetea el contador
  };

  return (
    <>
      <div className="custom-container-card">
        <div className="second-custom-class-card">
          <h1 className="custom-display-card">Pasiones Argentinas en Italia</h1>
          <h3 className="custom-subtitle-card">Productos auténticos que traen el alma de Argentina a Italia</h3>
        </div>
      </div>

      <div className="card-deck">
        {productos.length === 0 ? (
          <p>No hay productos disponibles en este momento.</p>
        ) : (
          productos.map((producto) => (
            <div className="card" key={producto.id}>
              <img
                className="card-img-top"
                src={`https://picsum.photos/300/200?random=${producto.id}`} // Imágenes de prueba
                alt={producto.name}
              />
              <div className="card-body">
                <h5 className="card-title">{producto.name}</h5> {/* Nombre del producto */}
                <p className="card-text">{producto.description}</p> {/* Descripción del producto */}
                <p className="card-text">Precio: ${producto.price}</p> {/* Precio del producto */}
                <p className="card-text">
                  <small className="text-muted">Stock: {producto.stock}</small> {/* Stock del producto */}
                </p>
                
                {/* Contenedor del numerador y el botón */}
                <div className="card-footer">
                  <div className="quantity-control">
                    <button onClick={() => disminuirCantidad(producto.id)}>-</button>
                    <span>{cantidad[producto.id] || 0}</span>
                    <button onClick={() => aumentarCantidad(producto.id)}>+</button>
                  </div>
                  <button className="add-to-cart" onClick={() => agregarAlCarrito(producto)}>
                    🛒 Agregar al carrito
                  </button>
                </div>
              </div>
            </div>
          ))
        )}
      </div>

      {/* Sección para mostrar el carrito de compras */}
      <div className="carrito-compras">
        <h2>Carrito de Compras</h2>
        {carrito.length === 0 ? (
          <p>Tu carrito está vacío.</p>
        ) : (
          <ul>
            {carrito.map((item) => (
              <li key={item.id}>
                {item.name} - Cantidad: {item.cantidad} - Precio: ${item.price * item.cantidad}
              </li>
            ))}
          </ul>
        )}
      </div>
    </>
  );
};

export default CardDeck;

