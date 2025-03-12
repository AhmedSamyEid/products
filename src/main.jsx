import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import Header from "./components/layout/Header.jsx";
import { BrowserRouter, Route } from "react-router";
import { Routes } from "react-router";
import ProductsApp from "./components/layout/ProductsApp.jsx";
import ProductDetails from "./components/layout/ProductDetails.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/download" element={<App />} />
        <Route path="/contact" element={<App />} />
        <Route path="/" element={<ProductsApp />} />
        <Route path="/product/:id" element={<ProductDetails />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
