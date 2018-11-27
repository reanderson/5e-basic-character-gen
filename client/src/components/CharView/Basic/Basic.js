import React, { Component } from "react"
import items from "../../../utils/equipListing"
import StatCard from "./StatCard"
import Saves from "./Saves"
import Skills from "./Skills"
import EquipTable from "./EquipTable"
import ClassFeats from "./ClassFeats"
import AttackTable from "./AttackTable"
import BgFeat from "./BgFeat"

class Basic extends Component {
  state = {
    ac: {
      base: 10,
      equipped: "",
      type: "",
      shield: true
    },
    weapons: [],
    armor: [],
    otherItems: []
  }

  getHitDice = () => {
    if (this.props.character.class === "fighter") {
      return ("1d10")
    }
  }

  sortInventory = () => {
    const weapons = []
    const armor = []
    const other = []
    const ac = {
      base: 10,
      equipped: "",
      type: "",
      shield: false,
    }

    this.props.character.equipment.forEach((item) => {
      // If the item is a weapon...
      if (items.weapons.map(weapon => (weapon.name)).includes(item)) {
        const weaponData = items.weapons.find(weapon => (weapon.name === item))
        // See if the character is proficienct, and add the weapon to the weapons array
        if (this.props.character.weapons.includes(weaponData.type) || this.props.character.weapons.includes(weaponData.name)) {
          weapons.push({
            name: item,
            proficient: true
          })
        } else {
          weapons.push({
            name: item,
            proficient: false
          })
        }
      }
      // if the item is armor...
      else if (items.armor.map(equip => (equip.name)).includes(item)) {
        const armorData = items.armor.find(equip => (equip.name === item))
        // see if the character is proficient
        if (this.props.character.armor.includes(armorData.type)) {
          // yes and it's a shield, then note that in ac
          if (armorData.type === "shields") {
            ac.shield = true
          }
          // if it's not a shield, compare the armor to the currently set equipped armor
          else if (armorData.ac > ac.base) {
            // if the new armor is better, then update the equipped armor
            // this system isn't perfect, because it doesn't take dexterity modifications into account
            // but to be honest, I don't think any class can start with multiple sets of armor,
            // so this is a moot point right now.
            ac.base = armorData.ac
            ac.equipped = armorData.name
            ac.type = armorData.type
          }
          // regardless, push this to the armor array
          armor.push({
            name: item,
            proficient: true
          })
        } else {
          armor.push({
            name: item,
            proficient: false
          })
        }
      }
      // if the item is neither...
      else {
        // push it to the other array
        other.push(item)
      }
    })

    // Once the items are sorted, update state
    this.setState({
      ac: ac,
      weapons: weapons,
      armor: armor,
      otherItems: other
    })
  }

  getAC = () => {
    let ac = this.state.ac.base
    const equippedArmor = items.armor.find((item) => (item.name === this.state.ac.equipped))

    if (!equippedArmor || equippedArmor.type === "light") {
      // light or no armor adds your dexterity modifier
      ac = ac + (Math.floor((this.props.character.dex - 10) / 2))
    } else if (equippedArmor.type === "medium") {
      // Medium armor can add your dexterity modifier, to a minimum of two
      ac = ac + (Math.min((Math.floor((this.props.character.dex - 10) / 2)), 2))
    }
    // heavy armor doesn't add your dexterity modifier

    if (this.state.ac.shield) {
      //if there's a shield, add 2 to ac
      ac += 2
    }

    // take into consideration fighting style: defense
    if(this.props.character.class === "fighter" && this.props.character.features.fighting_style === "defense" && this.state.ac.equipped) {
      ac +=1
    }

    return ac
  }

  componentDidMount() {
    this.sortInventory()
  }

