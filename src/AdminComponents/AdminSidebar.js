import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function AdminSidebar() {
  const [isSubMenuOpen, setIsSubMenuOpen] = useState({
    category1: false,
    category2: false,
  });

  const toggleSubMenu = (category) => {
    setIsSubMenuOpen({
      ...isSubMenuOpen,
      [category]: !isSubMenuOpen[category],
    });
  };

  return (
    <aside>
      <div id="sidebar" className="nav-collapse">
        {/* sidebar menu start*/}
        <div
          className="leftside-navigation"
          tabIndex={5000}
          style={{ overflow: "hidden", outline: "none" }}
        >
          <ul className="sidebar-menu" id="nav-accordion">
            <li>
              <Link className="active" to="/admin/dashboard">
                <i className="fa fa-dashboard" />
                <span>Dashboard</span>
              </Link>
            </li>
            <li className="sub-menu dcjq-parent-li">
              <a
                className="dcjq-parent"
                onClick={() => toggleSubMenu("category1")}
              >
                <i className="fa fa-book" />
                <span>Danh mục sản phẩm</span>
                <span className="dcjq-icon" />
              </a>
              <ul
                className="sub"
                style={{ display: isSubMenuOpen.category1 ? "block" : "none" }}
              >
                <li>
                  <Link to="/admin/add-category">Thêm danh mục</Link>
                </li>
                <li>
                  <Link to="/admin/all-category">Xem danh mục</Link>
                </li>
              </ul>
            </li>

            <li className="sub-menu dcjq-parent-li">
              <a
                className="dcjq-parent"
                onClick={() => toggleSubMenu("category2")}
              >
                <i className="fa fa-book" />
                <span>Thương Hiệu</span>
                <span className="dcjq-icon" />
              </a>
              <ul
                className="sub"
                style={{ display: isSubMenuOpen.category2 ? "block" : "none" }}
              >
                <li>
                  <Link to="/admin/add-brand">Thêm Thương Hiệu</Link>
                </li>
                <li>
                  <Link to="/admin/all-brand">Xem Thương Hiệu</Link>
                </li>
              </ul>
            </li>

            <li>
              <Link to="/admin/login">
                <i className="fa fa-user" />
                <span>Login Page</span>
              </Link>
            </li>
          </ul>
        </div>
        {/* sidebar menu end*/}
        <div
          id="ascrail2000"
          className="nicescroll-rails"
          style={{
            width: "3px",
            zIndex: "auto",
            cursor: "default",
            position: "absolute",
            top: "0px",
            left: "237px",
            height: "778px",
            display: "none",
            opacity: 0,
          }}
        >
          <div
            style={{
              position: "relative",
              top: "0px",
              float: "right",
              width: "3px",
              height: "0px",
              backgroundColor: "rgb(139, 92, 126)",
              border: "0px solid rgb(255, 255, 255)",
              backgroundClip: "padding-box",
              borderRadius: "0px",
            }}
          />
        </div>
        <div
          id="ascrail2000-hr"
          className="nicescroll-rails"
          style={{
            height: "3px",
            zIndex: "auto",
            top: "775px",
            left: "0px",
            position: "absolute",
            cursor: "default",
            display: "none",
            opacity: 0,
          }}
        >
          <div
            style={{
              position: "relative",
              top: "0px",
              height: "3px",
              width: "0px",
              backgroundColor: "rgb(139, 92, 126)",
              border: "0px solid rgb(255, 255, 255)",
              backgroundClip: "padding-box",
              borderRadius: "0px",
              left: "0px",
            }}
          />
        </div>
      </div>
    </aside>
  );
}
