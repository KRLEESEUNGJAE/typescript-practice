// Type: 데이터의 타입을 결정 -> 데이터를 담을 목적
// Interface: 어떤 것의 규격사항, 계약서 -> 어떤 것을 구현할 목적

type PositionType = {
  x: number;
  y: number;
};
interface PositionInterface {
  x: number;
  y: number;
}

// object ⭐️
// 공통점: type과 interface 둘 다 object를 정의하고 타입을 할당할 수 있다.
const obj1: PositionType = {
  x: 1,
  y: 1,
};
const obj2: PositionInterface = {
  x: 1,
  y: 1,
  z: 1,
};

// class ⭐️
// 공통점: type과 interface 둘 다 class에서 구현이 가능하다.
class Pos1 implements PositionType {
  x: number;
  y: number;
}
class Pos2 implements PositionInterface {
  x: number;
  y: number;
  z: number;
}

// Extends
// 공통점: type과 interface 둘 다 확장이 가능하다.
interface ZPositionInterface extends PositionInterface {
  z: number;
}
type ZPositionType = PositionType & { z: number };

//
//Todo: 여기서부터는 type과 interface의 차이점
// 😸 Only interfaces can be merged.
//* interface만 중복해서 사용 가능.
interface PositionInterface {
  z: number;
}

//! 타입은 중복해서 사용할 수 없음!
// type PositionType {
// }

// 😸 Type aliases can use computed properties
//* type만 사용할 수 있다.
type Person = {
  name: string;
  age: number;
};
type Name = Person['name']; // string

type NumberType = number;
type Direction = 'left' | 'right';
