import React from "react";
import { Link } from "react-router-dom";

const NavMain = () => (
  <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
    <Link className="navbar-brand" to="/">
      5e CharGen
    </Link>
    <ul className="nav">
      <li className="nav-item">
        <Link className="nav-link" to="/create/new">Create</Link>
      </li>
    </ul>
  </nav>
);

export default NavMain;
