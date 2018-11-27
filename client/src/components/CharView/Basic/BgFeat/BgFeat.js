import React from "react"
import bgInfo from "../../../../utils/bgInfo"

const BgFeat = (props) => {
  let feature

  if (props.background === "soldier") {
    feature = (<dl className="row">
      <dt className="col-sm-3 text-capitalize">military rank</dt>
      <dd className="col-sm-9">{bgInfo.soldier.feature.military_rank}</dd>
    </dl>)
  }

  return (<div>
    <div className="text-center font-weight-bold">Background Feature</div>
    {feature}
  </div>)
}

export default BgFeat