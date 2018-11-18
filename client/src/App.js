import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NavMain from "./components/NavMain"
import "./App.css";
import Create from "./components/Create"

class App extends Component {
  render() {
    return (
      <Router>
      <div>
        <NavMain/>
        <Switch>
          <Route exact path="/create/new" component={Create}/>
          
        </Switch>
      </div>
      </Router>
    );
  }
}

export default App;
