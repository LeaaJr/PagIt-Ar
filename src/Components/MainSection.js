import React from "react";
import { Link } from "react-router-dom";

function MainSection() {
  return (
    <div  className="custom-container">
      <div className="second-custom-container">
        <h1 className="custom-display">Pasiones Argentinas en Italia</h1>
        <h3 className="custom-subtitle">Productos auténticos que traen el alma de Argentina a Italia</h3>
        <div className="d-flex gap-3 justify-content-center lead fw-normal">
          <Link to="/productos">
            <a className="icon-link" href="#">
            Comprar
            <svg className="bi">
              <use xlinkHref="#chevron-right" />
            </svg>
            </a>
          </Link>

          <Link to="/blog">
          <a className="icon-link" href="#">
            Conocenos
            <svg className="bi">
              <use xlinkHref="#chevron-right" />
            </svg>
          </a>
          </Link>
          
        </div>
      </div>
    </div>
  );
}

export default MainSection;
