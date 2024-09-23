import React from "react";
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
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={
          <main>
            <MainSection />
            <ProductSection />
          </main>
        } />
        
        {/* Ruta para la página de productos */}
        <Route path="/productos" element={<Productos />} />
        <Route path="/blog" element={<Blog />} />
      </Routes>   
      <Footer />
    </div>
  );
}

export default App;