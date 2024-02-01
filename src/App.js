import { useLocation } from "react-router-dom";
import "./App.css";
import Footer from "./components/Layout/Footer";
import Header from "./components/Layout/Header";
import MenuLeft from "./components/Layout/MenuLeft";
import Slider from "./components/Layout/Slider";

function App(props) {
  let params1 = useLocation();

  return (
    <>
      {/* {params1["pathname"].includes("admin") ? (
        <Admin />
      ) : ( */}
      <Header />
      <Slider />
      <div className="container">
        <MenuLeft />
        {props.children}
      </div>
      <Footer />
    </>
  );
}

export default App;
