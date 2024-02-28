import React, { useState } from "react";
import useInputChange from "../CustomHook";
import API from "../api.js";
import Error from "../Error";

export default function AdminAddCategory() {
  const [message, setMessage] = useState({});
  const [inputs, setInputs] = useState({
    category_product_name: "",
    category_product_desc: "",
    category_product_status: 0,
  });

  function handelInput(e) {
    const nameInput = e.target.name;
    const value = e.target.value;
    setInputs((state) => ({ ...state, [nameInput]: value }));
  }

  function handelSubmit(e) {
    e.preventDefault();
    const data = {
      category_product_name: inputs.category_product_name,
      category_product_desc: inputs.category_product_desc,
      category_product_status: inputs.category_product_status,
    };
    API.post("admin/add-category", data)
      .then((res) => {
        console.log(res.data);
        setMessage(res.data.message);
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
            <header className="panel-heading">Thêm danh mục sản phẩm</header>
            <div className="panel-body">
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
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="exampleInputPassword1">
                      Mô tả danh mục
                    </label>
                    <textarea
                      rows={5}
                      style={{ resize: "none" }}
                      className="form-control"
                      id="exampleInputPassword1"
                      name="category_product_desc"
                      onChange={handelInput}
                    ></textarea>
                  </div>
                  <div className="form-group">
                    <label htmlFor="exampleInputPassword1">Hiển thị</label>
                    <select
                      name="category_product_status"
                      className="form-control input-sm m-bot15"
                      onChange={handelInput}
                    >
                      <option value={0}>Ẩn</option>
                      <option value={1}>Hiển thị</option>
                    </select>
                  </div>
                  <button
                    type="submit"
                    className="btn btn-info"
                    name="add_category_product"
                  >
                    Thêm Danh Mục
                  </button>
                </form>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
