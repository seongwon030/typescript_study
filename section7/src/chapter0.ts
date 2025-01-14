/**
 * 제너릭
 */

// 제너릭 함수: : 모든 타입을 쓸 수 있는 범용적인 함수

// T : 타입을 저장하는 타입변수
// 자바스크립트 변수처럼 상황에 따른 타입을 담을 수 있다
function func<T>(value: T): T {
  return value;
}

// 함수의 반환값 타입은 해당 함수의 리턴 값을 기준으로 추론된다
let num = func(10);
num.toUpperCase();
num.toFixed();
// any 타입이어서 오류가 나지 않음
// unknown 이면 오류를 발생시킴
// 하지만 num에 숫자가 들어가는 것은 너무나 자명한 상황인데도 toFixed()같은 메서드를 사용할 수 없다
if (typeof num === "number") {
  num.toFixed();
  // 타입좁히기를 해서 사용해야한다
}

let bool = func(true);

let str = func("string");

// 타입 단언으로 배열이 아닌 튜플타입으로 추론하도록 하기
let arr = func([1, 2, 3] as [number, number, number]);

// 제너릭 함수를 호출하면서 명시적으로 타입 변수의 타입을 직접 정의하기
let arr2 = func<[number, number, number]>([1, 2, 3]);
