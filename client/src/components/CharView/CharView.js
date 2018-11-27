import React, { Component } from "react"
import API from "../../utils/API"

import CharTabs from "./CharTabs"
import Basic from "./Basic"
import Details from "./Details"

class CharView extends Component {
  state = {
    character: {},
    activeTab: "basic"
  }

  

  renderTab = () => {
    if (this.state.activeTab === "basic") {
      return (<Basic character={this.state.character} />)
    } else if (this.state.activeTab === "details") {
      return (<Details character={this.state.character} />)
    }
  }

  handleTabChange = (name) => {
    this.setState({ activeTab: name })
  }

  componentDidMount() {
    API.getCharById(this.props.match.params.id)
      .then(charData => {
        this.setState({
          character: charData.data
        })
      })
      .catch((err) => {
        console.log(err)
      })
  }

  render() {
    if (this.state.character.name) {
      return (<div className="container-fluid">
        <div className="row">
          <div className="col col-12 col-md-6 text-center">
            <h2 className="display-4 mb-0">{this.state.character.name}</h2>
            <small className="text-muted text-uppercase ">Character Name</small>
          </div>
          <div className="col col-12 col-md-6">
            <div className="row">
              <div className="col col-6 col-md-4">
                <h5 className="mb-0 text-capitalize">{this.state.character.class} {this.state.character.totalLevel}</h5>
                <small className="text-muted text-uppercase ">Class & Level</small>
              </div>
              <div className="col col-6 col-md-4">
                <h5 className="mb-0 text-capitalize">{this.state.character.background}</h5>
                <small className="text-muted text-uppercase ">Background</small>
              </div>
              <div className="col col-6 col-md-4">
                <h5 className="mb-0 text-capitalize">{this.state.character.username}</h5>
                <small className="text-muted text-uppercase ">Player Name</small>
              </div>
              <div className="col col-6 col-md-4">
                <h5 className="mb-0 text-capitalize">{this.state.character.race}</h5>
                <small className="text-muted text-uppercase ">Race</small>
              </div>
              <div className="col col-6 col-md-4">
                <h5 className="mb-0 text-capitalize">{this.state.character.alignment}</h5>
                <small className="text-muted text-uppercase ">Alignment</small>
              </div>
              <div className="col col-6 col-md-4">
                <h5 className="mb-0 text-capitalize">&nbsp;</h5>
                <small className="text-muted text-uppercase ">Experience Points</small>
              </div>
            </div>
          </div>
        </div>
        <div className="mx-2">
          <CharTabs active={this.state.activeTab} change={this.handleTabChange} />

          {this.renderTab()}
        </div>
      </div>)
    }
    else {
      return (<div className="container-fluid">Character Not Found</div>)
    }
  }
}

export default CharView