import React from "react";
import { Route, NavLink, HashRouter } from "react-router-dom";

import Login from "./login";
import Register from "./register";
import UserLupa from "./userLupa";

import Logo from "../../Asset/logo/cekstok-new-white.svg";
import "./login.css";

class HomeLogin extends React.Component {
  render() {
    return (
      <div className="container w-100">
        <div className="row w-100">
          <div className="col-md col-sm logo-cekstok">
            <img src={Logo} alt="Logo" className="fixed-center"></img>
          </div>
          <div className="col-md col-sm logo-cekstok-2">
            <img src={Logo} alt="Logo"></img>
          </div>
          <div className="col-md col-sm w-100 text-dark card-color rounded bg-light mt-5 mb-5 body-login">
            <HashRouter>
              <ul className="title d-flex w-100 pt-5 pr-5">
                <li className="text-decoration-none  m-auto ">
                  <NavLink to="/">
                    <h3
                      className="proxima-bold m-auto title-h3"
                      // onClick={}
                      style={{ cursor: "pointer" }}
                    >
                      Login
                    </h3>
                  </NavLink>
                </li>
                <div className="border-left ml-auto mr-auto" />
                <li className="text-decoration-none  m-auto">
                  <NavLink to="/register">
                    <h3
                      className="proxima-bold m-auto title-h3"
                      style={{ cursor: "pointer" }}
                    >
                      Register
                    </h3>
                  </NavLink>
                </li>
              </ul>
              <Route exact path="/" component={Login} />
              <Route path="/register" component={Register} />
              <Route path="/reset" component={UserLupa} />
            </HashRouter>
          </div>
        </div>
      </div>
    );
  }
}

export default HomeLogin;
