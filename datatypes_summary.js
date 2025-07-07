// primitive 


// 7 types : string,Number, Boolean, Null, undefined, Symbol,BigInt


const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('1234')
const anotherId = Symbol('1234')

console.log(id === anotherId);


const bigNumber = 24465444444444444444444444444444455n



// Reference (Non Primitivr)

// Array, Objects, Funtions


const heros = ["gdghdh", "dhgchcc", "dcgchcb"]
let myObj = {
    name: "sakshi",
    age: 22
}

const myFunction = function(){
    console.log("hello world");
    
}

console.log(typeof(myObj));
