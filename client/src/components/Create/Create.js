import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import CreateTabs from "../CreateTabs";
import Race from "../CreateRace"
import Class from "../CreateClass"
import Background from "../CreateBackground"
import Details from "../CreateDetails"
import Stats from "../CreateStats"
import Save from "../CreateSave"

import API from "../../utils/API";

class Create extends Component {
  state = {
    activeTab: "race",
    // Race-related States
    race: "human",
    raceSelected: false,
    raceOptions: {},
    raceOptionsSelected: false,
    // Class-related States
    class: "fighter",
    classSelected: false,
    classSkills: [],
    skillsSelected: false,
    features: {

    },
    featuresSelected: false,
    equipment: [],
    equipmentSelected: false,
    // Ability Score States
    method: "",
    methodSelected: false,
    values: [15, 14, 13, 12, 10, 8],
    valuesSelected: false,
    valuesRemaining: [15, 14, 13, 12, 10, 8],
    stats: {
      str: null,
      dex: null,
      con: null,
      int: null,
      wis: null,
      cha: null,
    },
    statsSelected: false,
    // Background States
    background: "soldier",
    backgroundSkills: ["athletics", "intimidation"],
    backgroundSelected: false,
    bgOptions: {},
    bgOptionsSelected: false,
    // Details States
    name: "",
    alignment: "",
    gender: "",
    age: "",
    image: "", //optional
    appearance: "", //optional
    personality: "", //optional
    backstory: "", //optional
    characteristics: {}, // These are chosen on the Details tab, but are tied to BG
    
    // Save-related States
    public: false,

    redirect: false,
    redirectId: ""
  }

  //prepares an object for saving
  prepareCharGen = () => {
    // copy the state
    const stateCopy = {...this.state}

    // we don't need any of these keys from the state
    const unneeded = ["activeTab", "raceSelected", "raceOptionsSelected", "classSelected", "skillsSelected", "featuresSelected", "equipmentSelected", "method", "methodSelected", "values", "valuesSelected", "valuesRemaining", "statsSelected", "backgroundSelected", "bgOptionsSelected", "redirect", "redirectId"]

    // so we can remove them
    unneeded.forEach(item => {
      delete stateCopy[item]
    })

    return stateCopy
  }

  saveChar = () => {
    const charInfo = this.prepareCharGen();

    API
    .makeChar(charInfo)
    .then(res => {
      console.log(res.data);
      this.setRedirect(res.data._id)
    })
    .catch(err => console.log(err.response));
  }

  setRedirect = (id) => {
    this.setState({
      redirect: true,
      redirectId: id
    })
  }

  renderRedirect = () => {
    if (this.state.redirect) {
      return <Redirect to={`/character/${this.state.redirectId}`} />
    }
  }

  //Changes the active tab when you click on a new tab
  handleTabChange = (name) => {
    this.setState({ activeTab: name })
  }

  //Changes the currently active Race [may be modified to handle other changes]
  handleRaceChange = (name) => {
    this.setState({ race: name })
  }

  //Skill Selection
  handleSkillSelect = (event) => {
    const newClassSkills = [...this.state.classSkills]
    newClassSkills[parseInt(event.target.name, 10)] = event.target.value

    this.setState({
      classSkills: newClassSkills
    })
  }

  //Handles Feature change
  handleFeatureChange = (event) => {
    const featureChange = { ...this.state.features }
    featureChange[event.target.name] = event.target.value
    this.setState({
      features: featureChange
    })
  }

  //Handles BG Proficiency change
  handleBgOptionChange = (event) => {
    const optionsChange = { ...this.state.bgOptions }
    optionsChange[event.target.name] = event.target.value

    this.setState({
      bgOptions: optionsChange
    })
  }

  // Handles Details tab Form Changes
  handleFormChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleBgDetailChange = (event) => {
    const characteristicChange = {...this.state.characteristics}
    if(!isNaN(parseInt(event.target.name, 10))) {
      characteristicChange.personalityTraits[parseInt(event.target.name, 10)] = event.target.value
    } else {
      characteristicChange[event.target.name] = event.target.value
    }

    this.setState({
      characteristics: characteristicChange
    })
  }

