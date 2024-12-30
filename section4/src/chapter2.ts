/**
 * 함수 타입 호환성
 * 특정 함수 타입을 다른 함수 타입으로 취급해도 괜찮은가를 판단한다
 * 1. 반환값의 타입이 호환되는가?
 * 2. 매개변수의 타입이 호환되는가?
 */

import { dlopen } from "process";

// 기준1 : 반환값이 호환되는가?

type A = () => number;
type B = () => 10;

let a: A = () => 10; // number 타입
let b: B = () => 10; // number 리터럴 타입

a = b; // number 리터럴을 number로 취급한다 -> 업캐스팅
// b = a; // number를 number 리터럴로 취급한다 -> 다운캐스팅

// 기준2 : 매개변수가 호환되는가

// 2-1 : 매개변수의 개수가 같을 때
type C = (value: number) => void;
type D = (value: 10) => void;

let c: C = (value) => {};
let d: D = (value) => {};

// c = d; // number 리터럴을 number로 취급한다 -> 업캐스팅
d = c; // 반대로 다운캐스팅

type Animal = {
  name: string;
};

type Dog = {
  name: string;
  color: string;
};

let animalFunc = (animal: Animal) => {
  console.log(animal.name);
};

let dogFunc = (dog: Dog) => {
  console.log(dog.name);
  console.log(dog.color);
};

// animalFunc = dogFunc;
dogFunc = animalFunc;

let testFunc = (animal: Animal) => {
  console.log(animal.name);
  // console.log(animal.color);
};

let testFunc2 = (dog: Dog) => {
  console.log(dog.name);
};
// 다운캐스팅일 떄만 가능

// 2-2 : 매개변수의 개수가 다를 때

type Func1 = (a: number, b: number) => void;
type Func2 = (a: number) => void;

let func1: Func1 = (a, b) => {};
let func2: Func2 = (a) => {};

func1 = func2; // 할당하려는 타입의 매개변수 개수가 적어야 할당이 가능하다 (매개변수가 같을 때만)
// func2 = func1;
