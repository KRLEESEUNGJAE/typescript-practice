{
  function checkNotNullBad(arg: number | null): number {
    if (arg == null) {
      throw new Error('not valid number!');
    }
    return arg;
  }

  function checkNotNullAnyBad(arg: any | null): any {
    if (arg == null) {
      throw new Error('not valid number!');
    }
    return arg;
  }
  const result = checkNotNullAnyBad(123);
  console.log(result);

  function checkNotNull<T>(arg: T | null): T {
    if (arg == null) {
      throw new Error('not valid number!');
    }
    return arg;
  }
  const number = checkNotNull(123);
  const boal: boolean = checkNotNull(true);

  // 추가 학습 =========================================================================
  function logText<T>(text: T): T {
    return text;
  }
  // #1
  const text1 = logText<string>('Hello Generic');
  // #2
  const text2 = logText('Hello Generic');

  function logTextBad<T>(text: T): T {
    //! console.log(text.length);
    // Error: T doesn't have .length
    return text;
  }

  function logTextGood<T>(text: T[]): T[] {
    console.log(text.length); // 제네릭 타입이 배열이기 때문에 `length`를 허용합니다.
    return text;
  }
  console.log(logTextGood(['string', 1, { hi: 'hello' }]));

  interface LengthWise {
    length: number;
  }
  function logVeryGoodText<T extends LengthWise>(text: T): T {
    console.log(text.length);
    return text;
  }
  //! logVeryGoodText(10);
  // Error, 숫자 타입에는 `length`가 존재하지 않으므로 오류 발생
  logVeryGoodText({ length: 0, value: 'hi' });
  // `text.length` 코드는 객체의 속성 접근과 같이 동작하므로 오류 없음
}
