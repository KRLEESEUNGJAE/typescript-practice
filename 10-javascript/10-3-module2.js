// console.log(add(1, 2)); // 3 -> 모듈화를 하지 않으면 글로벌 스코프로 인식하기 때문.

/* 
import run, { print as printMessage } from './10-3-module1.js';
// //? default가 아닌 export는 {}를 이용해서 가져온다
console.log(run(3, 4));
printMessage(); // pint 🖨~! 
 */

import * as calculator from './10-3-module1.js';
console.log(calculator.add2(3, 4));
calculator.print();
console.log(calculator.number);

//* 모듈화의 장점
//* 1. 파일들간의 이름 중복 충돌을 방지할 수 있다.
//* 2. 서로간의 코드를 분리함으로써 모듈성을 높여준다.
//* 3. 모듈간의 재사용성을 높여준다.
