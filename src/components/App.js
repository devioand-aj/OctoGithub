import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Repos from "./Repos";
import Search from "./pages/Search";
import Home from "./pages/Home";
import GithubState from "../context/GithubState";
import "../styles/App.css";

function App() {
  return (
    <div className="App">
      <Router>
        <GithubState>
          <Route exact path="/" component={Search} />
          <Route exact path="/user" component={Home} />
          <Route exact path="/user/repos" component={Repos} />
        </GithubState>
      </Router>
    </div>
  );
}

export default App;
