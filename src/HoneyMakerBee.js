// reference bee superclass
class HoneyMakerBee extends Bee {
  // constructor
  constructor() {
    // reference super
    super();
    // update age, job properties
    this.age = 10;
    this.job = 'make honey';
    // new honeypot property
    this.honeyPot = 0;
  }
  // new makeHoney method
  makeHoney() {
    this.honeyPot ++;
  }
  // new giveHoney method
  giveHoney() {
    this.honeyPot --;
  }
}
