import React, { useEffect, useState } from "react";
import API from "../api";
import { Link } from "react-router-dom";

export default function AdminAllBrand() {
  const [category, setCategory] = useState([]);
  const [statusCategory, setStatusCategory] = useState([]);

  useEffect(() => {
    API.get("admin/all-brand")
      .then((res) => {
        console.log(res.data);
        setCategory(res.data);
      })
      .catch(function (error) {
        console.log(error.response.data);
      });
  }, []);

  function clickUpdateStatusCategory(e) {
    const id_category = e.target.id;
    const status_category = e.target.dataset.name;
    if (status_category === "0") {
      console.log("id", id_category);
      API.get(`admin/active-brand/${id_category}`)
        .then((res) => {
          console.log(res.data);
          API.get("admin/all-brand")
            .then((res) => {
              console.log(res.data);
              setCategory(res.data);
            })
            .catch(function (error) {
              console.log(error.response.data);
            });
        })
        .catch(function (error) {
          console.log(error.response.data);
        });
    } else if (status_category === "1") {
      API.get(`admin/un-active-brand/${id_category}`)
        .then((res) => {
          console.log(res.data);
          API.get("admin/all-brand")
            .then((res) => {
              console.log(res.data);
              setCategory(res.data);
            })
            .catch(function (error) {
              console.log(error.response.data);
            });
        })
        .catch(function (error) {
          console.log(error.response.data);
        });
    }
  }

  function getCategory() {
    if (Object.keys(category).length > 0) {
      return Object.keys(category).map((value) => {
        return (
          <tr>
            <td>
              <label className="i-checks m-b-none">
                <input type="checkbox" name="post[]" />
                <i />
              </label>
            </td>
            <td>{category[value].brand_name}</td>
            <td>
              <span
                onClick={clickUpdateStatusCategory}
                className="text-ellipsis"
              >
                {category[value].brand_status === 0 ? (
                  <span
                    id={category[value].brand_id}
                    data-name="0"
                    className="fa fa-thumbs-down fa-thumb-styling"
                  ></span>
                ) : (
                  <span
                    id={category[value].brand_id}
                    data-name="1"
                    className="fa fa-thumbs-up fa-thumb-styling"
                  ></span>
                )}
              </span>
            </td>

            <td className="text-center">
              <Link
                to={`/admin/edit-brand/${category[value].brand_id}`}
                className="active d-flex justify-content-between style-edit"
                ui-toggle-class
              >
                <i className="fa fa-pencil-square-o text-success text-active" />
              </Link>
              <Link
                to={`/admin/delete-brand/${category[value].brand_id}`}
                style={{ border: "none", background: "none" }}
                className="active d-flex justify-content-between style-edit"
              >
                <i className="fa fa-times text-danger text" />
              </Link>
            </td>
          </tr>
        );
      });
    }
  }

  return (
    <div className="table-agile-info">
      <div className="panel panel-default">
        <div className="panel-heading">Danh mục sản phẩm</div>
        <div className="row w3-res-tb">
          <div className="col-sm-5 m-b-xs">
            <select className="input-sm form-control w-sm inline v-middle">
              <option value={0}>Bulk action</option>
              <option value={1}>Delete selected</option>
              <option value={2}>Bulk edit</option>
              <option value={3}>Export</option>
            </select>
            <button className="btn btn-sm btn-default">Apply</button>
          </div>
          <div className="col-sm-4"></div>
          <div className="col-sm-3">
            <div className="input-group">
              <input
                type="text"
                className="input-sm form-control"
                placeholder="Search"
              />
              <span className="input-group-btn">
                <button className="btn btn-sm btn-default" type="button">
                  Go!
                </button>
              </span>
            </div>
          </div>
        </div>
        <div className="table-responsive">
          <table className="table table-striped b-t b-light">
            <thead>
              <tr>
                <th style={{ width: "20px" }}>
                  <label className="i-checks m-b-none">
                    <input type="checkbox" />
                    <i />
                  </label>
                </th>
                <th>Tên thương hiệu</th>
                <th>Hiển thị</th>
                <th className="text-center">Thao tác</th>
              </tr>
            </thead>
            <tbody>{getCategory()}</tbody>
          </table>
        </div>
        <footer className="panel-footer">
          <div className="row">
            <div className="col-sm-5 text-center">
              <small className="text-muted inline m-t-sm m-b-sm">
                showing 20-30 of 50 items
              </small>
            </div>
            <div className="col-sm-7 text-right text-center-xs">
              <ul className="pagination pagination-sm m-t-none m-b-none">
                <li>
                  <a href>
                    <i className="fa fa-chevron-left" />
                  </a>
                </li>
                <li>
                  <a href>1</a>
                </li>
                <li>
                  <a href>2</a>
                </li>
                <li>
                  <a href>3</a>
                </li>
                <li>
                  <a href>4</a>
                </li>
                <li>
                  <a href>
                    <i className="fa fa-chevron-right" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}
