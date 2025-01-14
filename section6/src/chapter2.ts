/**
 * 접근 제어자
 * access modifier
 * => public private protected
 */

class Employee {
  private name: string; // private으로 설정하면 클래스 외부에서 프로퍼티에 접근하는게 제한된다

  protected age: number;
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
    // 생성자에 접근제어자를 달면 자동으로 필드를 만들기 때문에 필드 정의는 새얅해도 괜찮다
    // 추가로 접근제어자가 붙어있는 매개변수들은 필드의 값도 초기화한다
    name: string,
    age: number,
    position: string,
    officeNumber: number
  ) {
    super(name, age, position);
    this.officeNumber = officeNumber;
  }

  // 메서드
  func() {
    this.name; // 파생클래스에서도 private 필드 접근 불가
    this.age; // 클래스 외부에선 접근할 수 없지만 내부 또는 파생클래스에서 접근 가능
  }
}

const employee = new Employee("서성원", 25, "developer");
// public또는 비워두면 자유롭게 인스턴스의 프로퍼티에 접근할 수 있다
employee.name = "성원";
employee.age = 25;
employee.position = "디자이너";

console.log(employee);
