import React from "react";

function MainSection() {
  return (
    <div className="position-relative overflow-hidden p-3 p-md-5 m-md-3 text-center bg-body-tertiary">
      <div className="col-md-6 p-lg-5 mx-auto my-5">
        <h1 className="display-3 fw-bold">Los productos que mas buscas</h1>
        <h3 className="fw-normal text-muted mb-3">siempre los encontras aca !!</h3>
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
      <div className="product-device shadow-sm d-none d-md-block"></div>
      <div className="product-device product-device-2 shadow-sm d-none d-md-block"></div>
    </div>
  );
}

export default MainSection;
