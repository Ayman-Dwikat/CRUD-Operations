import React from "react";
import ReactDOM from "react-dom/client";
import { Footer, Navbar } from "./components/layout";
import { Home } from "./components/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Contact } from "./components/Contact";
import { Features } from "./components/Features";
import { Email } from "./components/Email";
import { NotFound } from "./components/NotFound";
import CreateProduct from "./components/products/CreateProduct";
import EditProduct from "./components/products/EditProduct";
import ViewProduct from "./components/products/ViewProduct";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/features" element={<Features />} />
        <Route path="/email" element={<Email />} />
        <Route path="/create-product" element={<CreateProduct />} />
        <Route path="/edit-product/:id" element={<EditProduct />} />
        <Route path="/view-product/:id" element={<ViewProduct />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
