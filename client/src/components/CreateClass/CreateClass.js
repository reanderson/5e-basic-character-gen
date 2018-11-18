import React, { Component } from "react";
import classIcons from "../../img/class"
import Icon from "../ItemIcon"
import WeaponSelect from "../WeaponSelect"

const skillOptions = {
  fighter: ["Acrobatics", "Animal Handling", "Athletics", "History", "Insight", "Intimidation", "Perception", "Survival"]
}

class CreateClass extends Component {


  renderLeftCol = () => {
    if (!this.props.classSelected) {
      //When no class selected, render the class buttons
      return (this.renderClassBtns())
    } else if (!this.props.skillsSelected) {
      return (this.leftColSkillSelect())
    } else if (!this.props.featuresSelected) {
      return (this.leftColFeatures())
    } else if (!this.props.equipmentSelected) {
      return (this.leftColEquipment())
    } else {
      return (this.leftColFinal())
    }
  }

  renderRightCol = () => {
    if (!this.props.classSelected) {
      return (this.classDetails())
    } else if (!this.props.skillsSelected) {
      return (this.rightColSkillSelect())
    } else if (!this.props.featuresSelected) {
      return (this.rightColFeatures())
    } else if (!this.props.equipmentSelected) {
      return (this.rightColEquipment())
    }
  }

  //Right Col Rendering
  basicClassInfo = () => {
    if (this.props.class === "fighter") {
      return (<div>
        <h2 className="text-center display-4">Fighter</h2>
        <hr />
        <p className="lead text-justify">
          A human in clanging plate armor holds her shield before her as she runs toward the massed goblins. An elf behind her, clad in studded leather armor, peppers the goblins with arrows loosed from his exquisite bow. The half-orc nearby shouts orders, helping the two combatants coordinate their assault to the best advantage. <br /> <br />
          These heroes are fighters, perhaps the most diverse class of characters in the worlds of Dungeons & Dragons. Questing knights, conquering overlords, royal champions, elite foot soldiers, hardened mercenaries, and bandit kings—as fighters, they all share an unparalleled mastery with weapons and armor, and a thorough knowledge of the skills of combat. And they are well acquainted with death, both meting it out and staring it defiantly in the face.
          </p>
      </div>)
    }
  }

  classDetails = () => {
    if (this.props.class === "fighter") {
      return (<div>
        <div>
          <h5>
            Fighter Features:
          </h5>
          <dl className="row">

            <dt className="col-sm-3">Hit Dice</dt>
            <dd className="col-sm-9">1d10 per Fighter level</dd>

            <dt className="col-sm-3">Hit Points at 1st Level</dt>
            <dd className="col-sm-9">
              10 + your Constitution modifier
            </dd>

            <dt className="col-sm-3">Hit Points at Higher Levels</dt>
            <dd className="col-sm-9">1d10 (or 6) + your Constitution modifier per fighter level after 1st</dd>

            <dt className="col-sm-3">Armor Proficiencies</dt>
            <dd className="col-sm-9">All armor, shields</dd>

            <dt className="col-sm-3">Weapon Proficiencies</dt>
            <dd className="col-sm-9">Simple weapons, martial weapons</dd>

            <dt className="col-sm-3">Tool Proficiencies</dt>
            <dd className="col-sm-9">None</dd>

            <dt className="col-sm-3">Saving Throw Proficiencies</dt>
            <dd className="col-sm-9">Strength, Constitution</dd>
          </dl>

        </div>
      </div>)
    }
  }

