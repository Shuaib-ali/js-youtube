// Primitive

// 7 types: string, Number,Boolean,null,undefined,symbol,BigInt

const score = 100
const scoreValue = 100.3
const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

// console.log(id === anotherId)
const bigNumber = 3455645642423n



//Reference (Non primitive)

// Array , Objects, Funtions

const arr = ["shaktiman","naagraj","doga"];
let myObj = {
    name:"shuaib",
    age:24,
}
const myFunction = function(){
    console.log("Hello world");
}
console.log(typeof bigNumber);
console.log(typeof null);
console.log(typeof scoreValue);
console.log(typeof myFunction);
console.log(typeof arr);
console.log(typeof anotherId);

// https://262.ecma-international.org/5.1/#sec-11.4.3
