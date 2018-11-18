import React, { Component } from "react"


class CreateDetails extends Component {


  render() {
    console.log(this.props)

    return (<div>
      <div className="row">
        <div className="col col-12 col-md-6">
          <label className="font-weight-strong">Character Name</label>
          <input type="text" className="form-control" onChange={this.props.handleFormChange} value={this.props.charName} placeholder="Name" name="name" />
        </div>
        <div className="col col-6 col-md-3">
          <label>Character Age</label>
          <input type="number" className="form-control" onChange={this.props.handleFormChange} value={this.props.age} placeholder="Age" name="age" />
        </div>
        <div className="col col-6 col-md-3">
          <label>Gender</label><br />
          <div className="form-check form-check-inline" onChange={this.props.handleFormChange}>
            <input className="form-check-input" type="radio" name="gender" value="male" defaultChecked={this.props.gender === "male"}></input> <label className="form-check-label"><i className="fas fa-mars"></i> Male</label>
          </div>
          <div className="form-check form-check-inline" onChange={this.props.handleFormChange}>
            <input className="form-check-input" type="radio" name="gender" value="female" defaultChecked={this.props.gender === "female"}></input> <label className="form-check-label"><i className="fas fa-venus"></i> Female</label>
          </div>
          <div className="form-check form-check-inline" onChange={this.props.handleFormChange}>
            <input className="form-check-input" type="radio" name="gender" value="nonbinary" defaultChecked={this.props.gender === "nonbinary"}></input> <label className="form-check-label"><i className="fas fa-transgender-alt"></i> Nonbinary</label>
          </div>
        </div>

      </div>
      <br />
      <div className="text-center"><label >Alignment</label></div>
      <div className="container-fluid form-check form-check-inline" onChange={this.props.handleFormChange}>
        <table className="table table-bordered mx-5">
          <tr>
            <td>
              <input className="form-check-input" type="radio" name="alignment" value="lawful good" defaultChecked={this.props.alignment === "lawful good"}></input> <label className="form-check-label">Lawful Good</label>
            </td>
            <td>
              <input className="form-check-input" type="radio" name="alignment" value="neutral good" defaultChecked={this.props.alignment === "neutral good"}></input> <label className="form-check-label">Neutral Good</label>
            </td>
            <td>
              <input className="form-check-input" type="radio" name="alignment" value="chaotic good" defaultChecked={this.props.alignment === "chaotic good"}></input> <label className="form-check-label">Chaotic Good</label>
            </td>
          </tr>
          <tr>
            <td>
              <input className="form-check-input" type="radio" name="alignment" value="lawful neutral" defaultChecked={this.props.alignment === "lawful neutral"}></input> <label className="form-check-label">Lawful Neutral</label>
            </td>
            <td>
              <input className="form-check-input" type="radio" name="alignment" value="true neutral" defaultChecked={this.props.alignment === "true neutral"}></input> <label className="form-check-label">True Neutral</label>
            </td>
            <td>
              <input className="form-check-input" type="radio" name="alignment" value="chaotic neutral" defaultChecked={this.props.alignment === "chaotic neutral"}></input> <label className="form-check-label">Chaotic Neutral</label>
            </td>
          </tr>
          <tr>
            <td>
              <input className="form-check-input" type="radio" name="alignment" value="lawful evil" defaultChecked={this.props.alignment === "lawful evil"}></input> <label className="form-check-label">Lawful Evil</label>
            </td>
            <td>
              <input className="form-check-input" type="radio" name="alignment" value="neutral evil" defaultChecked={this.props.alignment === "neutral evil"}></input> <label className="form-check-label">Neutral Evil</label>
            </td>
            <td>
              <input className="form-check-input" type="radio" name="alignment" value="Chaotic Evil" defaultChecked={this.props.alignment === "Chaotic Evil"}></input> <label className="form-check-label">Chaotic Evil</label>
            </td>
          </tr>
        </table>
   
      </div>
      <hr/>
    </div>)
  }
}

export default CreateDetails