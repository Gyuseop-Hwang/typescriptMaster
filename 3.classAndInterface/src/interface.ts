// type AddFn = (a:number, b:number) => number;

interface AddFn {
  (a: number, b: number): number;
}

let add: AddFn;

interface Named {
  readonly name: string;
  outputName?: string
}

interface Greetable extends Named {

  greet(phrase: string): void
}

class Person implements Greetable {
  name: string;
  age = 30;
  constructor(n: string) {
    this.name = n;
  }

  greet(phrase: string) {

  }
}

let user1: Greetable;

user1 = new Person('hwang')



// user1 = {
//   name: 'Hwang',
//   age: 30,
//   greet(phrase: string) {
//     console.log(phrase + " " + this.name)
//   }
// }


