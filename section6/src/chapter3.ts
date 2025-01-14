/**
 * 인터페이스와 클래스
 */

interface CharacterInterface {
  // 인터페이스에 정의하는 필드는 무조건 public
  name: string;
  moveSpeed: number;
  move(): void;
}

// Character 클래스는 CharacterInterface를 구현한다
// => 인터페이스는 클래스의 설계도를 의미한다
class Character implements CharacterInterface {
  constructor(
    public name: string,
    public moveSpeed: number,
    private extra: string // private 필드 필요하면 따로 정의해줘야 한다
  ) {
    this.name = name;
    this.moveSpeed = moveSpeed;
  }

  move(): void {
    console.log(`${this.moveSpeed} 속도로 이동`);
  }
}
