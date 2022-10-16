"use strict";
// autobind decorator
function autobind(target, methodName, descriptor) {
    const originalMethod = descriptor.value;
    const adjDescriptor = {
        configurable: true,
        get() {
            const boundFn = originalMethod.bind(this);
            return boundFn;
        }
    };
    return adjDescriptor;
}
// function validate(obj: Partial<Validation>) {
//   const length = obj.value?.trim().length;
//   if (
//     (obj.isRequired && length === 0) ||
//     (obj.minLength && length != null && obj.minLength > length) ||
//     (obj.maxLength && length != null && obj.maxLength < length) ||
//     (obj.min && obj.min > parseInt(obj.value)) ||
//     (obj.max && obj.max < parseInt(obj.value))
//   ) return true;
//   return false;
// }
function validate(obj) {
    const length = obj.value.trim().length;
    if ((obj.isRequired && length === 0) ||
        (obj.minLength && obj.minLength > length) ||
        (obj.maxLength && obj.maxLength < length) ||
        (obj.min && obj.min > parseInt(obj.value)) ||
        (obj.max && obj.max < parseInt(obj.value)))
        return false;
    return true;
}
// interface Validatable {
//   value: string | number,
//   isRequired?: boolean,
//   minLength?: number,
//   maxLength?: number,
//   min?: number,
//   max?: number,
// }
// function validate(validatableInput: Validatable) {
//   let isValid = true;
//   if (validatableInput.isRequired) {
//     isValid = isValid && validatableInput.value.toString().trim().length !== 0
//   }
//   if (validatableInput.minLength != null && typeof validatableInput.value === 'string') {
//     isValid = isValid && validatableInput.minLength <= validatableInput.value.trim().length
//   }
//   if (validatableInput.maxLength != null && typeof validatableInput.value === 'string') {
//     isValid = isValid && validatableInput.maxLength >= validatableInput.value.trim().length
//   }
//   if (validatableInput.min != null && typeof validatableInput.value === 'number') {
//     isValid = isValid && validatableInput.min <= validatableInput.value;
//   }
//   if (validatableInput.max != null && typeof validatableInput.value === 'number') {
//     isValid = isValid && validatableInput.max >= validatableInput.value;
//   }
//   return isValid;
// }
// ProejctList class
class ProjectList {
    constructor(type) {
        this.type = type;
        this.templateElement = document.getElementById('project-list');
        this.hostElement = document.getElementById('app');
        const importedNode = document.importNode(this.templateElement.content, true);
        this.element = importedNode.firstElementChild;
        this.element.id = `${this.type}-projects`;
        this.attach();
        this.renderContent();
    }
    renderContent() {
        const listId = `${this.type}-projects-list`;
        this.element.querySelector('ul').id = listId;
        this.element.querySelector('h2').textContent = this.type.toUpperCase() + 'PROJECTS';
    }
    attach() {
        this.hostElement.insertAdjacentElement('beforeend', this.element);
    }
}
// ProjectInput class
class ProjectInput {
    constructor() {
        // 타입 캐스팅
        this.templateElement = document.getElementById('project-input');
        this.hostElement = document.getElementById('app');
        const importedNode = document.importNode(this.templateElement.content, true);
        this.element = importedNode.firstElementChild;
        this.element.id = 'user-input';
        this.titleInputElement = this.element.querySelector('#title');
        this.descriptionInputElement = this.element.querySelector('#description');
        this.peopleInputElement = this.element.querySelector('#people');
        this.configure();
        this.attach();
    }
    gatherUserInput() {
        const enteredTitle = this.titleInputElement.value;
        const enteredDescription = this.descriptionInputElement.value;
        const enteredPeople = this.peopleInputElement.value;
        const titleValidatable = {
            value: enteredTitle,
            isRequired: true,
        };
        const descriptionValidatable = {
            value: enteredDescription,
            isRequired: true,
            minLength: 5,
        };
        const peopleValidatable = {
            value: enteredPeople,
            isRequired: true,
            min: 1,
            max: 5
        };
        if (
        // enteredTitle.trim().length === 0 ||
        // enteredDescription.trim().length === 0 ||
        // enteredPeople.trim().length === 0) {
        // alert('Invalid input, please try again')
        // return;
        // validate({ value: enteredTitle, isRequired: true, minLength: 5, maxLength: 10 }) ||
        // validate({ value: enteredDescription, isRequired: true, minLength: 10, maxLength: 40 }) ||
        // validate({ value: enteredPeople, isRequired: true, min: 1, max: 10 })) {
        !validate(titleValidatable) ||
            !validate(descriptionValidatable) ||
            !validate(peopleValidatable)) {
            alert('Invalid input, please try again');
        }
        else {
            return [enteredTitle, enteredDescription, +enteredPeople];
        }
    }
    clearInput() {
        this.titleInputElement.value = "";
        this.descriptionInputElement.value = "";
        this.peopleInputElement.value = "";
    }
    // @autobind
    submitHandler(evt) {
        evt.preventDefault();
        const userInput = this.gatherUserInput();
        if (Array.isArray(userInput)) {
            const [title, desc, people] = userInput;
            console.log(title, desc, people);
            this.clearInput();
        }
    }
    configure() {
        this.element.addEventListener('submit', this.submitHandler.bind(this));
        // this.element.addEventListener('submit', this.submitHandler)
    }
    attach() {
        this.hostElement.insertAdjacentElement('afterbegin', this.element);
    }
}
const prjInput = new ProjectInput();
const activePrjList = new ProjectList('active');
const finishedPrjList = new ProjectList('finished');
