/**
 * 타입 추론
 */


// 변수는 초기값을 기준으로 추론한다.
let a = 10;
let b = "hello";
let c = {
  id: 1,
  name: "서성원",
  profile: {
    nickname: "seong",
  },
  urls: ["sdadsad"],
};

let [one, two, three] = [1, 'hello', true];

// 함수는 반환값을 기준으로 추론한다.
function func(msg = "hello") {
  return "hello";
}

/**
 * any타입의 진화 
 */

let d; // 암묵적인 any 타입 -> 추천하지는 않는다
d = 10; // 숫자 할당 시 number로 추론
d.toFixed();

d = 'hello'; // 다른 타입 할당 시 해당 타입으로 바뀜
d.toUpperCase();

const num = 10; // number 리터럴 타입 
const str = "hello";

let arr = [1, "string"]; // union 타입으로 추론