  // Updates for Stats tab
  handleMethodSelect = (event) => {
    if (event.target.name === "standard") {
      this.setState({
        method: "standard",
        methodSelected: "true",
        values: [15, 14, 13, 12, 10, 8],
        valuesSelected: true,
        //Star the remaining values at 1 in order to make sure that it's always reading the index as a number that exists, as opposed to 0
        valuesRemaining: [1, 2, 3, 4, 5, 6]
      })
    }
  }

  setStat = (stat, value) => {
    const updateStats = {...this.state.stats}
    updateStats[stat] = value
    this.setState({
      stats: updateStats
    })
  }

  setRemainingValues = (values) => {
    this.setState({
      valuesRemaining: values
    })
  }
  

  // Three Methods for various means of changing the equipment values, depending on if we just need a string, an object, or something within that object.
  // This is a disaster, but it works. Somehow.
  handleEquipChange = (event) => {
    const changedEquipment = [...this.state.equipment]
    changedEquipment[event.target.name] = event.target.value

    this.setState({
      equipment: changedEquipment
    })
  }

  equipChangeJson = (event) => {
    const changedEquipment = [...this.state.equipment]
    changedEquipment[event.target.name] = JSON.parse(event.target.value)

    this.setState({ equipment: changedEquipment })
  }

  equipInnerChange = (event) => {
    const parsedName = JSON.parse(event.target.name)
    const changedEquipment = [...this.state.equipment]
    changedEquipment[parsedName[0]][parsedName[1]][parsedName[2]] = event.target.value


    this.setState({
      equipment: changedEquipment
    })
  }

  // Specific functions for choosing Race, Class, and Background, to set what the options are like
  chooseRace = () => {
    if (this.state.race === "human") {
      this.setState({
        raceOptions: {
          language: "elvish"
        }
      })
    }
    // additional races will be added as else if statements
    // then run a select toggle on the raceSelected state
    this.handleSelectToggle("raceSelected");
  }

  chooseClass = () => {
    if (this.state.class === "fighter") {
      // A fighter gets two skills, four equipment choices, and needs to select a fighting style
      this.setState({
        classSkills: ["", ""],
        features: {
          fighting_style: ""
        },
        equipment: ["", {}, "", ""]
      })
    }

    // then run a select toggle on the classSelected state
    this.handleSelectToggle("classSelected")
  }

  chooseBg = () => {

    if (this.state.background === "soldier") {
      /* A Soldier needs to choose a Gaming Set proficiency and either dice or cards
      A Soldier's BG skills are set to Athletics and Intimidation.
      In addition to the standard Traits/Ideal/Bond/Flaw, a Soldier also may choose a Specialty */
      this.setState({
        bgOptions: {
          gameProf: "",
          gameSet: ""
        },
        backgroundSkills: ["athletics", "intimidation"],
        characteristics: {
          personalityTraits: ["", ""],
          ideal: "",
          bond: "",
          flaw: "",
          specialty: ""
        }
      })
    }

    // then run a select toggle on the backgroundSelected state
    this.handleSelectToggle("backgroundSelected")


  }

  // Handles a selection toggle; takes an argument for what state toggle should be affected.
  handleSelectToggle = (selection) => {
    if (this.state[selection]) {
      this.setState({ [selection]: false })
    } else {
      this.setState({ [selection]: true })
    }
  }

  // Handles an option changing from a dropdown menu for race
  handleRaceOption = (event) => {
    const modifiedObject = { ...this.state.raceOptions }
    modifiedObject[event.target.name] = event.target.value
    this.setState({
      raceOptions: modifiedObject
    })
  }

