import React, { Component } from "react";

class WeaponSelect extends Component {
  writeOptions = () => {
    if (this.props.type==="simple") {
      return (<optgroup label="Simple Weapons">
        <option value="club">Club</option>
        <option value="dagger">Dagger</option>
        <option value="greatclub">Greatclub</option>
        <option value="handaxe">Handaxe</option>
        <option value="javelin">Javelin</option>
        <option value="light hammer">Light Hammer</option>
        <option value="mage">Mace</option>
        <option value="quarterstaff">Quarterstaff</option>
        <option value="sickle">Sickle</option>
        <option value="spear">Spear</option>
        <option value="light crossbow">Light Crossbow</option>
        <option value="dart">20 Darts</option>
        <option value="shortbow">Shortbow</option>
        <option value="sling">Sling</option>
      </optgroup>)
    } else if (this.props.type === "martial") {
      return (<optgroup label="Martial Weapons">
        <option value="battleaxe">Battleaxe</option>
        <option value="flail">Flail</option>
        <option value="glaive">Glaive</option>
        <option value="greataxe">Greataxe</option>
        <option value="greatsword">Greatsword</option>
        <option value="halberd">Halberd</option>
        <option value="lance">Lance</option>
        <option value="longsword">Longsword</option>
        <option value="maul">Maul</option>
        <option value="morningstar">Morningstar</option>
        <option value="pike">Pike</option>
        <option value="rapier">Rapier</option>
        <option value="scimitar">Scimitar</option>
        <option value="shortsword">Shortsword</option>
        <option value="trident">Trident</option>
        <option value="war pick">War Pick</option>
        <option value="warhammer">Warhammer</option>
        <option value="whip">Whip</option>
        <option value="blowgun">Blowgun</option>
        <option value="hand crossbow">Hand Crossbow</option>
        <option value="heavy crossbow">Heavy Crossbow</option>
        <option value="longbow">Longbow</option>
        <option value="net">Net</option>
      </optgroup>)
    }
  }


  render() {
    return (<select className="form-control"
      {...this.props}>
      <option value="" hidden>Select a Weapon</option>

      {this.writeOptions()}


    </select>)
  }
}

export default WeaponSelect