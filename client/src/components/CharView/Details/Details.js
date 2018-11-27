import React, { Component } from "react"
import "./Details.css"
import bgInfo from "../../../utils/bgInfo"

class Details extends Component {

  getBgDetails = () => {
    if (!this.props.character.characteristics) {
      return ("")
    }

    if (this.props.character.background === "soldier") {
      let specialty = ""
      let personalityTraits = ""
      let ideal = ""
      let bond = ""
      let flaw = ""

      if (this.props.character.characteristics.specialty) {
        specialty = (<div className="border border-secondary m-3 bg-white px-3 py-2 text-center text-capitalize">
          {bgInfo.soldier.traits.specialty[this.props.character.characteristics.specialty]}
          <div className="small text-uppercase">specialty</div>
        </div>)
      }

      if (this.props.character.characteristics.personalityTraits.length > 0) {
        personalityTraits = (<div className="border border-secondary m-3 bg-white px-3 pb-1 text-center">
        <div>
          <ul className="list-group list-group-flush">
            {this.props.character.characteristics.personalityTraits.map(trait=>(
              <li className="list-group-item" key={trait}>{bgInfo.soldier.traits.personalityTraits[trait]}</li>
            ))}
          </ul>
          </div>
          <div className="small text-uppercase">personality traits</div>
        </div>)
      }

      if (this.props.character.characteristics.ideal) {
        ideal = (<div className="border border-secondary m-3 bg-white px-3 py-2 text-center">
          {bgInfo.soldier.traits.ideal[this.props.character.characteristics.ideal]}
          <div className="small text-uppercase">ideal</div>
        </div>)
      }

      if (this.props.character.characteristics.bond) {
        bond = (<div className="border border-secondary m-3 bg-white px-3 py-2 text-center">
          {bgInfo.soldier.traits.bond[this.props.character.characteristics.bond]}
          <div className="small text-uppercase">bond</div>
        </div>)
      }

      if (this.props.character.characteristics.flaw) {
        flaw = (<div className="border border-secondary m-3 bg-white px-3 py-2 text-center">
          {bgInfo.soldier.traits.flaw[this.props.character.characteristics.flaw]}
          <div className="small text-uppercase">flaw</div>
        </div>)
      }

      return (<div className="bg-light py-2 my-2">
        {specialty}
        {personalityTraits}
        {ideal}
        {bond}
        {flaw}
      </div>)
    }


  }

  render() {
    return (<div className="row justify-content-between">
      <div className="col col-12 col-lg-4">
        <div className="border border-secondary rounded my-2 p-3">

          {this.props.character.image ? (<img src={this.props.character.image} alt={this.props.character.name} className="img-fluid mx-auto d-block my-3" />) : ""}
          <p className="info">{this.props.character.appearance}</p>
          <hr />
          <div className="small text-uppercase text-center mt-2 font-weight-bold">appearance</div>
        </div>
      </div>

      <div className="col col-12 col-lg-4">
        <div className="border border-secondary rounded my-2 p-3">



          <p className="info">{this.props.character.backstory}</p>
          <hr />
          <div className="small text-uppercase text-center mt-2 font-weight-bold">backstory</div>
        </div>
      </div>

      <div className="col col-12 col-lg-4">
        {this.getBgDetails()}

        <div className="border border-secondary rounded my-2 p-3">
          <p className="info">{this.props.character.personality}</p>
          <hr />
          <div className="small text-uppercase text-center mt-2 font-weight-bold">personality</div>
        </div>
      </div>
    </div>

    )
  }
}

export default Details