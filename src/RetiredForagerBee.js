class RetiredForagerBee extends ForagerBee {
  constructor() {
    super();
    // update age, job, canFly, and color properties
    this.age = 40;
    this.job = 'gamble';
    this.canFly = false;
    this.color = 'grey';
  }
  // update forage method
  forage() {
    return 'I am too old, let me play cards instead';
  }
  // new gamble method
  gamble(treasure) {
    this.treasureChest.push(treasure);
  }
}
