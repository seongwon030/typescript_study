/**
 * 맵드 타입
 */

interface User {
  id: number;
  name: string;
  age: number;
}

type BooleanUser = {
  [key in keyof User]: boolean;
};

// 앞 부분 : 객체의 프로퍼티 key 가 무엇이 될 수 있는가
// 뒷 부분 : 프로퍼티의 key가 어떤 value type을 가질 것인가.
// 이렇게 정의한 객체 타입을 무조건 id, name, age 프로퍼티를 갖게 된다
// id : user['id'] => number
// name: user['name']
// age: user['age']

// key가 끝나는 지점에 ? 를 붙이면 맵드 타입이 정의하는 모든 프로퍼티가 선택적 프로퍼티가 된다
type PartialUser = {
  [key in "id" | "name" | "age"]?: User[key];
};

type ReadOnlyUser = {
  readonly [key in keyof User]: User[key];
};

// 한 명의 유저 정보를 불러오는 기능
function fetchUser(): ReadOnlyUser {
  return {
    id: 1,
    name: "성원",
    age: 25,
  };
}

// 한 명의 유저 정보를 수정하는 기능
function updateUser(user: User) {
  // 수정하는 기능
}

// age만 바꾸고 싶을때 새로운 인터페이스를 만들어 선택적 프로퍼티로 바꾸면 수정을 하지 않는 프로퍼티를 작성할 필요 없다
// 하지만 수정하는 기능만을 위해 거의 똑같이 생긴 인터페이스를 또 정의해야 하는 문제가 생긴다
// 이떄 mapped 타입을 사용한다. 인터페이스에서는 사용할 수 없다.
updateUser({
  id: 1,
  name: "성원",
  age: 25,
});
