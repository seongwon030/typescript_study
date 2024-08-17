// object
let user: { // 객체 리터럴 타입,구조적 타입 시스템 -> propery based type sys
  id?: number;  // 선택적 프로퍼티 (옵셔널)
  name: string; 
} = {
  id: 1,
  name: "서성원",
};

user.id;

let dog: {
  name: string;
  color: string;
} = {
  name: "돌돌이",
  color: "brown",
};

user = {
  name: "홍길동",
};


let config: {
  readonly apiKey: string; // 읽기전용 프로퍼티
} = {
  apiKey: "MY API KEY",
};

config.apiKey = "hacked";
