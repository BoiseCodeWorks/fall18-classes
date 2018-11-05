import Character from "./models/character.js";

let goodGuys = [
  new Character("Leo", "Katana", "Pizza"),
  new Character("Donny", "Bo Staff", "Bananas"),
]
let badGuys = [
  new Character("Shredder", "Sharp Armor", "Turtle Soup")
]

let allCharacters = [...goodGuys, ...badGuys]

for (let i = 0; i < goodGuys.length; i++) {
  const character = goodGuys[i]
  character.eat("Bananas")
}