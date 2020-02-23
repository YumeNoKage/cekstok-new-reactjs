import React from "react";
import "./login.css";
import Swal from "sweetalert2";

export default class UserLupa extends React.Component {

  HandleClickReset() {
    Swal.fire({
      icon: 'success',
      type: "success",
      title: '<strong><h2 class="font-36 proxima-bold">Reset Berhasil!</h2></strong>',
      html: '<p class="font-16 mt-5 mb-5 pb-2 proxima-reguler">Link reset password terkirim ke email <strong>email@anda.com</strong></p>',
      confirmButtonColor: '#007fff',
    });
  }
  render() {
    return (
      <div className="container w-100">
        <div className="card border-0 w-100 bg-transparent m-auto">
          <div className="card-body border-0 w-100 mb-5">
            <div id="form-reset">
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
                <button className="btn btn-primary w-100 mt-3 " onClick={this.HandleClickReset} type="reset">Reset</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }

}