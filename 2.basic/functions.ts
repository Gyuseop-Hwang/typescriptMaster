

// return type을 명시해주기보다는 typescript가 type infer로 추론하도록 하는 것이
// return 값을 좀 더 유연하게 사용할 수 있다. 
function add(n1: number, n2: number) {
  return n1 + n2;
}



// type void -> return 생략(return을 안 하는 것은 아님. 함수가 종료되는 아무것도 반환하지 않는 return undefined가 은연중에 존재)
//           -> return;도 void로 return type 처리 가능
// type undefined -> 명시적으로 return;이나 return undefined;를 해주는 것은 조금 다름 -> return type이 undefined가 됨.


console.log(printResult(add(5, 12)))

function printResult(num: number) {
  console.log('Result : ' + num);
  return;

}

function addAndHandler(n1: number, n2: number, cb: (num: number) => void) {
  // callback에 아무것도 반환하지 말라고 요구하는 것이 아니라,
  // 반환은 가능하지만 반환될 수 있는 값을 이 본 함수 내에서 사용하지말라고 요구함.
  const result = n1 + n2;
  const a = cb(result) // 이렇게 사용하지 말라고 하는 것이다. 사용은 된다.
  console.log(a)
}

// let combinedValues: Function;
let combinedValues: (a: number, b: number) => number;

combinedValues = add;

// combinedValues = printResult;



// combinedValues = 5;


console.log(combinedValues(8, 8))

addAndHandler(10, 20, (result) => {
  console.log(result)
  return result; // callback의 return type이 void인데 return이 된다...
})