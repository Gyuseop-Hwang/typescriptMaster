// autobind decorator

function autobind(target: any, methodName: string, descriptor: PropertyDescriptor) {
  const originalMethod = descriptor.value
  const adjDescriptor: PropertyDescriptor = {
    configurable: true,
    get() {
      const boundFn = originalMethod.bind(this);
      return boundFn;
    }
  }
  return adjDescriptor;
}

interface Validatable {
  value: string,
  isRequired?: boolean,
  minLength?: number,
  maxLength?: number,
  min?: number,
  max?: number,
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

function validate(obj: Validatable) {
  const length = obj.value.trim().length;
  if (
    (obj.isRequired && length === 0) ||
    (obj.minLength && obj.minLength > length) ||
    (obj.maxLength && obj.maxLength < length) ||
    (obj.min && obj.min > parseInt(obj.value)) ||
    (obj.max && obj.max < parseInt(obj.value))
  ) return false;
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

  templateElement: HTMLTemplateElement;
  hostElement: HTMLDivElement;
  element: HTMLElement;

  constructor(private type: 'active' | 'finished') {
    this.templateElement = document.getElementById('project-list')! as HTMLTemplateElement;
    this.hostElement = document.getElementById('app')! as HTMLDivElement;

    const importedNode = document.importNode(this.templateElement.content, true);

    this.element = importedNode.firstElementChild as HTMLElement;
    this.element.id = `${this.type}-projects`
    this.attach();
    this.renderContent();
  }

  private renderContent() {
    const listId = `${this.type}-projects-list`
    this.element.querySelector('ul')!.id = listId;
    this.element.querySelector('h2')!.textContent = this.type.toUpperCase() + 'PROJECTS';
  }

  private attach() {
    this.hostElement.insertAdjacentElement('beforeend', this.element)
  }

}


// ProjectInput class

class ProjectInput {

  templateElement: HTMLTemplateElement;
  hostElement: HTMLDivElement;
  element: HTMLFormElement;
  titleInputElement: HTMLInputElement;
  descriptionInputElement: HTMLInputElement;
  peopleInputElement: HTMLInputElement;

  constructor() {
    // 타입 캐스팅
    this.templateElement = document.getElementById('project-input')! as HTMLTemplateElement;
    this.hostElement = document.getElementById('app')! as HTMLDivElement;

    const importedNode = document.importNode(this.templateElement.content, true);

    this.element = importedNode.firstElementChild as HTMLFormElement;
    this.element.id = 'user-input'

    this.titleInputElement = this.element.querySelector('#title')! as HTMLInputElement;
    this.descriptionInputElement = this.element.querySelector('#description')! as HTMLInputElement;
    this.peopleInputElement = this.element.querySelector('#people')! as HTMLInputElement;

    this.configure();
    this.attach()
  }

  private gatherUserInput(): [string, string, number] | void {
    const enteredTitle = this.titleInputElement.value;
    const enteredDescription = this.descriptionInputElement.value;
    const enteredPeople = this.peopleInputElement.value;

    const titleValidatable: Validatable = {
      value: enteredTitle,
      isRequired: true,
    }

    const descriptionValidatable: Validatable = {
      value: enteredDescription,
      isRequired: true,
      minLength: 5,
    }

    const peopleValidatable: Validatable = {
      value: enteredPeople,
      isRequired: true,
      min: 1,
      max: 5
    }

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
      alert('Invalid input, please try again')
    } else {
      return [enteredTitle, enteredDescription, +enteredPeople];
    }
  }

  private clearInput() {
    this.titleInputElement.value = "";
    this.descriptionInputElement.value = "";
    this.peopleInputElement.value = "";
  }

  // @autobind
  private submitHandler(evt: Event) {
    evt.preventDefault();
    const userInput = this.gatherUserInput();
    if (Array.isArray(userInput)) {
      const [title, desc, people] = userInput;
      console.log(title, desc, people)
      this.clearInput();
    }
  }

  private configure() {
    this.element.addEventListener('submit', this.submitHandler.bind(this))
    // this.element.addEventListener('submit', this.submitHandler)
  }

  private attach() {
    this.hostElement.insertAdjacentElement('afterbegin', this.element)
  }
}

const prjInput = new ProjectInput();

const activePrjList = new ProjectList('active');
const finishedPrjList = new ProjectList('finished')