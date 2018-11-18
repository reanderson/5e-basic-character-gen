import React from "react";

const LanguageSelect = (props) => (<div>
  <select className="form-control"
    value={props.value}
    onChange={props.onChange}
    name={props.name}>
    <optgroup label="Standard Languages">
      <option value="dwarvish">Dwarvish</option>
      <option value="elvish">Elvish</option>
      <option value="giant">Giant</option>
      <option value="gnomish">Gnomish</option>
      <option value="goblin">Goblin</option>
      <option value="halfling">Halfling</option>
      <option value="orc">Orc</option>
    </optgroup>
    <optgroup label="Exotic Languages">
      <option value="abyssal">Abyssal</option>
      <option value="celestial">Celestial</option>
      <option value="draconic">Draconic</option>
      <option value="deep speech">Deep Speech</option>
      <option value="infernal">Infernal</option>
      <option value="primordial">Primordial</option>
      <option value="sylvan">Sylvan</option>
      <option value="undercommon">Undercommon</option>
    </optgroup>
    <option value="other">Other</option>
  </select>
</div>)

export default LanguageSelect