/**
 * 사용자 정의 타입가드
 */

type Dog = {
  name: string;
  isBark: boolean;
};

type Cat = {
  name: string;
  isScratch: boolean;
};

type Animal = Dog | Cat;

function isDog(animal: Animal): animal is Dog {
  return (animal as Dog).isBark !== undefined;
}

function isCat(animal: Animal): animal is Cat {
  return (animal as Cat).isScratch !== undefined;
}

// 프로퍼티 기준으로 타입 좁히기는 안 좋다
function warning(animal: Animal) {
  if (isDog(animal)) {
    // 강아지
  } else if ("isScratch" in animal) {
    // 고양이
  }
}
