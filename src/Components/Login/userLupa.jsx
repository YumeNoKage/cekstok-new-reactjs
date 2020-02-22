import React from "react";
import "./login.css";

export default function UserLupa() {
  return (
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
              <button className="btn btn-primary w-100 mt-3 ">Reset</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
