const data = require('../data')

const raceData = (char, charData) => {
  if (char.race === "human") {
    char.languages.push("common", charData.raceOptions.language)
    char.size = data.races.human.size;
    char.speed = data.races.human.speed
  }
}

const classData = (char, charData) => {
  // Set HP, using the class's base HP and the character's con modifier
  char.totalHp = data.classes[char.class].firstLevelHp + ((char.con - 10) / 2)

  // Set armor, weapon, tool, and saving throw proficiencies based on the class data. Double check to make sure these aren't already listed, however.
  data.classes[char.class].armor.forEach(item => {
    if (!char.armor.includes(item)) {
      char.armor.push(item)
    }
  })
  data.classes[char.class].weapons.forEach(item => {
    if (!char.weapons.includes(item)) {
      char.weapons.push(item)
    }
  })
  data.classes[char.class].tools.forEach(item => {
    if (!char.tools.includes(item)) {
      char.tools.push(item)
    }
  })
  data.classes[char.class].savingThrows.forEach(item => {
    if (!char.savingThrows.includes(item)) {
      char.savingThrows.push(item)
    }
  })

  // Class skills, on the other hand, come from the submitted character Data. Still double check to make sure they aren't already covered, though.
  charData.classSkills.forEach(skill => {
    if (!char.skills.includes(skill)) {
      char.skills.push(skill)
    }
  })

  // Next, set features and equipment based on the class and inputted options
  if (char.class === "fighter") {
    char.features = {
      fighting_style: charData.features.fighting_style
    }

    data.classes.fighter.equipment[0][charData.equipment[0]].forEach(item => {
      char.equipment.push(item)
    })

    if (charData.equipment[1].a) {
      char.equipment.push(...charData.equipment[1].a, "shield")
    } else {
      char.equipment.push(...charData.equipment[1].b)
    }

    data.classes.fighter.equipment[2][charData.equipment[2]].forEach(item => {
      char.equipment.push(item)
    })

    data.classes.fighter.equipment[3][charData.equipment[3]].forEach(item => {
      char.equipment.push(item)
    })
  }

}

const bgData = (char, charData) => {
  // add background skills, if they're not already there
  data.backgrounds[char.background].skills.forEach(skill => {
    if (!char.skills.includes(skill)) {
      char.skills.push(skill)
    }
  })
  data.backgrounds[char.background].tools.forEach(tool => {
    if (tool != "OPTION") {
      if (!char.tools.includes(tool)) {
        char.tools.push(tool)
      }
    }
  })
  data.backgrounds[char.background].languages.forEach(language=>{
    if(language != "OPTION") {
      if (!char.languages.includes(language)) {
        char.languages.push(language)
      }
    }
  })

  // add background equipment
  data.backgrounds[char.background].equipment.forEach(item => {
    if (item != "OPTION") {
      char.equipment.push(item)
    }
  })

  char.gold += data.backgrounds[char.background].gp;

  // add background-specific options
  if (char.background === "soldier") {
    if (!char.tools.includes(charData.bgOptions.gameProf)) {
      char.tools.push(charData.bgOptions.gameProf)
    }

    char.equipment.push(charData.bgOptions.gameSet)

  }

  //set characteristics
  char.characteristics = {...charData.characteristics}
}

const statCalc = (char, charData) => {
  let ASI

  if (char.subrace) {
    //Once races with subraces are added, we'll actually put the correct syntax here
    ASI = {
      str: 0,
      dex: 0,
      con: 0,
      int: 0,
      wis: 0,
      cha: 0
    }
  } else {
    ASI = data.races[char.race].asi
  }

  char.str = (charData.stats.str + ASI.str)
  char.dex = (charData.stats.dex + ASI.dex)
  char.con = (charData.stats.con + ASI.con)
  char.int = (charData.stats.int + ASI.int)
  char.wis = (charData.stats.wis + ASI.wis)
  char.cha = (charData.stats.cha + ASI.cha)
}

module.exports = function (charData) {
  const character = {
    name: charData.name,
    age: charData.age,
    alignment: charData.alignment,
    gender: charData.gender,
    class: charData.class,
    race: charData.race,
    background: charData.background,

    armor: [],
    weapons: [],
    skills: [],
    tools: [],
    languages: [],
    savingThrows: [],

    equipment: [],
    gold: 0,

    public: charData.public,

    image: charData.image,
    appearance: charData.appearance,
    personality: charData.personality,
    backstory: charData.backstory
  }

  statCalc(character, charData)
  classData(character, charData);
  raceData(character, charData);
  bgData(character, charData)

  return character
}