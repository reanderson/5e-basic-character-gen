import React from "react"

const ChecklistItem = (props) => (<li>
  {props.flag ? (<span className="text-success"><i className="fas fa-check-circle"></i> {props.name} Selected!</span>) : (<span className="text-danger"><i className="fas fa-times-circle"></i> {props.name} Must Be Selected!</span>)}
</li>)

export default ChecklistItem