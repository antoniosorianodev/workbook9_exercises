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

let testPerson = new Person("fName", "lName");
console.log(testPerson.getFullName());