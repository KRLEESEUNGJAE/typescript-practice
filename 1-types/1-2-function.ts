{
  // JavaScript π©
  // function jsAdd(num1, num2) {
  //   return num1 + num2;
  // }

  // TypeScript β¨
  function add(num1: number, num2: number): number {
    return num1 + num2;
  }

  // JavaScript π©
  // function jsFetchNum(id) {
  //   // code ...
  //   // code ...
  //   // code ...
  //   return new Promise((resolve, reject) => {
  //     resolve(100);
  //   });
  // }

  // TypeScript β¨
  function fetchNum(id: string): Promise<number> {
    // code ...
    // code ...
    // code ...
    return new Promise((resolve, reject) => {
      resolve(100);
    });
  }

  // JavaScript β¨ => TypeScript
  // Optional parameter
  function printName(firstName: string, lastName?: string) {
    //* μΈμμ '?'(λ¬Όμν)λ₯Ό μμ±νλ©΄ μ λ¬ λ°μ μλ μκ³  μ λ¬ λ°μ§ μμ μλ μλ€λ λ»(optionalμ μλ―Έ)
    console.log(firstName);
    console.log(lastName); // undefined
  }
  printName("Steve", "Jobs");
  printName("Ellie");
  printName("Anna");

  // Default parameter
  function printMessage(message: string = "default message") {
    console.log(message);
  }
  printMessage();

  // Rest parameter
  function addNumbers(...numbers: number[]): number {
    return numbers.reduce((a, b) => a + b);
  }
  console.log(addNumbers(1, 2));
  console.log(addNumbers(1, 2, 3, 4));
  console.log(addNumbers(1, 2, 3, 4, 5, 0));
}
