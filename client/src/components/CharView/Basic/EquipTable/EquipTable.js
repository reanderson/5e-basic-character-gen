import React, { Component } from "react"
// PROPS:
// ac -> equipped armor information. Needed to double check equipped armor.
// armor -> the owned armor listing
// weapons -> the owned weapon listing

class EquipTable extends Component {

  render() {
    return (<div>
      <table className="table table-bordered text-capitalize">
        <thead>
          <tr>
            <th scope="col">Armor</th>
            <th scope="col">Equipped</th>
          </tr>
        </thead>
        <tbody>
          {this.props.armor.map((equip, i) => {
            let nameData = (<td>{equip.name}</td>)

            if (equip.proficient && ((this.props.ac.equipped === equip.name) || (equip.name === "shield" && this.props.ac.shield))) {
              return (<tr key={`armor_${i}`}>
                {nameData}
                <td><i className="fas fa-check"></i></td>
              </tr>)
            } else if (!equip.proficient) {
              return (<tr className="text-muted" key={`armor_${i}`}>
                {nameData}
                <td><i className="fas fa-times"></i></td>
              </tr>)
            } else {
              return (<tr key={`armor_${i}`}>
                {nameData}
                <td><i className="fas fa-times"></i></td>
              </tr>)
            }
          })}
        </tbody>
      </table>

      <ul className="list-group text-capitalize">
          <li className="list-group-item text-center font-weight-bold">Weapons</li>
        {this.props.weapons.map((weapon, i) => (
          <li key={`weapon_${i}`} className={`list-group-item ${weapon.proficient ? "" : "text-muted"}`}>{weapon.name}</li>
        ))
      }
      </ul>
    </div>)
  }
}

export default EquipTable