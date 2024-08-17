// 배열
let numArr: number[] = [1,2,3];

let strArr: string[] = ['hello', 'Im', 'seongwon'];

let boolArr: Array<boolean> = [true, false];

// 배열에 들어가는 요소들의 타입이 다양할 경우ㅡ
let multiArr: (number | string)[]  = [1,"hello"];

// 다차원 배열의 타입을 정의하는 방법
let doubleArr: number[][] = [
  [1,2,3],
  [4,5],
];

// 튜플
// 길이와 타입이 고정된 배열
let tup1:[number,number] = [1,2];

let tup2:[number,string,boolean] = [1, "2", false];

// js 에선 배열로 컴파일되기 때문에 push나 pop할 때 에러가 안 뜨므로 주의

const users: [string, number][] = [
  ["서성원",1],
  ["성원",2],
  ["원",3],
  // [5,"성원"] -> 튜플 타입과 맞지 않아 바로 에러 생성
];

