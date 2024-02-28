import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import Error from "../../Error";
import { UserContext } from "../../Contexts/UserContext.js";
import API from "../../api.js";

export default function Login() {
  const navigate = useNavigate();

  const { setUserData } = useContext(UserContext);

  const [message, setMessage] = useState({});
  const [inputs, setInputs] = useState({
    user_email: "",
    user_password: "",
  });

  function handelInput(e) {
    const nameInput = e.target.name;
    const value = e.target.value;
    setInputs((state) => ({ ...state, [nameInput]: value }));
  }

  function handelSubmit(e) {
    e.preventDefault();
    const data = {
      email: inputs.user_email,
      password: inputs.user_password,
    };

    API.post("/login", data)
      .then((response) => {
        console.log(response.data);
        setUserData(response.data);
        navigate("/");
      })
      .catch(function (error) {
        console.log(error.response.data);
        setMessage(error.response.data);
      });
  }
  return (
    <section id="form">
      {/*form*/}
      <div className="container">
        <div className="row">
          <div className="col-sm-4 col-sm-offset-1">
            <div className="login-form">
              {/*login form*/}
              <h2>Login to your account</h2>
              <Error errs={message} />
              <form onSubmit={handelSubmit}>
                <input
                  type="email"
                  placeholder="Name"
                  onChange={handelInput}
                  name="user_email"
                />
                <input
                  type="password"
                  placeholder="Email Address"
                  name="user_password"
                  onChange={handelInput}
                />
                <span>
                  <input type="checkbox" className="checkbox" />
                  Keep me signed in
                </span>
                <button type="submit" className="btn btn-default">
                  Login
                </button>
              </form>
            </div>
            {/*/login form*/}
          </div>
          <div className="col-sm-1">
            <h2 className="or">OR</h2>
          </div>
          <div className="col-sm-4">
            <div className="signup-form">
              {/*sign up form*/}
              <h2>New User Signup!</h2>
              <form action="#">
                <input type="text" placeholder="Name" />
                <input type="email" placeholder="Email Address" />
                <input type="password" placeholder="Password" />
                <button type="submit" className="btn btn-default">
                  Signup
                </button>
              </form>
            </div>
            {/*/sign up form*/}
          </div>
        </div>
      </div>
    </section>
  );
}
