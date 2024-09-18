import React from "react";

function ProductSection() {
  return (
    <div className="d-md-flex flex-md-equal w-100 my-md-3 ps-md-3">
      <div className="text-bg-dark me-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center overflow-hidden">
        <div className="my-3 py-3">
          <h2 className="display-5">Producto1</h2>
          <p className="lead">subtitulo de producto</p>
        </div>
        <div
          className="bg-body-tertiary shadow-sm mx-auto"
          style={{ width: "80%", height: "300px", borderRadius: "21px 21px 0 0" }}
        ></div>
      </div>
      <div className="bg-body-tertiary me-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center overflow-hidden">
        <div className="my-3 p-3">
          <h2 className="display-5">Producto2</h2>
          <p className="lead">subtitulo de producto</p>
        </div>
        <div
          className="bg-dark shadow-sm mx-auto"
          style={{ width: "80%", height: "300px", borderRadius: "21px 21px 0 0" }}
        ></div>
      </div>
      <div className="bg-body-tertiary me-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center overflow-hidden">
        <div className="my-3 p-3">
          <h2 className="display-5">Producto2</h2>
          <p className="lead">subtitulo de producto</p>
        </div>
        <div
          className="bg-dark shadow-sm mx-auto"
          style={{ width: "80%", height: "300px", borderRadius: "21px 21px 0 0" }}
        ></div>
      </div>
    </div>
  );
}

export default ProductSection;
