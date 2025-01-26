/**
 * Pick<T, K>
 * -> 뽑다, 고르다
 * -> 객체 타입으로부터 특정 프로퍼티만 골라내는 타입
 */

interface Post {
  title: string;
  tags: string[];
  content: string;
  thumbnailURL?: string;
}

// in 연산자 우측에는 key가 무엇이 있는지 표현하기 위해서 스트링 리터럴로 만든 유니온 타입이 들어올 수 있다
// 타입 변수 K에 아무런 제약이 없다면 함수,객체타입,never 타입 모두 들어갈 수 있다.

// K extends keyof T
// 타입변수 K에 T로 들어오는 객체타입의 key값을 추출한 유니온 타입의 서브타입만 들어올 수 있다.
type Pick<T, K extends keyof T> = {
  // K extends 'title' | 'tags' | 'content' | 'thumbnailURL'
  // 'title' | 'content' extends 'title' | 'tags' | 'content' | 'thumbnailURL'
  [key in K]: T[key];
};

// number일 경우 오류
const legacyPost: Pick<Post, "title" | "content"> = {
  title: "옛날 글",
  content: "옛날 컨텐츠",
};

/**
 * Omit<T, K>
 * -> 생략하다, 빼다
 * -> 객체 타입으로부터 특정 프로퍼티를 제거하는 타입
 */

type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
// T = Post, K = 'title'
// Pick<Post, Exclude<keyof Post, 'title'>
// Pick<Post, Exclude<"title" | "content" | "tags" | "thumbnailURL", "title">>
// Pick<Post, "content" | "tags" | "thumbnailURL">

const noTitlePost: Omit<Post, "title"> = {
  content: "",
  tags: [],
  thumbnailURL: "",
};

/**
 * Record<K, V>
 */

type Record<K extends keyof any, V> = {
  [key in K]: V;
};

// 첫 번째 타입변수 : 객체 프로퍼티 키를 유니온으로 받는다
// 두 번째 타입변수 : key들의 value타입
type Thumbnail = Record<
  "large" | "medium" | "small",
  { url: string; size: number }
>;
