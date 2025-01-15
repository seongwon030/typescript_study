/**
 * 제네릭 클래스
 */

class List<T> {
  constructor(private list: T[]) {}

  push(data: T) {
    this.list.push(data);
  }

  pop() {
    return this.list.pop();
  }

  print() {
    console.log(this.list);
  }
}

const numberList = new List([1, 2, 3]);
// 매개변수의 list 타입이 numberList가 된다
// data도 number로 추론된다
numberList.pop();
numberList.push(4);
numberList.print();

const stringList = new List(["1", "2"]);
stringList.push("hello");

// 제네릭 클래스는 인퍼페이스와 타입과 다르게 매개변수로 타입을 추론하기 떄문에
// 타입을 명시해주지 않아도 된다
