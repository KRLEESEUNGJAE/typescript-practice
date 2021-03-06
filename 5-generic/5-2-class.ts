// either: a or b
interface Either<L, R> {
  //? what's different?
  left: () => L;
  right: () => R;
  // left(): L;
  // right(): R;
}

class SimpleEither<L, R> implements Either<L, R> {
  constructor(private leftValue: L, private rightValue: R) {}
  left(): L {
    return this.leftValue;
  }

  right(): R {
    return this.rightValue;
  }
}

const either: Either<number, number> = new SimpleEither(4, 5);
console.log(either.left()); // 4
console.log(either.right()); // 5

const best = new SimpleEither({ name: 'Seungjae' }, 'hello world!');
console.log(best.left()); // { name: 'Seungjae' }
console.log(best.right()); // hello world!
