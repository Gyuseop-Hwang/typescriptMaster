"use strict";
// const names: Array<string> = []; // string[]
// names[0].split(" ");
const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('This is done');
    }, 2000);
});
promise.then(data => {
    data.split(" ");
});
function merge(objA, objB) {
    return Object.assign(objA, objB);
    // return { ...objA, ...objB };
}
const mergedObj = merge({ name: 'Max' }, { age: 30 });
console.log(mergedObj.name);
console.log(mergedObj);
function countAndDescribe(element) {
    let descriptionText = 'Got no value.';
    if (element.length === 1) {
        descriptionText = 'Got 1 elements.';
    }
    else if (element.length > 1) {
        descriptionText = 'Got ' + element.length + ' elements';
    }
    return [element, descriptionText];
}
console.log(countAndDescribe('Hi there!'));
console.log(countAndDescribe(['test']));
// console.log(countAndDescribe(10))
function extractAndConvert(obj, key) {
    return obj[key];
}
// extractAndConvert({ name: 'test' }, 'age') // error
extractAndConvert({ name: 'test' }, 'name');
class DataStorage {
    constructor() {
        this.data = [];
    }
    addItem(item) {
        this.data.push(item);
    }
    removeItem(item) {
        if (this.data.indexOf(item) === -1) {
            return;
        }
        this.data.splice(this.data.indexOf(item), 1); // -1
    }
    getItem() {
        return [...this.data];
    }
}
const textStorage = new DataStorage();
textStorage.addItem('Max');
textStorage.addItem('Manu');
textStorage.removeItem('Max');
console.log(textStorage.getItem());
const numberStorage = new DataStorage();
function createCourseGoal(title, description, date) {
    return { title, description, completeUntil: date };
    // let courseGoal: Partial<CourseGoal> = {};
    // courseGoal.title = title;
    // courseGoal.description = description;
    // courseGoal.completeUntil = date;
    // return courseGoal as CourseGoal;
}
const names = ['Max', 'Sports'];
// names.push('Manu')
