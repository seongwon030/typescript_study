/**
 * infer
 * inference -> 추론하다
 */

type FuncA = () => string;
type FuncB = () => number;

type ReturnType<T> = T extends () => infer R ? R : never;

// Func가 스트링타입이므로 A는 string이 된다
type A = ReturnType<FuncA>;

// number와 string 은 서로소 집합이므로 never이 된다
type B = ReturnType<FuncB>;

// 조건부 타입에서 함수의 반환값타입이 string인지만 검사한다
// 이때 infer를 쓴다

// R 타입은 () => string 을 참으로 만드는 타입을 추론하도록 동작한다
// 즉, R이 string으로 추론된다

type C = ReturnType<number>;
// number타입이 () => 의 서브타입이 될 수 있는 R 타입을 추론하라 ?
// any타입이어도 불가능. 추론을 할 수 없어서 never로 반환.

/**
 * 예제
 */

type PromiseUnpack<T> = T extends Promise<infer R> ? R : never;
// 1. T는 프로미스 타입이어야 한다.
// 2. 프로미스 타입의 결과값 타입을 반환해야 한다.

type PromiseA = PromiseUnpack<Promise<number>>;
//  Promise<number>가 Promise<infer R>의 서브타입이 되는 R타입을 추론하라 => number

type PromiseB = PromiseUnpack<Promise<string>>;
