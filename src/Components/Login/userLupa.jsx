import React from "react";
import "./login.css";
import Swal from "sweetalert2";

import { NavLink, HashRouter } from "react-router-dom";
import Logo from "../../Asset/logo/cekstok-new-white.svg";

export default class UserLupa extends React.Component {
  HandleClickReset() {
    Swal.fire({
      icon: "success",
      type: "success",
      title:
        '<strong><h2 class="font-36 proxima-bold">Reset Berhasil!</h2></strong>',
      html:
        '<p class="font-16 mt-5 mb-5 pb-2 proxima-reguler">Link reset password terkirim ke email <strong>email@anda.com</strong></p>',
      confirmButtonColor: "#007fff"
    });
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
              {/* <Route path="/home/login" component={Login} />
              <Route path="/home/register" component={Register} />
              <Route path="/home/reset" component={UserLupa} /> */}
            </HashRouter>
            <div className="container w-100">
              <div className="card border-0 w-100 bg-transparent m-auto">
                <div className="card-body border-0 w-100">
                  <div id="form-login">
                    <div className="text-center w-100">
                      <h6 className="text-center font-16 proxima-bold color-42">
                        Atur ulang password.
                      </h6>
                      <p className="proxima-reguler text-center font-16 text-light">
                        Masukkan email yang Anda gunakan saat registrasi
                      </p>
                    </div>
                    <form>
                      <div className="form-group mt-4">
                        <input
                          type="email"
                          className="form-control bg-ee proxima-reguler font-16 border-0"
                          id="exampleInputEmail1"
                          aria-describedby="emailHelp"
                          placeholder="Email@anda.com"
                          autoComplete="off"
                          required
                        />
                      </div>
                      <button
                        className="btn btn-primary w-100 mt-3 "
                        onClick={this.HandleClickReset}
                      >
                        Reset
                      </button>
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
