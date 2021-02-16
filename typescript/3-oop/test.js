class CoffeeMaker {
    static BEANS_GRAMM_PER_SHOT = 7; // class level
    coffeeBeans = 0; // instance (object) level

    constructor(coffeeBeans) {
      this.coffeeBeans = coffeeBeans;
    }

    static makeMachine(coffeeBeans) {
      return new CoffeeMaker(coffeeBeans);
    }
}