  rightColSkillSelect = () => {
    if (!this.props.backgroundSelected) {
      return (<div>
        <hr />
        <h5 className="text-center">Skill Select</h5>
        <div className="row">

          {this.props.classSkills.map((val, i) => {
            return (
              <div className="col col-12 col-md-6 my-2" key={`div-${i}`}>
                <select className="form-control"
                  value={val}
                  // onChange={}
                  key={i}
                  name={i}
                  placeholder="Select a Skill"
                  onChange={this.props.handleSkillSelect}>
                  <option value="" hidden>Select a Skill</option>

                  {skillOptions[this.props.class].map((skillChoice) => {
                    return (<option
                      value={skillChoice}
                      key={`${skillChoice}-${i}`}
                      hidden={(this.props.classSkills.includes(skillChoice))}>{skillChoice}</option>)
                  })}
                </select>

              </div>)
          })}
        </div>
        <p><strong className="text-danger">WARNING:</strong> Your Background also gives skill proficiencies. Receiving the same proficiency from two sources does not grant additional benefits. It is recommended that you choose your Background before selecting your class skill proficiencies, unless you are okay with the possibility of losing out on proficiencies.</p>
      </div >)
    }
    else {
      return (<div>
        <hr />
        <h5 className="text-center">Skill Select</h5>
        <div className="row">

          {this.props.classSkills.map((val, i) => {
            return (
              <div className="col col-12 col-md-6 my-2" key={`div-${i}`}>
                <select className="form-control"
                  value={val}
                  // onChange={}
                  key={i}
                  name={i}
                  placeholder="Select a Skill"
                  onChange={this.props.handleSkillSelect}>
                  <option value="" hidden>Select a Skill</option>

                  {skillOptions[this.props.class].map((skillChoice) => {
                    return (<option
                      value={skillChoice}
                      key={`${skillChoice}-${i}`}
                      hidden={(this.props.classSkills.includes(skillChoice) || this.props.backgroundSkills.includes(skillChoice))}>{skillChoice}</option>)
                  })}
                </select>

              </div>)
          })}
        </div>
      </div>)
    }
  }

  rightColFeatures = () => {
    let chooseFeatures

    if (this.props.class === "fighter") {
      chooseFeatures = (<div>
        <h4>Fighting Style</h4>
        <p>You adopt a particular style of fighting as your specialty. Choose one of the following options. You can’t take a Fighting Style option more than once, even if you later get to choose again.</p>

        <div className="form-check" onChange={this.props.handleFeatureChange}>
          <div className="row">
            <div className="col col-6 col-md-4">
              <input className="form-check-input" type="radio" name="fightingStyle" value="archery" defaultChecked={this.props.features.fightingStyle === "archery"} /> <label className="form-check-label"><span className="font-weight-bold">ARCHERY</span><br />
                You gain a +2 bonus to attack rolls you make with ranged weapons.</label>
            </div>
            <div className="col col-6 col-md-4">
              <input className="form-check-input" type="radio" name="fightingStyle" value="defense" defaultChecked={this.props.features.fightingStyle === "defense"} /> <label className="form-check-label"><span className="font-weight-bold">DEFENSE</span><br />
                While you are wearing armor, you gain a +1 bonus to AC.</label>
            </div>
            <div className="col col-6 col-md-4">
              <input className="form-check-input" type="radio" name="fightingStyle" value="dueling" defaultChecked={this.props.features.fightingStyle === "dueling"} /> <label className="form-check-label"><span className="font-weight-bold">DUELING</span><br />
                When you are wielding a melee weapon in one hand and no other weapons, you gain a +2 bonus to damage rolls with that weapon.</label>
            </div>
            <div className="col col-6 col-md-4">
              <input className="form-check-input" type="radio" name="fightingStyle" value="great weapon fighting" defaultChecked={this.props.features.fightingStyle === "great weapon fighting"} /> <label className="form-check-label"><span className="font-weight-bold">GREAT WEAPON FIGHTING</span><br />
                When you roll a 1 or 2 on a damage die for an attack you make with a melee weapon that you are wielding with two hands, you can reroll the die and must use the new roll, even if the new roll is a 1 or a 2. The weapon must have the two-handed or versatile property for you to gain this benefit.</label>
            </div>
            <div className="col col-6 col-md-4">
              <input className="form-check-input" type="radio" name="fightingStyle" value="protection" defaultChecked={this.props.features.fightingStyle === "protection"} /> <label className="form-check-label"><span className="font-weight-bold">PROTECTION</span><br />
                When a creature you can see attacks a target other than you that is within 5 feet of you, you can use your reaction to impose disadvantage on the attack roll. You must be wielding a shield.</label>
            </div>
            <div className="col col-6 col-md-4">
              <input className="form-check-input" type="radio" name="fightingStyle" value="two-weapon fighting" defaultChecked={this.props.features.fightingStyle === "two-weapon fighting"} /> <label className="form-check-label"><span className="font-weight-bold">TWO-WEAPON FIGHTING</span><br />
                When you engage in two-weapon fighting, you can add your ability modifier to the damage of the second attack.</label>
            </div>
          </div>
        </div>
        <br /> <br />
        <h4>Second Wind</h4>
        <p>You have a limited well of stamina that you can draw on to protect yourself from harm. On your turn, you can use a bonus action to regain hit points equal to 1d10 + your fighter level.</p>

        <p>Once you use this feature, you must finish a short or long rest before you can use it again.</p>
      </div>)
    }

    return (<div>
      <hr />
      <h4 className="text-center">Class Features</h4>
      {chooseFeatures}
    </div>)
  }

