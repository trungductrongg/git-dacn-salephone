import "./App.css";
import AdminHeader from "./AdminComponents/AdminHeader";
import AdminSidebar from "./AdminComponents/AdminSidebar";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <section id="container">
      <AdminHeader />
      <AdminSidebar />

      <section id="main-content">
        <section className="wrapper">
          <Outlet />
        </section>
      </section>
    </section>
  );
}

export default App;
