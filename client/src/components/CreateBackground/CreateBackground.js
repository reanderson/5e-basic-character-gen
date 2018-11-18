import React, { Component } from "react";
import bgIcons from "../../img/background"
import Icon from "../ItemIcon"
// import LanguageSelect from "../LanguageSelect"

class CreateBackground extends Component {

  renderLeftCol = () => {
    if (!this.props.backgroundSelected) {
      return this.renderBgBtns()
    } else if (!this.props.bgOptionsSelected) {
      return this.leftColOptionSelect()
    } else {
      return this.leftColFinal()
    }

  }

  renderRightCol = () => {
    if (!this.props.backgroundSelected) {
      return this.bgDetails()
    } else if (!this.props.bgOptionsSelected) {
      return this.rightColOptionsSelect()
    } 
  }

  // Left Col Functions
  renderBgBtns = () => {
    return (<div className="row">
      <div className="col col-12 col-md-6">
        <Icon src={bgIcons.soldier} name="Soldier" nameLower="soldier" active={this.props.background === "soldier"} />
      </div>

      <div className="col col-12">
        <button className="btn btn-primary btn-block my-3" onClick={() => this.props.chooseBg()}>Choose this Background</button>
      </div>
    </div>)
  }

  leftColOptionSelect = () => {
    const selectedBgIcon = (<div className="row justify-content-center">
      <div className="col col-12 col-md-6">
        <Icon src={bgIcons[this.props.background]} name={this.props.background.toLowerCase()
          .split(' ')
          .map((s) => s.charAt(0).toUpperCase() + s.substring(1))
          .join(' ')} nameLower={this.props.backgrond} />
      </div>
    </div>)

    //start by assuming all options have been filled in
    let checkOptions = true;
    if (this.props.background === "soldier") {
      if (this.props.bgOptions.gameProf === "" || this.props.bgOptions.gameSet === "") {
        checkOptions = false;
      }
    }
    let selectBtn

    if (!checkOptions) {
      selectBtn = (<button className="btn btn-block btn-secondary" disabled>Must Select All Options</button>)
    } else {
      selectBtn = (<button className="btn btn-block btn-primary" onClick={() => this.props.handleSelectToggle("bgOptionsSelected")}>Choose These Options</button>)
    }

    return (<div>
      {selectedBgIcon}

      <button className="btn btn-primary btn-block my-3" onClick={() => this.props.handleSelectToggle("backgroundSelected")}><i className="fas fa-caret-up"></i> Change Background</button>
      <hr />
      {selectBtn}
    </div>)
  }

  leftColFinal = () => {
    const selectedBgIcon = (<div className="row justify-content-center">
      <div className="col col-12 col-md-6">
        <Icon src={bgIcons[this.props.background]} name={this.props.background.toLowerCase()
          .split(' ')
          .map((s) => s.charAt(0).toUpperCase() + s.substring(1))
          .join(' ')} nameLower={this.props.backgrond} />
      </div>
    </div>)

return (<div>
  {selectedBgIcon}

  
  <hr />
  <button className="btn btn-primary btn-block my-3" onClick={() => this.props.handleSelectToggle("bgOptionsSelected")}><i className="fas fa-caret-up"></i> Change Background Options</button>
</div>)
  }


  // Right Col Functions
  basicBgInfo = () => {
    if (this.props.background === "soldier") {
      return (<div>
        <h2 className="text-center display-4">Soldier</h2>
        <hr />
        <p className="lead text-justify">
          War has been your life for as long as you care to remember. You trained as a youth, studied the use of weapons and armor, learned basic survival techniques, including how to stay alive on the battlefield. You might have been part of a standing national army or a mercenary company, or perhaps a member of a local militia who rose to prominence during a recent war.
          </p>
      </div>)
    }
  }

  bgDetails = () => {
    if (this.props.background === "soldier") {
      return (<div>
        <div>
          <h5>
            Soldier Features:
          </h5>
          <dl className="row">

            <dt className="col-sm-3">Skill Proficiencies</dt>
            <dd className="col-sm-9">Athletics, Intimidation</dd>

            <dt className="col-sm-3">Tool Proficiencies</dt>
            <dd className="col-sm-9">
              One type of Gaming Set, Vehicles (land)
            </dd>

            <dt className="col-sm-3">Equipment</dt>
            <dd className="col-sm-9">An insignia of rank, a trophy taken from a fallen enemy (a dagger, broken blade, or piece of a banner), a set of bone dice or deck of cards, a set of common clothes, and a pouch containing 10 gp</dd>

            <dt className="col-sm-3">Feature: Military Rank</dt>
            <dd className="col-sm-9">You have a military rank from your career as a soldier. Soldiers loyal to your former military organization still recognize your authority and influence, and they defer to you if they are of a lower rank. You can invoke your rank to exert influence over other soldiers and requisition simple equipment or horses for temporary use. You can also usually gain access to friendly military encampments and fortresses where your rank is recognized.</dd>
          </dl>

        </div>
      </div>)
    }
  }

  rightColOptionsSelect = () => {
    let chooseOptions

    if (this.props.background === "soldier") {
      chooseOptions = (<div>

        <select className="form-control" value={this.props.bgOptions.gameProf}
          onChange={this.props.handleBgOptionChange}
          name="gameProf">
          <option value="" hidden>Select a Game Set Proficiency</option>
          <option value="dice">Dice</option>
          <option value="dragonchess">Dragonchess</option>
          <option value="playing cards">Playing Cards</option>
          <option value="three-dragon Ante">Three-Drgon Ante</option>
          <option value="other gaming set">Other Gaming Set (check with your DM)</option>
        </select>
        <br />
        <select className="form-control" value={this.props.bgOptions.gameSet}
          onChange={this.props.handleBgOptionChange}
          name="gameSet">
          <option value="" hidden>Equipment Choice: Dice or Cards</option>
          <option value="bone dice">Bone Dice</option>
          <option value="playing cards">Playing Cards</option>
        </select>

      </div>)
    }

    return (<div>
      <hr />
      <h4 className="text-center">Background Options</h4>
      {chooseOptions}
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
            {this.basicBgInfo()}
            {this.renderRightCol()}
          </div>
        </div>
      </div>
    )
  }
}

export default CreateBackground