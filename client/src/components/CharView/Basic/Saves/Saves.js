import React, { Component } from "react"

class Saves extends Component {

  displayProficient = (stat, statName) => {
    return (<div className="row">
      <div className="col col-2"><i className="far fa-dot-circle"></i></div>
      <div className="col col-1 p-0 text-center border-bottom border-dark">
        {`${Math.floor((this.props.character[stat] - 10) / 2) + this.props.character.proficiencyMod}`} 
      </div>
      <div className="col">{statName}
      </div>
    </div>)
  }

  displayNormal = (stat, statName) => {
    return (<div className="row">
    <div className="col col-2"><i className="far fa-circle"></i></div>
    <div className="col col-1 p-0 text-center border-bottom border-dark">
       {`${Math.floor((this.props.character[stat] - 10) / 2)}`} 
    </div>
    <div className="col">{statName}
    </div>
  </div>)
  }


  render() {
    return (<div className="border border-secondary rounded p-2 mb-3">
        {this.props.character.savingThrows.includes("str") ? this.displayProficient("str", "Strength") : this.displayNormal("str", "Strength")}
        {this.props.character.savingThrows.includes("dex") ? this.displayProficient("dex", "Dexterity") : this.displayNormal("dex", "Dexterity")}
        {this.props.character.savingThrows.includes("con") ? this.displayProficient("con", "Constitution") : this.displayNormal("con", "Constitution")}
        {this.props.character.savingThrows.includes("int") ? this.displayProficient("int", "Intelligence") : this.displayNormal("int", "Intelligence")}
        {this.props.character.savingThrows.includes("wis") ? this.displayProficient("wis", "Wisdom") : this.displayNormal("wis", "Wisdom")}
        {this.props.character.savingThrows.includes("cha") ? this.displayProficient("cha", "Charisma") : this.displayNormal("cha", "Charisma")}
      <div className="text-center text-uppercase small font-weight-bold">saving throws</div>
    </div>)
  }
}

export default Saves