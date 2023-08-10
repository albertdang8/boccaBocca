import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";
import HomePage from "./pages/HomePage/HomePage";
import About from "./pages/About/About";
import "./App.css";
import Pizzas from "./pages/Pizzas/Pizzas";
import Contact from "./pages/Contact/Contact";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/pizzas" element={<Pizzas />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
