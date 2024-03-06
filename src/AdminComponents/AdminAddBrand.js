import React, { useState } from "react";
import useInputChange from "../CustomHook";
import API from "../api.js";
import Error from "../Error";

export default function AdminAddBrand() {
  const [message, setMessage] = useState({});
  const [inputs, setInputs] = useState({
    brand_name: "",
    brand_desc: "",
    brand_status: 0,
  });

  function handelInput(e) {
    const nameInput = e.target.name;
    const value = e.target.value;
    setInputs((state) => ({ ...state, [nameInput]: value }));
  }

  function handelSubmit(e) {
    e.preventDefault();
    const data = {
      brand_product_name: inputs.brand_name,
      brand_product_desc: inputs.brand_desc,
      brand_product_status: inputs.brand_status,
    };
    API.post("admin/add-brand", data)
      .then((res) => {
        console.log(res.data);
        alert(res.data.message);
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
            <header className="panel-heading">Thêm thương hiệu</header>
            <div className="panel-body">
              <div className="position-center">
                <form onSubmit={handelSubmit}>
                  <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Tên thương hiệu</label>
                    <input
                      type="text"
                      className="form-control"
                      id="exampleInputEmail1"
                      name="brand_name"
                      onChange={handelInput}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="exampleInputPassword1">
                      Mô tả thương hiệu
                    </label>
                    <textarea
                      rows={5}
                      style={{ resize: "none" }}
                      className="form-control"
                      id="exampleInputPassword1"
                      name="brand_desc"
                      onChange={handelInput}
                    ></textarea>
                  </div>
                  <div className="form-group">
                    <label htmlFor="exampleInputPassword1">Hiển thị</label>
                    <select
                      name="brand_status"
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
                    name="add_brand"
                  >
                    Thêm thương hiệu
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
