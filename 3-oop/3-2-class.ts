{
  type CoffeeCup = {
    shots: number;
    hasMilk: boolean;
  };

  class CoffeeMaker {
    static BEANS_GRAM_PER_SHOT: number = 7; // class level
    coffeeBeans: number = 0; // instance (object) level

    constructor(coffeeBeans: number) {
      this.coffeeBeans = coffeeBeans;
    }

    static makeMachine(coffeeBeans: number): CoffeeMaker {
      return new CoffeeMaker(coffeeBeans);
    }

    makeCoffee(shots: number): CoffeeCup {
      if (this.coffeeBeans < shots * CoffeeMaker.BEANS_GRAM_PER_SHOT) {
        throw new Error('Not enough coffee beans!');
      }
      this.coffeeBeans -= shots * CoffeeMaker.BEANS_GRAM_PER_SHOT;
      return {
        shots,
        hasMilk: false,
      };
    }
  }

  const maker = new CoffeeMaker(32);
  console.log(maker);
  const maker2 = new CoffeeMaker(14);
  console.log(maker2);

  const maker3 = CoffeeMaker.makeMachine(77);
  console.log(maker3);
  const mkCofee3 = maker3.makeCoffee(3);
  console.log(mkCofee3);

  const maker4 = CoffeeMaker.makeMachine(77).makeCoffee(5);
  console.log(maker4);

  //Q. makeMachine을 클래스내부에 따로 만들어주는 이유는 무엇인가요?
  /* A.
  생성자를 이용하면 외부에서 만드는 사람이 필요한 클래스를 골라서 직접 new로 
  그리고 그것을 생성하기 위한 모든 인자들에 대해 알아서 제대로 써야 하지만,
  만약 다양한 커피 기계가 있다면, 외부에서 일일이 필요한 기계마다 필요한 인자들을 알아서 생성하는것도 일이겠죠?
  이런 생성하는 로직을 잘 감추어 두는 것이 바로 static 생성 함수예요 :)
  아래와 같이 간단한 인터페이스로 새로운 기계를 만들수 있고,
  내부에서 복잡한 new.. 생성의 로직들을 구현하고 있겠죠 🤓
  CoffMachine.makeMachine('simple');
  CoffMachine.makeMachine('fancy');
  CoffMachine.makeMachine('yellow');
  */
}
