import React, { useEffect } from "react";
import API from "../api";
import { useNavigate, useParams } from "react-router-dom";

export default function AdminDeleteBrand() {
  const navigate = useNavigate();
  let params = useParams();

  useEffect(() => {
    API.get(`admin/delete-brand/${params.id}`)
      .then((res) => {
        console.log(res.data);
        navigate("/admin/all-brand");
      })
      .catch(function (error) {
        console.log(error.response.data);
      });
  }, [navigate, params.id]);

  return alert("Chắc chắn xóa");
}
