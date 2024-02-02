import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "../node_modules/font-awesome/css/font-awesome.min.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home/Home";
import Products from "./components/Product/Products";
import ProductDetail from "./components/Product/ProductDetail";
import Blog from "./components/Blog/Blog";
import BlogDetail from "./components/Blog/BlogDetail";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Router>
      <App>
        <Routes>
          <Route index path="/" element={<Home />} />
          <Route path="/product/detail" element={<ProductDetail />} />
          <Route path="/products" element={<Products />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/detail" element={<BlogDetail />} />
        </Routes>
      </App>
    </Router>
  </React.StrictMode>
);

reportWebVitals();
