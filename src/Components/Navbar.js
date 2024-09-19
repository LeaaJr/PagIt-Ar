import React from "react";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-md bg-dark sticky-top border-bottom">
      <div className="container">
        {/* Logo y Nombre de la Marca */}
        <a className="navbar-brand d-md-none" href="#">
          <svg className="bi" width="24" height="24">
            <use xlinkHref="#aperture" />
          </svg>
          Aperture
        </a>
        {/* Botón de toggle para el offcanvas en dispositivos pequeños */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvas"
          aria-controls="offcanvas"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        {/* Contenido del offcanvas */}
        <div
          className="offcanvas offcanvas-end"
          tabIndex="-1"
          id="offcanvas"
          aria-labelledby="offcanvasLabel"
        >
          <div className="offcanvas-header">
            <h5 className="offcanvas-title" id="offcanvasLabel">
              Aperture
            </h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
            ></button>
          </div>
          <div className="offcanvas-body">
            <ul className="navbar-nav flex-grow-1 justify-content-between">
              <li className="nav-item">
                <a className="nav-link" href="#">
                  <svg className="bi" width="24" height="24">
                    <use xlinkHref="#aperture" />
                  </svg>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Productos
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Nosotros
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Barra de búsqueda y carrito */}
        <div className="d-flex ms-auto">
          {/* Barra de búsqueda */}
          <form className="d-flex me-3">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Buscar productos..."
              aria-label="Search"
            />
            <button className="btn btn-outline-light" type="submit">
              Buscar
            </button>
          </form>
          {/* Icono del carrito de compras */}
          <a className="nav-link position-relative" href="#">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="currentColor"
              className="bi bi-cart"
              viewBox="0 0 16 16"
            >
              <path d="M0 1a1 1 0 0 1 1-1h1.5a.5.5 0 0 1 .485.379L3.89 4H14.5a.5.5 0 0 1 .49.598l-1.5 8A.5.5 0 0 1 13 13H4a.5.5 0 0 1-.49-.402L1.01 1H1zm2.2 4l1.22 6h8.3l1.2-6H2.2zM5 12a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm9 0a2 2 0 1 1-4 0 2 2 0 0 1 4 0z" />
            </svg>
            {/* Badge de la cantidad de productos */}
            <span className="badge bg-danger position-absolute top-0 start-100 translate-middle">
              3
            </span>
          </a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;

