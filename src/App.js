import React from "react";
import Navbar from "./Components/Navbar";
import MainSection from "./Components/MainSection";
import ProductSection from "./Components/ProductSection";
import Footer from "./Components/Footer";
import './App.css';

function App() {
  return (
    <div>
      <Navbar />
      <main>
        <MainSection />
        <ProductSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;
