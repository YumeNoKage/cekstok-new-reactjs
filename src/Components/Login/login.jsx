import React from "react";
import "./login.css";
import EyeShow from "../../Asset/icon/eye-show.svg";
import { NavLink, HashRouter } from "react-router-dom";

import Logo from "../../Asset/logo/cekstok-new-white.svg";

class Login extends React.Component {
  constructor(props) {
    super(props);

    // show hidden password
    this.state = { hidden: true, password: "" };
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.toggleShow = this.toggleShow.bind(this);
  }

  // show hidden password
  handlePasswordChange(e) {
    this.setState({ password: e.target.value });
  }
  toggleShow() {
    this.setState({ hidden: !this.state.hidden });
  }

  componentDidMount() {
    if (this.props.password) {
      this.setState({ password: this.props.password });
    }
  }
  render() {
    return (
      <div className="container w-100 content-center">
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
            </HashRouter>
            <div className="container w-100">
              <div className="card border-0 w-100 bg-transparent m-auto">
                <div className="card-body border-0 w-100">
                  <div id="form-login">
                    <form>
                      <div className="form-group">
                        <label className="float-left proxima-bold font-16 color-42">
                          Email address
                        </label>
                        <input
                          type="email"
                          className="form-control bg-ee proxima-reguler font-16 border-0"
                          id="exampleInputEmail1"
                          aria-describedby="emailHelp"
                          placeholder="Username"
                          autoComplete="off"
                          required
                        />
                      </div>
                      <div className="form-group">
                        <label className="float-left proxima-bold font-16 color-42">
                          Password
                        </label>
                        <input
                          type={this.state.hidden ? "password" : "text"}
                          className="form-control proxima-reguler font-16 bg-ee border-0"
                          id="exampleInputPassword1"
                          placeholder="Password"
                          autoComplete="off"
                          onChange={this.handlePasswordChange}
                          required
                        />

                        <img
                          onClick={this.toggleShow}
                          src={EyeShow}
                          alt="icon"
                          className="float-right mt-n4 mb-1 mr-3"
                        ></img>
                      </div>
                      <NavLink to="/dashboard">
                        <button className="btn btn-primary w-100 mt-3 ">
                          Login
                        </button>
                      </NavLink>

                      <div className="w-100  mt-2 mb-2">
                        <NavLink
                          to="/reset"
                          className="ml-auto mr-0  mt-3 text-light
                    mb-5 float-right proxima-reguler font-14 color-42 text-decoration-none"
                        >
                          Lupa password / Username ?
                        </NavLink>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
