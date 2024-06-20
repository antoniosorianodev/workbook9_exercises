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

    promote(newJobTitle, newPayRate) {
        this.jobTitle = newJobTitle;
        this.payRate = newPayRate;
    }
}

// create employee 1 from the Employee class (blueprint) using the "new" keyword
let employee1 = new Employee(1, "Ian", "Auston", "Graphic Artist", 42.50);
let employee2 = new Employee(2, "Mike", "Schmidt", "Secruity Guard", 4);

// new promote method with new job title and pay rate
employee1.promote("Sr. Graphic Artist", 46.75);
employee2.promote("Head Security Officer", 4.01);

// print out some info about employee 1
console.log(`Employee ${employee1.getFullName()} created`);
console.log(`Job title is ${employee1.jobTitle}`);
console.log(`Pay rate is $${employee1.payRate}`);

// break for readability in console
console.log("---------------------------------------")

// print out some info about employee 2
console.log(`Employee ${employee2.getFullName()} created`);
console.log(`Job title is ${employee2.jobTitle}`);
console.log(`Pay rate is $${employee2.payRate}`);