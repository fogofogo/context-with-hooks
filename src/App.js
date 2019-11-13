import React from "react";
import "./App.css";
import Navbar from "./components/layout/NavBar";
import Home from "./components/pages/Home";
import User from "./components/users/User";
import Alert from "./components/layout/Alert";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import About from "./components/pages/About";

import GithubState from './context/gihub/GithubState'
import AlertState from './context/alert/AlertState'

const App = () => {

  return (
    <GithubState>
      <AlertState>
        <Router>
          <div className="App">
            <Navbar />
            <Alert alert={alert} />
            <Switch>
              <Route exact path="/about" component={About} />
              <Route exact path='/user/:login' component={User} />
              <Route exact path="/" component={Home} />
            </Switch>
          </div>
        </Router>
      </AlertState>

    </GithubState>
  );

}

export default App;
