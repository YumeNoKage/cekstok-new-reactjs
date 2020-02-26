import React from "react";
import "./dashboard.css";
import { Navbar, Form, FormControl, Button } from "react-bootstrap";

import LogoCekstok from "../../Asset/logo/cekstok-new-black.svg";

class HomeDashboard extends React.Component {
  render() {
    return (
      <>
        <div className="w-100 sticky-top">
          <Navbar bg="dark" variant="dark">
            <div className="container">
              <Navbar.Brand href="/">
                <img src={LogoCekstok} alt="cekstok"></img>
              </Navbar.Brand>

              <div className="navbar1 mr-4 ml-4 mr-sm-4 ml-sm-4">
                <div className="dropdown1 bg-dark">
                  <div className="dropbtn1 bg-dark font-14 proxima-reguler">
                    Kategori
                  </div>
                  <div className="dropdown-content1 position-absolute ">
                    <div className="row1">
                      <div className="cover-column1">
                        <div className="column1">
                          <a href="!">Link 1</a>
                          <a href="!">Link 2</a>
                          <a href="!">Link 3</a>
                        </div>
                        <div className="column1">
                          <a href="!">Link 1</a>
                          <a href="!">Link 2</a>
                          <a href="!">Link 3</a>
                        </div>
                        <div className="column1">
                          <a href="!">Link 1</a>
                          <a href="!">Link 2</a>
                          <a href="!">Link 3</a>
                        </div>
                        <div className="column1">
                          <a href="!">Link 1</a>
                          <a href="!">Link 2</a>
                          <a href="!">Link 3</a>
                        </div>
                        <div className="column1">
                          <a href="!">Link 1</a>
                          <a href="!">Link 2</a>
                          <a href="!">Link 3</a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <Form inline className="w-100 ml-auto mr-auto">
                <div className="ml-auto mr-auto w-100">
                  <FormControl
                    type="text"
                    placeholder="Search"
                    className="mr-sm-2 w-75 text-light proxima-reguler font-14 bg-transparent border-primary"
                  />
                  <Button variant="outline-primary">Search</Button>
                </div>
              </Form>
            </div>
          </Navbar>
        </div>
        <div className="container">
          <div className="row mt-3">
            <div className="col-md-3 text-light pr-0 pl-0">
              <div className="border rounded">test</div>
            </div>
            <div className="col-md-9 text-light ">
              <div className="border rounded">test</div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default HomeDashboard;
