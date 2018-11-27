import React, { Component } from "react"
import Item from "./ChecklistItem"
import "./CreateSave.css"

class CreateSave extends Component {

  checkAllFlags = () => {
    // When checking, first assume everything has been filled out
    let result = true;

    // make a copy of props
    const flags = { ...this.props }

    // remove "public" and "handleSelectToggle" from this clone, since we don't need to check those
    delete flags.public;
    delete flags.handleSelectToggle;

    // loop through flags
    for (let flag in flags) {

      if (!flags[flag]) {
        // if a flag is found to be false, set result to false
        result = false
        // we can also return the result as soon as we find a false flag
        return result
      }
    }
    // if no false results are found, then we can return true.
    return result
  }


  render() {
    return (<div>
      <div className="container">
        <h2 className="text-center display-4">Character Creation Checklist</h2>
        <hr />
        <div className="row">
          <div className="col col-12 col-md-6">
            <h5>Race</h5>
            <ul className="list-unstyled">
              <Item flag={this.props.raceSelected} name="Race" />
              <Item flag={this.props.raceOptionsSelected} name="Race Options" />
            </ul>
            <h5>Class</h5>
            <ul className="list-unstyled">
              <Item flag={this.props.classSelected} name="Class" />
              <Item flag={this.props.skillsSelected} name="Class Skills" />
              <Item flag={this.props.featuresSelected} name="Class Features" />
              <Item flag={this.props.equipmentSelected} name="Equipment" />
            </ul>
            <h5>Background</h5>
            <ul className="list-unstyled">
              <Item flag={this.props.backgroundSelected} name="Background" />
              <Item flag={this.props.bgOptionsSelected} name="Background Options" />
            </ul>
          </div>
          <div className="col col-12 col-md-6">
            <h5>Ability Scores</h5>
            <ul className="list-unstyled">
              <Item flag={this.props.methodSelected} name="Stat Method" />
              <Item flag={this.props.valuesSelected} name="Stat Values" />
              <Item flag={this.props.statsSelected} name="Stat Allocation" />
            </ul>
            <h5>Details</h5>
            <ul className="list-unstyled">
              <Item flag={this.props.name} name="Character Name" />
              <Item flag={this.props.alignment} name="Alignment" />
              <Item flag={this.props.gender} name="Gender" />
              <Item flag={this.props.age} name="Age" />
            </ul>
          </div>
        </div>

        <hr />

        <div className="form-check">
          <input className="form-check-input" type="checkbox" name="public" value={this.props.public} onChange={() => this.props.handleSelectToggle("public")} />
          <label className="form-check-label">
            Make Character Public?</label>
        </div>
        {(this.checkAllFlags() ? (<div><span className="text-danger font-weight-bold">NOTE:</span> Once a character is submitted, you will only be able to edit the Details page. Please make sure you're happy with all of your other options before submitting.</div>) : (<div></div>))}
        <div className="text-right">
          {(this.checkAllFlags() ?
            (<button className="btn btn-primary" onClick={() => this.props.saveChar()}>SUBMIT</button>) :
            (<button className="btn btn-secondary" disabled>Please Fill Out All Required Options</button>))}


        </div>
      </div>

    </div>)
  }
}

export default CreateSave