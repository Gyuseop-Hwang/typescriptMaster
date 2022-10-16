// const names: Array<string> = []; // string[]

// names[0].split(" ");

const promise: Promise<string> = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('This is done')
  }, 2000)
});

promise.then(data => {
  data.split(" ")
})

function merge<T extends object, U extends object>(objA: T, objB: U) {
  return Object.assign(objA, objB);
  // return { ...objA, ...objB };
}

const mergedObj = merge({ name: 'Max' }, { age: 30 });

console.log(mergedObj.name);
console.log(mergedObj)
// console.log(mergedObj.age);

interface Lengthy {
  length: number;
}

function countAndDescribe<T extends Lengthy>(element: T): [T, string] {
  let descriptionText = 'Got no value.'
  if (element.length === 1) {
    descriptionText = 'Got 1 elements.'
  } else if (element.length > 1) {
    descriptionText = 'Got ' + element.length + ' elements'
  }
  return [element, descriptionText]
}

console.log(countAndDescribe('Hi there!'))
console.log(countAndDescribe(['test']))
// console.log(countAndDescribe(10))

function extractAndConvert<T extends object, U extends keyof T>(obj: T, key: U) {
  return obj[key];
}


// extractAndConvert({ name: 'test' }, 'age') // error
extractAndConvert({ name: 'test' }, 'name')

class DataStorage<T extends number | string | boolean> {

  private data: T[] = [];
  addItem(item: T) {
    this.data.push(item)
  }

  removeItem(item: T) {
    if (this.data.indexOf(item) === -1) {
      return;
    }
    this.data.splice(this.data.indexOf(item), 1) // -1
  }

  getItem() {
    return [...this.data];
  }


}

const textStorage = new DataStorage<string>()

textStorage.addItem('Max')
textStorage.addItem('Manu')
textStorage.removeItem('Max');
console.log(textStorage.getItem())

const numberStorage = new DataStorage<number>();

// const objStorage = new DataStorage<object>();

// const maxObj = { name: 'Max' }
// objStorage.addItem(maxObj)

// const manuObj = { name: 'Manu' }
// objStorage.addItem(manuObj)

// objStorage.removeItem(maxObj)
// console.log(objStorage.getItem())

// 제네릭 유틸리티 타입

interface CourseGoal {
  title: string;
  description: string;
  completeUntil: Date;
}

function createCourseGoal(title: string, description: string, date: Date): CourseGoal {
  return { title, description, completeUntil: date }
  // let courseGoal: Partial<CourseGoal> = {};

  // courseGoal.title = title;
  // courseGoal.description = description;
  // courseGoal.completeUntil = date;
  // return courseGoal as CourseGoal;
}

const names: Readonly<string[]> = ['Max', 'Sports'];

// names.push('Manu')