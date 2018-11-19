import React, { Component } from "react";
import raceIcons from "../../img/race"
import Icon from "../ItemIcon"
import LanguageSelect from "../LanguageSelect"

class CreateRace extends Component {

  basicRaceInfo = (race) => {
    if (race === "human") {
      return (<div>
        <h2 className="text-center display-4">Human</h2>
        <hr />
        <p className="lead text-justify">
          In the reckonings of most worlds, humans are the youngest of the common races, late to arrive on the world scene and short-lived in comparison to dwarves, elves, and dragons. Perhaps it is because of their shorter lives that they strive to achieve as much as they can in the years they are given. Or maybe they feel they have something to prove to the elder races, and that’s why they build their mighty empires on the foundation of conquest and trade. Whatever drives them, humans are the innovators, the achievers, and the pioneers of the worlds.
          </p>
      </div>)
    }
  }

  /*FLOW OF RACE TAB:
    -- Choose Race
    -- Choose race options (subrace, language, tool)*/

  renderLeftCol = () => {
    if (!this.props.raceSelected) {
      //When no race selected, render the 4 race option buttons
      return (
        <div className="row">
          <div className="col col-12 col-md-6">
            <Icon src={raceIcons.human} name="Human" nameLower="human" active={this.props.activeRace === "human"} />
          </div>
          <div className="col col-12">
            <button className="btn btn-primary btn-block my-3" onClick={() => this.props.chooseRace()}>Choose this Race</button>
          </div>
        </div>
      )
    } else if (!this.props.raceOptionsSelected) {
      //When the race has been selected, but the options haven't been, 
      return (this.leftColStepTwo())
    } else {
      return (this.leftColComplete())
    }
  }

  renderRightCol = () => {
    if (!this.props.raceSelected) {
      //When no race selected, render the description of the currently selected race
      return (this.writeRaceInformation())
    } else if (!this.props.raceOptionsSelected) {
      return (this.writeRaceOptions())
    }
  }

  leftColComplete = () => {
    const selectedRaceIcon = (<div className="row justify-content-center">
      <div className="col col-12 col-md-6">
        <Icon src={raceIcons[this.props.activeRace]} name={this.props.activeRace.toLowerCase()
          .split(' ')
          .map((s) => s.charAt(0).toUpperCase() + s.substring(1))
          .join(' ')} nameLower={this.props.activeRace} />
      </div>
    </div>)

    let selected

    if (this.props.activeRace === "human") {
      selected = (<div><span className="strong">Chosen Language:</span> {this.props.raceOptions.language.toLowerCase()
        .split(' ')
        .map((s) => s.charAt(0).toUpperCase() + s.substring(1))
        .join(' ')}</div>)
    }

    return (<div>
      {selectedRaceIcon}
      <hr />
      <div className="text-center">
        {selected}
      </div>
      <button className="btn btn-primary btn-block my-3" onClick={() => this.props.handleSelectToggle("raceOptionsSelected")}><i className="fas fa-caret-up"></i> Change Options</button>
    </div>)


  }


  writeRaceInformation = () => {
    let traits

    if (this.props.activeRace === "human") {
      traits = (
        <div>
          <h5>
            Human Traits:
          </h5>
          It’s hard to make generalizations about humans, but your human character has these traits.<br /><br />
          <dl className="row">
            <dt className="col-sm-3">Ability Score Increase</dt>
            <dd className="col-sm-9">Your ability scores each increase by 1.</dd>

            <dt className="col-sm-3">Age</dt>
            <dd className="col-sm-9">
              Humans reach adulthood in their late teens and live less than a century.
            </dd>

            <dt className="col-sm-3">Size</dt>
            <dd className="col-sm-9"> Humans vary widely in height and build, from barely 5 feet to well over 6 feet tall. Regardless of your position in that range, your size is Medium.</dd>

            <dt className="col-sm-3">Speed</dt>
            <dd className="col-sm-9">Your base walking speed is 30 feet.</dd>

            <dt className="col-sm-3">Languages</dt>
            <dd className="col-sm-9">You can speak, read, and write Common and one extra language of your choice. Humans typically learn the languages of other peoples they deal with, including obscure dialects. They are fond of sprinkling their speech with words borrowed from other tongues: Orc curses, Elvish musical expressions, Dwarvish military phrases, and so on.</dd>
          </dl>

        </div>
      )
    }
    // when more races are added, I'll have to them to the if statement

    else {
      //Since human is chosen by default, this should never happen, but on the off chance something strange happens, here we go.
      return (<p>Please select a Race</p>)
    }

    return (
      <div>
        {traits}
      </div>
    )
  }

  writeRaceOptions = () => {
    let options

    if (this.props.activeRace === "human") {
      options = (
        <div>
          <h4 className="text-center">Human Options</h4>
          <p>
            As a Human, you may choose one language in addition to Common. Check with your Dungeon Master before selecting an Exotic language. If your campaign uses languages other than those listed here, simply choose "Other".
            <br /> <br />For more information on languages, see <a href="http://dnd.wizards.com/products/tabletop/players-basic-rules#howtoplay_1006" target="_blank" rel="noopener noreferrer">the Characer Details section of the Basic Rules.</a>
          </p>
        </div>
      )
    }

    return (
      <div>
        {options}
      </div>
    )
  }

  leftColStepTwo = () => {
    const selectedRaceIcon = (<div className="row justify-content-center">
      <div className="col col-12 col-md-6">
        <Icon src={raceIcons[this.props.activeRace]} name="Human" nameLower="human" />
      </div>
    </div>)

    let options;

    if (this.props.activeRace === "human") {
      options = (
        <div>
          <LanguageSelect className="form-control"
            value={this.props.raceOptions.language}
            onChange={this.props.handleMenuOption}
            name={"language"} />
        </div>
      )
    }

    return (<div>
      {selectedRaceIcon}
      <button className="btn btn-primary btn-block my-3" onClick={() => this.props.handleSelectToggle("raceSelected")}>
        <i className="fas fa-caret-up"></i> Change Race
      </button>
      {options}
      <button className="btn btn-primary btn-block my-3" onClick={() => this.props.handleSelectToggle("raceOptionsSelected")}>Use These Options</button>
    </div>)
  }


  render() {
    return (
      <div>
        <div className="row py-2">
          <div className="col col-12 col-md-3">
            <div className="card my-3">
              <div className="card-body">
                {this.renderLeftCol()}
              </div>
            </div>
          </div>
          <div className="col col-12 col-md-9">
            {this.basicRaceInfo(this.props.activeRace)}
            {this.renderRightCol()}
          </div>
        </div>
      </div>
    )
  }

}
export default CreateRace