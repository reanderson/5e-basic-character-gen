import React, { Component } from 'react';
import CharLI from "./CharLI"

class CharTable extends Component {

  render() {
    return (<div>
      <table className="table table-striped">
        <thead>
          {!this.props.userPage
            ? (<tr>
              <th scope="col">Name</th>
              <th scope="col">Race</th>
              <th scope="col">Class</th>
              <th scope="col">Background</th>
              <th scope="col">User</th>
            </tr>)
            : (this.props.userPage === "owner"
              ? (
                <tr>
                  <th scope="col">Name</th>
                  <th scope="col">Race</th>
                  <th scope="col">Class</th>
                  <th scope="col">Background</th>
                  <th scope="col">Privacy</th>
                  <th scope="col">Edit</th>
                  {/* <th scope="col">Delete</th> */}
                </tr>
              )
              : (<tr>
                <th scope="col">Name</th>
                <th scope="col">Race</th>
                <th scope="col">Class</th>
                <th scope="col">Background</th>
              </tr>))}
  </thead>
      <tbody>
        {this.props.characters.map(character => (
          <CharLI key={character._id} charData={character} userPage={this.props.userPage ? this.props.userPage : false} />
        ))}
      </tbody>
</table>
    </div >)
  }
}

export default CharTable