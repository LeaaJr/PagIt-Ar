import React from "react";
import Navbar from "./Components/Navbar";
import MainSection from "./Components/MainSection";
import ProductSection from "./Components/ProductSection";
import Footer from "./Components/Footer";
import './App.css';
import { library } from '@fortawesome/fontawesome-svg-core'
import { /* faFacebook, faTwitter, faGoogle */ faInstagram, } from '@fortawesome/free-brands-svg-icons';
import '@fortawesome/fontawesome-free/css/all.min.css';

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


library.add(faInstagram,)

export default App;
