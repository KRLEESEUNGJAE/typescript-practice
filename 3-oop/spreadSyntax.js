const obj = { a: 'apple', b: 'banana' };
console.log(obj);
console.log({ ...obj, c: 'chicken' });

function a() {
  console.log('apple');
}

function b() {
  console.log('banana');
}

function ab() {
  a();
  b();
}

function final(num) {
  const tester = ab();
  return {
    // ...tester,
    hasMilk: true,
  };
}

final(7);
