//*************DATA TYPE OF JAVA SCRIPT ***************

// Primitive Data Type 

// 7 TYPE : string, number, boolean, null, undefined, symbol, bigInt

const score = 100; // number
const scoreValue = 100.3

const isLoggedIn = false; // boolean
const outsideTemp = null; // null
let userEmail; // undefined

const id = Symbol("1234") // symbol
const anotherId = Symbol("1234")

// console.log(id === anotherId)

const bigNumber = 3456789098765434567890n; // bigInt

// console.log(typeof bigNumber)

// Non Primitive dataType (referance)

// Object, array,function

const heros = ["shaktiman", "naagraj", "doga"] // array
let myObj = {
    name: "Rishi",
    age: 22,
    
} // object
 const myfunction = function(){
    console.log("hello world")
 } 
 console.log(typeof myfunction)
 
