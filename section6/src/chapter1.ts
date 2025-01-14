/**
 * 타입스크립트와 클래스
 */

const employee = {
  name: "성원",
  age: 25,
  position: "developer",
  work() {
    console.log("일함");
  },
};

class Employee {
  name: string;
  age: number;
  position: string;

  constructor(name: string, age: number, position: string) {
    this.name = name;
    this.age = age;
    this.position = position;
  }

  work() {
    console.log("일함");
  }
}

class ExecutiveOfficer extends Employee {
  // 필드
  officeNumber: number;

  // 생성자
  constructor(
    name: string,
    age: number,
    position: string,
    officeNumber: number
  ) {
    // 타입스크립트에서 super 생략하면 오류가 난다
    // 자바스크립트에선 오류가 나지 않음
    super(name, age, position);
    this.officeNumber = officeNumber;
  }
}

// 타입스크립트에서 클래스는 타입으로도 활용가능
const employeeB = new Employee("성원", 25, "개발자");
console.log(employeeB);

const employeeC: Employee = {
  name: "",
  age: 0,
  position: "",
  work() {},
};
