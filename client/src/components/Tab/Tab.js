import React from "react";

const Tab = (props) => (
  <li className="nav-item">
    <a className={props.active === props.nameLower ? "nav-link active" : "nav-link"} onClick={() => props.change(props.nameLower)}>{props.name}</a>
  </li>
)

export default Tab