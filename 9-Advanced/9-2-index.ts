{
  const obj = {
    name: 'karma',
  };
  obj.name; // karma
  obj['name']; // karma

  type Animal = {
    name: string;
    age: number;
    gender: 'male' | 'female';
  };

  type Name = Animal['name']; // string
  const text1: Name = 'hello';
  //! const text2: Name = 4;

  type Gender = Animal['gender']; // 'male' | 'female'

  type Keys = keyof Animal; // 'name' | 'age' | 'gender'
  const key: Keys = 'gender';

  type Person = {
    name: string;
    gender: Animal['gender'];
  };
  const person: Person = {
    name: 'karma',
    gender: 'male',
  };
}
