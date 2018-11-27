import React from "react";
import Tab from "../../Tab"

const CharTabs = (props) => (
  <div>
    <ul className="nav nav-tabs pt-2">
      <Tab name="Stats" nameLower="basic" key="basicLink" {...props} />
      <Tab name="Details" nameLower="details" key="detailsLink" {...props} />
    </ul>
  </div>
)

export default CharTabs