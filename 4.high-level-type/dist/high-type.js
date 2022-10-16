"use strict";
var _a;
const e1 = {
    name: 'Max',
    privileges: ['create-server'],
    startDate: new Date()
};
function add(a, b) {
    if (typeof a === 'string' || typeof b === 'string') {
        return a.toString() + b.toString();
    }
    return a + b;
}
const result = add('Max', 'Schwarz');
// typescript는 result가 아직도 'number' 혹은 'string'이라고 생각한다.
// 그래서 split(' ') 문자열 메소드가 항상 작동하리라는 보장이 없다고 생각한다.
// as string 타입 형변환 해서 해결 가능하긴 하다. 하지만 함수 오버로딩을 통해서 해결하는게 좋다.
result.split(' ');
//2. 객체 key값 in 사용
function printEmployeeInformation(emp) {
    console.log('Name: ' + emp.name);
    // if(typeof emp === 'Employee')
    if ('privileges' in emp) {
        console.log('Privileges: ' + emp.privileges);
    }
    if ('startDate' in emp) {
        console.log('Start Date: ' + emp.startDate);
    }
}
printEmployeeInformation({ name: 'Manu', startDate: new Date() });
//3. class instanceOf 사용
class Car {
    drive() {
        console.log('Driving...');
    }
}
class Truck {
    drive() {
        console.log('Driving a truck...');
    }
    loadCargo(amount) {
        console.log('Loading Cargo ... ' + amount);
    }
}
const v1 = new Car();
const v2 = new Truck();
function useVehicle(vehicle) {
    vehicle.drive();
    // if ('loadCargo' in vehicle) {
    //   vehicle.loadCargo(1)
    // }
    if (vehicle instanceof Truck) {
        vehicle.loadCargo(1);
    }
}
useVehicle(v1);
useVehicle(v2);
function moveAnimal(animal) {
    // console.log('Moving with speed: ' + animal.flyingSpeed)
    // console.log('Moving with speed: ' + animal.runningSpeed)
    // if ('flyingSpeed' in animal) {
    //   console.log('Moving with speed: ' + animal.flyingSpeed)
    // }
    let speed;
    switch (animal.type) {
        case 'bird':
            speed = animal.flyingSpeed;
            break;
        case 'horse':
            speed = animal.runningSpeed;
    }
    console.log('Moving at speed: ' + speed);
}
moveAnimal({ type: 'bird', flyingSpeed: 5 });
// type casting 타입 형변환(javascript는 모름)
// const userInputElement = <HTMLInputElement>document.getElementById('user-input')!
// userInputElement.value = 'Hi There';
// const userInputElement = document.getElementById('user-input')! as HTMLInputElement
// userInputElement.value = 'Hi There';
const userInputElement = document.getElementById('user-input');
// ! null처리 대안
if (userInputElement) {
    userInputElement.value = 'Hi There';
}
const errorBag = {
    email: 'Not a valid email',
    username: 'Must start with a capital character'
};
const fetchedUserData = {
    id: 'u1',
    name: 'Max',
    job: { title: 'CEO', description: 'My own company' }
};
// console.log(fetchedUserData.job.title)
// http 요청이라 생각하면 job이 받아왔을지, 제대로 data화됬을 지 장담할 수 없다.
console.log((_a = fetchedUserData === null || fetchedUserData === void 0 ? void 0 : fetchedUserData.job) === null || _a === void 0 ? void 0 : _a.title);
// 자바스크립트로는 데이터 잘 받아졌는지를 확인하고 작업하는 이 방법을 자주 쓴다
// 런타임 에러를 피한다.
const userInput = 0;
const storedData = userInput !== null && userInput !== void 0 ? userInput : 'DEFAULT';
console.log(storedData);
