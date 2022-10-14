let userInput: unknown;

let username: string;

userInput = 5;
userInput = 'Max';

if (typeof userInput === 'string') {
  username = userInput;
}

function generateError(message: string, code: number): never {
  throw { message, errorCode: code }
}

const result = generateError('An error occured', 500)

console.log(result)