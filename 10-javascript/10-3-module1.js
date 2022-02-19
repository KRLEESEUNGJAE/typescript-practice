// export default function add(a, b) {
//   return a + b;
// }

//! error: 한 파일 안에서 default는 한번만 사용할 수 있다.
// export default function print() {}

export function print() {
  console.log('pint 🖨~!');
}

// default없이
export function add2(a, b) {
  return a + b;
}
export const number = 17;
