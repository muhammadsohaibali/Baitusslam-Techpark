// ============= Module 1: Basic Types =============
let nameV: string = "John";
let age: number = 30;
let isStudent: boolean = true;

let numbers: number[] = [1, 2, 3];
let mixed: (string | number)[] = ["Alice", 25]; // Union type

// Tuple (fixed-length array)
let person: [string, number] = ["Alice", 30];

// ======== Module 2: Functions & Interfaces ========
function add(a: number, b: number): number {
    return a + b
}

const greet = (name: string): string => `Hello, ${name}`;

interface User {
    name: string,
    age: number,
    isAdmin: boolean
}

let user1: User = {
    name: "Pappu",
    age: 18,
    isAdmin: false
}

// ==== Module 4: Classes & OOP in TypeScript ====

class Person {
    name: string;
    age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }

    greet(): string {
        return `Hello, my name is ${this.name} and I am ${this.age} years old.`;
    }
}

const john = new Person("john", 30)
// console.log(john.greet())

class Employee extends Person {
    private salary: number

    constructor(public name: string, public age: number, salary: number) {
        super(name, age);
        this.salary = salary
    }

    getSalary(): string {
        return `My Salary is: ${this.salary}`
    }
}

// ============ Enum Types ============

enum Direction {
    Up = "UP",
    Down = "DOWN"
}

let dir: Direction = Direction.Up;

// ========== Object Types ==========

let userObj: {
    name: string,
    age?: number
} = {
    name: "Kaddu"
}

// ====== Intersection Types ======

type AdminType = { permissions: string[] }
type UserType = { name: string }
type AdminUser = AdminType & UserType

const admin: AdminUser = {
    name: "insaan ka bacha",
    permissions: ["read", "write"]
}

// ====== Literal Types ======
let statusV: 'Active' | 'Inactive';
statusV = 'Active'
// status = 'Pending' // Error

// ====== Type Aliases ======

type Point = {
    x: number,
    y: number
}

function coordinates(pt: Point) {
    console.log(pt.x, pt.y)
}

// ====== Function Types ======

type MathFuncType = (a: number, b: number) => number;

const MathAddFunction: MathFuncType = (a, b) => a + b;

// ==== Interfaces Vs Types ====

interface Person {
    name: string,
    age: number
}

interface Employee extends Person {
    employeeId: string;
}

// ====== Classes ======

class BankAccount {
    private balance: number;
    public readonly id: string

    constructor(id: string) {
        this.id = id
        this.balance = 0
    }

    public desposit(amount: number) {
        this.balance += amount
    }
}

// ============== Generics ==============

function identityFunction<TypeOfFunc>(argumentOfFunc: TypeOfFunc) {
    return argumentOfFunc
}

console.log(identityFunction<string>('1234'));
console.log(identityFunction(123));

// 1. Generics With Class
class Box<TypeVar> {
    private boxItem: TypeVar;

    constructor(initialVal: TypeVar) {
        this.boxItem = initialVal
    }

    getVal() {
        return this.boxItem
    }

    setVal(newVal: TypeVar) {
        this.boxItem = newVal
    }
}

const numberBox = new Box<number>(10);
const stringBox = new Box<string>("TypeScript");

// 2. Generic Constraints
interface ByLength {
    length: number;
}

function logLength<T extends ByLength>(arg: T): void {
    console.log(arg.length)
}

logLength("hello"); // Valid (string has .length)
// logLength(42); // Error: number doesn't have .length

// 3. Generic Interfaces
interface KeyValuePair<K, V> {
    key: K,
    value: V
}

let pair1: KeyValuePair<string, boolean> = { key: 'isActive', value: true }