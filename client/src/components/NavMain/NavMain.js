import React from "react";
import { Link, NavLink } from "react-router-dom";

const Navbar = (props) => (
  <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
    <Link className="navbar-brand" to="/">5e CharGen</Link>
    <div className="navbar-collapse collapse w-100 order-1 order-md-0 dual-collapse2">

      <ul className="navbar-nav mr-auto">
        <li className="nav-item">
          <NavLink className="nav-item nav-link" to="/">Home</NavLink>
        </li>

        {props.user ? (
          <li className="nav-item">
            <NavLink className="nav-item nav-link" to="/create">Create</NavLink>
          </li>) : ""}

        <li className="nav-item">
          <NavLink className="nav-item nav-link" to="/search">Search</NavLink>
        </li>
      </ul>
    </div>


    <div className="navbar-collapse collapse w-100 order-2 dual-collapse2">
      <ul className="navbar-nav ml-auto">
        {props.user ? (<li className="nav-item">
          <span className="nav-link" onClick={props.handleLogout}>Logout</span>
        </li>) : ""}
        <li className="nav-item active">
          {props.user ? <NavLink className="nav-item nav-link text-right" to={`/user/${props.user.username}/${props.user._id}`}>Welcome, {props.user.username}</NavLink> : <NavLink className="nav-link" to="/login">Login</NavLink>}
        </li>
      </ul>
    </div>



  </nav>
);

export default Navbar;