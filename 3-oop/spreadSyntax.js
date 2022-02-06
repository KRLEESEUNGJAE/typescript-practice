const obj = { a: 'apple', b: 'banana' };
// console.log(obj);
// console.log({ ...obj, c: 'chicken' });

function a() {
  console.log('apple');
}

function b() {
  console.log('banana');
}

const returnNum = 7;

function ab(num) {
  console.log(`Pulling ${num} nums... ☕️`);
  return {
    num: num,
    hasMilk: false,
  };
}
console.log(ab(11));

function combination(num) {
  a();
  b();
  return ab(num);
}

function final(num) {
  const tester = combination(num);
  return {
    ...tester,
    Addnumber: num,
    hasMilk: true,
  };
}

const result = final(7);
console.log(result);

// function a(num) {
//   let number = 0;
//   console.log('apple');
//   return number;
// }

// let result = a(7);
// console.log(result);