  rightColEquipment = () => {
    let equipOptions

    if (this.props.class === "fighter") {
      equipOptions = (<div>
        <ul className="list-group">
          <li className="list-group-item">
            <div className="form-check" onChange={this.props.handleEquipChange}>
              <div className="row">
                <div className="col col-6">
                  <input className="form-check-input" type="radio" name={0} value="a" defaultChecked={this.props.equipment[0] === "a"} /> <label className="form-check-label">
                    Chain Mail</label>
                </div>
                <div className="col col-6">
                  <input className="form-check-input" type="radio" name={0} value="b" defaultChecked={this.props.equipment[0] === "b"} /> <label className="form-check-label">
                    Leather Armor, Longbow, and 20 Arrows</label>
                </div>
              </div>
            </div>
          </li>

          <li className="list-group-item">
            <div className="form-check">
              <div className="row">
                <div className="col col-6">
                  <input className="form-check-input" type="radio" name={1} value={JSON.stringify({ a: [""] })} defaultChecked={Object.keys(this.props.equipment[1])[0] === "a"} onChange={this.props.equipChangeJson} /> <label className="form-check-label">
                    A Martial Weapon and Shield
                    <br />
                    <WeaponSelect
                      type="martial"
                      value={this.props.equipment[1].a ? this.props.equipment[1].a[0] : ""}
                      onChange={this.props.equipInnerChange}
                      name={JSON.stringify([1, "a", 0])}
                      hidden={!(Object.keys(this.props.equipment[1])[0] === "a")} />
                  </label>
                </div>
                <div className="col col-6">
                  <input className="form-check-input" type="radio" name={1} value={JSON.stringify({ b: ["", ""] })} defaultChecked={Object.keys(this.props.equipment[1])[0] === "b"} onChange={this.props.equipChangeJson} /> <label className="form-check-label">
                    Two Martial Weapons
                    <br />
                    <WeaponSelect
                      type="martial"
                      value={this.props.equipment[1].b ? this.props.equipment[1].b[0] : ""}
                      onChange={this.props.equipInnerChange}
                      name={JSON.stringify([1, "b", 0])}
                      hidden={!(Object.keys(this.props.equipment[1])[0] === "b")} />
                    <WeaponSelect
                      type="martial"
                      value={this.props.equipment[1].b ? this.props.equipment[1].b[1] : ""}
                      onChange={this.props.equipInnerChange}
                      name={JSON.stringify([1, "b", 1])}
                      hidden={!(Object.keys(this.props.equipment[1])[0] === "b")} /></label>
                </div>
              </div>
            </div>
          </li>

          <li className="list-group-item">
            <div className="form-check" onChange={this.props.handleEquipChange}>
              <div className="row">
                <div className="col col-6">
                  <input className="form-check-input" type="radio" name={2} value="a" defaultChecked={this.props.equipment[2] === "a"} /> <label className="form-check-label">
                    A Light Crossbow & 20 Bolts</label>
                </div>
                <div className="col col-6">
                  <input className="form-check-input" type="radio" name={2} value="b" defaultChecked={this.props.equipment[2] === "b"} /> <label className="form-check-label">
                    Two Handaxes</label>
                </div>
              </div>
            </div>
          </li>

          <li className="list-group-item">
            <div className="form-check" onChange={this.props.handleEquipChange}>
              <div className="row">
                <div className="col col-6">
                  <input className="form-check-input" type="radio" name={3} value="a" defaultChecked={this.props.equipment[3] === "a"} /> <label className="form-check-label">
                    A Dungeoneer's Pack
                    <p className="small"> Includes a backpack, a crowbar, a hammer, 10 pitons, 10 torches, a tinderbox, 10 days of rations, and a waterskin. The pack also has 50 feet of hempen rope strapped to the side of it.</p></label>
                </div>
                <div className="col col-6">
                  <input className="form-check-input" type="radio" name={3} value="b" defaultChecked={this.props.equipment[3] === "b"} /> <label className="form-check-label">
                  An Explorers's Pack
                    <p className="small">Includes a backpack, a bedroll, a mess kit, a tinderbox, 10 torches, 10 days of rations, and a waterskin. The pack also has 50 feet of hempen rope strapped to the side of it.</p></label>
                </div>
              </div>
            </div>
          </li>
        </ul>
      </div>)
    }

    return (<div>
      <hr />
      <h4 className="text-center">Equipment</h4>
      {equipOptions}
    </div>)
  }


