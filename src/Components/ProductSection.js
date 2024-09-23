import React from "react";
import {Link } from "react-router-dom";

function ProductSection() {
  return (
    <div className="main-custom-class">
      <div className="custom-inner-class">
          <div className="my-3 py-3">
            <h2 className="display-5">Producto1</h2>
            <p className="lead">subtitulo de producto</p>
          </div>
          <Link to="/productos">
              <div 
              className="bg-body-tertiary shadow-sm mx-auto"
              style={{ width: "80%", height: "300px", borderRadius: "21px 21px 0 0" }}
          ></div> 
          </Link>

        </div>
        <div className="custom-inner-classtwo">
          <div className="my-3 p-3">
            <h2 className="display-5">Producto2</h2>
            <p className="lead">subtitulo de producto</p>
          </div>

          <Link to="/productos">
              <div 
              className="bg-body-tertiary shadow-sm mx-auto"
              style={{ width: "80%", height: "300px", borderRadius: "21px 21px 0 0" }}
          ></div> 
          </Link>

        </div>
          <div className="custom-inner-classthree">
            <div className="my-3 p-3">
              <h2 className="display-5">Producto2</h2>
              <p className="lead">subtitulo de producto</p>
          </div>

          <Link to="/productos">
              <div 
              className="bg-body-tertiary shadow-sm mx-auto"
              style={{ width: "80%", height: "300px", borderRadius: "21px 21px 0 0" }}
          ></div> 
          </Link>

      </div>
    </div>
  );
}

export default ProductSection;
