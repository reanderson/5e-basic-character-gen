import React from "react";
import Tab from "../Tab"

const CreateTabs = (props) => (
  <div>
    <ul className="nav nav-tabs pt-2">
      <Tab name="Race" nameLower="race" key="raceLink" {...props} />
      <Tab name="Class" nameLower="class" key="classLink" {...props} />
      <Tab name="Background" nameLower="bg" key="bgLink" {...props} />
      <Tab name="Stats" nameLower="stats" key="statLink" {...props} />
      <Tab name="Details" nameLower="details" key="detailsLink" {...props} />
      <Tab name="Save" nameLower="save" key="saveLink" {...props} />
    </ul>
  </div>
)

export default CreateTabs