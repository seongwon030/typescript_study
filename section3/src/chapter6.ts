/**
 * 타입 단언 - type assertion
 */

type Person = {
  name: string;
  age: number;
}

// 의도와 다르게 타입이 추론되어 원하는 기능을 만들기 어렵다
// 타입 단언으로 초기값이 타입으로 간주할 수 있다
let person = {} as Person;
person.name = "서성원";
person.age = 24; 

type Dog = {
  name: string;
  color: string;
};

let dog = {
  name: "서성원",
  color: "brown",
  breed: "부산",
} as Dog;

/**
 * 타입 단언의 규칙
 * 값 as 단언 <- 단언식
 * A as B
 * A가 B의 수퍼타입이거나
 * A가 B의 서브타입이어야 한다
 */

let num1 = 10 as never;
let num2 = 10 as unknown;

let num3 = 10 as unknown as string; 
// A : 10 as unknown
// B : string
// A가 B의 super타입  

/**
 * const 단언
 */

let num4 = 10 as const;

let cat = {
  name: "야옹이",
  color: "yellow",
} as const; // 수정할 수 없는 객체가 됨

/**
 * Non Null 단언
 */

type Post = {
  title: string;
  author?: string;
};

let post : Post = {
  title: "게시문1",
  author: "서성원",
}

const len : number = post.author!.length; 
// TypeScript 컴파일러는 null이거나 undefinded가 아니라고 판단 