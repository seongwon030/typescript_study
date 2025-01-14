/**
 * map 메서드
 */

const arr = [1, 2, 3];
const newArr = arr.map((it) => it * 2);
// 매개변수의 타입이 추론되는 이유는 map 메서드의 타입이 어딘가에 별도로 선언되어 있기 떄문

function map<T, U>(arr: T[], callback: (item: T) => U) {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    result.push(callback(arr[i]));
  }
  return result;
}

map(arr, (it) => it * 2);

map(["hi", "hello"], (it) => parseInt(it));
// 반환값의 타입도 string이 되어서 오류가 발생
// 두개의 타입변수 사용

/**
 * forEach
 */

const arr2 = [1, 2, 3];
arr2.forEach((it) => console.log(it));

function forEach<T>(arr: T[], callback: (item: T) => void) {
  for (let i = 0; i < arr.length; i++) {
    callback(arr[i]);
  }
}

// 반환값이 없어서 void로 설정해주면 됨
forEach(arr2, (it) => {
  console.log(it.toFixed());
});

forEach(["123", "456"], (it) => {
  it;
});
