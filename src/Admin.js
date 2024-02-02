import { useLocation } from "react-router-dom";
import "./App.css";
import AdminHeader from "./AdminComponents/AdminHeader";

function App(props) {
  return (
    <div>
      <AdminHeader />
      <h1>Nội dung của màn hình không có header, footer và slider</h1>
      {/* Thêm các thành phần khác bạn muốn hiển thị */}
    </div>
  );
}

export default App;
