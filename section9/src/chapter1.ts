/**
 * 분산적인 조건부 타입
 */

type StringNumberSwitch<T> = T extends number ? string : number;

let a: StringNumberSwitch<number>;
let b: StringNumberSwitch<string>;

// 조건부 타입에 유니온을 할당하면 분산적 조건부 타입으로 업그레이드 된다
let c: StringNumberSwitch<number | string>;

// StringNumberSwitch<number> => string
// StringNumberSwitch<string> => number
// string | number가 됨

let d: StringNumberSwitch<boolean | number | string>;

// 1단계
// StringNumberSwitch<boolean>
// StringNumberSwitch<number>
// StringNumberSwitch<string>

// 2단계
// number
// string
// number

// 결과
// number | string

/**
 * 실용적 예제
 */

type Exclude<T, U> = T extends U ? never : T;
// T가 U의 서브 타입이라면 never, 아니라면 T

type A = Exclude<number | string | boolean, string>;
// 1단계
// Exclude<number, string>
// Exclude<string, string>
// Exclude<boolean, string>

// 2단계
// number
// never
// boolean

// 결과 : number | never | boolean => number | boolean
// 유니온타입에 never가 포함되어 있으면 never는 사라진다
// never는 공집합이고 합집합과 공집합을 합집합하면 합집합이 된다

type Extract<T, U> = T extends U ? T : never;

type B = Extract<number | string | boolean, string>;
// 1단계
// Extract<number, string>
// Extract<string, string>
// Extract<boolean, string>

// 2단계
// never
// string
// never

// 결과 : string
