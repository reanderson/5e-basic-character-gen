import React, { Component } from "react"

class StatRow extends Component {
  calculateModifier = (value) => {
    const result = Math.floor((value-10)/2)
    return result
  }

  render() {
    return (
      <tr>
        <th scope="row">{this.props.stat.toUpperCase()}</th>
        <td>{this.props.btn ? this.props.btn : this.props.base}</td>
        <td>{this.props.raceSelected ? this.props.raceBonus[this.props.stat] : "N/A"}</td>
        <td>{(this.props.raceSelected && this.props.base) ? (this.props.raceBonus[this.props.stat] + this.props.base) : ((this.props.base) ? this.props.base : "---")}</td>
        <td>{(this.props.raceSelected && this.props.base) ? (this.calculateModifier(this.props.raceBonus[this.props.stat]+this.props.base)) : ((this.props.base) ? this.calculateModifier(this.props.base) : "---")}</td>
      </tr>
    )
  }
}

export default StatRow