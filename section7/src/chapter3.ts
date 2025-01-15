/**
 * 제너릭 인터페이스
 */

// <K,V>
// = 타입 파라미터
// = 제네릭 타입 변수
// = 제네릭 타입 파라미터
interface KeyPair<K, V> {
  key: K;
  value: V;
}

// 제네릭 인터페이스는 제네릭 함수와 달리 타입으로 정의할 때 반드시 타입변수에 타입을 할당해주어야 한다
let keyPair: KeyPair<string, number> = {
  key: "key",
  value: 0,
};

let keyPair2: KeyPair<boolean, string[]> = {
  key: true,
  value: ["1"],
};

/**
 * 인덱스 시그니처
 * 규칙만 만족하면 유연한 객체타입을 만들 수 있다
 */

interface NumberMap {
  [key: string]: number;
}

let numberMap1: NumberMap = {
  key: -1234,
  key2: 22,
};

// 제네릭 타입 + 인덱스 시그니처 => 하나의 타입으로 다양한 객체를 표현할 수 있다
interface Map<V> {
  [key: string]: V;
}

let stringMap: Map<string> = {
  key: "value",
};

let booleanMap: Map<boolean> = {
  key: true,
};

/**
 * 제네릭 타입 별칭
 */

type Map2<V> = {
  [key: string]: V;
};

// 제네릭 타입도 제네릭 인터페이스처럼 직접 타입변수에 타입을 할당해야 한다
let string2: Map2<string> = {
  key: "hello",
};

/**
 * 제네릭 인터페이스 활용예시
 * -> 유저 관리 프로그램
 * -> 유저 구분 : 학생 유저 / 개발자 유저
 */

interface Student {
  type: "student";
  school: string;
}

interface Developer {
  type: "developer";
  skill: string;
}

interface User<T> {
  name: string;
  profile: T;
}

// 매개변수로 user를 받는 이유
// User 인터페이스 내에서 학생 유저를 특정할 수 있는 타입을 만들어 놓지 않았음
// 함수 내부에서 조건문으로 타입좁히기

function goToSchool(user: User<Student>) {
  // 함수를 새로 만들때마다 타입좁히기를 하는 것은 비효율적이다
  // if (user.profile.type !== "student") {
  //   console.log("잘 못 오셨습니다");
  //   return;
  // }

  const school = user.profile.school;
  console.log(`${school}로 등교 완료`);
}

const developerUser: User<Developer> = {
  name: "서성원",
  profile: {
    type: "developer",
    skill: "Typescript",
  },
};

const studentUser: User<Student> = {
  name: "홍길동",
  profile: {
    type: "student",
    school: "부경대학교",
  },
};
