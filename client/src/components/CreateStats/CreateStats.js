import React, { Component } from "react"
import StatRow from "../StatRow"

class CreateStats extends Component {
  state = {
    //refers to the index of the value in props.values 
    activeValue: null
  }

  raceBonus = {
    human: {
      str: 1,
      dex: 1,
      con: 1,
      int: 1,
      wis: 1,
      cha: 1
    }
  }

  selectValue = (event) => {
    if (!(this.state.activeValue === parseInt(event.target.name, 10))) {
      this.setState({
        activeValue: parseInt(event.target.name, 10)
      })
    } else {
      this.setState({
        activeValue: null
      })
    }
  }

  setScore = (stat) => {
    // get the value out of props.values
    const val = this.props.values[this.state.activeValue - 1]
    // copy the remaining values array, so we can edit it to set state later
    const remainingValsCopy = [...this.props.valuesRemaining]

    // find the index of the active value in this array, and remove it
    const indexToRemove = remainingValsCopy.findIndex(value => value === (this.state.activeValue));

    remainingValsCopy.splice(indexToRemove, 1)

    // update the remaining values
    this.props.setRemainingValues(remainingValsCopy)

    // set the value of stat to val
    this.props.setStat(stat, val)

    //set activeValue to null
    this.setState({
      activeValue: null
    })
  }

  removeScore = (stat) => {
    //get the stat's current value
    const val = this.props.stats[stat]

    // copy the remaining values array, so we can edit it to set state later
    const remainingValsCopy = [...this.props.valuesRemaining]

    //get the index for this value in the values array; add 1 to it
    const valIndex = this.props.values.findIndex(value => value === (val))

    // push valIndex to the remaining values
    remainingValsCopy.push(valIndex + 1)

    // update the remaining values
    this.props.setRemainingValues(remainingValsCopy)

    // set the value of stat to null
    this.props.setStat(stat, null)
  }

  replaceScore = (stat) => {
    //get the stat's current value
    const val = this.props.stats[stat]

    // copy the remaining values array, so we can edit it to set state later
    const remainingValsCopy = [...this.props.valuesRemaining]

    //get the index for this value in the values array; add 1 to it
    const valIndex = this.props.values.findIndex(value => value === (val))

    // push valIndex to the remaining values
    remainingValsCopy.push(valIndex + 1)

    // get the intended new value for the stat
    const newVal = this.props.values[this.state.activeValue - 1]

    // find the index of the active value in this array, and remove it
    const indexToRemove = remainingValsCopy.findIndex(value => value === (this.state.activeValue));

    remainingValsCopy.splice(indexToRemove, 1)

    // update the remaining values
    this.props.setRemainingValues(remainingValsCopy)

    // set the value of stat to newVal
    this.props.setStat(stat, newVal)

    //set activeValue to null
    this.setState({
      activeValue: null
    })
  }

  statSetBtn = (stat) => {
    if ((this.state.activeValue && this.props.stats[stat])) {
      return (<button className="btn btn-sm btn-dark" onClick={() => this.replaceScore(stat)}>Replace {stat.toUpperCase()}: {this.props.stats[stat]}</button>)
    } else if (this.state.activeValue) {
      return (<button className="btn btn-sm btn-dark" onClick={() => this.setScore(stat)}>Assign to {stat.toUpperCase()}</button>)
    } else if (this.props.stats[stat]) {
      return (<button className="btn btn-sm btn-outline-dark" onClick={() => this.removeScore(stat, null)}>{this.props.stats[stat]}</button>)
    } else {
      return (<button className="btn btn-sm btn-outline-dark" disabled>Choose a Value</button>)
    }
  }

  undoStandardSelect = () => {
    this.props.handleSelectToggle("methodSelected")
    this.props.handleSelectToggle("valuesSelected")
  }

