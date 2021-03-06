{
  type CoffeeCup = {
    shots: number;
    hasMilk: boolean;
  };

  interface CoffeeMaker {
    makeCoffee(shots: number): CoffeeCup;
  }

  interface CommercialCoffeeMaker {
    makeCoffee(shots: number): CoffeeCup;
    fillCoffeeBeans(beans: number): void;
    clean(): void;
  }

  class CoffeeMachine implements CoffeeMaker, CommercialCoffeeMaker {
    private static BEANS_GRAM_PER_SHOT: number = 7; // class level
    private coffeeBeans: number = 0; // instance (object) level

    private constructor(coffeeBeans: number) {
      this.coffeeBeans = coffeeBeans;
    }

    static makeMachine(coffeeBeans: number): CoffeeMachine {
      return new CoffeeMachine(coffeeBeans);
    }

    fillCoffeeBeans(beans: number) {
      if (beans < 0) {
        throw new Error('value for beans should be greater than 0');
      }
      this.coffeeBeans += beans;
    }

    clean(): void {
      console.log('cleaning the machine...๐งผ');
    }

    private grindBeans(shots: number) {
      console.log(`grinding beans for ${shots}`);
      if (this.coffeeBeans < shots * CoffeeMachine.BEANS_GRAM_PER_SHOT) {
        throw new Error('Not enough coffee beans!');
      }
      this.coffeeBeans -= shots * CoffeeMachine.BEANS_GRAM_PER_SHOT;
    }

    private preheat(): void {
      console.log('heating up... ๐ฅ๐ซ๐ฅ');
    }

    private extract(shots: number): CoffeeCup {
      console.log(`Pulling ${shots} shots... โ๏ธ`);
      return {
        shots,
        hasMilk: false,
      };
    }
    makeCoffee(shots: number): CoffeeCup {
      this.grindBeans(shots);
      this.preheat();
      return this.extract(shots);
    }
  }

  class AmateurUser {
    constructor(private machine: CoffeeMaker) {}
    makeCoffee() {
      const coffee = this.machine.makeCoffee(2);
      console.log(coffee);
    }
  }

  class ProBarista {
    constructor(private machine: CommercialCoffeeMaker) {}
    makeCoffee() {
      const coffee = this.machine.makeCoffee(2);
      console.log(coffee);
      this.machine.fillCoffeeBeans(45);
      this.machine.clean();
    }
  }

  const maker: CoffeeMachine = CoffeeMachine.makeMachine(32);
  maker.fillCoffeeBeans(32);
  maker.makeCoffee(2);

  const maker2: CoffeeMaker = CoffeeMachine.makeMachine(32);
  // maker2.fillCoffeeBeans(32); //error: ์ฌ์ฉํ? ์ ์์
  maker2.makeCoffee(2);

  const maker3: CommercialCoffeeMaker = CoffeeMachine.makeMachine(32);
  maker3.fillCoffeeBeans(32);
  maker3.makeCoffee(2);
  maker3.clean();

  console.log('');

  const amateur = new AmateurUser(maker);
  const pro = new ProBarista(maker);

  amateur.makeCoffee();

  console.log('');

  pro.makeCoffee();
}

//? Q. ์ถ์ํ์ ์บก์ํ์ ์ฐจ์ด

