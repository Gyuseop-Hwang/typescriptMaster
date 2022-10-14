// const person: {
//   name: string,
//   age: number
// } = {

// const ADMIN = 0;
// const READ_ONLY = 1;
// const AUTHOR = 2;

enum Role {
  ADMIN = 1,
  READ_ONLY,
  AUTHOR = "author"
}

const person = {
  name: 'Maxmilian',
  age: 30,
  hobbies: ['Sports', 'Cooking'],
  role: Role.ADMIN,
}

if (person.role === Role.AUTHOR) {
  console.log('is admin')
}


// person.role.push('admin'); // push는 예외적으로 error를 잡지 못 한다.
// person.role[1] = 10;

// 순서, 길이가(짧은) 명확하게 알 수 있다면 tuple을 쓰는게 좋다.

// let favoriteActivities : string[];
let favoriteActivities: string[];
favoriteActivities = ['Sports']

console.log(person.name);

for (const hobby of person.hobbies) {
  console.log(hobby);
}

// any는 typesript를 쓰는 의미를 희석시킨다.any type들은 컴파일러 시 type을 확인하지 않음.
