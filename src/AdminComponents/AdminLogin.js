import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Error from "../Error";
import { AdminContext } from "../Contexts/Context.js";
import API from "../api.js";

export default function AdminLogin() {
  const navigate = useNavigate();

  const { setAdminData } = useContext(AdminContext);

  const [message, setMessage] = useState({});
  const [inputs, setInputs] = useState({
    admin_email: "",
    admin_password: "",
  });

  function handelInput(e) {
    const nameInput = e.target.name;
    const value = e.target.value;
    setInputs((state) => ({ ...state, [nameInput]: value }));
  }

  function handelSubmit(e) {
    e.preventDefault();
    const data = {
      admin_email: inputs.admin_email,
      admin_password: inputs.admin_password,
    };
    API.post("admin/login", data)
      .then((response) => {
        console.log(response);
        setAdminData(response.data);
        // console.log(response);
        // if (response.data.errors) {
        //   setErrs(response.data.errors);
        // } else {
        //   console.log(response.data.Auth);
        navigate("/admin/");
        //   localStorage.setItem("true", JSON.stringify(true));
        //   const Auth = localStorage.setItem(
        //     "Auth",
        //     JSON.stringify(response.data)
        //   );
        // }
      })
      .catch(function (error) {
        console.log(error.response.data);
        setMessage(error.response.data);
      });
  }

  return (
    <div style={{ padding: "5% 0" }} className="log-w3 custom-body">
      <div className="w3layouts-main">
        <Error errs={message} />
        <h2>Sign In Now</h2>
        <form onSubmit={handelSubmit}>
          <input
            onChange={handelInput}
            type="email"
            className="ggg"
            name="admin_email"
            required
          />
          <input
            onChange={handelInput}
            type="password"
            className="ggg"
            name="admin_password"
            required
          />
          <span>
            <input type="checkbox" />
            Remember Me
          </span>
          <h6>
            <a href="#">Forgot Password?</a>
          </h6>
          <div className="clearfix" />
          <input type="submit" defaultValue="Sign In" name="login" />
        </form>
        <p>
          Don't Have an Account ?
          <Link to="/admin/register">Create an account</Link>
        </p>
      </div>
    </div>
  );
}
