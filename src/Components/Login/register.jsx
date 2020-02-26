import React from "react";
import "./login.css";
import EyeShow from "../../Asset/icon/eye-show.svg";
import Swal from "sweetalert2";
// import { withSwalInstance } from "sweetalert2-react";
// import withReactContent from 'sweetalert2-react-content'

import { NavLink, HashRouter } from "react-router-dom";
import Logo from "../../Asset/logo/cekstok-new-white.svg";

class Register extends React.Component {
  constructor(props) {
    super(props);

    // show hidden password
    this.state = { hidden: true, password: "", hidden2: true, password2: "" };
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.toggleShow = this.toggleShow.bind(this);
    this.handlePasswordChanges = this.handlePasswordChanges.bind(this);
    this.toggleShows = this.toggleShows.bind(this);
  }

  // show hidden password
  handlePasswordChange(e) {
    this.setState({ password: e.target.value });
  }
  toggleShow() {
    this.setState({ hidden: !this.state.hidden });
  }
  // show hiden 2
  handlePasswordChanges(i) {
    this.setState({ password2: i.target.value });
  }
  toggleShows() {
    this.setState({ hidden2: !this.state.hidden2 });
  }

  HandleClickRegister() {
    Swal.fire({
      icon: "success",
      type: "success",
      title:
        '<strong><h2 class="font-36 proxima-bold mt-3 mb-3">Registrasi Berhasil!</h2></strong>',
      html:
        '<div class="container"><h6 class="font-24 proxima-bold">Cek email Anda Untuk melakukan aktifasi.</h6> <br> <p class="font-16 color-bb proxima-reguler">Pendaftaran member menunggu aktifasi. Cek email Anda.</p></div>',
      confirmButtonColor: "#007fff"
    });
  }

  componentDidMount() {
    if (this.props.password) {
      this.setState({ password: this.props.password });
    }
    if (this.props.password2) {
      this.setState({ password2: this.props.password2 });
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
              {/* <Route path="/home/login" component={Login} />
              <Route path="/home/register" component={Register} />
              <Route path="/home/reset" component={UserLupa} /> */}
            </HashRouter>
            <div className="container w-100">
              <div className="card border-0 w-100 bg-transparent m-auto">
                <div className="card-body border-0 w-100">
                  <div id="form-register">
                    <form>
                      <div className="form-group">
                        <label className="float-left proxima-bold font-16 color-42">
                          Nama Lengkap
                        </label>
                        <input
                          type="text"
                          className="form-control bg-ee proxima-reguler font-16 border-0"
                          id="exampleInputEmail3"
                          aria-describedby="emailHelp"
                          placeholder="Nama Lengkap"
                          autoComplete="off"
                          required
                        />
                      </div>
                      <div className="form-group">
                        <label className="float-left proxima-bold font-16 color-42">
                          Username
                        </label>
                        <input
                          type="text"
                          className="form-control bg-ee proxima-reguler font-16 border-0"
                          id="exampleInputEmail4"
                          aria-describedby="emailHelp"
                          placeholder="Username"
                          autoComplete="off"
                          required
                        />
                      </div>
                      <div className="form-group">
                        <label className="float-left proxima-bold font-16 color-42">
                          Email
                        </label>
                        <input
                          type="email"
                          className="form-control bg-ee proxima-reguler font-16 border-0"
                          id="exampleInputEmail5"
                          aria-describedby="emailHelp"
                          placeholder="email@anda.com"
                          autoComplete="off"
                          required
                        />
                      </div>
                      <div className="form-group">
                        <label className="float-left proxima-bold font-16 color-42">
                          Nomor Hp
                        </label>
                        <input
                          type="text"
                          className="form-control bg-ee proxima-reguler font-16 border-0"
                          id="exampleInputEmail6"
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
                          id="exampleInputPassword3"
                          placeholder="Password"
                          autoComplete="off"
                          required
                          onChange={this.handlePasswordChange}
                        />

                        <img
                          onClick={this.toggleShow}
                          src={EyeShow}
                          alt="icon"
                          className="float-right mt-n4 mb-1 mr-3"
                        ></img>
                      </div>
                      <div className="form-group">
                        <label className="float-left proxima-bold font-16 color-42">
                          Password Konfirmasi
                        </label>
                        <input
                          type={this.state.hidden2 ? "password" : "text"}
                          className="form-control proxima-reguler font-16 bg-ee border-0"
                          id="exampleInputPassword4"
                          placeholder="password konfirmasi"
                          autoComplete="off"
                          required
                          onChange={this.handlePasswordChanges}
                        />

                        <img
                          onClick={this.toggleShows}
                          src={EyeShow}
                          alt="icon"
                          className="float-right mt-n4 mb-1 mr-3"
                        ></img>
                      </div>

                      <button
                        className="btn btn-primary w-100 mt-3 proxima-bold mb-5"
                        onClick={this.HandleClickRegister}
                        type="button"
                      >
                        Register
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

export default Register;
