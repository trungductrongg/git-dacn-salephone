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
import AdminRegister from "./AdminComponents/AdminRegister";
import Admin from "./Admin";
import DashBoard from "./AdminComponents/DashBoard";
import AdminLogin from "./AdminComponents/AdminLogin";
import AdminAddCategory from "./AdminComponents/AdminAddCategory";
import AdminAllCategory from "./AdminComponents/AdminAllCategory";
import AdminEditCategory from "./AdminComponents/AdminEditCategory";
import AdminDeleteCategory from "./AdminComponents/AdminDeleteCategory";
import Login from "./components/User/Login";
import AdminAddBrand from "./AdminComponents/AdminAddBrand";
import AdminAllBrand from "./AdminComponents/AdminAllBrand";
import AdminEditBrand from "./AdminComponents/AdminEditBrand";
import AdminDeleteBrand from "./AdminComponents/AdminDeleteBrand";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Router>
      <App>
        <Routes>
          <Route index path="/" element={<Home />} />
          <Route path="/product/detail" element={<ProductDetail />} />
          <Route path="/login" element={<Login />} />
          <Route path="/products" element={<Products />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/detail" element={<BlogDetail />} />
          <Route path="/admin/login" element={<AdminLogin />} />
          <Route path="/admin" element={<Admin />}>
            <Route path="register" element={<AdminRegister />} />
            <Route path="dashboard" element={<DashBoard />} />
            <Route path="add-category" element={<AdminAddCategory />} />
            <Route path="all-category" element={<AdminAllCategory />} />
            <Route path="edit-category/:id" element={<AdminEditCategory />} />
            <Route
              path="delete-category/:id"
              element={<AdminDeleteCategory />}
            />

            <Route path="add-brand" element={<AdminAddBrand />} />
            <Route path="all-brand" element={<AdminAllBrand />} />
            <Route path="edit-brand/:id" element={<AdminEditBrand />} />
            <Route path="delete-brand/:id" element={<AdminDeleteBrand />} />
          </Route>
        </Routes>
      </App>
    </Router>
  </React.StrictMode>
);

reportWebVitals();
