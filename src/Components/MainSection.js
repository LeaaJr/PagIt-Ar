import React from "react";

function MainSection() {
  return (
    <div  className="custom-container">
      <div className="second-custom-container">
        <h1 className="custom-display">Los productos que mas buscas</h1>
        <h3 className="custom-subtitle">siempre los encontras aca !!</h3>
        <div className="d-flex gap-3 justify-content-center lead fw-normal">
          <a className="icon-link" href="#">
            Comprar
            <svg className="bi">
              <use xlinkHref="#chevron-right" />
            </svg>
          </a>
          <a className="icon-link" href="#">
            Conocenos
            <svg className="bi">
              <use xlinkHref="#chevron-right" />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
}

export default MainSection;
