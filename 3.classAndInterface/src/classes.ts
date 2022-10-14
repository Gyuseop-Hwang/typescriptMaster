class Department {

  static fiscalyear = 2022;
  // private readonly id: string;
  // private name: string; // 필드(키 이름만 정의)
  protected employees: string[] = [];

  constructor(private readonly id: string, private name: string) { // 접근제어자를 가진 매개변수에 인자가 들어오면 자동으로 property 생성
    // this.id = id;                                      // 및 인자의 값을 취함 => 필드 설정 및 constructor에서 초기화(이중 작업 X)
    // this.name = name;
    console.log(Department.fiscalyear)
    // console.log(this.fiscalYear);
  }

  static createEmployee(name: string) {
    return { name }
  }

  describe(this: Department) {
    console.log(`Department (${this.id}): ${this.name}`)
  }

  addEmployee(employee: string) {
    // this.id = 'd2'
    this.employees.push(employee)
  }

  printEmployeeInformation() {
    console.log(this.employees.length);
    console.log(this.employees);
  }
}

class ITDepartment extends Department {

  admins: string[]
  constructor(id: string, admins: string[]) {
    super(id, 'IT');
    this.admins = admins;
  }

}



class Accounting extends Department {

  private lastReport: string;

  static instance: Accounting;

  static getInstance() {
    if (this.instance) {
      return this.instance;
    }
    this.instance = new Accounting('d2', [])
    return this.instance;
  }

  get mostRecentReport() {
    if (this.lastReport) {
      return this.lastReport;
    }
    throw new Error('No report found.');
  }

  set mostRecentReport(report: string) {
    // this.lastReport = report;
    if (!report) {
      throw new Error('Please pass in a valid value!')
    }
    this.addReport(report)
  }

  private constructor(id: string, private reports: string[]) {
    super(id, 'Accounting')
    this.lastReport = reports[0];
  }

  addEmployee(name: string) {
    if (name === 'Max') {
      return;
    }
    this.employees.push(name);
  }

  addReport(text: string) {
    this.reports.push(text);
    this.lastReport = text;
  }

  printReport() {
    console.log(this.reports)
  }

}

const employee1 = Department.createEmployee('Max');
console.log(employee1)

const itEmployee1 = ITDepartment.createEmployee('hwnag')
console.log(itEmployee1)

console.log(Department.fiscalyear);
console.log(Accounting.fiscalyear)

const it = new ITDepartment('d1', ['Max']);

// console.log(accounting)

it.addEmployee('Max');
it.addEmployee('Manu')

// accounting.employees[2]

it.describe();
it.printEmployeeInformation();

console.log(it)

// const accounting3 = new Accounting()
const accounting = Accounting.getInstance();
const accounting2 = Accounting.getInstance();

console.log(accounting);
console.log(accounting2)

accounting.addReport('something');
console.log(accounting.mostRecentReport);

accounting.printReport();

accounting.addEmployee('Max');
accounting.addEmployee('Manu');
accounting.printEmployeeInformation();


accounting.mostRecentReport = 'test'
accounting.printReport()
console.log(accounting.mostRecentReport);

// const accountingCopy = { describe: accounting.describe }

// accountingCopy.describe();