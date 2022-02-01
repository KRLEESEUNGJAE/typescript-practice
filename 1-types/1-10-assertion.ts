{
  /**
   * Type Assertions 💩 : 장담할 수 있는 상황이 아니라면 되도록 사용하지 않는 것이 좋음
   */
  function jsStrFunc(): any {
    return 2;
  }
  const result = jsStrFunc();
  console.log((result as string).length);
  console.log((<string>result).length);

  const wrong: any = 5;
  console.log((wrong as Array<number>).push(1)); // 😱 서버가 죽어버림...

  function findNumbers(): number[] | undefined {
    return undefined;
  }
  const numbers = findNumbers()!;
  //* '!'(느낌표)는 무조건 인자를 전달 받을 것이다, undefined가 아님을 확신한다는 뜻
  numbers.push(2); // 😱

  const button = document.querySelector("class")!;
}
