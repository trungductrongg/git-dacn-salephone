import React, { useEffect, useState } from "react";
import API from "../api.js";
import Error from "../Error";
import { useNavigate, useParams } from "react-router-dom";

export default function AdminEditCategory() {
  const navigate = useNavigate();
  let params = useParams();
  const [message, setMessage] = useState([]);
  const [dataCategory, setDataCategory] = useState([]);
  const [inputs, setInputs] = useState({
    category_product_name: "",
    category_product_desc: "",
  });

  useEffect(() => {
    API.get(`admin/edit-category/${params.id}`)
      .then((res) => {
        console.log(res.data);
        setDataCategory(res.data);
      })
      .catch(function (error) {
        console.log(error.response.data);
      });
  }, []);
  function handelInput(e) {
    const nameInput = e.target.name;
    const value = e.target.value;
    setInputs((state) => ({ ...state, [nameInput]: value }));
  }

  function fillDataCategory() {
    if (Object.keys(dataCategory).length > 0) {
      return (
        <div className="position-center">
          <form onSubmit={handelSubmit}>
            <Error errs={message} />
            <div className="form-group">
              <label htmlFor="exampleInputEmail1">Tên danh mục</label>
              <input
                type="text"
                className="form-control"
                id="exampleInputEmail1"
                name="category_product_name"
                onChange={handelInput}
                defaultValue={dataCategory.category_name}
              />
            </div>
            <div className="form-group">
              <label htmlFor="exampleInputPassword1">Mô tả danh mục</label>
              <textarea
                rows={5}
                style={{ resize: "none" }}
                className="form-control"
                id="exampleInputPassword1"
                name="category_product_desc"
                onChange={handelInput}
                defaultValue={dataCategory.category_desc}
              ></textarea>
            </div>
            <button
              type="submit"
              className="btn btn-info"
              name="add_category_product"
            >
              Cập Nhật Danh Mục
            </button>
          </form>
        </div>
      );
    }
  }

  function handelSubmit(e) {
    e.preventDefault();
    const data = {
      category_name: inputs.category_product_name,
      category_desc: inputs.category_product_desc,
    };
    console.log(70, data);
    API.post(`admin/update-category/${params.id}`, data)
      .then((res) => {
        console.log(res.data);
        setMessage(res.data);
        alert(res.data.message);
        navigate("/admin/all-category");
      })
      .catch(function (error) {
        console.log(error.response.data);
        setMessage(error.response.data);
      });
  }

  return (
    <div className="form-w3layouts">
      <div className="row">
        <div className="col-lg-12">
          <section className="panel">
            <header className="panel-heading">Sửa danh mục sản phẩm</header>
            <div className="panel-body">{fillDataCategory()}</div>
          </section>
        </div>
      </div>
    </div>
  );
}
