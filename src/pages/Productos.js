import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify'; // Importa la función `toast` de `react-toastify`
import '../Estilos/Cards.css';

const CardDeck = ({ agregarAlCarrito }) => {
  const [productos, setProductos] = useState([]);
  const [cantidad, setCantidad] = useState({});

  useEffect(() => {
    axios.get('http://localhost:5500/productos')
      .then(response => {
        console.log('Datos recibidos:', response.data);
        setProductos(response.data);
      })
      .catch(error => {
        console.error('Error al obtener los productos:', error);
      });
  }, []);

  const aumentarCantidad = (id) => {
    setCantidad((prevCantidad) => ({
      ...prevCantidad,
      [id]: (prevCantidad[id] || 0) + 1,
    }));
  };

  const disminuirCantidad = (id) => {
    setCantidad((prevCantidad) => ({
      ...prevCantidad,
      [id]: Math.max((prevCantidad[id] || 0) - 1, 0),
    }));
  };

  const manejarAgregarAlCarrito = (producto) => {
    const cantidadProducto = cantidad[producto.id] || 1;
    agregarAlCarrito({ ...producto, cantidad: cantidadProducto });
    setCantidad((prevCantidad) => ({ ...prevCantidad, [producto.id]: 0 }));

    // Mostrar la notificación de producto agregado

    toast.success(`El producto "${producto.name}" se ha agregado al carrito.`, {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
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
                  <button className="add-to-cart" onClick={() => manejarAgregarAlCarrito(producto)}>
                    🛒 Agregar al carrito
                  </button>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </>
  );
};

export default CardDeck;



