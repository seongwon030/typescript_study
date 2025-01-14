/**
 * 타입 변수 응용
 */

/**
 * 첫번째 사례
 */
function swap<T, U>(a: T, b: U) {
  return [b, a];
}

const [a, b] = swap("1", 2);
// 오류가 나는 이유
// a에 string 타입의 값을 전달 -> T가 string 타입으로 할당됨
// b는 number 타입의 값을 전달하지만 T는 이미 string
// 이런 경우 타입 변수를 하나가 아닌 두 개를 사용한다

/**
 * 두번째 사례
 */

function returnFirstValue<T>(data: [T, ...unknown[]]) {
  // 함수 내부에선 타입 변수 T에 할당될 타입이 아직 무엇인지 모른다
  // 최대한 오류를 발생시키지 않게 하기 위해 타입스크립트는 Type을 unknown으로 설정한다
  // data는 unknown이고 배열 인덱스에 접근하지 못하기 때문에 오류가 생긴다
  // 데이터 타입을 배열로 바꾸면 오류 해결 => unknown 배열 타입으로 정의
  return data[0];
}

let num = returnFirstValue([0, 1, 2]);
// 0

// 첫번째요소가 무엇인지 모르기 때문에 유니온 타입으로 반환
// 하지만 첫번째요소의 타입으로 추론하려면? 튜플을 쓰자
// 튜플은 특정 인덱스에 해당하는 요소의 타입을 지정할 수 있는 기능이 있다
// data: T[] => data: [T, ...unknown[]]
// 튜플의 첫번째 요소가 아니면 다른 요소의 타입을 알 필요없어서 ...unknown[]처럼 사용한 것

let str = returnFirstValue([1, "hello", "mynameis"]);
// "hello"

/**
 * 세번째 사례
 */

// length 프로퍼티를 가진 객체를 확장하는 타입으로 T를 제한
function getLength<T extends { length: number }>(data: T) {
  return data.length;
}

let var1 = getLength([1, 2, 3]); // 3

let var2 = getLength("12345"); // 5

let var3 = getLength({ length: 10 }); // 10

let var4 = getLength(10);
