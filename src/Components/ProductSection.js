import React from "react";

function ProductSection() {
  return (
    <div className="main-custom-class">
      <div className="custom-inner-class">
        <div className="my-3 py-3">
          <h2 className="display-5">Producto1</h2>
          <p className="lead">subtitulo de producto</p>
        </div>
        <div
          className="bg-body-tertiary shadow-sm mx-auto"
          style={{ width: "80%", height: "300px", borderRadius: "21px 21px 0 0" }}
        ></div>
      </div>
      <div className="custom-inner-classtwo">
        <div className="my-3 p-3">
          <h2 className="display-5">Producto2</h2>
          <p className="lead">subtitulo de producto</p>
        </div>
        <div
          className="bg-dark shadow-sm mx-auto"
          style={{ width: "80%", height: "300px", borderRadius: "21px 21px 0 0" }}
        ></div>
      </div>
      <div className="custom-inner-classthree">
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