  renderTab = () => {
    if (this.state.activeTab === "race") {
      return (<Race
        activeRace={this.state.race}
        raceSelected={this.state.raceSelected}
        raceOptions={this.state.raceOptions}
        raceOptionsSelected={this.state.raceOptionsSelected}
        chooseRace={this.chooseRace}
        handleSelectToggle={this.handleSelectToggle}
        handleMenuOption={this.handleRaceOption}
      />)
    } else if (this.state.activeTab === "class") {
      return (<Class
        class={this.state.class}
        classSelected={this.state.classSelected}
        handleSelectToggle={this.handleSelectToggle}
        classSkills={this.state.classSkills}
        skillsSelected={this.state.skillsSelected}
        backgroundSelected={this.state.backgroundSelected}
        backgroundSkills={this.state.backgroundSkills}
        features={this.state.features}
        featuresSelected={this.state.featuresSelected}
        equipment={this.state.equipment}
        equipmentSelected={this.state.equipmentSelected}
        chooseClass={this.chooseClass}
        handleSkillSelect={this.handleSkillSelect}
        handleFeatureChange={this.handleFeatureChange}
        handleEquipChange={this.handleEquipChange}
        equipChangeJson={this.equipChangeJson}
        equipInnerChange={this.equipInnerChange} />)
    } else if (this.state.activeTab === "bg") {
      return (<Background
        background={this.state.background}
        backgroundSelected={this.state.backgroundSelected}
        handleSelectToggle={this.handleSelectToggle}
        chooseBg={this.chooseBg}
        bgOptions={this.state.bgOptions}
        bgOptionsSelected={this.state.bgOptionsSelected}
        handleBgOptionChange={this.handleBgOptionChange} />)
    } else if (this.state.activeTab === "details") {
      return (<Details
        background={this.state.background}
        backgroundSelected={this.state.backgroundSelected}
        charName={this.state.name}
        alignment={this.state.alignment}
        age={this.state.age}
        gender={this.state.gender}
        image={this.state.image} 
        appearance={this.state.appearance}
        personality={this.state.personality}
        backstory={this.state.backstory}
        characteristics={this.state.characteristics}
        handleFormChange={this.handleFormChange}
        handleBgDetailChange={this.handleBgDetailChange}/>)
    } else if (this.state.activeTab==="stats") {
      return (<Stats 
        method={this.state.method}
        methodSelected={this.state.methodSelected}
        values={this.state.values}
        valuesSelected={this.state.valuesSelected}
        valuesRemaining={this.state.valuesRemaining}
        stats={this.state.stats}
        statsSelected={this.state.statsSelected}
        race={this.state.race}
        raceSelected={this.state.raceSelected}
        raceOptions={this.state.raceOptions}
        raceOptionsSelected={this.state.raceOptionsSelected}
        class={this.state.class}
        classSelected={this.state.classSelected}
        handleMethodSelect={this.handleMethodSelect}
        handleSelectToggle={this.handleSelectToggle}
        setStat={this.setStat}
        setRemainingValues={this.setRemainingValues}/>)
    } else if (this.state.activeTab==="save") {
      return (<Save 
        raceSelected = {this.state.raceSelected}
        raceOptionsSelected = {this.state.raceOptionsSelected}
        classSelected = {this.state.classSelected}
        skillsSelected = {this.state.skillsSelected}
        featuresSelected = {this.state.featuresSelected}
        equipmentSelected = {this.state.equipmentSelected}
        backgroundSelected = {this.state.backgroundSelected}
        bgOptionsSelected = {this.state.bgOptionsSelected}
        methodSelected = {this.state.methodSelected}
        valuesSelected = {this.state.valuesSelected}
        statsSelected = {this.state.statsSelected}
        name = {this.state.name}
        alignment = {this.state.alignment}
        gender = {this.state.gender}
        age = {this.state.age}
        public = {this.state.public}
        handleSelectToggle = {this.handleSelectToggle}
        saveChar = {this.saveChar}/>)
    }
  }

  render() {
    if (!this.props.user) {
      return <Redirect to="/" />
    }

    return (
      <div className="m-5">
      {this.renderRedirect()}
        <CreateTabs path={this.props.match.path} active={this.state.activeTab} change={this.handleTabChange} />

        {this.renderTab()}


      </div>
    )
  }
}

export default Create;