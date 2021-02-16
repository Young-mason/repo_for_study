{
  type CoffeeCup = {
    shots: number;
    hasMilk: boolean;
  };

  // public : default
  // private : 외부에서 접근 불가
  // protected : 상속시 외부에서 접근할 수 없지만 자식 클래스에서는 접근가능
  class CoffeeMaker {
    private static BEANS_GRAMM_PER_SHOT: number = 7; // class level
    private coffeeBeans: number = 0; // instance (object) level

    private constructor(coffeeBeans: number) {
      this.coffeeBeans = coffeeBeans;
    }

    static makeMachine(coffeeBeans: number): CoffeeMaker {
      return new CoffeeMaker(coffeeBeans);
    }

    fillCoffeeBeans(beans: number) {
      if (beans < 0) {
        throw new Error("value for beans should be greater than 0");
      }
      this.coffeeBeans += beans;
    }

    makeCoffee(shots: number): CoffeeCup {
      if (this.coffeeBeans < shots * CoffeeMaker.BEANS_GRAMM_PER_SHOT) {
        throw new Error("Not enough coffee beans!");
      }

      this.coffeeBeans -= shots * CoffeeMaker.BEANS_GRAMM_PER_SHOT;
      return {
        shots,
        hasMilk: false,
      };
    }
  }

  const maker = CoffeeMaker.makeMachine(15);
  maker.fillCoffeeBeans(15);

  class User {
 
      age: number = 10;

      set setAge(num: number) {
          this.age = num;
      }
      constructor (private firstName: string, private lastName: string) {
      }
  }

}
