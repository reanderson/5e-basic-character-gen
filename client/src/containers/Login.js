import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import API from "../utils/API";
import { Link } from "react-router-dom";

class Login extends Component {
  state = {
    isLoggedIn: false,
    username: "",
    password: ""
  }

  handleInputChange = e => {
    const { name, value } = e.target;

    this.setState({
      [name]: value
    })
  }

  // Method to handle user login, should redirect to main page when done
  login = (e) => {
    e.preventDefault();
    API
      .login({ username: this.state.username, password: this.state.password })
      .then(res => {
        console.log(res.data);
        // this.setState({isLoggedIn: res.data})
        this.props.handleLogin(res.data)

      })
      .catch(err => console.log(err.response));
  }

  render() {
    console.log(this.props)
    // If user is logged in, take them to main page
    if (this.props.user) {
      return <Redirect to="/" />
    }

    return (
      <div className="container my-5">
        <div className="row justify-content-center">
          <form>
            <h3>Login!</h3>
            <div className="form-group">
              <label htmlFor="username">Username</label>
              <input
                type="text"
                name="username"
                value={this.state.username}
                onChange={this.handleInputChange}
                className="form-control"
                placeholder="Username" />
              <small id="usernameHelp" className="form-text text-muted">Enter your username</small>
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                name="password"
                value={this.state.password}
                onChange={this.handleInputChange}
                className="form-control"
                placeholder="Password"
              />
            </div>

            <button type="submit" className="btn btn-success" onClick={this.login}>Login</button>
            <br/><br/>
            <div>
              <Link to="/signup">Don't have an account? Click here to sign up!</Link>
            </div>
          </form>

        </div>
      </div>
    )
  }
}

export default Login;