  render() {

    return (<div className="row">
      <div className="col col-12 col-lg-4">
        <div className="row">
          <div className="col col-4 p-2 bg-light my-2">
            <StatCard statName="strength" statVal={this.props.character.str} />
            <StatCard statName="dexterity" statVal={this.props.character.dex} />
            <StatCard statName="constitution" statVal={this.props.character.con} />
            <StatCard statName="intelligence" statVal={this.props.character.int} />
            <StatCard statName="wisdom" statVal={this.props.character.wis} />
            <StatCard statName="charisma" statVal={this.props.character.cha} />
          </div>
          <div className="col col-8">
            <div className="row border border-secondary rounded py-2 mx-0 px-0 align-items-center my-3">
              <div className="col col-3"><span className="border border-secondary rounded-circle p-2">+{this.props.character.proficiencyMod}</span></div>
              <div className="col col-9 text-uppercase small text-center">proficiency bonus</div>
            </div>
            <Saves character={this.props.character} />

            <Skills character={this.props.character} />

            <div className="row border border-secondary rounded py-2 mx-0 px-0 align-items-center">
              <div className="col col-3"><span className="border border-secondary rounded-circle py-2 px-3">{10 + Math.floor((this.props.character.wis - 10) / 2) + (this.props.character.skills.includes("perception") ? this.props.character.proficiencyMod : 0)}</span></div>
              <div className="col col-9 text-uppercase small text-center">Passive Perception (Wisdom)</div></div>

          </div>
          <div className="col col-12 border border-secondary text-capitalize p-2 mb-3">
            <span className="font-weight-bold text-uppercase mb-3">Languages:</span> {this.props.character.languages.join(", ")} <br />
            <span className="font-weight-bold text-uppercase">Tools:</span> {this.props.character.tools ? this.props.character.tools.join(", ") : "None"} <br /> <br />
            <span className="font-weight-bold text-uppercase">Weapons:</span> {this.props.character.weapons.join(", ")}<br />
            <span className="font-weight-bold text-uppercase">Armor:</span> {this.props.character.armor.join(", ")}

            <div className="text-center text-uppercase small font-weight-bold">other proficiencies & languages</div>
          </div>
        </div>
      </div>

      <div className="col col-12 col-lg-4">
        <div className="row bg-light my-2 text-center">
          <div className="col col-4">
            <div className="border border-secondary p-0 my-3 bg-white">
              <div className="h5 my-2 mx-0">{this.getAC()}</div>
              <span className="small text-uppercase">Armor Class</span>
            </div>
          </div>
          <div className="col col-4">
            <div className="border border-secondary p-0 my-3 bg-white">
              <div className="h5 my-2 mx-0">{Math.floor((this.props.character.dex - 10) / 2)}</div>
              <span className="small text-uppercase">Initiative Bonus</span>
            </div></div>
          <div className="col col-4"><div className="border border-secondary p-0 my-3 bg-white">
            <div className="h5 my-2 mx-0">{this.props.character.speed} ft</div>
            <span className="small text-uppercase">Speed (walking)</span>
          </div></div>
          <div className="col col-12">
            <div className="border border-secondary m-3 bg-white px-3 pb-1">
              <div className="small mt-2">
                <span className="text-muted">Hit Point Maximum:</span> {this.props.character.totalHp}
              </div><hr />
              <div className="h5 mb-3">&nbsp;</div>
              <span className="small text-uppercase">current hit points</span>
            </div>
          </div>
          <div className="col col-12">
            <div className="border border-secondary m-3 bg-white px-3 pb-1">
              <div className="h5 my-3">&nbsp;</div>
              <span className="small text-uppercase">temporary hit points</span>
            </div></div>
          <div className="col col-6"><div className="border border-secondary m-3 bg-white px-3 pb-1">
            <div className="small mt-2 mb-0">
              <span className="text-muted">Total:</span> {this.getHitDice()}
            </div><hr className="mt-2" />
            <div className="h5 mb-0">&nbsp;</div>
            <span className="small text-uppercase">hit dice</span>
          </div></div>
          <div className="col col-6">
            <div className="border border-secondary m-3 bg-white px-3 pb-1">
              <div className="row small text-uppercase my-3">
                <div className="col col-6 mb-2">successes:</div>
                <div className="col col-6">
                  <i className="far fa-circle"></i>—<i className="far fa-circle"></i>—<i className="far fa-circle"></i>
                </div>

                <div className="col col-6">failures: </div>
                <div className="col col-6">
                  <i className="far fa-circle"></i>—<i className="far fa-circle"></i>—<i className="far fa-circle"></i>
                </div>
              </div>
              <span className="small text-uppercase">death saves</span>
            </div></div>
        </div>

        <div className="border border-secondary rounded m-1 p-2">
          {this.state.weapons.length > 0 ? (<AttackTable character={this.props.character} weapons={this.state.weapons} />) : ""}

          <div className="small text-uppercase text-center mt-2">weapon attacks</div>
        </div>
      </div>

      <div className="col col-12 col-lg-4">
        <div className="border border-secondary rounded mx-1 my-3 p-2">
          <ClassFeats character={this.props.character} />
          <BgFeat background={this.props.character.background} />

          <div className="small text-uppercase text-center mt-2">features & traits</div>
        </div>

        <div className="border border-secondary rounded mx-1 my-3 p-2">
          
            <EquipTable ac={this.state.ac} weapons={this.state.weapons} armor={this.state.armor} />
            
          <div className="small text-uppercase text-center mt-2">equipment</div>
        </div>

        <div className="border border-secondary rounded mx-1 my-3 p-2">
        <div className="row align-items-center">
            <div className="col col-3 bg-light mx-3 small">
              <div className="border border-secondary mx-1 my-3 p-2 text-muted bg-white">CP: </div>
              <div className="border border-secondary mx-1 my-3 p-2 text-muted bg-white">SP: </div>
              <div className="border border-secondary mx-1 my-3 p-2 text-muted bg-white">EP: </div>
              <div className="border border-secondary mx-1 my-3 p-2 text-muted bg-white">GP: {this.props.character.gold}</div>
              <div className="border border-secondary mx-1 my-3 p-2 text-muted bg-white">PP: </div>
            </div>
            <div className="col col-8">
          <ul className="list-group  text-capitalize">
            {this.state.otherItems.map((item, i) => (
              <li key={`item_${i}`} className="list-group-item">{item}</li>
            ))}
          </ul>
          </div>
          </div>
          <div className="small text-uppercase text-center mt-2">other items</div>
        </div>
      </div>
    </div>)
  }
}

export default Basic