function add(n1: number, n2: number, showResult: boolean, phrase: string) {
  // if (typeof n1 !== 'number' || typeof n2 !== 'number') {
  //   throw new Error('Incorrect Input')
  // }
  const result = n1 + n2;

  if (showResult) {
    console.log(phrase + result)
  } else {
    return result;
  }
}

// typescript type infer

// let으로 선언만 할 때, 초기화를 안 할 시 이 때야말로 type 지정 필요
let number1: number; // type 지정 안 하면 any로 들어감
number1 = 5;

// let number1 = 5 === let number1:number  : 즉, type infer로 이미 type이 정해짐
// 즉 let number1:number = 5; -> 불필요한 작업

const number2 = 2.8;
const printResult = true;
let resultPhrase = 'Result is: '
// resultPhrase = 0 -> 에러 발생

add(number1, number2, printResult, resultPhrase);
// console.log(result)

// 컴파일은 그대로 진행. 하지만 컴파일 결과가 나옴(에러 스택들) -> 개발 단계에서 에러를 잡아낼 수 있음