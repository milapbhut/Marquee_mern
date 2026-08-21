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

let arr = [1, 2, [3, 4], [5, 6]];
let res = [];
for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
        for (let j = 0; j < arr[i].length; j++) {
            res.push(arr[i][j]);
        }
    }
    else {
        res.push(arr[i]);
    }
}
console.log(res);