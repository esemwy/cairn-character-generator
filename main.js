const {generate_text} = require('./generator');

roll = (d) => {
  return Math.floor(Math.random()*d)+1;
};
const armor = generate_text("armor");
const helmet = generate_text("helmet");
const tool = generate_text("tool");
const gear = generate_text("gear");
const trinket = generate_text("trinket");
const weapons = generate_text("weapons");
const bonus = generate_text("bonus");

let allItems = [];
allItems.push(armor, helmet, weapons, gear, tool, trinket, bonus);
let total = 2;
for (let i = 0; i < allItems.length; i++) {
  let item = allItems[i];
  if (item.includes("bulky")) {
    total += 2;
  } else if (total > 10){
    total = 10;
  } else if (!item.includes("protection") && (!item.includes("nor") && (!item.includes("stacks")))) {
    total++;
  }
}

let armorTotal = 0;
let armorValue = [];
armorValue.push(armor, helmet);
armorValue.forEach((item) => {
  if (item.includes("1")) {
    armorTotal++;
  } if (armorTotal > 3){
      armorTotal = 3;
  } else if (item.includes("2")) {
    armorTotal += 2;
  } else if (item.includes("3")) {
    armorTotal += 3;
  }
});

let character = {
  name:       generate_text("character-name"),
  background: generate_text("character"),
  age:        roll(20) + roll(20) + 10,
  hp:         roll(6),
  str:        roll(6) + roll(6) + roll(6),
  dex:        roll(6) + roll(6) + roll(6),
  wil:        roll(6) + roll(6) + roll(6),
  armor:      armor + helmet,
  weapons:    weapons,
  tool:       tool,
  gear:       gear,
  trinket:    trinket,
  bonus:      bonus,
  armorTotal: armorTotal,
  total:      total,
  gold:       roll(6) + roll(6) + roll(6)
};

console.log(character);