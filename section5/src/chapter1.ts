/**
 * 인터페이스 확장
 */

interface Animal {
  name: string;
  age: number;
}

interface Dog extends Animal {
  // 상속받는 인터페이스에서 동일한 프로퍼티 타입을 다시 정의할 수 있다.
  // 다시 정의할 타입은 원본 타입의 서브타입이어야 허용된다.
  isBark: boolean;
}

const dog: Dog = {
  name: "",
  age: 1,
  isBark: true,
};

interface Cat extends Animal {
  isScratch: boolean;
}

interface Chicken extends Animal {
  isFly: boolean;
}

interface DogCat extends Dog, Cat {}

// 다중 확장도 가능
const dogCat: DogCat = {
  name: "",
  age: 0,
  isBark: true,
  isScratch: true,
};
