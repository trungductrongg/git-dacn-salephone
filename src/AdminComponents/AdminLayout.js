import React from "react";
import AdminHeader from "./AdminHeader";
import AdminSidebar from "./AdminSidebar";

export default function AdminLayout(props) {
  return (
    <section id="container">
      <AdminHeader />
      <AdminSidebar />

      <section id="main-content">
        <section className="wrapper">
          <>{props.children}</>
        </section>
      </section>
    </section>
  );
}
