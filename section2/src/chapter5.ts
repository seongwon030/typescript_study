// enum 타입
// 여러가지 값들에 각각 이름을 부여해 열거해두고 사용하는 타입

// ts 의 enum은 js 의 객체로 변환된다
enum Role {
  ADMIN = 0, // 숫자할당 제거해도 0번부터 자동으로 할당
  USER = 1,
  GUEST = 2,
}

enum Language {
  korean = "ko",
  english = "en",
}

const user1 = {
  name: '서성원',
  role: Role.ADMIN,
  language: Language.korean,
}

const user2 = {
  name: '홍길동',
  role: Role.USER,
}

const user3 = {
  name: '아무개',
  role: Role.GUEST,
}