/* 
๊ณ?์์ด์ ๋ด๋ถ ์ํ (๋ฐฐ๊ณ?ํ๊ณ?, ์ฆ๊ฒ๊ณ?, ๊ธฐ๋ถ์ข๊ณ?, ์?์ค๊ณ?) ์ด๋ฐ๊ฒ๋ค์ ์ธ๋ถ์์ ์ค์?ํ? ์ ์๋๊ฒ ์๋์์. ๊ทธ์ตธ?
์ธ๋ถ์์ ํจ๋ถ๋ก ์ค์?ํ? ์ ์๋ ๊ฒ๋ค์ private์ ๊ฐ์ ์?๊ทผ ์?์ด์๋ฅผ ์จ์ ์ธ๋ถ์์ ๋ณผ ์ ์๋๋ก ๋ง๋๋๊ฒ์ ์?๋ณด ์๋, ์บก์ํ๋ผ๊ณ? ํด์.
์ธ๋ถ์์ ์?๊ทผ์ด ๊ฐ๋ฅํ๊ณ?, ํด๋ ๋๊ณ?, ํ์ํ ๊ฒ๋ค๋ง ๋ธ์ถํ๋๊ฒ๋ ์?๋ณด ์๋, ์บก์ํ๋ผ๊ณ? ํด์ :)
์ฌ๊ธฐ์ ๊ณ?์์ด์ ๋์์ฃผ๋ค (play)๊ฐ์ ํจ์๋ง ์ธ๋ถ์ ๋ธ์ถํ๋๊ฒ์ (public์ผ๋ก ์ค์?) ์บก์ํ๋ผ๊ณ? ํด์.
์, ์ด๋ฐ ํจ์๋ฅผ ์ธ๋ถ์์ ํธ์ถ์ด ๊ฐ๋ฅํ๋๋ก ๋ง๋?๋ค๊ณ? ํด์ ์ถ์ํ๋ผ๊ณ? ํ์ง๋ ์์์. 


์ถ์ํ๋, ์ธ๋ถ์์ ์ด๋ค ํํ๋ก, ๊ณตํต์?์ผ๋ก ์ด๋ป๊ฒ ์ด ํด๋์ค๋ฅผ ์ด์ฉํ๊ฒ ํ?๊ฒ์ธ๊ฐ... ์ด๊ฑธ ๊ณ?๋ฏผํ๋ ๋จ๊ณ์์.
์, Cat ๊ณ?์์ด๋ Play๋ผ๋ ํจ์๊ฐ ์์ด. ๊ทธ๋ฆฌ๊ณ? ๋ชจ๋? ๋๋ฌผ Animal๊ณผ ๋์ ์ค ์ ์์ด. ๊ทธ๋ฌ๋๊น Animal ์ด๋ผ๋ ๋ถ๋ชจ ํด๋์ค๋ฅผ ๋ง๋ค์ด์ play๋ฅผ ํ?์ ์๋๋ก ๋ง๋ค์ด์ผ์ง!

class Animal {
    play() {}
}


class Cat extends Animal { }


์ด๋?๊ฒ ์์์ ํตํด ์ถ์ํ๋ฅผ ํ? ์๋ ์์ฃ? :)
๊ทธ๋ฌ๋ฉด ๋๋ฌผ์ ์์ํ๋ ๋ชจ๋? ๋๋ฌผ๋ค์ ๋ค ๋์ ์ค ์ ์๋ ๋๋ฌผ์ผ๊น์?
์กฐ๊ธ ์๋ชป๋ ์ถ์ํ ๊ฐ๋์? ๊ทธ๋ฌ๋ฉด ๋ ์ด๋?๊ฒ ์ถ์ํ๋ฅผ ํด๋ณผ ์ ์์ด์

์, ๋์ ์ค ์ ์๋ ๋๋ฌผ ํด๋์ค๋ค์ด ๊ณตํต์?์ผ๋ก ๋ฐ๋ผ์ผ ํ๋ ํจ์, ์ธํฐํ์ด์ค๋ ๋ฌด์์ด ์์๊น? ์ํ! Playable ์ด๋ผ๋ ์ธํฐํ์ด์ค๋ฅผ ๋ง๋ค์


interface Playable {
    play();
}


์ด์? ์ด ์ธํฐํ์ด์ค๋ฅผ ๊ตฌํํ๋ ํด๋์ค๋ค์ ๋ค ๋์์ค ์ ์๋ ํด๋์ค์ผ!


class Cat implements Playable {
    play() {
       console.log("์ฌ๋ฐ๊ฒ ๋์์์น๐ฑ")
    }
}


class Dog implements Playable {
    play() {
       console.log("์ฌ๋ฐ๊ฒ ๋์์๋ฉ๐ถ")
    }
}


์ํ! Cat์ด๋ Dog๋ ๋์์ค ์ ์๋ ์น๊ตฌ๋ค์ด๊ตฐ!

class Tiger {
    
}


์๋, Tiger๋ Playable ์ธํฐํ์ด์ค๋ฅผ ๊ตฌํํ์ง ์์๋ค!
๋์์ค ์ ์๋ ํด๋์ค๊ตฌ๋!

์ด๋ฐ์์ผ๋ก ์ธ๋ถ์์ ์ด๋ป๊ฒ ์ด ํด๋์ค๋ฅผ ์ฌ์ฉํ? ์ ์๋์ง,
์ธํฐํ์ด์ค๋ ๋ค๋ฅธ ๋ถ๋ชจ ํด๋์ค๋ฅผ ํตํด ๊ณตํต์?์ธ ๊ธฐ๋ฅ๋ค์ ์ถ์ถํ๋ ์ด๋ฐ ์์๋ค์ ์ถ์ํ๋ผ๊ณ? ๋ณผ ์ ์์ด์ ๐ก


์?๋ฆฌ๋ฅผ ํ๋ฉด...

์ถ์ํ๋ ํด๋์ค๋ฅผ ๊ฐํธํ๊ฒ ์ฐ๊ธฐ์ํด์ ์ด๋ป๊ฒ ๊พธ๋ฉฐ์ผํ๋์ง, 
๊ณตํต์?์ ์ฐพ๊ณ? ๋ถํ์ํ  ์ธ๋ถ์ฌํญ์ ์?๊ฑฐํด์  ํด๋์ค๋ฅผ ๊ฐ๋จํ๊ฒ ๋ง๋๋ ๋จ๊ณ์ด๊ณ?.

์บก์ํ๋ ํด๋์ค๋ฅผ ๋ง๋ค๋ ์ธ๋ถ์์ ๋ง๋๋ก ์ฌ์ฉํ์ง๋ชปํ๋๋ก ๋ฐ์ดํฐ๋ฅผ ๋ณดํธํ๋ ์ญํ?์ด๋ค.

*/
