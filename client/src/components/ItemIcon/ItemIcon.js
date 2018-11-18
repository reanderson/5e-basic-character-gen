import React from "react";
import "./ItemIcon.css";

const ItemIcon = (props) => (
<div className={props.active ? "raceActive" : ""}>
  <img src={props.src} alt="props.name"/>
  <p className="icontext">{props.name}</p>
</div>
)
export default ItemIcon;