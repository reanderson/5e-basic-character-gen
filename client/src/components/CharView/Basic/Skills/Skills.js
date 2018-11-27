import React, { Component } from "react"

class Skills extends Component {
  skillList = [
    { name: "acrobatics", stat: "dex" },
    { name: "animal handlng", stat: "wis" },
    { name: "arcana", stat: "int" },
    { name: "athletics", stat: "str" },
    { name: "deception", stat: "cha" },
    { name: "history", stat: "int" },
    { name: "insight", stat: "wis" },
    { name: "intimidation", stat: "cha" },
    { name: "investigation", stat: "int" },
    { name: "medicine", stat: "wis" },
    { name: "nature", stat: "int" },
    { name: "perception", stat: "wis" },
    { name: "performance", stat: "cha" },
    { name: "persuasion", stat: "cha" },
    { name: "religion", stat: "int" },
    { name: "sleight of hand", stat: "dex" },
    { name: "stealth", stat: "dex" },
    { name: "survival", stat: "wis" }
  ]

  displayProficient = (skill) => {
    return (<div className="row">
      <div className="col col-2"><i className="far fa-dot-circle"></i></div>
      <div className="col col-1 p-0 text-center border-bottom border-dark">
        {`${Math.floor((this.props.character[skill.stat] - 10) / 2) + this.props.character.proficiencyMod}`} 
      </div>
      <div className="col">{skill.name}
      </div>
    </div>)
  }

  displayNormal = (skill) => {
    return (<div className="row">
    <div className="col col-2"><i className="far fa-circle"></i></div>
    <div className="col col-1 p-0 text-center border-bottom border-dark">
       {`${Math.floor((this.props.character[skill.stat] - 10) / 2)}`} 
    </div>
    <div className="col">{skill.name}
    </div>
  </div>)
  }

  render() {
    return (<div className="border border-secondary rounded p-2 mb-3">

      {this.skillList.map((skill) => (<div key={skill.name} className="text-capitalize">
        {this.props.character.skills.includes(skill.name) ? this.displayProficient(skill) : this.displayNormal(skill)}
      </div>))}

      <div className="text-center text-uppercase small font-weight-bold mt-0">skills</div>

    </div>)
  }

}

export default Skills