  //Left Col Rendering
  renderClassBtns = () => {
    return (<div className="row">
      <div className="col col-12 col-md-6">
        <Icon src={classIcons.fighter} name="Fighter" nameLower="fighter" active={this.props.class === "fighter"} />
      </div>

      <div className="col col-12">
        <button className="btn btn-primary btn-block my-3" onClick={this.props.chooseClass}>Choose this Class</button>
      </div>
    </div>)
  }

  leftColSkillSelect = () => {
    const selectedClassIcon = (<div className="row justify-content-center">
      <div className="col col-12 col-md-6">
        <Icon src={classIcons[this.props.class]} name={this.props.class.toLowerCase()
          .split(' ')
          .map((s) => s.charAt(0).toUpperCase() + s.substring(1))
          .join(' ')} nameLower={this.props.class} />
      </div>
    </div>)

    let selectBtn

    if (this.props.classSkills.includes("")) {
      selectBtn = (<button className="btn btn-block btn-secondary" disabled>Must Select All Skills</button>)
    } else {
      selectBtn = (<button className="btn btn-block btn-primary" onClick={() => this.props.handleSelectToggle("skillsSelected")}>Choose These Skills</button>)
    }

    return (<div>
      {selectedClassIcon}

      <button className="btn btn-primary btn-block my-3" onClick={() => this.props.handleSelectToggle("classSelected")}><i className="fas fa-caret-up"></i> Change Class</button>
      <hr />
      {selectBtn}
    </div>)
  }

  leftColFeatures = () => {
    const selectedClassIcon = (<div className="row justify-content-center">
      <div className="col col-12 col-md-6">
        <Icon src={classIcons[this.props.class]} name={this.props.class.toLowerCase()
          .split(' ')
          .map((s) => s.charAt(0).toUpperCase() + s.substring(1))
          .join(' ')} nameLower={this.props.class} />
      </div>
    </div>)

    const skillChoices = (<ul>
      {this.props.classSkills.map((skill) => (
        <li key={skill}>{skill}</li>
      ))}
    </ul>)

    let selectBtn

    if (this.props.class === "fighter") {
      if (this.props.features.fightingStyle === "") {
        selectBtn = (<button className="btn btn-block btn-secondary" disabled>Must Select a Fighting Style</button>)
      }
      else {
        selectBtn = (<button className="btn btn-block btn-primary" onClick={() => this.props.handleSelectToggle("featuresSelected")}>Choose This Fighting Style</button>)
      }
    }


    return (<div>
      {selectedClassIcon}
      <hr />
      <h5>Class Skills:</h5>
      {skillChoices}
      <button className="btn btn-primary btn-block my-3" onClick={() => this.props.handleSelectToggle("skillsSelected")}><i className="fas fa-caret-up"></i> Change Skills</button>
      <hr />
      {selectBtn}
    </div>)
  }

