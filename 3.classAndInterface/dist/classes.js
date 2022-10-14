"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Department = /** @class */ (function () {
    function Department(id, name) {
        this.id = id;
        this.name = name;
        // private readonly id: string;
        // private name: string; // 필드(키 이름만 정의)
        this.employees = [];
        // this.id = id;                                      // 및 인자의 값을 취함 => 필드 설정 및 constructor에서 초기화(이중 작업 X)
        // this.name = name;
        console.log(Department.fiscalyear);
        // console.log(this.fiscalYear);
    }
    Department.createEmployee = function (name) {
        return { name: name };
    };
    Department.prototype.describe = function () {
        console.log("Department (".concat(this.id, "): ").concat(this.name));
    };
    Department.prototype.addEmployee = function (employee) {
        // this.id = 'd2'
        this.employees.push(employee);
    };
    Department.prototype.printEmployeeInformation = function () {
        console.log(this.employees.length);
        console.log(this.employees);
    };
    Department.fiscalyear = 2022;
    return Department;
}());
var ITDepartment = /** @class */ (function (_super) {
    __extends(ITDepartment, _super);
    function ITDepartment(id, admins) {
        var _this = _super.call(this, id, 'IT') || this;
        _this.admins = admins;
        return _this;
    }
    return ITDepartment;
}(Department));
var Accounting = /** @class */ (function (_super) {
    __extends(Accounting, _super);
    function Accounting(id, reports) {
        var _this = _super.call(this, id, 'Accounting') || this;
        _this.reports = reports;
        _this.lastReport = reports[0];
        return _this;
    }
    Accounting.getInstance = function () {
        if (this.instance) {
            return this.instance;
        }
        this.instance = new Accounting('d2', []);
        return this.instance;
    };
    Object.defineProperty(Accounting.prototype, "mostRecentReport", {
        get: function () {
            if (this.lastReport) {
                return this.lastReport;
            }
            throw new Error('No report found.');
        },
        set: function (report) {
            // this.lastReport = report;
            if (!report) {
                throw new Error('Please pass in a valid value!');
            }
            this.addReport(report);
        },
        enumerable: false,
        configurable: true
    });
    Accounting.prototype.addEmployee = function (name) {
        if (name === 'Max') {
            return;
        }
        this.employees.push(name);
    };
    Accounting.prototype.addReport = function (text) {
        this.reports.push(text);
        this.lastReport = text;
    };
    Accounting.prototype.printReport = function () {
        console.log(this.reports);
    };
    return Accounting;
}(Department));
var employee1 = Department.createEmployee('Max');
console.log(employee1);
var itEmployee1 = ITDepartment.createEmployee('hwnag');
console.log(itEmployee1);
console.log(Department.fiscalyear);
console.log(Accounting.fiscalyear);
var it = new ITDepartment('d1', ['Max']);
// console.log(accounting)
it.addEmployee('Max');
it.addEmployee('Manu');
// accounting.employees[2]
it.describe();
it.printEmployeeInformation();
console.log(it);
// const accounting3 = new Accounting()
var accounting = Accounting.getInstance();
var accounting2 = Accounting.getInstance();
console.log(accounting);
console.log(accounting2);
accounting.addReport('something');
console.log(accounting.mostRecentReport);
accounting.printReport();
accounting.addEmployee('Max');
accounting.addEmployee('Manu');
accounting.printEmployeeInformation();
accounting.mostRecentReport = 'test';
accounting.printReport();
console.log(accounting.mostRecentReport);
// const accountingCopy = { describe: accounting.describe }
// accountingCopy.describe();
