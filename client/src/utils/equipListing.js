const equipment = {
  armor: [
    {
      name: "padded armor",
      type: "light",
      ac: 11
    }, {
      name: "leather armor",
      type: "light",
      ac: 11
    }, {
      name: "studded leather armor",
      type: "light",
      ac: 12
    }, {
      name: "hide armor",
      type: "medium",
      ac: 12
    }, {
      name: "chain shirt",
      type: "medium",
      ac: 13
    }, {
      name: "scale mail",
      type: "medium",
      ac: 14
    }, {
      name: "breastplate",
      type: "medium",
      ac: 14
    }, {
      name: "half plate",
      type: "medium",
      ac: 15
    }, {
      name: "ring mail",
      type: "heavy",
      ac: 14
    }, {
      name: "chain mail",
      type: "heavy",
      ac: 16,
      str: 13
    }, {
      name: "splint",
      type: "heavy",
      ac: 17,
      str: 15
    }, {
      name: "plate",
      type: "heavy",
      ac: 18,
      str: 15
    }, {
      name: "shield",
      type: "shields",
    }
  ],
  weapons: [
    {
      name: "club",
      damage: "1d4",
      dtype: "bludgeoning",
      type: "simple",
      properties: ["light"]
    }, {
      name: "dagger",
      damage: "1d4",
      dtype: "piercing",
      type: "simple",
      properties: ["finesse", "light", "thrown"],
      range: "20/60"
    }, {
      name: "greatclub",
      damage: "1d8",
      dtype: "bludgeoning",
      type: "simple",
      properties: ["two-handed"]
    }, {
      name: "handaxe",
      damage: "1d6",
      dtype: "slashing",
      type: "simple",
      properties: ["light", "thrown"],
      range: "20/60"
    }, {
      name: "javelin",
      damage: "1d6",
      dtype: "piercing",
      type: "simple",
      properties: ["thrown"],
      range: "30/120"
    }, {
      name: "light hammer",
      damage: "1d4",
      dtype: "bludgeoning",
      type: "simple",
      properties: ["light", "thrown"],
      range: "20/60"
    }, {
      name: "mace",
      damage: "1d6",
      dtype: "bludgeoning",
      type: "simple",
      properties: []
    }, {
      name: "quarterstaff",
      damage: "1d6",
      dtype: "bludgeoning",
      type: "simple",
      properties: ["versatile"],
      damage2h: "1d8"
    }, {
      name: "sickle",
      damage: "1d4",
      dtype: "slashing",
      type: "simple",
      properties: ["light"]
    }, {
      name: "spear",
      damage: "1d6",
      dtype: "piercing",
      type: "simple",
      properties: ["thrown", "versatile"],
      range: "20/60",
      damage2h: "1d8"
    }, {
      name: "light crossbow",
      damage: "1d8",
      dtype: "piercing",
      type: "simple",
      properties: ["ammunition", "loading", "two-handed", "ranged"],
      range: "80/320"
    }, {
      name: "dart",
      damage: "1d4",
      dtype: "piercing",
      type: "simple",
      properties: ["finesse", "thrown", "ranged"],
      range: "20/60"
    }, {
      name: "shortbow",
      damage: "1d6",
      dtype: "piercing",
      type: "simple",
      properties: ["ammunition", "two-handed", "ranged"],
      range: "80/320"
    }, {
      name: "sling",
      damage: "1d4",
      dtype: "bludgeoning",
      type: "simple",
      properties: ["ammunition", "ranged"],
      range: "30/120"
    }, {
      name: "battleaxe",
      damage: "1d8",
      dtype: "slashing",
      type: "martial",
      properties: ["versatile"],
      damage2h: "1d10"
    }, {
      name: "flail",
      damage: "1d8",
      dtype: "bludgeoning",
      type: "martial",
      properties: []
    }, {
      name: "glaive",
      damage: "1d10",
      dtype: "slashing",
      type: "martial",
      properties: ["heavy", "reach", "two-handed"]
    }, {
      name: "greataxe",
      damage: "1d12",
      dtype: "slashing",
      type: "martial",
      properties: ["heavy", "two-handed"]
    }, {
      name: "greatsword",
      damage: "2d6",
      dtype: "slashing",
      type: "martial",
      properties: ["heavy", "two-handed"]
    }, {
      name: "halberd",
      damage: "1d10",
      dtype: "slashing",
      type: "martial",
      properties: ["heavy", "reach", "two-handed"]
    }, {
      name: "lance",
      damage: "1d12",
      dtype: "piercing",
      type: "martial",
      properties: ["reach", "special"]
    }, {
      name: "longsword",
      damage: "1d8",
      dtype: "slashing",
      type: "martial",
      properties: ["versatile"],
      damage2h: "1d10"
    }, {
      name: "maul",
      damage: "2d6",
      dtype: "bludgeoning",
      type: "martial",
      properties: ["heavy", "two-handed"]
    }, {
      name: "morningstar",
      damage: "1d8",
      dtype: "piercing",
      type: "martial",
      properties: []
    }, {
      name: "pike",
      damage: "1d10",
      dtype: "piercing",
      type: "martial",
      properties: ["heavy", "reach", "two-handed"]
    }, {
      name: "rapier",
      damage: "1d8",
      dtype: "piercing",
      type: "martial",
      properties: ["finesse"]
    }, {
      name: "scimitar",
      damage: "1d6",
      dtype: "slashing",
      type: "martial",
      properties: ["finesse", "light"]
    }, {
      name: "shortsword",
      damage: "1d6",
      dtype: "piercing",
      type: "martial",
      properties: ["finesse", "light"]
    }, {
      name: "trident",
      damage: "1d6",
      dtype: "piercing",
      type: "martial",
      properties: ["thrown", "versatile"],
      range: "20/60",
      damage2h: "1d8"
    }, {
      name: "war pick",
      damage: "1d8",
      dtype: "piercing",
      type: "martial",
      properties: []
    }, {
      name: "warhammer",
      damage: "1d8",
      dtype: "bludgeoning",
      type: "martial",
      properties: ["versatile"],
      damage2h: "1d10"
    }, {
      name: "whip",
      damage: "1d4",
      dtype: "slashing",
      type: "martial",
      properties: ["finesse", "reach"]
    }, {
      name: "blowgun",
      damage: "1",
      dtype: "piercing",
      type: "martial",
      properties: ["ammunition", "loading", "ranged"],
      range: "25/100"
    }, {
      name: "hand crossbow",
      damage: "1d6",
      dtype: "piercing",
      type: "martial",
      properties: ["ammunition", "light", "loading", "ranged"],
      range: "30/120"
    }, {
      name: "heavy crossbow",
      damage: "1d10",
      dtype: "piercing",
      type: "martial",
      properties: ["ammunition", "heavy", "loading", "two-handed", "ranged"],
      range: "100/400"
    }, {
      name: "longbow",
      damage: "1d8",
      dtype: "piercing",
      type: "martial",
      properties: ["ammunition", "heavy", "two-handed", "ranged"],
      range: "150/600"
    }, {
      name: "net",
      damage: "N/A",
      dtype: "N/A",
      type: "martial",
      properties: ["special", "thrown"],
      range: "5/15"
    }
  ]
}

export default equipment