import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { MDBIcon } from 'mdb-react-ui-kit';
import '../Estilos/Navbar.css'; // Importar el archivo CSS personalizado

function Navbar({ carrito }) {
  const navigate = useNavigate();

  // Función para calcular la cantidad total de productos en el carrito
  
  const calcularTotalProductos = () => {
    return carrito.reduce((total, producto) => total + (producto.cantidad || 1), 0);
  };

  const irAFinalizarCompra = () => {
    navigate("/finalizar-compra");
  };

  return (
    <header className="header">
      <nav className="navbar">
        <div className="navbar-container">
          <Link to="/" className="navbar-brand">
            Aperture
          </Link>

          {/* Menú de navegación */}
          <div className="navbar-menu">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link to="/" className="nav-link">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/productos" className="nav-link">
                  Productos
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/blog" className="nav-link">
                  Nosotros
                </Link>
              </li>
            </ul>
          </div>

          {/* Formulario de búsqueda y botón de carrito */}
          <div className="navbar-actions">
            <form className="navbar-search">
              <input
                type="search"
                placeholder="Buscar productos..."
                className="search-input"
              />
              <button type="submit" className="search-button">
                Buscar
              </button>
            </form>

            {/* Botón del carrito */}
            <button className="carrito-boton" onClick={irAFinalizarCompra}>
              <MDBIcon fas icon="shopping-cart" />
              <span className="carrito-badge">
                {calcularTotalProductos()}
              </span>
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;



