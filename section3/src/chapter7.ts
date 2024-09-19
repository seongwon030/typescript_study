/**
 * 타입 좁히기
 * 조건문 등을 이용해 넓은 타입에서 좁은 타입으로
 * 타입을 상황에 따라 좁히는 방법을 이야기
 */

type Person = {
  name: string;
  age: number;
};

// value => number : toFixed
// value => string : toUpperCase
// value => Date : getTime
// value => Person : name은 age살 입니다.
function func(value: number | string | Date | null | Person) {
  if (typeof value === 'number'){
    console.log(value.toFixed());
  } else if (typeof value === 'string') {
    console.log(value.toUpperCase());
  } else if (value instanceof Date) { // 왼쪽에 있는 값이 오른쪽의 인스턴스인가?
    console.log(value.getTime()); 
    // null도 typeof object를 통과하므로 타입좁히기 불가능
    // instanceof 에선 null이 Date 객체는 아니므로 타입좁히기 가능
  } else if (value && 'age' in value) { 
    // value가 있는지 검사 후 age가 value에 있는지 검사하면 타입 좁히기 가능
    // value가 있는지 검사 안 하면 value가 null 이거나 Person이 되므로 타입 좁히기 불가능
    value;
  }
}
// 타입가드 : typeof 표현이 넘버 타입의 값 이외에 중괄호 내부에 들어갈 수 없도록 함

