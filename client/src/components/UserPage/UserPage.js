import React, { Component } from "react"
import API from "../../utils/API"
import CharTable from "../CharTable"

class User extends Component {
  state = {
    characters: []
  }

  componentDidMount () {
    let filter

    if (!this.props.user || !(this.props.user._id === this.props.match.params.id)) {
        filter= {
          user: this.props.match.params.id,
          public: true
        }
    } else {
        filter = {
          user: this.props.match.params.id,
        }
    }

    API.getChars(filter)
      .then(charData => {
        this.setState({
          characters: charData.data
        })
      })
  }

  render() {
    console.log(this.props)
    return (<div className="container">
      <h3 className="display-4 text-center">User: {this.props.match.params.username}</h3>
      <hr/>
      <h5 className="text-center">Characters</h5>

      {this.props.user._id === this.props.match.params.id ? (<CharTable characters={this.state.characters} userPage="owner"/>) : <CharTable characters={this.state.characters} userPage={true}/>}
    </div>)
  }
}

export default User