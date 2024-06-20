"use strict"

class Person {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    getFullName() {
        return `${this.firstName} ${this.lastName}`;
    }
}

class Employee extends Person {
    constructor(firstName, lastName, id, jobTitle, payRate) {
        super(firstName, lastName);

        this.id = id;
        this.jobTitle = jobTitle;
        this.payRate = payRate;
    }

    getGrossPay(hoursWorked) {
        return `$${(this.payRate * hoursWorked).toFixed(2)}`;
    }
}

const testPerson = new Person("fName", "lName");
console.log(testPerson.getFullName());

const employee1 = new Employee("Michael", "Scott", 1, "Manager", 100);
const employee2 = new Employee("Kevin", "Malone", 2, "Accountant", 11);

console.log(employee1.getFullName());
console.log(employee1.getGrossPay(40));

console.log(employee2.getFullName());
console.log(employee2.getGrossPay(40));