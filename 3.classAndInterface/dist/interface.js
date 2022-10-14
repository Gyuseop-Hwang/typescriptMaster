"use strict";
// type AddFn = (a:number, b:number) => number;
var add;
var Person = /** @class */ (function () {
    function Person(n) {
        this.age = 30;
        this.name = n;
    }
    Person.prototype.greet = function (phrase) {
    };
    return Person;
}());
var user1;
user1 = new Person('hwang');
// user1 = {
//   name: 'Hwang',
//   age: 30,
//   greet(phrase: string) {
//     console.log(phrase + " " + this.name)
//   }
// }
