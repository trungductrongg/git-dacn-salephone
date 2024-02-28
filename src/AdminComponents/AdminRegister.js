import React from "react";
import { Link } from "react-router-dom";

export default function AdminRegister() {
  return (
    <div className="reg-w3 custom-body">
      <div className="w3layouts-main">
        <h2>Register Now</h2>
        <form action="#" method="post">
          <input
            type="text"
            className="ggg"
            name="Name"
            placeholder="NAME"
            required
          />
          <input
            type="email"
            className="ggg"
            name="Email"
            placeholder="E-MAIL"
            required
          />
          <input
            type="text"
            className="ggg"
            name="Phone"
            placeholder="PHONE"
            required
          />
          <input
            type="password"
            className="ggg"
            name="Password"
            placeholder="PASSWORD"
            required
          />
          <h4>
            <input type="checkbox" />I agree to the Terms of Service and Privacy
            Policy
          </h4>
          <div className="clearfix" />
          <input type="submit" defaultValue="submit" name="register" />
        </form>
        <p>
          Already Registered.<Link to="/admin/login">Login</Link>
        </p>
      </div>
    </div>
  );
}
