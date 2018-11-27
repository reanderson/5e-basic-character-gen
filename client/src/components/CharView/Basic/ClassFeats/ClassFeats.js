import React, { Component } from "react";
import classFeats from "../../../../utils/classFeats"

// only necessary prop should be character

class ClassFeats extends Component {
  getStaticFeats = () => {
    if (this.props.character.class === "fighter") {
      return (<dl className="row">
        <dt className="col-sm-3">Second Wind: </dt>
        <dd className="col-sm-9">{classFeats.fighter.second_wind}</dd>
        </dl>)
    }
  }

  getOptionFeats = () => {
    if (this.props.character.class === "fighter") {
      //get the fighting style, and change the string so that the object in classFeats can read it
      const styleToKey = this.props.character.features.fighting_style.replace(/ /g, "_").replace("-", "_")

      return (<dl className="row">
        <dt className="col-sm-3 text-capitalize">fighting style: {this.props.character.features.fighting_style}</dt>
        <dd className="col-sm-9">{classFeats.fighter.fighting_style[styleToKey]}
    {this.props.character.features.fighting_style === "dueling" ? (<div className="small"><span className="font-weight-bold">NOTE:</span> Due to the variability of equipment, the Attacks table does NOT take this fighting style into account.</div>) : ""}</dd>
        </dl>)
    }
  }

  render() {
    return (<div>
      <div className="text-center font-weight-bold">Class Features</div>

        {this.getStaticFeats()}
        {this.getOptionFeats()}
      
    </div>)
  }
}

export default ClassFeats