console.log("THE CHARACTER PAGE")
export default class Character {
  constructor(name, weapon, favFood) {
    if (!name || !weapon || !favFood) {
      throw new Error("Must provide valid properties when creating a character")
    }
    this.name = name
    this.weapon = weapon
    this.favFood = favFood
  }

  eat(food) {
    if (food == this.favFood) {
      console.log("COWABUGA")
    }
    console.log(`${this.name} is eating ${food}`)
  }
}