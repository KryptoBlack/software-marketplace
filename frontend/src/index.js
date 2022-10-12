import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./index.css";
import reportWebVitals from "./reportWebVitals";

// components
import Layout from "./pages/Layout/Layout";
import Home from "./pages/Home/Home";
import ProductGrid from "./pages/ProductGrid/ProductGrid";
import ProductDetail from "./pages/ProductDetail/ProductDetail";
import NotFound404 from "./pages/NotFound404/NotFound404";

function Placeholder() {
  return (
    <h1 className="text-3xl font-bold underline">This is a Placeholder!</h1>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="products" element={<ProductGrid />} />
          <Route path="product/:id" element={<ProductDetail />} />
          <Route path="*" element={<NotFound404 />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
