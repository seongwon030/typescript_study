/**
 * Partial<T>
 * -> 부분적인, 일부분의
 * -> 특정 객체 타입의 모든 프로퍼티를 선택적 프로퍼티로 바꿔주는 타입
 */

interface Post {
  title: string;
  tags: string[];
  content: string;
  thumbnailURL?: string;
}

/**
 * Partial 직접 구현
 */
type Partial<T> = {
  [key in keyof T]?: T[key];
};
// keyof : 특정 객체 타입으로부터 모든 key를 union 타입으로 추출
// key in keyof T : 왼쪽의 key가 오른쪽의 union 타입에 하나씩 맵핑된다
// 결론 : 타입 변수 T에 들어온 객체 타입의 키를 모두 갖게 된다

// 인덱스드 액세스 타입 : 특정 객체나 배열로부터 특정 프로퍼티 타입을 추출하는 타입
// 타입변수 T에 들어온 객체타입으로부터 현재 "key"에 해당하는 프로퍼티의 value타입을 추출

// 타입 변수로 전달한 Post 타입의 모든 프로퍼티를 선택적 프로퍼티로 만든다.
const draft: Partial<Post> = {
  title: "제목 나중에 짓자",
  content: "초안...",
};

type Required<T> = {
  [key in keyof T]-?: T[key];
};

/**
 * Required<T>
 * -> 필수의, 필수적인
 * -> 특정 객체 타입의 모든 프로퍼티를 필수 프로퍼티로 바꿔주는 타입
 */

const withThumbnailPost: Required<Post> = {
  title: "한입 타스 후기",
  tags: ["ts"],
  content: "",
  thumbnailURL: "https://...",
};

/**
 * Readonly<T?
 * -> 읽기전용, 수정불가
 * -> 특정 객체 타입에서 모든 프로퍼티를 읽기 전용 프로퍼티로 만들어주는 타입
 */

type Readonly<T> = {
  readonly [key in keyof T]: T[key];
};

const readOnlyPost: Readonly<Post> = {
  title: "보호된 게시글 입니다",
  tags: [],
  content: "",
};

readOnlyPost.content = ""; // 수정안됨
