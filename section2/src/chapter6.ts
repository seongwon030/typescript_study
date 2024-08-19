// any
// 특정 변수의 타입을 우리가 확실히 모를때

let anyVar:any = 10; // 어떤 타입이든지 변수에 할당 가능
anyVar = "hello";

anyVar = true;
anyVar = {};
anyVar = () => {};

anyVar.toUpperCase(); // 런타임에 오류가 발생
anyVar.toFixed();

let num: number = 10;
num = anyVar;

// unknown
let unknownVar: unknown;
unknownVar = "";
unknownVar = 1;
unknownVar = () => {};

// num = unknownVar; 타입이 지정된 변수에 unknown 변수를 할당할 수 없다
if(typeof unknownVar === "number") {
  num = unknownVar;
} // 타입 정제