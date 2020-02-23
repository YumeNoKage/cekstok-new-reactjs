import React from "react";
import "./login.css";
import EyeShow from "../../Asset/icon/eye-show.svg";
import { NavLink } from "react-router-dom";


// import UserLupa from "./userLupa";

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
                <button className="btn btn-primary w-100 mt-3 ">Login</button>
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
    );
  }
}

export default Login;
