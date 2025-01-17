/**
 * 조건부 타입
 */

type A = number extends string ? string : number;

type ObjA = {
  a: number;
};

type ObjB = {
  a: number;
  b: number;
};

type B = ObjB extends ObjA ? number : string;
// B는 A를 확장하기 떄문에 A가 super type이 된다. 즉, 조건은 참이라 number가 된다

/**
 * 제네릭과 조건부 타입
 * T가 number면 string으로 변환해보기
 */

type StringNumberSwitch<T> = T extends number ? string : number;
// 타입변수 T에 number가 들어오면 참이 되고 StringNumberSwitch는 string이 된다
// string이 들어오면 StringNumberSwitch는 number가 된다

let varA: StringNumberSwitch<number>;
let varB: StringNumberSwitch<string>;

function removeSpaces<T>(text: T): T extends string ? string : undefined;

function removeSpaces<T>(text: any) {
  if (typeof text === "string") {
    return text.replaceAll(" ", "");
  } else {
    return undefined;
  }
}

// 매개변수로 string을 전달하면 당연하게도 리턴값이 string이 될 것이다.
// 하지만 undefined 을 추가함으로써 타입단언 또는 선택적 프로퍼티를 사용해야 하는 불편함이 생긴다.

// 해결방법 : 타입변수 T로 조건부 타입을 설정하면 리턴값의 타입을 추론한다.
// 이때도 오류가 발생하는데, 함수 내부에서는 조건부 타입의 결과를 알 수 없기 때문이다.
// 1. any로 타입단언을 한다
// 2. 오버로드 시그니처를 사용한다.
let result = removeSpaces("hi im seongwon");

result.toUpperCase();

let result2 = removeSpaces(undefined);
