"use strict"

// the employee class to be used as a blueprint to create employees
class Employee {

    // runs when we create a "new" Employee
    constructor(id, firstName, lastName, jobTitle, payRate) {
        this.employeeId = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.jobTitle = jobTitle;
        this.payRate = payRate;
    }

    // method that returns the full name of the employee
    getFullName() {
        return `${this.firstName} ${this.lastName}`;
    }
}

// create employee 1 from the Employee class (blueprint) using the "new" keyword
let employee1 = new Employee(1, "Ian", "Auston", "Graphic Artist", 42.50);

// print out some info about employee 1
console.log(`Employee ${employee1.getFullName()} created`);
console.log(`Job title is ${employee1.jobTitle}`);
console.log(`Pay rate is $${employee1.payRate}`);