import React, { useState } from "react";
import Navbar from "./Components/Navbar";
import MainSection from "./Components/MainSection";
import ProductSection from "./Components/ProductSection";
import Footer from "./Components/Footer";
import './App.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { Routes, Route } from "react-router-dom";
import Productos from './pages/Productos';
import Blog from "./pages/Blog";
import FinalizarCompra from './pages/FinalizarCompra';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

function App() {
  const [carrito, setCarrito] = useState([]);

  // Función para agregar un producto al carrito
  const agregarAlCarrito = (producto) => {
    setCarrito((prevCarrito) => {
      const productoExistente = prevCarrito.find((item) => item.id === producto.id);
      if (productoExistente) {
        return prevCarrito.map((item) =>
          item.id === producto.id ? { ...item, cantidad: item.cantidad + producto.cantidad } : item
        );
      } else {
        return [...prevCarrito, producto];
      }
    });
  };

  // Nueva función: actualizar la cantidad de un producto en el carrito
  const actualizarCantidadProducto = (productoId, nuevaCantidad) => {
    setCarrito((prevCarrito) =>
      prevCarrito.map((producto) =>
        producto.id === productoId ? { ...producto, cantidad: nuevaCantidad } : producto
      )
    );
  };

  // Nueva función: eliminar un producto del carrito
  const eliminarProducto = (productoId) => {
    setCarrito((prevCarrito) => prevCarrito.filter((producto) => producto.id !== productoId));
  };

  return (
    <div>
      <Navbar carrito={carrito} />
      <Routes>
        <Route path="/" element={
          <main>
            <MainSection />
            <ProductSection agregarAlCarrito={agregarAlCarrito} />
          </main>
        } />
        <Route path="/productos" element={<Productos agregarAlCarrito={agregarAlCarrito} />} />
        <Route path="/blog" element={<Blog />} />
        
        {/* Asegúrate de pasar carrito, actualizarCantidadProducto y eliminarProducto como props */}
        <Route
          path="/finalizar-compra"
          element={
            <FinalizarCompra
              carrito={carrito}
              actualizarCantidadProducto={actualizarCantidadProducto}
              eliminarProducto={eliminarProducto}
            />
          }
        />
      </Routes>
      <Footer />
      <ToastContainer position="top-right" autoClose={3000} />
    </div>
  );
}

export default App;




