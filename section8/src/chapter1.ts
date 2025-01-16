/**
 * keyof 연산자
 */

type Person = typeof person;
// js에서 typeof는 특정 변수의 타입을 string 값으로 변환하는 함수
// ts에서 타입을 정의할 때 사용하면 동작이 바뀐다
// 어떤 변수의 타입을 뽑아낼 때 사용된다

// interface Person {
//   name: string;
//   age: number;
// }

function getPropertyKey(person: Person, key: keyof typeof person) {
  return person[key];
}

// key의 타입을 string으로 하면 리턴문에서 오류가 발생
// 모든 문자열값이 person 객체 key라고 볼 수 없기 때문
// 그래서 person 객체에 있는 name 외의 값이 오면 문제가 생긴다

// 허용하지 않기 위해 age의 타입을 유니온으로 설정하면 문제가 생긴다
// person 객체가 수정될때마다 타입을 수정해야 하기 떄문

// 이때 keyof를 사용한다 => person 객체 타입의 모든 프로퍼티를 union타입으로 추출한다
// 무조건 타입에만 사용된다
const person = {
  name: "성원",
  age: 25,
};

getPropertyKey(person, "name");
