/**
 * 함수 타입 표현식
 */

// 타입 별칭으로 타입 정의하기
type Add = (a: number, b: number) => number;

type Operation = (a: number, b: number) => number;

const add: Add = (a, b) => a + b;

// 타입별칭이 공통적으로 쓰일 때
const sub: Operation = (a, b) => a - b;
const multiply: Operation = (a, b) => a * b;
const divide: Operation = (a, b) => a / b;

/**
 * 호출 시그니처 (콜 시그니처)
 */

type Operation2 = {
  (a: number, b: number): number;
  name: string; // 프로퍼티를 추가로 정의할 수 있다.
  // 객체와 같이 타입을 정의하는 이유는 자바스크립트의 함수가 객체기 때문이다
};

const sub2: Operation2 = (a, b) => a - b;
const multiply2: Operation2 = (a, b) => a * b;
const divide2: Operation2 = (a, b) => a / b;
