{
  /**
   * Type Assertions π© : μ₯λ΄ν  μ μλ μν©μ΄ μλλΌλ©΄ λλλ‘ μ¬μ©νμ§ μλ κ²μ΄ μ’μ
   */
  function jsStrFunc(): any {
    return 2;
  }
  const result = jsStrFunc();
  console.log((result as string).length);
  console.log((<string>result).length);

  const wrong: any = 5;
  console.log((wrong as Array<number>).push(1)); // π± μλ²κ° μ£½μ΄λ²λ¦Ό...

  function findNumbers(): number[] | undefined {
    return undefined;
  }
  const numbers = findNumbers()!;
  //* '!'(λλν)λ λ¬΄μ‘°κ±΄ μΈμλ₯Ό μ λ¬ λ°μ κ²μ΄λ€, undefinedκ° μλμ νμ νλ€λ λ»
  numbers.push(2); // π±

  const button = document.querySelector("class")!;
}
