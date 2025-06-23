// class Person {
//     constructor(name, age) {
//         this.name = name;
//         this.age = age;
//     }

//     greet() {
//         console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
//     }
// }

// // Example usage
// const person1 = new Person('Alice', 30);
// person1.greet(); // Output: Hello, my name is Alice and I am 30 years old.
// const person2 = new Person('Bob', 25);
// person2.greet(); // Output: Hello, my name is Bob and I am 25 years old.

// console.log(person1);
// console.log(JSON.stringify(person1, null, 1)); // Output: {"name":"Alice","age":30}
// console.log(JSON.stringify(person2, null, 1)); // Output: {"name":"Bob","age":25}

// Person.prototype.toJSON = function () {
//     return {
//         name: this.name,
//         age: this.age
//     };
// };
// console.log(JSON.stringify(person1, null, 1)); // Output: {"name":"Alice","age":30}

// // Adding BankAccount class
// class BankAccount {
//     constructor(accountNumber, accountHolder, balance = 0) {
//         this.accountNumber = accountNumber;
//         this.accountHolder = accountHolder;
//         this.balance = balance;
//     }

//     deposit(amount) {
//         if (amount <= 0) {
//             console.log("Deposit amount must be greater than zero.");
//             return;
//         }
//         this.balance += amount;
//         console.log(`Deposited $${amount}. New balance: $${this.balance}`);
//     }

//     withdraw(amount) {
//         if (amount <= 0) {
//             console.log("Withdrawal amount must be greater than zero.");
//             return;
//         }
//         if (amount > this.balance) {
//             console.log("Insufficient balance.");
//             return;
//         }
//         this.balance -= amount;
//         console.log(`Withdrew $${amount}. New balance: $${this.balance}`);
//     }

//     checkBalance() {
//         console.log(`Account Balance: $${this.balance}`);
//         return this.balance;
//     }
// }

// // Example usage of BankAccount
// const account1 = new BankAccount(101, 'Alice', 500);
// account1.checkBalance(); // Output: Account Balance: $500
// account1.deposit(200);   // Output: Deposited $200. New balance: $700
// account1.withdraw(100);  // Output: Withdrew $100. New balance: $600
// account1.withdraw(700);  // Output: Insufficient balance.

// ==============================================================================