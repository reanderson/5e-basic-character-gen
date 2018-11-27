import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NavMain from "./components/NavMain"
import "./App.css";
import Create from "./components/Create"
import Main from "./components/Main"
import Search from "./components/Search"
import User from "./components/UserPage"
import Edit from "./components/Edit"
import CharView from "./components/CharView"

import Login from "./containers/Login.js";
import Signup from "./containers/Signup.js";

import API from "./utils/API";


class App extends Component {
  state = {
    user: false
  }

  handleLogin = (user) => {
    this.setState({
      user: user
    })
  }

  handleLogout = () => {
    API
    .logout()
    .then(res => {
      console.log(res.data);
      this.setState({
        user: false
      })
    })
    .catch(err => console.log(err.response));
  }

  render() {
    return (
      <Router>
        <div>
          <NavMain user={this.state.user} handleLogout={this.handleLogout}/>
          <Switch>
            <Route exact path="/" render={()=> <Main user={this.state.user}/>}/>
            <Route exact path="/create" render={(props) => (<Create {...props} user={this.state.user} />)} />
            <Route exact path="/search" render={(props) => (<Search {...props} user={this.state.user} />)} />
            <Route exact path="/login" render={(props) => (<Login {...props} user={this.state.user} handleLogin={this.handleLogin}/>)} />
            <Route exact path="/signup" render={(props) => (<Signup {...props} user={this.state.user} />)} />
            <Route exact path="/character/edit/:id" render={(props) => (<Edit {...props} user={this.state.user}/>)}/>
            <Route exact path="/character/:id" render={(props) => (<CharView {...props} user={this.state.user}/>)}/>
            <Route exact path="/user/:username/:id" render={(props)=> (<User {...props} user={this.state.user} />)}/>
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
