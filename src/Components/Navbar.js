import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { MDBIcon } from 'mdb-react-ui-kit';
import "../Estilos/Navbar.css"; // Importa tus estilos aquí

function Navbar({ carrito }) {
  const navigate = useNavigate();

  // Calcular la cantidad total de productos en el carrito
  const calcularTotalProductos = () => {
    return carrito.reduce((total, producto) => total + (producto.cantidad || 1), 0);
  };

  // Función para manejar la navegación a la página de finalizar compra
  const irAFinalizarCompra = () => {
    navigate("/finalizar-compra");
  };

  // Efecto para cambiar el fondo del navbar cuando se hace scroll
  useEffect(() => {
    const handleScroll = () => {
      const navbar = document.querySelector('.navbar');
      if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
      } else {
        navbar.classList.remove('scrolled');
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header>
      <nav className="navbar navbar-expand-lg custom-navbar">
        <div className="container navbar-container">
          {/* Brand del navbar */}
          <Link to="/" className="navbar-brand">
            <svg className="bi" width="24" height="24">
              <use xlinkHref="#aperture" />
            </svg>
            Aperture
          </Link>

          {/* Botón de hamburguesa para menú desplegable en dispositivos pequeños */}
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          {/* Contenedor colapsable del menú */}
          <div className="collapse navbar-collapse navbar-menu" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <Link to="/" className="nav-link" style={{ color: "black" }}>
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/productos" className="nav-link" style={{ color: "black" }}>
                  Productos
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/nosotros" className="nav-link" style={{ color: "black" }}>
                  Nosotros
                </Link>
              </li>
            </ul>
          </div>

          {/* Botón de carrito */}
          <div className="navbar-actions d-flex align-items-center">
            <button
              className="position-relative carrito-boton"
              onClick={irAFinalizarCompra}
              style={{ border: "none", background: "none", cursor: "pointer" }}
            >
              <MDBIcon fas icon="shopping-cart" />
              <span className="carrito-badge bg-danger position-absolute top-0 start-100 translate-middle" style={{paddingRight:"0,1rem"}}>
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




