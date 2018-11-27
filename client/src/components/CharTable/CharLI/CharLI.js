import React, { Component } from "react";
import { Link } from "react-router-dom";

class CharLI extends Component {

  render () {
    if (!this.props.userPage) {
      return (<tr>
      <th scope="row"><Link to={`/character/${this.props.charData._id}`}>{this.props.charData.name}</Link></th>
      <td className="text-capitalize">{this.props.charData.race}</td>
      <td className="text-capitalize">{this.props.charData.class}</td>
      <td className="text-capitalize">{this.props.charData.background}</td>
      <td><Link to={`/user/${this.props.charData.username}/${this.props.charData.user}`}>{this.props.charData.username}</Link></td>
    </tr>)
    } else {
      if (this.props.userPage === "owner"){
      return (<tr>
      <th scope="row"><Link to={`/character/${this.props.charData._id}`}>{this.props.charData.name}</Link></th>
      <td className="text-capitalize">{this.props.charData.race}</td>
      <td className="text-capitalize">{this.props.charData.class}</td>
      <td className="text-capitalize">{this.props.charData.background}</td>
      <td>{this.props.charData.public ? "Public" : "Private"}</td>
      <td><Link to={`/character/edit/${this.props.charData._id}`} className="btn btn-primary btn-sm">Edit</Link></td>
      {/* <td><button className="btn btn-danger btn-sm">Delete</button></td> */}
    </tr>)} else {
      return (<tr>
        <th scope="row"><Link to={`/character/${this.props.charData._id}`}>{this.props.charData.name}</Link></th>
        <td className="text-capitalize">{this.props.charData.race}</td>
        <td className="text-capitalize">{this.props.charData.class}</td>
        <td className="text-capitalize">{this.props.charData.background}</td>
      </tr>)
    }
    } 
  }
}

export default CharLI