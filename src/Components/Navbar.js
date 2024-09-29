import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { MDBIcon } from 'mdb-react-ui-kit';
import "../Estilos/Navbar.css"; // Importa tus estilos aquí, o el CSS que uses

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
    <header className="cabezheader">
      <nav className="navbar navbar-expand-md sticky-top custom-navbar">
        <div className="container">
          {/* Brand del navbar */}
          <a className="navbar-brand" href="#">
            <svg className="bi" width="24" height="24">
              <use xlinkHref="#aperture" />
            </svg>
            Aperture
          </a>

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
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <Link to="/" className="linkredirect">
                  <a className="nav-link" href="#" style={{ color: "black" }}>
                    Home
                  </a>
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/productos" className="linkredirect">
                  <a className="nav-link" href="#" style={{ color: "black" }}>
                    Productos
                  </a>
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/blog" className="linkredirect">
                  <a className="nav-link" href="#" style={{ color: "black" }}>
                    Nosotros
                  </a>
                </Link>
              </li>
            </ul>
          </div>

          {/* Botón de carrito y buscador */}
          <div className="d-flex align-items-center ms-auto">
            {/* Botón de carrito */}
            <button
              className="nav-link position-relative carrito-boton"
              onClick={irAFinalizarCompra}
              style={{ border: "none", background: "none", cursor: "pointer" }}
            >
              <MDBIcon fas icon="shopping-cart" />
              <span className="badge bg-danger position-absolute top-0 start-100 translate-middle">
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




