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

function App() {
  const [carrito, setCarrito] = useState([]); // Inicializa el carrito como un array vacío

  // Función para agregar un producto al carrito
  const agregarAlCarrito = (producto) => {
    setCarrito((prevCarrito) => [...prevCarrito, producto]);
  };

  return (
    <div>
      <Navbar carrito={carrito} /> {/* Pasa el carrito a Navbar */}
      <Routes>
        <Route path="/" element={
          <main>
            <MainSection />
            <ProductSection agregarAlCarrito={agregarAlCarrito} /> {/* Pasa la función para agregar productos */}
          </main>
        } />
        
        {/* Ruta para la página de productos */}
        <Route path="/productos" element={<Productos agregarAlCarrito={agregarAlCarrito} />} />
        <Route path="/blog" element={<Blog />} />
      </Routes>   
      <Footer />
    </div>
  );
}

export default App;