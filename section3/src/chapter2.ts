/**
 * Unknown 타입
 */

function unKnownExam() {
  let a : unknown = 1;
  let b : unknown = "hello";
  let c : unknown = true;
  let d : unknown = null;
  let e : unknown = undefined;

  let unKnownVar : unknown;

  // let num: number = unKnownVar; -> 다운 캐스팅이므로 안 됨
}

/**
 * Never 타입 -> 공집합
 */

function neverExam() {
  function neverFunc(): never { //  이 함수가 반환하는 값의 종류는 공집합이다 == 반환할 수 있는 값의 종류가 아무것도 없다
    while (true) {}
  }

  let num: number = neverFunc();
  let str: string = neverFunc();
  let bool: boolean = neverFunc();
  // never 타입은 모든 타입의 서브 타입이므로 모든 타입으로 업캐스팅 된다
  // 반대로는 다운 캐스팅이므로 불가능
}

/**
 * void
 */

function voidExam(){
  function voidFunc(){
    console.log("hi");
  }

  // undefined는 void의 super type이므로 업캐스팅 가능
  let voidVar: void = undefined;
}

/**
 * any
 */

function anyExam(){
  let unknownVar: unknown;
  let anyVar: any;
  let undefinedVar: undefined;
  let neverVar: never;

  anyVar = unknownVar; // 다운캐스팅

  undefinedVar = anyVar; // 업캐스팅

  // neverVar = anyVar;  never는 공집합이므로 다운 캐스팅 불가
}