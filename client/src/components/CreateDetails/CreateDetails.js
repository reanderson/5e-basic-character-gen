import React, { Component } from "react"


class CreateDetails extends Component {

  renderBgDetails = () => {
    if (this.props.backgroundSelected) {
      if (this.props.background === "soldier") {
        return (<div>
          <div className="text-center font-weight-light">Soldier</div>
          <label>Specialty</label>
          <select className="form-control" value={this.props.characteristics.specialty} name="specialty" onChange={this.props.handleBgDetailChange}>
            <option value="">No Ideal Selected</option>
            <option value="1">Officer</option>
            <option value="2">Scout</option>
            <option value="3">Infantry</option>
            <option value="4">Cavalry</option>
            <option value="5">Healerd</option>
            <option value="6">Quartermaster</option>
            <option value="7">Standard Bearer</option>
            <option value="8">Support Staff</option>
          </select>

          <br />

          <label>Personality Traits</label>
          <select className="form-control" value={this.props.characteristics.personalityTraits[0]} name="0" onChange={this.props.handleBgDetailChange}>
            <option value="">No Personality Trait Selected</option>
            <option value="1" hidden={this.props.characteristics.personalityTraits.includes("1") ? true : false}>I’m always polite and respectful.</option>
            <option value="2" hidden={this.props.characteristics.personalityTraits.includes("2") ? true : false}>I’m haunted by memories of war. I can’t get the images of violence out of my mind.</option>
            <option value="3" hidden={this.props.characteristics.personalityTraits.includes("3") ? true : false}>I’ve lost too many friends, and I’m slow to make new ones.</option>
            <option value="4" hidden={this.props.characteristics.personalityTraits.includes("4") ? true : false}>I’m full of inspiring and cautionary tales from my military experience relevant to almost every combat situation.</option>
            <option value="5" hidden={this.props.characteristics.personalityTraits.includes("5") ? true : false}>I can stare down a hell hound without flinching.</option>
            <option value="6" hidden={this.props.characteristics.personalityTraits.includes("6") ? true : false}>I enjoy being strong and like breaking things.</option>
            <option value="7" hidden={this.props.characteristics.personalityTraits.includes("7") ? true : false}>I have a crude sense of humor.</option>
            <option value="8" hidden={this.props.characteristics.personalityTraits.includes("8") ? true : false}>I face problems head-on. A simple, direct solution is the best path to success.</option>
          </select> <br />
          <select className="form-control" value={this.props.characteristics.personalityTraits[1]} name="1" onChange={this.props.handleBgDetailChange}>
            <option value="">No Personality Trait Selected</option>
            <option value="1" hidden={this.props.characteristics.personalityTraits.includes("1") ? true : false}>I’m always polite and respectful.</option>
            <option value="2" hidden={this.props.characteristics.personalityTraits.includes("2") ? true : false}>I’m haunted by memories of war. I can’t get the images of violence out of my mind.</option>
            <option value="3" hidden={this.props.characteristics.personalityTraits.includes("3") ? true : false}>I’ve lost too many friends, and I’m slow to make new ones.</option>
            <option value="4" hidden={this.props.characteristics.personalityTraits.includes("4") ? true : false}>I’m full of inspiring and cautionary tales from my military experience relevant to almost every combat situation.</option>
            <option value="5" hidden={this.props.characteristics.personalityTraits.includes("5") ? true : false}>I can stare down a hell hound without flinching.</option>
            <option value="6" hidden={this.props.characteristics.personalityTraits.includes("6") ? true : false}>I enjoy being strong and like breaking things.</option>
            <option value="7" hidden={this.props.characteristics.personalityTraits.includes("7") ? true : false}>I have a crude sense of humor.</option>
            <option value="8" hidden={this.props.characteristics.personalityTraits.includes("8") ? true : false}>I face problems head-on. A simple, direct solution is the best path to success.</option>
          </select>

          <br />
          <label>Ideal</label>
          <select className="form-control" value={this.props.characteristics.ideal} name="ideal" onChange={this.props.handleBgDetailChange}>
            <option value="">No Ideal Selected</option>
            <option value="1">Greater Good: Our lot is to lay down our lives in defense of others. (Good)</option>
            <option value="2">Responsibility: I do what I must and obey just authority. (Lawful)</option>
            <option value="3">Independence: When people follow orders blindly, they embrace a kind of tyranny. (Chaotic)</option>
            <option value="4">Might: In life as in war, the stronger force wins. (Evil)</option>
            <option value="5">Live and Let Live: Ideals arent worth killing over or going to war for. (Neutral)</option>
            <option value="6">Nation: My city, nation, or people are all that matter. (Any)</option>
          </select>

          <br />
          <label>Bond</label>
          <select className="form-control" value={this.props.characteristics.bond} name="bond" onChange={this.props.handleBgDetailChange}>
            <option value="">No Bond Selected</option>
            <option value="1">I would still lay down my life for the people I served with.</option>
            <option value="2">Someone saved my life on the battlefield. To this day, I will never leave a friend behind.</option>
            <option value="3">My honor is my life.</option>
            <option value="4">I’ll never forget the crushing defeat my company suffered or the enemies who dealt it.</option>
            <option value="5">Those who fight beside me are those worth dying for.</option>
            <option value="6">I fight for those who cannot fight for themselves.</option>
          </select>

          <br />
          <label>Flaw</label>
          <select className="form-control" value={this.props.characteristics.flaw} name="flaw" onChange={this.props.handleBgDetailChange}>
            <option value="">No Flaw Selected</option>
            <option value="1">The monstrous enemy we faced in battle still leaves me quivering with fear.</option>
            <option value="2">I have little respect for anyone who is not a proven warrior.</option>
            <option value="3">I made a terrible mistake in battle that cost many lives—and I would do anything to keep that mistake secret.</option>
            <option value="4">My hatred of my enemies is blind and unreasoning.</option>
            <option value="5">I obey the law, even if the law causes misery.</option>
            <option value="6">I’d rather eat my armor than admit when I’m wrong.</option>
          </select>
        </div>)
      }

    } else {
      return (<div>
        <p>Options will become available once you have selected a Background.</p>
      </div>)
    }
  }


