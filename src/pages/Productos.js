import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../Cards.css';

const CardDeck = () => {
  const [productos, setProductos] = useState([]);

  
  useEffect(() => {
    axios.get('http://localhost:5500/productos')
      .then(response => {
        setProductos(response.data);
      })
      .catch(error => {
        console.error('Error al obtener los productos:', error);
      });
  }, []);

  return (
    <>
      <div className="custom-container-card">
        <div className="second-custom-class-card">
          <h1 className="custom-display-card">Pasiones Argentinas en Italia</h1>
          <h3 className="custom-subtitle-card">Productos auténticos que traen el alma de Argentina a Italia</h3>
        </div>
      </div>

      <div className="card-deck">

        {/* Renderiza las tarjetas para cada producto */}

        {productos.length === 0 ? (
          <p>No hay productos disponibles en este momento.</p>
        ) : (
          productos.map((producto) => (
            <div className="card" key={producto.id}>
              <img
                className="card-img-top"
                src={`https://picsum.photos/300/200?random=${producto.id}`} // Imágenes de prueba
                alt={producto.nombre}
              />
              <div className="card-body">
                <h5 className="card-title">{producto.nombre}</h5>
                <p className="card-text">{producto.descripcion}</p>
                <p className="card-text">Precio: ${producto.precio}</p>
                <p className="card-text">
                  <small className="text-muted">Stock: {producto.stock}</small>
                </p>
              </div>
            </div>
          ))
        )}
      </div>
    </>
  );
};

export default CardDeck;
