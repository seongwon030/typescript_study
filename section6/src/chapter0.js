/**
 * 클래스
 */

let studentA = {
  name: "서성원",
  grade: "A+",
  age: 25,
  study() {
    console.log("열심히 공부함");
  },
  introduce() {
    console.log("안녕하세요");
  },
};

class Student {
  // 필드
  name;
  grade;
  age;

  // 생성자 = 실제로 객체를 생성하는 역할
  constructor(name, grade, age) {
    this.name = name; // this는 클래스가 만들고 있는 객체
    this.grade = grade;
    this.age = age;
  }

  // 메서드
  study() {
    console.log("열심히 공부함");
  }
  // 클래스에서 메서드를 정의할 때 콤마를 찍지 않는다.
  // 객체에서는 콤마를 찍는다.
  introduce() {
    console.log(`${this.name} 입니다!`);
  }
}

// 클래스를 이용해서 만든 객체 = 인스턴스
let studentB = new Student("성원", "A+", 25); // 클래스 호출하여 생성 시에 new를 사용해야 한다

console.log(studentB);
studentB.study();
studentB.introduce();

class StudentDeveloper extends Student {
  // 필드
  favoriteSkill;

  // 생성자
  constructor(name, grade, age, favoriteSkill) {
    super(name, grade, age);
    // 부모 클래스 생성자가 호출됨
    this.favoriteSkill = favoriteSkill;
  }

  programming() {
    console.log(`${this.favoriteSkill}로 프로그래밍 함`);
  }
}

const studentDeveloper = new StudentDeveloper("성원", "B+", 25, "Typescript");
console.log(studentDeveloper);
studentDeveloper.programming();

// StudentDeveloper 클래스처럼 Student 클래스의 파생클래스들이 계속 생성되어야 할 수 있다

// 이때 상속을 사용한다 -> 인터페이스 확장과 비슷함
// 상속받은 클래스에서 중복되는 필드나 메서드는 지워야 한다
// 안 그러면 undefined이 된다
