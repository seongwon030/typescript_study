// void
// void -> 공허 -> 아무것도 없다
// 아무것도 없음을 의미하는 타입

import { error } from "console";

function fun(): string {
  return "hello";
}

// undefined 으로 정의하면 undefined이나 리턴에 아무것도 없어야 함
// null 일 떈 null 을 반환해야 하므로 아무것도 반환하지 않고 싶을 때 void 사용
function func2(): void { 
  console.log("hello");
}

let a: void;

a = undefined;
a = null; // "strictNullChecks": false 하면 오류 안 뜸

// never
// never -> 존재하지 않는
// 불가능한 타입

function func3(): never{
  while (true) {}
}
// 정상적으로 종료될 수 없어서 반환값이 있는게 모순일 때 

function func4(): never{
  throw new Error();   
}

// let a: never;

// a = 1;
// a = {};
// a = undefined;
// a = null;
// 그 어떤 값도 저장할 수 없는 타입이 never