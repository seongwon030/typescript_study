// 타입 별칭

type User = {
  id: number;
  name: string;
  nickname: string;
  birth: string;
  bio: string;
  location: string;
};


let user: User = {
  id: 1,
  name: '서성원',
  nickname: 'seongwon',
  birth: '2001.03.26',
  bio: '안녕하세요',
  location: "부산시"
};

let use2: User = {
  id: 1,
  name: '서성원',
  nickname: 'seongwon',
  birth: '2001.03.26',
  bio: '안녕하세요',
  location: "부산시"
};

// 인덱스 시그니처
type countryCodes = {
  [key : string] : string;
  // key가 string이고 value도 string 
};

let country: countryCodes = {
  Korea: 'ko',
  UnitedState: 'us',
  UnitedKingdom: 'uk',
};

type countryNumberCodes = {
  [key: string] : number;
  // 이 규칙을 위반하지만 않으면 모든 객체를 허용
  // 객체가 없으면 규칙을 적용할 게 없기 떄문에 에러가 발생하지 않는다
  Korea: number; // 반드시 있어야 한다는 의미
}

let countryNumberCodes: countryNumberCodes = {
  Korea: 410,
};