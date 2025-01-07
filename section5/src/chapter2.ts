/**
 * 선언 합침
 */

interface Person {
  name: string;
}

interface Person {
  // name: number 와 같이 다른 타입 간 허용 안 됨
  age: number;
}

interface Developer extends Person {
  name: "hi";
}

const person: Person = {
  name: "",
  age: 25,
};

/**
 * 모듈 보강
 */

interface Lib {
  a: number;
  b: number;
}

interface Lib {
  c: string;
}

const lib: Lib = {
  a: 1,
  b: 2,
  c: "hello",
};