  leftColEquipment = () => {
    const selectedClassIcon = (<div className="row justify-content-center">
      <div className="col col-12 col-md-6">
        <Icon src={classIcons[this.props.class]} name={this.props.class.toLowerCase()
          .split(' ')
          .map((s) => s.charAt(0).toUpperCase() + s.substring(1))
          .join(' ')} nameLower={this.props.class} />
      </div>
    </div>)

    const skillChoices = (<ul>
      {this.props.classSkills.map((skill) => (
        <li key={skill}>{skill}</li>
      ))}
    </ul>)

    const featureKeys = Object.keys(this.props.features)

    let featureList = (
      <div>
        {featureKeys.map(key => (<span className="text-capitalize" key={`${key}-outer`}> <span className="font-weight-bold" key={`${key}-inner`}>{key}: </span>
          {this.props.features[key]}
        </span>))}
      </div>
    )

    let selectBtn = (<button className="btn btn-block btn-secondary" disabled>Must Select All Equipments</button>)

    //I know I could write some of these if statements in one line, but it's easier for me to figure out how to handle this if I split it out.
    if (this.props.class==="fighter") {
      if (!(this.props.equipment.includes(""))) {
        if(this.props.equipment[1].a) {
          if (!(this.props.equipment[1].a.includes(""))) {
            selectBtn = (<button className="btn btn-block btn-primary" onClick={() => this.props.handleSelectToggle("equipmentSelected")}>Choose This Equipment</button>)
          }
        }

        else if(this.props.equipment[1].b) {
          if (!(this.props.equipment[1].b.includes(""))) {
            selectBtn = (<button className="btn btn-block btn-primary" onClick={() => this.props.handleSelectToggle("equipmentSelected")}>Choose This Equipment</button>)
          }
        }
      }
    } 
    
  

    return (<div>
      {selectedClassIcon}
      <hr />
      <h5>Class Skills:</h5>
      {skillChoices}
      <hr />
      <h5>Selected Features</h5>
      {featureList}
      <button className="btn btn-primary btn-block my-3" onClick={() => this.props.handleSelectToggle("featuresSelected")}><i className="fas fa-caret-up"></i> Change Features</button>
      <hr />
      {selectBtn}
    </div>)
  }

  leftColFinal = () => {
    const selectedClassIcon = (<div className="row justify-content-center">
      <div className="col col-12 col-md-6">
        <Icon src={classIcons[this.props.class]} name={this.props.class.toLowerCase()
          .split(' ')
          .map((s) => s.charAt(0).toUpperCase() + s.substring(1))
          .join(' ')} nameLower={this.props.class} />
      </div>
    </div>)

    const skillChoices = (<ul>
      {this.props.classSkills.map((skill) => (
        <li key={skill}>{skill}</li>
      ))}
    </ul>)

    const featureKeys = Object.keys(this.props.features)

    let featureList = (
      <div>
        {featureKeys.map(key => (<span className="text-capitalize" key={`${key}-outer`}> <span className="font-weight-bold" key={`${key}-inner`}>{key}: </span>
          {this.props.features[key]}
        </span>))}
      </div>
    )

    return (<div>
      {selectedClassIcon}
      <hr />
      <h5>Class Skills:</h5>
      {skillChoices}
      <hr />
      <h5>Selected Features</h5>
      {featureList}

      <hr />
      {/* if I have the time and patience to code out making the equipment display, great. If I don't, oh well. */}
      <button className="btn btn-primary btn-block my-3" onClick={() => this.props.handleSelectToggle("equipmentSelected")}><i className="fas fa-caret-up"></i> Change Equipment</button>
    </div>)
  }

  render() {
    return (
      <div>
        <div className="row py-2">
          <div className="col col-12 col-md-3">
            {this.renderLeftCol()}

          </div>
          <div className="col col-12 col-md-9">
            {this.basicClassInfo()}
            {this.renderRightCol()}
          </div>
        </div>
      </div>
    )
  }
}

export default CreateClass