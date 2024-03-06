import React, { useEffect } from "react";
import API from "../api";
import { useNavigate, useParams } from "react-router-dom";

export default function AdminDeleteCategory() {
  const navigate = useNavigate();
  let params = useParams();

  useEffect(() => {
    API.get(`admin/delete-category/${params.id}`)
      .then((res) => {
        console.log(res.data);
        navigate("/admin/all-category");
      })
      .catch(function (error) {
        console.log(error.response.data);
      });
  }, []);

  return alert("Chắc chắn xóa");
}
