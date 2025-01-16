/**
 * 인덱스드 액세스 타입
 * - 특정 프로퍼티의 타입을 추출하는 타입
 * - 복잡하고 큰 타입으로부터 잘게 잘라 필요한 만큼 타입을 추출할 수 있는 방법
 */

// 만약 author 객체를 매개변수로 받는 함수가 여러 개가 된다면?
// 프로퍼티 추가할 때마다 매개변수에도 추가해야하는 불편함이 생긴다. 이때 indexed access type을 사용한다.

type PostList = {
  title: string;
  content: string;
  author: {
    id: number;
    name: string;
    age: number;
  };
}[];

// 인덱스 액세스 타입 안 썼을 때
function printAuthorInfo(author: { id: number; name: string; age: number }) {
  console.log(`${author.name}-${author.id}`);
}

// 인덱스 액세스 타입 사용했을 때
// -> 기존 프로퍼티의 타입이 추가 또는 변경된다 해도 반영을 해 준다
// 여기서 쓰인 스트링 리터럴 타입은 특별히 인덱스라고 한다

// 주의할 점
// 1. 인덱스로 들어가는 문자열은 값이 아닌 타입
// 2. 존재하지 않는 프로퍼티라면 오류가 발생
// 3. id만 가져오고 싶다면  Post["author"]["id"]
function printAuthorInfo2(author: PostList[number]["author"]) {
  console.log(`${author.name}-${author.id}`);
}

// indexed access type을 사용할 때 대괄호 안에 number 타입을 넣어주면
// 배열 타입으로부터 하나의 요소의 타입만 가져온다
// number대신 숫자를 넣어도 된다
const post: PostList[number] = {
  title: "게시글 제목",
  content: "게시글 본문",
  author: {
    id: 1,
    name: "성원",
    age: 27,
  },
};

type Tup = [number, string, boolean];

type Tup0 = Tup[0];

type Tup1 = Tup[1];

type Tup2 = Tup[2];
type Tup3 = Tup[3]; // 튜플 크기 초과

type TupNum = Tup[number]; // 타입의 최적의 공통 타입
