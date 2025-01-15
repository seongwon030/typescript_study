/**
 * 프로미스
 * resolve => 결과값 타입을 지정할 수 있다.
 * reject => 불가능. 타입좁히기로 해야 한다.
 * 기본적으로 프로미스는 비동기 작업의 결과값이 unknown이다
 */

const promise = new Promise<number>((resolve, reject) => {
  setTimeout(() => {
    // resolve(20);
    reject("~~때문에 실패");
  }, 3000);
});

promise.then((response) => {
  console.log(response * 10);
  // response 타입이 unknown으로 추론되고 있고, unknown은 연산이 불가능
  // resolve에 20을 전달했기 때문에 number 타입으로 추론되어야 하는거 아닌가? -> 비동기 작업의 결과값의 타입을 자동으로 추론하는 기능을 가지고 있지 않다
  // promise에 제네릭 타입을 설정한다
});

// catch 메서드를 사용할 때는 매개변수의 타입이 any로 들어온다
// 타입좁히기로 해야한다
promise.catch((err) => {
  if (typeof err === "string") {
    console.log(err);
  }
});

/**
 * 프로미스를 반환하는 함수의 타입을 정의
 */

interface Post {
  id: number;
  title: string;
  content: string;
}

// 함수의 반환값 타입을 직접 명시하는 것 추천 <- 협업할 때 바로 확인할 수 있다
function fetchPost(): Promise<Post> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({
        id: 1,
        title: "게시글 제목",
        content: "게시글 컨텐츠",
      });
    }, 3000);
  });
}

const postRequest = fetchPost();

postRequest.then((post) => {
  post.id;
});
