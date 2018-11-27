import React, { Component } from "react"
import equipListing from "../../../../utils/equipListing"

// PROPS:
// character - > the whole character object
// weapons - > the weapons owned by the character

class AttackTable extends Component {
  state = {
    attacks: []
  }

  createAttacksArray = () => {
    const attacks = []

    this.props.weapons.forEach(weapon => {
      if (weapon.proficient) {
        const weaponData = equipListing.weapons.find((item) => item.name === weapon.name)
        const attackData = {}

        if (weaponData.properties && weaponData.properties.includes("versatile")) {
          attackData.name = `${weapon.name} (1h)`
          attackData.stat = this.determineStat(weaponData)
          attackData.toHit = this.determineHit(weaponData, attackData.stat)
          attackData.damage = `${weaponData.damage} + ${Math.floor((this.props.character[attackData.stat] - 10) / 2)}`
          attackData.type = weaponData.dtype
          attackData.range = this.determineRange(weaponData)

          attacks.push(attackData)

          attackData.name = `${weapon.name} (2h)`
          attackData.damage = `${weaponData.damage2h} + ${Math.floor((this.props.character[attackData.stat] - 10) / 2)}`

          attacks.push(attackData)
        } else if (weaponData.properties && weaponData.properties.includes("light")) {
          if ((!this.props.character.class === "fighter") || (!this.props.character.features.figthing_style === "two-weapon fighting")) {
            attackData.name = weapon.name
            attackData.stat = this.determineStat(weaponData)
            attackData.toHit = this.determineHit(weaponData, attackData.stat)
            attackData.damage = `${weaponData.damage} + ${Math.floor((this.props.character[attackData.stat] - 10) / 2)}`
            attackData.type = weaponData.dtype
            attackData.range = this.determineRange(weaponData)

            attacks.push(attackData)

            attackData.name = `${weapon.name} (offhand)`
            attackData.damage = `${weaponData.damage}`

            attacks.push(attackData)
          }
        } else {
          attackData.name = weapon.name
          attackData.stat = this.determineStat(weaponData)
          attackData.toHit = this.determineHit(weaponData, attackData.stat)
          attackData.damage = `${weaponData.damage} + ${Math.floor((this.props.character[attackData.stat] - 10) / 2)}`
          attackData.type = weaponData.dtype
          attackData.range = this.determineRange(weaponData)

          attacks.push(attackData)
        }
      }
    })

    this.setState({
      attacks: attacks
    })
  }

  determineStat = (weaponData) => {
    // determines if a weapon should use strength or dexterity
    if (weaponData.properties.includes("finesse")) {
      //finesse allows you to use either your strength or dexterity. Traditionally, you want to use the higher of the two.
      if (this.props.character.dex > this.props.character.str) {
        return "dex"
      } else {
        return "str"
      }
    } else if (weaponData.properties.includes("ranged")) {
      //a ranged weapon, unless it includes the finesse proerty (as is the case for darts), always uses dexterty
      return "dex"
    } else {
      // any other weapon always uses strength
      return "str"
    }
  }

  determineHit = (weaponData, stat) => {
    if (weaponData.properties.includes("ranged") && this.props.character.class === "fighter" && this.props.character.features.fighting_style === "archery") {
      // a fighter with the Archery fighting style adds an additional +2 to their to hit rolls
      return Math.floor((this.props.character[stat] - 10) / 2) + this.props.character.proficiencyMod + 2
    } else {
      return Math.floor((this.props.character[stat] - 10) / 2) + this.props.character.proficiencyMod
    }
  }

  determineRange = (weaponData) => {
    if (weaponData.properties.includes("ranged")) {
      return (weaponData.range)
    } else if (weaponData.properties.includes("thrown")) {
      return ((<p className="mb-0">5 ft (melee) <br />{weaponData.range} (thrown)</p>))
    } else if (weaponData.properties.includes("reach")) {
      return ("10 ft")
    } else {
      return ("5 ft")
    }
  }

  componentDidMount() {

    this.createAttacksArray()

  }

  render() {
    
    return (<div>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Weapon</th>
            <th scope="col">To Hit</th>
            <th scope="col">Damage</th>
            <th scope="col">Damage Type</th>
            <th scope="col">Range</th>
          </tr>
        </thead>
        <tbody>
          {this.state.attacks.map((attack, i) => (<tr key={`attack_${i}`}>
            <td className="text-capitalize">{attack.name}</td>
            <td>{attack.toHit}</td>
            <td>{attack.damage}</td>
            <td className="text-capitalize">{attack.type}</td>
            <td>{attack.range}</td>
          </tr>))}
        </tbody>
      </table>
    </div>)
  }
}

export default AttackTable