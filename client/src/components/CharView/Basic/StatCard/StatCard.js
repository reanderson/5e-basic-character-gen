import React, { Component } from "react"

class StatCard extends Component {

  render() {
    return (<div className="card text-center mb-3 border-secondary">
      <div className="card-header text-uppercase small">
        {this.props.statName}
      </div>
      <div className="card-body p-2">
        <h5 className="card-title text-muted">{this.props.statVal}</h5>
        <span className="h6 px-2 py-1 border border-secondary rounded-circle">{Math.floor((this.props.statVal-10)/2) > 0 ? `+${Math.floor((this.props.statVal-10)/2)}` : `${Math.floor((this.props.statVal-10)/2)}` }</span>
      </div>
    </div>)
  }
}

export default StatCard