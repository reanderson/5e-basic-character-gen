module.exports = {
  fighter: {
    hitDice: "1d10",
    firstLevelHp: 10,
    hpHigherLevels: "1d10",
    armor: ["light", "medium", "heavy", "shields"],
    weapons: ["simple", "martial"],
    skills: ["OPTION", "OPTION"],
    tools: [],
    savingThrows: ["str", "con"],
    equipment: [{
      a: ["chain mail"],
      b: ["leather armor", "longbow", "20 arrows"]
    }, {
      a: ["OPTION", "shield"],
      b: ["OPTION", "OPTION"]
    }, {
      a: ["light crossbow", "20 bolts"],
      b: ["handaxe", "handaxe"]
    }, {
      a: ["dungeoneer's pack"],
      b: ["explorer's pack"]
    }],
    features: {
      fighting_style: {
        archery: "You gain a +2 bonus to attack rolls you make with ranged weapons.",
        defense: "While you are wearing armor, you gain a +1 bonus to AC.",
        dueling: "When you are wielding a melee weapon in one hand and no other weapons, you gain a +2 bonus to damage rolls with that weapon.",
        great_weapon_fighting: "When you roll a 1 or 2 on a damage die for an attack you make with a melee weapon that you are wielding with two hands, you can reroll the die and must use the new roll, even if the new roll is a 1 or a 2. The weapon must have the two-handed or versatile property for you to gain this benefit.",
        protection: "When a creature you can see attacks a target other than you that is within 5 feet of you, you can use your reaction to impose disadvantage on the attack roll. You must be wielding a shield.",
        two_weapon_fighting: "When you engage in two-weapon fighting, you can add your ability modifier to the damage of the second attack."
      },
      second_wind: `You have a limited well of stamina that you can draw on to protect yourself from harm. On your turn, you can use a bonus action to regain hit points equal to 1d10 + your fighter level.

      Once you use this feature, you must finish a short or long rest before you can use it again.`
    }
  }
}