  renderRecColContent = () => {
    if (!this.props.classSelected) {
      return (<p className="card-text">Once you've selected a class, information with stat recommendations will apppear here!</p>)
    } else if (this.props.class === "fighter") {
      return (<div>
        <h5 className="card-title text-center">Fighter</h5>
        <p className="card-text">
          What sort of weaponry would you like to focus on? If you're focusing on archery or specialized finesee melee weapons, then you may want to consider making <span className="font-weight-bold">Dexterity</span> your highest stat. Otherwise, you most likely will want <span className="font-weight-bold">Strength</span> as your highest stat. <span className="font-weight-bold">Constitution</span> should follow behind your primary offensive stat--or perhaps, your highest stat overall, if you would instead like to focus on your longevity in battle. <br /> <br />
          Even if you're not focusing on ranged or finesse weapons, Dexterity is an incredibly useful attribute, as it affects your ability to act earlier in combat, and is commonly used to avoid traps and magic. It is generally beneficial to keep this stat at 10 or above, so as to not take a penalty to it. <br /> <br />
          The mental stats (Intelligence, Wisdom, and Charisma) are less important to a Fighter mechanically, but might be important to your character overall. When distributing values into these stats, consider how these values might influence your character.
        </p>
      </div>)
    }
  }

  renderLeftCol = () => {
    if (!this.props.methodSelected) {
      return (<div>{this.leftMethodSelect()}</div>)
    } else if (!this.props.valuesSelected) {
      //This is only necessary once we add options other than Standard array
      return (<div>If you're seeing this, something is wrong.</div>)
    } else if (!this.props.statsSelected) {
      return (this.leftStatDistribute())
    } else {
      return (this.leftStatsChosen())
    }
  }

  renderMidCol = () => {
    if (!this.props.methodSelected) {
      return (<div>{this.midMethodSelect()}</div>)
    } else if (!this.props.valuesSelected) {
      //This is only necessary once we add options other than Standard array
      return (<div>If you're seeing this, something is wrong.</div>)
    } else if (!this.props.statsSelected) {
      return (this.midStatDistribute())
    } else {
      return (this.midStatsChosen())
    }
  }

  //Left Col Displays
  leftMethodSelect = () => {
    return (<div>
      <h5 className="card-title text-center">Stat Method</h5>
      <button className="btn btn-primary btn-block" name="standard" onClick={this.props.handleMethodSelect}>Standard Array</button>
    </div>)
  }

  leftStatDistribute = () => {
    let backBtn
    if (this.props.method === "standard") {
      backBtn = (<button className="btn btn-primary btn-block my-3" onClick={() => this.undoStandardSelect()}><i className="fas fa-caret-up"></i> Change Stat Method</button>)
    }

    // Assume that all of the stat values have been allocated
    let allSet = true
    for (let stat in this.props.stats) {
      if (this.props.stats[stat] === null) {
        //if a stat is found to be null, set to false
        allSet = false
      }
    }

    let nextBtn
    if (allSet) {
      nextBtn = (<button className="btn btn-primary btn-block" onClick={() => this.props.handleSelectToggle("statsSelected")}>Use These Stats</button>)
    } else {
      nextBtn = (<button className="btn btn-secondary btn-block" disabled>Please Set All Stats</button>)
    }

    return (<div>
      <p className="card-text and text-capitalize">Method: {this.props.method}</p>
      {backBtn}
      <hr />
      {nextBtn}
    </div>)
  }

  leftStatsChosen = () => {
    return (<div>
      <p className="card-text and text-capitalize">Method: {this.props.method}</p>
      <hr />
      <button className="btn btn-primary btn-block" onClick={() => this.props.handleSelectToggle("statsSelected")}><i className="fas fa-caret-up"></i> Change Stat Allocation</button>
    </div>)
  }

  //Mid Col Displays
  midMethodSelect = () => {
    return (<div>
      <p>There are multiple methods for determining your ability scores (stats). When creating a character for a campaign, make sure to check with your DM regarding what method your campaign is using.</p>

      <dl className="row">
        <dt className="col-sm-3">Standard Array</dt>
        <dd className="col-sm-9">Before adding racial bonuses, distribute the following numbers among your six stats: 15, 14, 13, 12, 10, 8.</dd>
      </dl>
    </div>)
  }

  midStatDistribute = () => {
    return (<div className="text-center">
      <div className="btn-group btn-group-lg mb-3" role="group">
        {this.props.values.map((value, i) => {
          if (this.props.valuesRemaining.includes(i + 1)) {
            return (
              <button
                key={i + 1}
                name={i + 1}
                className={`btn ${this.state.activeValue === i + 1 ? "btn-primary" : "btn-secondary"}`}
                onClick={this.selectValue}
                value={value}>
                {value}
              </button>)
          }
          else {
            return false
          }
        })}
      </div>
      <br />
      <table className="table table-bordered">
        <thead>
          <tr>
            <th scope="col">Stat</th>
            <th scope="col">Base Score</th>
            <th scope="col">Racial Bonus</th>
            <th scope="col">Total</th>
            <th scope="col">Modifier</th>
          </tr>
        </thead>
        <tbody>
          <StatRow
            stat="str"
            base={this.props.stats.str}
            btn={this.statSetBtn("str")}
            raceSelected={this.props.raceSelected}
            raceBonus={this.raceBonus[this.props.race]} />
          <StatRow
            stat="dex"
            base={this.props.stats.dex}
            btn={this.statSetBtn("dex")}
            raceSelected={this.props.raceSelected}
            raceBonus={this.raceBonus[this.props.race]} />
          <StatRow
            stat="con"
            base={this.props.stats.con}
            btn={this.statSetBtn("con")}
            raceSelected={this.props.raceSelected}
            raceBonus={this.raceBonus[this.props.race]} />
          <StatRow
            stat="int"
            base={this.props.stats.int}
            btn={this.statSetBtn("int")}
            raceSelected={this.props.raceSelected}
            raceBonus={this.raceBonus[this.props.race]} />
          <StatRow
            stat="wis"
            base={this.props.stats.wis}
            btn={this.statSetBtn("wis")}
            raceSelected={this.props.raceSelected}
            raceBonus={this.raceBonus[this.props.race]} />
          <StatRow
            stat="cha"
            base={this.props.stats.cha}
            btn={this.statSetBtn("cha")}
            raceSelected={this.props.raceSelected}
            raceBonus={this.raceBonus[this.props.race]} />
        </tbody>
      </table>
    </div>)
  }

  midStatsChosen = () => {
    return (<div className="text-center">
      <table className="table table-bordered">
        <thead>
          <tr>
            <th scope="col">Stat</th>
            <th scope="col">Base Score</th>
            <th scope="col">Racial Bonus</th>
            <th scope="col">Total</th>
            <th scope="col">Modifier</th>
          </tr>
        </thead>
        <tbody>
          <StatRow
            stat="str"
            base={this.props.stats.str}
            raceSelected={this.props.raceSelected}
            raceBonus={this.raceBonus[this.props.race]} />
          <StatRow
            stat="dex"
            base={this.props.stats.dex}
            raceSelected={this.props.raceSelected}
            raceBonus={this.raceBonus[this.props.race]} />
          <StatRow
            stat="con"
            base={this.props.stats.con}
            raceSelected={this.props.raceSelected}
            raceBonus={this.raceBonus[this.props.race]} />
          <StatRow
            stat="int"
            base={this.props.stats.int}
            raceSelected={this.props.raceSelected}
            raceBonus={this.raceBonus[this.props.race]} />
          <StatRow
            stat="wis"
            base={this.props.stats.wis}
            raceSelected={this.props.raceSelected}
            raceBonus={this.raceBonus[this.props.race]} />
          <StatRow
            stat="cha"
            base={this.props.stats.cha}
            raceSelected={this.props.raceSelected}
            raceBonus={this.raceBonus[this.props.race]} />
        </tbody>
      </table>
    </div>)
  }

  render() {
    return (<div>
      <div className="row">
        <div className="col col-12 col-md-3">
          <div className="card my-3">
            <div className="card-body">
              {this.renderLeftCol()}
            </div>
          </div>
        </div>
        <div className="col col-12 col-md-6">
          <h2 className="text-center display-4">Ability Scores</h2>
          <hr />
          {this.renderMidCol()}
        </div>
        <div className="col col-12 col-md-3">
          <div className="card my-3">
            <div className="card-header">
              Recommendations
            </div>
            <div className="card-body">
              {this.renderRecColContent()}
            </div>
          </div>
        </div>
      </div>
    </div>)
  }
}

export default CreateStats