  render() {
    return (<div>
      <h4 className="text-center">Required Details</h4>

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
          <label className="text-capitalize">Gender: {this.props.gender}</label><br />
          <div className="form-check form-check-inline" onChange={this.props.handleFormChange}>
            <input className="form-check-input" type="radio" name="gender" value="male" defaultChecked={this.props.gender === "male" ? true : false}></input> <label className="form-check-label"><i className="fas fa-mars"></i> Male</label>
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
      <div className="text-center text-capitalize"><label >Alignment: {this.props.alignment}</label></div>
      <div className="container-fluid form-check form-check-inline" onChange={this.props.handleFormChange}>
        <table className="table table-bordered mx-5">
          <tbody>
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
          </tbody>
        </table>

      </div>
      <hr />
      <h4 className="text-center">Optional Details</h4>

      <div className="row justify-content-between">
        <div className="col col-12 col-md-7">

          <label className="font-weight-strong">Appearance</label>
          <input type="text" className="form-control" onChange={this.props.handleFormChange} value={this.props.image} placeholder="Image URL" name="image" />
          <br />
          <textarea className="form-control" onChange={this.props.handleFormChange} value={this.props.appearance} placeholder="Appearance Description" name="appearance" rows={5} />

          <br />
          <label className="font-weight-strong">Personality</label>
          <textarea className="form-control" onChange={this.props.handleFormChange} value={this.props.personality} placeholder="Personality Description" name="personality" rows={5} />
          <br />
          <label className="font-weight-strong">Backstory</label>
          <textarea className="form-control" onChange={this.props.handleFormChange} value={this.props.backstory} placeholder="Character Backstory" name="backstory" rows={5} />
        </div>
        <div className="col col-12 col-md-5">
          <h5 className="text-center">Background Details</h5>
          {this.renderBgDetails()}
        </div>
      </div>
    </div>)
  }
}

export default CreateDetails