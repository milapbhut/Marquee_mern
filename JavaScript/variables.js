// /*function Morning() {
//     console.log("Good Morning");
// }
// function Afternoon() {
//     console.log("Good Afternoon");
// }
// function Evening() {
//     console.log("Good Evening");
// }

// let time = "Morning";

// switch (time) {
//     case "Morning":
//         Morning();
//         break;
//     case "Afternoon":
//         Afternoon();
//         break;
//     case "Evening":
//         Evening();
//         break;
// }*/

// /* let age = 19;
// let licenese;
// if(age >= 18){
//     licenese = true;
// }
// else{
//     licenese = false;
// }
// check(licenese);
// function check(licenese){
//     if(licenese){
//         console.log("You can drive");
//     }
//     else{
//         console.log("You cannot drive");
//     }
// }*/

// let marks = 60;
// if (marks >= 90) {
//     console.log("A+");
// }
// else if (marks >= 80) {
//     console.log("A");
// }
// else if (marks >= 70) {
//     console.log("B");
// }
// else if (marks >= 60) {
//     console.log("C");
// }
// else if (marks >= 33) {
//     console.log("D");
// }
// else if (marks <= 32) {
//     console.log("Fail");
// }
// else {
//     console.log("Invalid marks");
// }

// function demo() {
//     console.log("Hello World");
// }
// let b = function() {
//     console.log("Hello World");
// }
// b();
// const detail = {
//     name: "riya",
// }

// detail.name = "rahul";

// console.log(detail.name);

// function hello(a) {
//     console.log("Hello, World!",a);
// }

// function exe(own) {
//     console.log("Executing the function...");
//     own(2);
// }
// exe(hello);

// function fetchData(callback) {
//     setTimeout(function() {
//         const data = { name: "Milap", age: 22 };
//         callback(data);
//     }, 2000);
// }

// function displayData(data) {
//     console.log("User Data:", data);
// }

// fetchData(displayData);

//aceding
// let arr = [2,77,88,22,8];
// arr.sort((a, b) => b - a);
// console.log(arr);

//reverse
// let arr = [2, 77, 88, 22, 8];
// arr.reverse();
// console.log(arr);

//combinig arrays

// let a = [1, 5, 6];
// let b = [2, 3, 4];
// let res = a.concat(b);
// console.log(res);

//join

// let arr=["riya","rahul","milap"];
// let res=arr.join(" ");
// console.log(res);

//flat

// let arr = [1, 2, [3, 4], [5, 6]];
// let res = arr.flat();
// console.log(res);

//flat array without using flat method

// let arr = [1, 2, [3, 4], [5, 6]];
// let res = [];
// for (let i = 0; i < arr.length; i++) {
//     if (Array.isArray(arr[i])) {
//         for (let j = 0; j < arr[i].length; j++) {
//             res.push(arr[i][j]);
//         }
//     }
//     else {
//         res.push(arr[i]);
//     }
// }
// console.log(res);

// //use map() to multiply each no by 5

// let arr = [1, 2, 3, 4, 5];
// let res = arr.map((num) => num * 5);
// console.log(res);

// //fetch the array elements which are greater than 20

// let arr1 = [20, 18, 16, 22, 34, 88];

// let res1 = arr1.filter((num) => num > 20);
// console.log(res1);

// //sort an array by the length acending to descending

// let arr2 = [10, 2, 333, 44, 55555, 6666];
// let res2 = arr2.sort((a, b) => a.toString().length - b.toString().length);
// console.log(res2);

// //find all the num which occur more than once in an array

// let arr3 = [1, 2, 3, 4, 5, 1, 2, 3];
// let res3 = arr3.filter((num, index) => arr3.indexOf(num) !== index);
// console.log(res3);

// let name = {
//     firstName: "riya",
//     lastName: "sharma",
// }
// let name2 = {
//     firstName: "sachin",
//     lastName: "sharma",
// }

// function hey() {
//     console.log("Hello",this.firstName);
// }

// hey.call(name2);

// //apply method
// function add(a, b) {
//     console.log(a + b);
// }
// add.apply(null, [10, 20]);
// why weare using this null in apply method? => because we are not using any object in this function so we are passing null in apply method.

// let name = {
//     firstName: "prince",
//     lastName: "sharma",
// };

// function hello() {
//     console.log("Hello", this.firstName);
// }

// const fun = hello.bind(name);
// console.log(fun());

// task : 1 Create a function named 'calculateParcentage' that calculate the total marks (array of marks) of student and returns percentage also take 2 function as argument named 'startProcessing' and 'endProcessing'. and this both func should be arrow function.

// function prt(str, end, prt) {
//   console.log("Start Processsing.....");

//   const percentage = (str / end) * 100;
//   console.log(percentage.toFixed(2));
//   prt("Percentage Calculation Done");
// }

// prt(23, 300, (rb) => {
//   console.log(`End Processing :${rb}`);
// });

// Problem Statement: Constructor Function

// 1. Create a Student constructor function that accepts the following details:

// name
// age
// course
// marks

// The constructor should create an object with these properties.

// Also, add a method called displayDetails() that displays the student's information.

// Example:

// let student1 = new Student("Rahul", 21, "JavaScript", 85);
// let student2 = new Student("Priya", 22, "Java", 92);

// OUTPUT:

// Name: Priya
// Age: 22
// Course: Java
// Marks: 92

// ==============================================

// 2. Create a BankAccount constructor with accountHolder, accountNumber, and balance.
// Add deposit() and withdraw() ,interest(percent) methods.
// keep

function BankAccount(name, accNumber, balance = 0) {
  this.accountHolderName = name;
  this.accountNumber = accNumber;
  this.balance = balance;

  // Question:
  // 2. Create a BankAccount constructor with accountHolder, accountNumber, and balance.
  // Add deposit() and withdraw() ,interest(percent) methods.

  // Create `Deposite` Method
  // Balance: 10000
  // Task 1: Do calculation
  // Task 2: Display ["Amount deposited of Amount:190 | Now Balance: 10190""] using callback Fn.

  this.deposit = (amount) => {
    if (amount > 0) {
      this.balance += amount;
      console.log("Amount Deposited:", amount + "| Now Balance:", this.balance);
    }
  };
  // Create `Withdraw` Method
    // Balance : 10190;
    
    this.withdraw = (amount) => {
        if (amount > 0 && this.balance >= amount) {
            this.balance -= amount;
            console.log("Amount Withdrawn:", amount + "| Now Balance:", this.balance);
        } else {
            console.log("Insufficient balance or invalid amount.");
        }
    };

    this.interest = (percent) => {
        if (percent > 0) {
            const interestAmount = (this.balance * percent) / 100;
            this.balance += interestAmount;
            console.log("Interest Added:", interestAmount + "| Now Balance:", this.balance);
        } else {
            console.log("Invalid interest percentage.");
        }
    }

    this.displayBalance = () => {
        console.log("Account Holder:", this.accountHolderName);
        console.log("Account Number:", this.accountNumber);
        console.log("Balance:", this.balance);
    };
  // Task 1: Do calculation: make sure to check balance!=0 or balance>=amountToWinthdrwa
  // Task 2: Display ["Amount Withdrawn : 190 | Now Balance: 10000"] using callback Fn.
}

const Mohit = new BankAccount("Mohit", "12050010005");
const Vinay = new BankAccount("Vinay", "12050020001", 1201);

Mohit.deposit(500);
Mohit.deposit(500);
Mohit.deposit(500);
Mohit.withdraw(200);
Mohit.interest(5);
Mohit.displayBalance();

Vinay.deposit(500);
Vinay.withdraw(200);
Vinay.displayBalance();