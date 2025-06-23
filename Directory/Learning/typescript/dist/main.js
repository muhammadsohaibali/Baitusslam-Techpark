"use strict";
// ============= Module 1: Basic Types =============
let nameV = "John";
let age = 30;
let isStudent = true;
let numbers = [1, 2, 3];
let mixed = ["Alice", 25]; // Union type
// Tuple (fixed-length array)
let person = ["Alice", 30];
// ======== Module 2: Functions & Interfaces ========
function add(a, b) {
    return a + b;
}
const greet = (name) => `Hello, ${name}`;
let user1 = {
    name: "Pappu",
    age: 18,
    isAdmin: false
};
// ==== Module 4: Classes & OOP in TypeScript ====
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    greet() {
        return `Hello, my name is ${this.name} and I am ${this.age} years old.`;
    }
}
const john = new Person("john", 30);
// console.log(john.greet())
class Employee extends Person {
    constructor(name, age, salary) {
        super(name, age);
        this.name = name;
        this.age = age;
        this.salary = salary;
    }
    getSalary() {
        return `My Salary is: ${this.salary}`;
    }
}
// ============ Enum Types ============
var Direction;
(function (Direction) {
    Direction["Up"] = "UP";
    Direction["Down"] = "DOWN";
})(Direction || (Direction = {}));
let dir = Direction.Up;
// ========== Object Types ==========
let userObj = {
    name: "Kaddu"
};
const admin = {
    name: "insaan ka bacha",
    permissions: ["read", "write"]
};
// ====== Literal Types ======
let statusV;
statusV = 'Active';
function coordinates(pt) {
    console.log(pt.x, pt.y);
}
const MathAddFunction = (a, b) => a + b;
// ====== Classes ======
class BankAccount {
    constructor(id) {
        this.id = id;
        this.balance = 0;
    }
    desposit(amount) {
        this.balance += amount;
    }
}
// ============== Generics ==============
function identityFunction(argumentOfFunc) {
    return argumentOfFunc;
}
console.log(identityFunction('1234'));
console.log(identityFunction(123));
// 1. Generics With Class
class Box {
    constructor(initialVal) {
        this.boxItem = initialVal;
    }
    getVal() {
        return this.boxItem;
    }
    setVal(newVal) {
        this.boxItem = newVal;
    }
}
const numberBox = new Box(10);
const stringBox = new Box("TypeScript");
function logLength(arg) {
    console.log(arg.length);
}
logLength("hello"); // Valid (string has .length)
let pair1 = { key: 'isActive', value: true };
