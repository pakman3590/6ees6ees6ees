// reference bee superclass
class ForagerBee extends Bee {
  constructor() {
    // reference super
    super();
    // update age, job properties
    this.age = 10;
    this.job = 'find pollen';
    // new canFly and treasureChest properties
    this.canFly = true;
    this.treasureChest = [];
  }
  // new forage method
  forage(treasure) {
    this.treasureChest.push(treasure);
  }
}
