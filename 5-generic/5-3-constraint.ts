interface Employee {
  pay: () => void;
}

class FullTimeEmployee implements Employee {
  pay(): void {
    console.log(`full time!!`);
  }
  workFullTime() {}
}

class PartTimeEmployee implements Employee {
  pay() {
    console.log(`part time!!`);
  }
  workPartTime() {}
}

// 세부적인 타입을 인자로 받아서 추상적인 타입으로 다시 리턴하는 함수는 💩이다.
function payBad(employee: Employee): Employee {
  employee.pay();
  return employee;
}

function pay<T extends Employee>(employee: T): T {
  employee.pay();
  return employee;
}

const karma = new FullTimeEmployee();
const bob = new PartTimeEmployee();
karma.workFullTime();
bob.workPartTime();

const karmaAfterPay = pay(karma);
const bobAfterPay = pay(bob);
karmaAfterPay.workFullTime();

const obj = {
  name: 'karma',
  age: 20,
};

const obj2 = {
  animal: '🐈',
};

//* 함수 선언식
function getValue<T, K extends keyof T>(obj: T, key: K): T[K] {
  return obj[key];
}
//* 함수 표현식
const getValue2 = <T, K extends keyof T>(obj: T, key: K): T[K] => {
  return obj[key];
};

console.log(getValue(obj, 'name')); // karma
console.log(getValue(obj, 'age')); // 20
console.log(getValue(obj2, 'animal')); // 🐈
