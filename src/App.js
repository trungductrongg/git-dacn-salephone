import { useLocation } from "react-router-dom";
import "./App.css";
import Footer from "./components/Layout/Footer";
import Header from "./components/Layout/Header";
import MenuLeft from "./components/Layout/MenuLeft";
import Slider from "./components/Layout/Slider";
import { AdminProvider } from "./Contexts/Context";
import { UserProvider } from "./Contexts/UserContext";

function App(props) {
  let params1 = useLocation();

  return (
    <AdminProvider>
      {params1.pathname.includes("admin") ? (
        <>{props.children}</>
      ) : (
        <div>
          <UserProvider>
            <Header />
            {params1.pathname === "/login" ? null : <Slider />}

            <div className="container">
              {params1.pathname === "/login" ? null : <MenuLeft />}
              {props.children}
            </div>
            <Footer />
          </UserProvider>
        </div>
      )}
    </AdminProvider>
  );
}

export default App;
