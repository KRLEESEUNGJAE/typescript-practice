/* this -> 다른 언어에서 this란 클래스 자신을 가르킨다 
하지만 JavaScript에서의 this는 램프의 요정 지니와 같아서 
누가 호출했냐에 따라 or 문맥에 따라 this가 동적으로 변경될 수 있다. */

console.log(this);

function simpleFunc() {
  console.log(this);
}
window.simpleFunc();
console.clear();

class Counter {
  count = 0;
  // increase = function () {
  //   console.log(this);
  // };

  //? 정보를 잃어버리지 않게 바인딩 하는 방법 2
  // Arrow function을 사용 -> 다른 언어에서 사용되는 this처럼 선언될 당시의 문맥or스코프의 this context를 유지
  increase = () => {
    console.log(this);
  };
}
const counter = new Counter();
counter.increase(); // Counter {count: 0, increase: f}
const caller = counter.increase;
caller(); // undefined
/* undefined -> this의 정보를 잃어버림
let과 const로 선언한 변수는 window에 등록되어있지 않음으로 caller를 호출하는 것은 
window가 아니라 그 어떤 오브젝트도 아니기 때문에 undefined를 호출하는 것과 같다 */

//? 정보를 잃어버리지 않게 바인딩 하는 방법 1 -> bind 사용
// const caller = counter.increase.bind(counter);
// caller(); // Counter {count: 0, increase: f}

class Bob {}
const bob = new Bob();
bob.run = counter.increase;
bob.run(); // Bob {run: f}
