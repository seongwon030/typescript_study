/**
 * 기본 타입간의 호환성
 */

let num1: number = 10;
let num2: 10 = 10;

num1 = num2;

/**
 * 객체 타입간의 호환성
 * -> 어떤 객체타입을 다른 객체타입으로 취급해도 괜찮은가??
 */

type Animal = {
  name: string;
  color: string;
}

type Dog = {
  name: string;
  color: string;
  breed: string;
}

let animal : Animal = {
  name: "기린",
  color: "yellow"
};

let dog: Dog = {
  name: "돌돌이",
  color: "brown",
  breed: "진도",
};

animal = dog; // animal이 dog의 super type
// 추가 프로퍼티가 없는 타입이 super type이 된다

type Book = {
  name: string;
  price: number;
};

type ProgrammingBook = {
  name: string;
  price: number;
  skill: string;
};

let book: Book;
let ProgrammingBook: ProgrammingBook = {
  name: "한 입 크기로 잘라먹는 리액트",
  price: 33000,
  skill: "reactjs",
}

book = ProgrammingBook;
// ProgrammingBook = book

/**
 * 초과 프로퍼티 검사
 */

let book2 : Book = {
  name: "한 입 크기로 잘라먹는 리액트",
  price: 33000,
  // skill: "reactjs", -> 초과 프로퍼티
};

let book3 : Book = ProgrammingBook; // 객체 리터럴을 사용한 건 아니므로 초과 프로퍼티 검사는 하지 않는다


// 매개변수로 전달할 때도 초과 프로퍼티 검사를 한다
function func(book: Book) {}
func({
  name: "한 입 크기로 잘라먹는 리액트",
  price: 33000,
  // skill: "reactjs",
});
func(ProgrammingBook);