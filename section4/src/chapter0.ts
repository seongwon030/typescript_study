/**
 * 함수 타입 정의
 */

import { get } from "http";

function func(a: number, b: number) {
  return a + b;
}

/**
 * 화살표 함수의 타입을 정의하는 방법
 */

const add = (a: number, b: number): number => a + b;

/**
 * 함수의 매개변수
 */

// 선택적 매개변수보다 필수적 매개변수가 먼저 와야 한다
function introduce(name = "서성원", age: number, tall?: number) {
  console.log(`name : ${name}`);
  if (typeof tall === "number") {
    // number로 타입 좁히기
    console.log(`tall : ${tall + 10}`);
  }
}

introduce("서성원", 27); // 생략하고 싶다면 tall뒤에 ? 를 넣으면 된다

function getSum(...rest: number[]) {
  // 매개변수의 개수는 가변적이다
  let sum = 0;
  rest.forEach((it) => (sum += it));
  return sum;
}

getSum(1, 2, 3);

// 길이를 고정하려면 튜플 타입으로 정의한다
function getSum2(...rest: [number, number, number]) {
  // 매개변수의 개수는 가변적이다
  let sum = 0;
  rest.forEach((it) => (sum += it));
  return sum;
}
