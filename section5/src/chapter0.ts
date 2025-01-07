/**
 * 인터페이스
 */

interface Person {
  readonly name: string;
  age?: number;
  sayHi(): void;
  sayHi(a: number, b: number): void;
  // 프로퍼티 타입 설정할 때 이름을 붙여야 한다. 만약 지우면 type자체가 함수타입이 된다.
}

// 인터페이스에는 유니온이나 인터섹션 불가능하다
// 대신 타입 별칭에 활용해야 한다
type Type1 = number | string;
type Type2 = number & string;

const person: Person = {
  name: "성원",
  sayHi: function () {
    console.log("hi");
  },
};
