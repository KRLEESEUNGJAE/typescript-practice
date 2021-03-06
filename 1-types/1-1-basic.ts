{
  /**
   * JavaScript
   * Primitive: number, string, boolean, bigint, symbol, null, undefined
   * Object: function, array.....
   */

  // number
  const num: number = -6;

  // string
  const str: string = "hello";

  // boolean
  const boal: boolean = false;

  // undefined
  let name: undefined; // π©
  let age: number | undefined;
  age = undefined;
  age = 1;
  function find(): number | undefined {
    return undefined;
  }

  // null
  let person: null; // π©
  let person2: string | null;

  // unknown π©
  let notSure: unknown = 0;
  notSure = "he";
  notSure = true;

  // any π©
  let anything: any = 0;
  anything = "hello";

  // void
  //? ν¨μμμ μλ¬΄λ° κ²λ λ¦¬ν΄νμ§ μμ λ voidλ₯Ό μ¬μ©νλ€.
  function print(): void {
    console.log("hello");
    return;
  }
  let unusable: void = undefined; // π©

  // never
  //? μλ¬νΈλ€λ§ ν  λ μ¬μ©(μλ¬΄λ° κ²λ λ¦¬ν΄νμ§ μμ)
  function throwError(message: string): never {
    // message -> server (log)
    throw new Error(message);

    //? while λ°λ³΅λ¬Έμ λλ €μ λλμ§ μλ μ½λλ₯Ό μμ±ν΄μΌ ν  λ μ¬μ©.
    while (true) {}
  }
  let neverEnding: never; // π©

  // objet
  let obj: object; // π©
  function acceptSomeObject(obj: object) {}
  acceptSomeObject({ name: "ellie" });
  acceptSomeObject({ animal: "dog" });
}
