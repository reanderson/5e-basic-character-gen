import React, { Component } from "react"
import API from "../../utils/API"
import Details from "../CreateDetails"
import { Redirect } from "react-router-dom";

class Edit extends Component {
  state = {
    character: {},
    redirect: false
  }

  setRedirect = () => {
    this.setState({
      redirect: true
    })
  }

  renderRedirect = () => {
    if (this.state.redirect) {
      return <Redirect to={`/character/${this.state.character._id}`} />
    }
  }

  handleFormChange = (event) => {
    const charEdit = { ...this.state.character }
    charEdit[event.target.name] = event.target.value

    this.setState({
      character: charEdit
    })
  }

  handleBgDetailChange = (event) => {
    const charEdit = { ...this.state.character }
    const characteristics = charEdit.characteristics
    if (!isNaN(parseInt(event.target.name, 10))) {
      characteristics.personalityTraits[parseInt(event.target.name, 10)] = event.target.value
    } else {
      characteristics[event.target.name] = event.target.value
    }

    this.setState({
      character: charEdit
    })
  }

  togglePublic = () => {
    const charEdit = { ...this.state.character }
    charEdit.public = !charEdit.public
    this.setState({
      character: charEdit
    })
  }

  saveChanges = () => {
    API.updateChar(this.props.match.params.id, this.state.character).then(() => {
      this.setRedirect()
    })
  }

  componentDidMount() {
    API.getCharById(this.props.match.params.id)
      .then(charData => {
        this.setState({
          character: charData.data
        })
      })
  }

  render() {
    console.log(this.state.character.user)
    console.log(this.props.user.id)
    if (!this.state.character) {
      return(<div>Chracter not found</div>)
    }

    else if (!this.props.user || (!this.state.character.user === this.props.user.id)) {
      return (<div>Access Denied: This character isn't yours!</div>)
    }

    else {return (<div className="container-fluid">
      {this.renderRedirect()}
      <Details
        background={this.state.character.background}
        backgroundSelected={true}
        charName={this.state.character.name}
        alignment={this.state.character.alignment}
        age={this.state.character.age}
        gender={this.state.character.gender}
        image={this.state.character.image}
        appearance={this.state.character.appearance}
        personality={this.state.character.personality}
        backstory={this.state.character.backstory}
        characteristics={this.state.character.characteristics}
        handleFormChange={this.handleFormChange}
        handleBgDetailChange={this.handleBgDetailChange}
      />
      <hr />

      <div className="text-center">
        Character is currently {this.state.character.public ? "Public" : "Private"}. <br />
        <button className="btn btn-success btn-sm" onClick={this.togglePublic}>Make {this.state.character.public ? "Private" : "Public"}</button>
      </div>

      <div className="container text-right my-3">

      {(this.state.character.name && this.state.character.age && this.state.character.gender && this.state.character.alignment) ? 
        (<button className="btn btn-primary" onClick={() => this.saveChanges()}>Save Changes</button>) : 
        <button className="btn btn-secondary" disabled>Please make sure all required details are filled in</button>}

      </div>

    </div>)
  }
}
}

export default Edit