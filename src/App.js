import React from "react";
import "./App.css";
import { Route, HashRouter } from "react-router-dom";

// import HomeLogin from "./Components/Login/homeLogin";
import HomeDashboard from "./Components/Dashboard/homeDashboard";
import Login from "./Components/Login/login";
import Register from "./Components/Login/register";
import UserLupa from "./Components/Login/userLupa";

function App() {
  return (
    <div className="App">
      <header className="">
        <HashRouter>
          <Route path="/dashboard" component={HomeDashboard} />
          <div className="App-header content-center">
            <Route exact path="/" component={Login} />
            <Route path="/register" component={Register} />
            <Route path="/reset" component={UserLupa} />
          </div>
        </HashRouter>
      </header>
    </div>
  );
}

export default App;
