{
  type Video = {
    title: string;
    author: string;
    discription?: string;
  };

  //* Mapped Type
  type Optional<T> = {
    [P in keyof T]?: T[P]; // for...in
  };

  type ReadOnly<T> = {
    readonly [P in keyof T]: T[P];
  };

  type VideoOptional = Optional<Video>;
  const videoOp: VideoOptional = {
    title: 'hi',
    author: 'karma',
  };

  type Animal = {
    name: string;
    age: number;
  };
  const animal: Optional<Animal> = {
    name: 'dog',
  };
  animal.name = 'karma';

  const video: ReadOnly<Video> = {
    title: 'hi',
    author: 'karma',
  };
  // video.author = 'karma2'; //! readonly기 때문에 변경할 수 없음!

  //! 비효율적
  // type VideoOptional = {
  //   title?: string;
  //   author?: string;
  //   discription: string;
  // };

  // type VideoReadOnly = {
  //   readonly title?: string;
  //   readonly author?: string;
  //   readonly discription: string;
  // };

  type Nullable<T> = { [P in keyof T]: T[P] | null };
  const obj2: Nullable<Video> = {
    title: null,
    author: null,
  };

  type Proxy<T> = {
    get(): T;
    set(value: T): void;
  };

  type Proxify<T> = {
    [P in keyof T]: Proxy<T[P]>;
  };
}
