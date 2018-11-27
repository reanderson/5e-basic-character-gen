import React, { Component } from "react"
import API from "../../utils/API"
import CharTable from "../CharTable"

class Search extends Component {
  state = {
    filter: {public: true}, 
    characters: []
  }


  componentDidMount () {
    API.getChars(this.state.filter)
      .then(charData => {
        this.setState({
          characters: charData.data
        })
      })
  }

  render () {
    return (<div className="container">
      <h1 className="display-4 text-center">Search</h1>
      <hr/>
      {/* Search Filtering goes here */}

      <CharTable characters={this.state.characters}/>
    </div>)
  }
}

export default Search